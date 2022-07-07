// vue-router設定ファイル router.js
// -------------------------------------------------------------------------
// Vueのインポート
// -------------------------------------------------------------------------
import Vue from "vue";

// -------------------------------------------------------------------------
// ライブラリのインポート
// -------------------------------------------------------------------------
import Router from "vue-router";
import { store } from "@/store";

// -------------------------------------------------------------------------
// ユーザ定義コンポーネントのインポート
// -------------------------------------------------------------------------
// フロントページ
import { frontLayout } from "@/layouts/frontLayout";
import FrontHomeView from "@/views/FrontHomeView.vue";
import FrontAuthSignupView from "@/views/FrontAuthSignupView.vue";
import FrontAuthSigninView from "@/views/FrontAuthSigninView.vue";

// ダッシュボード
import { dashboardLayout } from "@/layouts/dashboardLayout";
import DashboardTaskView from "@/views/DashboardTaskView.vue";
import DashboardAcountView from "@/views/DashboardAcountView.vue";

// 404
import NotFoundView from "@/views/NotFoundView.vue";

// 使用宣言(Vueプロジェクト全体で使用する機能(プラグイン)の宣言)
Vue.use(Router);

// requiresAuthメタを設定したルートの認証を必要とするか
// (Dashboard画面を作り込みたいときは一時的にfalseにすると認証を回避できる)
const isRequiresAuth = true;

// インスタンス生成
export const router = new Router({
  // URLにハッシュ(#)を付与するか
  mode: "hash", // hash mode | history mode

  // URLとコンポーネントを関連付けるためのルーティング設定
  routes: [
    // =========================================================================
    // =========================================================================
    // フロントページ
    // =========================================================================
    // =========================================================================
    {
      name: "front",
      path: "/",
      redirect: "/home",
    },
    {
      name: "front-home",
      path: "/home",
      component: frontLayout(FrontHomeView),
    },
    {
      name: "front-signup",
      path: "/signup",
      component: frontLayout(FrontAuthSignupView),
    },
    {
      name: "front-signin",
      path: "/signin",
      component: frontLayout(FrontAuthSigninView),

      // ナビゲーションガード(ページ遷移をガードする)の個別指定(まとめて指定したい場合はbeforeEachで行う)
      beforeEnter(to, from, next) {
        checkAuth_RedirectDashboard(next);
      },
    },

    // =========================================================================
    // =========================================================================
    // ダッシュボード
    // =========================================================================
    // =========================================================================
    {
      name: "dashboard",
      path: "/dashboard",
      redirect: "/dashboard/task",
      meta: { requiresAuth: isRequiresAuth },
    },
    {
      name: "dashboard-task",
      path: "/dashboard/task",
      meta: { requiresAuth: isRequiresAuth },
      component: dashboardLayout(DashboardTaskView),
    },
    {
      name: "dashboard-acount",
      path: "/dashboard/acount",
      meta: { requiresAuth: isRequiresAuth },
      component: dashboardLayout(DashboardAcountView),
    },
    // =========================================================================
    // 404ページ
    // =========================================================================
    {
      name: "notfound",
      path: "/*", // 該当するページが存在しない場合
      component: frontLayout(NotFoundView),
      //component: () => import("@/views/NotFoundView.vue"),
    },
  ],

  // リンククリック時にスクロール位置を一番上まで戻す
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // 戻るボタンを押したときは、記憶したスクロール位置へ戻す
    } else {
      return { x: 0, y: 0 }; // 一番上まで戻す
    }
  },
});

// -------------------------------------------------------------------------
// ナビゲーションガードをまとめて設定
// -------------------------------------------------------------------------
// (全体ページのほとんどが認証を必要とさせたい場合は、`beforeEnter` より以下のパターンを使ったほうがラク)
//   MEMO: (認証を必要としたい各ルートの `routes` に以下のプロパティを追加する)
//     ex. < meta: { requiresAuth: true }, >
router.beforeEach((to, from, next) => {
  // 認証のメタ情報(requiresAuth)がtrueに設定されたルートの場合の処理
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    checkNotAuth_RedirectSignin(to, next);
  }
  next();
});

// -------------------------------------------------------------------------
// 認証チェック & リダイレクト用関数
// -------------------------------------------------------------------------
// 認証済みならダッシュボード画面を表示
const checkAuth_RedirectDashboard = (next: any) => {
  if (!store.getters.auth) {
    // 認証していない状態の処理
    console.warn("認証していないためダッシュボード画面を表示します");
    next();
    return;
  }
  // 認証済みの状態の処理
  console.info("認証済みのためダッシュボード画面へリダイレクトします");
  next("/dashboard");
};

// 認証が済んでいないならログイン画面を表示
const checkNotAuth_RedirectSignin = (to: any, next: any) => {
  // ナビゲーションガード(ページ遷移をガードする)
  if (!store.getters.auth) {
    // 認証していない状態の処理
    console.warn("認証していないためログイン画面へリダイレクトします");
    // アクセスしようとしていたURLを、queryパラメーターとしてURLに付与しておく(ex. /signin?redirect=/dashbaord)
    next({ path: "/signin", query: { redirect: to.fullPath } });
    return;
  }
  // 認証済みの状態の処理
  console.info("認証済みのためページを表示します");
  next();
};
