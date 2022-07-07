<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
// ブラウザ固有のスタイルの設定
// MEMO: Vuetifyはデフォルトでreset.cssが読み込まれているため、ユーザで指定は必要ない
// > [参考] https://vuetifyjs.com/ja/styles/css-reset/
// > [参考] https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/styles/generic/_reset.scss
@import "@/styles/base/_normalize.scss";

// プロジェクト固有の全体スタイルの設定
@import "@/styles/base/_html_element.scss";
</style>
