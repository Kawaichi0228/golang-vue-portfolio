// -------------------------------------------------------------------------
// 主に「npm run build」で適用される設定ファイル
// -------------------------------------------------------------------------
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './', // パスで使用する「@」の展開ルートディレクトリ (ex. import xxx from "@/xxx")
  outputDir: '../back/dist', // distフォルダの出力先パス
  assetsDir: 'static', // distフォルダに出力されるcss,img,js,fontsなどのフォルダをひとつのフォルダにまとめるためのオプション
    // (メリット: まとめることで、Go側で静的ファイルディレクトリ読込のコードが1つで済む) [ex. r.Static("/static", "front/dist/static"))]
  transpileDependencies: [
    'vuetify', 
  ],
})