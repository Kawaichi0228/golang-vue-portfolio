// -------------------------------------------------------------------------
// Vueのインポート
// -------------------------------------------------------------------------
import Vue from "vue";

// -------------------------------------------------------------------------
// ライブラリのインポート
// -------------------------------------------------------------------------
import Vuetify from "vuetify/lib/framework";

// 使用宣言(Vueプロジェクト全体で使用する機能(プラグイン)の宣言)
Vue.use(Vuetify);

// インスタンス生成
export const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0ccfdb",
        secondary: "#aaaaaa",
        accent: "#00ACE4",
        //error: colors.red,
        //warning: colors.yellow,
        //info: colors.grey,
        //success: "#795548",
        //mycolor: "#e0e0e0",
      },
    },
  },
});
