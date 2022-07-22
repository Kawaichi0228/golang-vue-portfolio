<template>
  <header>
    <!-- ヘッダーメニュー -->
    <div class="top">
      <v-app-bar app clipped color="white">
        <v-toolbar-title class="top__title">
          <router-link to="/">
            <img class="top__logo" src="@/assets/images/logos/logo-light.png" />
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="top__tabmenu">
          <!-- ログインボタン -->
          <v-btn class="top__tabbutton white" text to="/signin">{{
              navItems.signin.value
          }}</v-btn>

          <!-- 新規会員登録ボタン -->
          <v-btn class="top__tabbutton top__tabbutton--margin primary white--text" text to="/signup">{{
              navItems.signup.value
          }}</v-btn>
        </div>

        <!-- ハンバーガーメニューアイコン -->
        <v-app-bar-nav-icon @click.stop="onClick_HamburgerIcon"></v-app-bar-nav-icon>
      </v-app-bar>
    </div>

    <!-- ハンバーガーメニュー(サイドドロワー) -->
    <div class="drawer">
      <v-navigation-drawer app clipped mobile-breakpoint="99999" v-model="isVisible" hide-overlay right
        max-width="300px" color="white">
        <v-list nav dense>
          <v-list-item-group v-model="selectedMenuNumber" active-class="cyan--text text--accent-4">
            <!-- ドロワー内のコンテンツを表示 -->
            <!-- クローズボタン -->
            <div class="text-right my-3">
              <v-btn icon @click.stop="onClick_HamburgerIcon">
                <v-icon>mdi-window-close</v-icon>
              </v-btn>
            </div>

            <!-- ロゴ -->
            <div class="drawer__logo--wraper ml-2 mb-3">
              <a href="/">
                <img class="drawer__logo--img" src="@/assets/images/logos/logo-light.png" alt="" />
              </a>
            </div>

            <!-- 会員登録ボタン -->
            <v-btn class="primary mb-4" dark width="100%" to="/signup">{{
                navItems.signup.value
            }}</v-btn>

            <!-- ログインボタン -->
            <v-btn class="drawer__btn--outline" width="100%" to="/signin">{{
                navItems.signin.value
            }}</v-btn>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </header>
</template>

<script>
import { constants } from "@/utils/constants";

//import $ from "jquery";
//let headerHeight;

export default {
  data() {
    return {
      isVisible: false, // ドロワー開閉のためのフラグ
      selectedMenuNumber: null, // 選択されたナビリストのindexを取得するための変数(0～)
      navItems: constants.navItems, // メニューアイテムの配列
      pageTitle: constants.pageTitle,
    };
  },

  methods: {
    onClick_HamburgerIcon() {
      /*      
      // ヘッダーの高さを取得
      headerHeight = $(".v-app-bar").height();
       log.log(
        "ハンバーガーアイコンクリック時のヘッダーのHeight",
        headerHeight
      );

      // 取得したヘッダーのheightを、ドロワーのmarginに適用
      $(".v-navigation-drawer").css("margin-top", headerHeight);
      // MEMO: タグ指定も可能 「$("body").css("margin-top", height);」
      */

      // ドロワー表示フラグの切り替え
      this.toggleDrawer();
    },

    toggleDrawer() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/base/_mixin.scss";
@import "@/styles/base/_variables.scss";
@import "@/styles/function/_rem.scss";
@import "@/styles/utils/_centering.scss";

// ヘッダタイトル用のWebフォント
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&display=swap");

// -------------------------------------------------------------------------
// VuetifyのclassStyleを変更(クラス名は開発者ツールから調べられる)
// -------------------------------------------------------------------------
.v-toolbar__title {
  font-size: $font-size-title  !important;
  overflow: visible !important;
  margin-right: rem(20) !important;
}

.v-btn {
  $padding-leftright: rem(30);
  padding-left: $padding-leftright  !important;
  padding-right: $padding-leftright  !important;
}

.v-btn--is-elevated {
  box-shadow: none !important;
}

.v-btn--active::before {
  opacity: 0 !important;
}

.v-app-bar {
  white-space: nowrap;
}

.v-app-bar__nav-icon {
  display: block !important;

  @include tab {
    display: none !important;
  }
}

.v-tabs {
  display: none !important;

  @include tab {
    display: block !important;
  }
}

.theme--light.v-btn.v-btn--has-bg {
  background-color: white !important;
}

// -------------------------------------------------------------------------
// ユーザースタイル
// -------------------------------------------------------------------------
.top {
  text-align: left;
}

.top__logo {
  max-height: rem(35);
  margin-top: rem(14);
  margin-left: rem(10);
  width: 100%;
  object-fit: contain;
  /* 画像縦横比を維持したまま、heightに対してリサイズする(ブロックに対してではない) */
}

.top__title {
  font-family: "Inter", sans-serif;
}

.top__tabmenu {
  display: none;

  @include tab {
    display: block;
  }
}

.top__tabbutton {}

.top__tabbutton--margin {
  margin-right: rem(10);
}

.drawer {
  display: block;

  @include tab {
    display: none;
  }
}

.drawer__logo--wraper {}

.drawer__logo--img {
  max-height: rem(28);
}

.drawer__btn--outline {
  color: $color-gray  !important;
  border: 1.4px solid $color-gray;
}
</style>
