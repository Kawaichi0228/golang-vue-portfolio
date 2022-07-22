// エントリポイントファイル main.ts
// -------------------------------------------------------------------------
// 基本モジュールのインポート
// -------------------------------------------------------------------------
import Vue from "vue";
import App from "@/App.vue";

// -------------------------------------------------------------------------
// 外部プラグインのインポート
// -------------------------------------------------------------------------
import { vuetify } from "@/plugins/vuetify";
import { router } from "@/router";
import { store } from "@/store";

// ログレベルの定義(ログを本番時、開発時とどのレベルから出力するか)
//   (レベル低い順：debug -> info -> warn -> error -> silent)
import log from 'loglevel';
import { LogLevelDesc } from 'loglevel';
let logLevel: LogLevelDesc
if (process.env.VUE_APP_ENV === "development") {
  console.debug(`Starting ${process.env.VUE_APP_ENV} Mode.`)
  logLevel = log.levels.DEBUG
} else {
  logLevel = log.levels.SILENT
}
log.setLevel(logLevel, false);

// -------------------------------------------------------------------------
// グローバルCSSのインポート
// -------------------------------------------------------------------------
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

// Vueインスタンス生成
new Vue({
  // グローバルインポート
  data: {
    $log: log
  },
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
