1<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <h2 class="footer-top__column--title">{{ pageTitle }}とは</h2>

        <ul>
          <li class="footer-top__column--text">
            <a href="#">
              <span>{{ pageTitle }}の特徴</span>
            </a>
          </li>
          <li class="footer-top__column--text">
            <a href="#">
              <span>機能一覧</span>
            </a>
          </li>
        </ul>
      </v-col>

      <v-col cols="12" sm="3">
        <h2 class="footer-top__column--title">お知らせ・ブログ</h2>
        <ul>
          <li class="footer-top__column--text">
            <a href="#">
              <span>お知らせ・イベント</span>
            </a>
          </li>
          <li class="footer-top__column--text">
            <a href="#">
              <span>ブログ</span>
            </a>
          </li>
        </ul>
      </v-col>

      <v-col cols="12" sm="3">
        <h2 class="footer-top__column--title">サポート</h2>
        <ul>
          <li class="footer-top__column--text">
            <a href="#">
              <span>よくあるご質問</span>
            </a>
          </li>
          <li class="footer-top__column--text">
            <a href="#">
              <span>資料一覧</span>
            </a>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { constants } from "@/utils/constants";

export default {
  data() {
    return {
      pageTitle: constants.pageTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/base/_mixin.scss";
@import "@/styles/base/_variables.scss";
@import "@/styles/utils/_centering.scss";
@import "@/styles/function/_rem.scss";

.footer-top__column {
}
.footer-top__column--title {
  font-size: $font-size-base;
  margin-bottom: 1.2rem;
}
.footer-top__column--text * {
  margin-bottom: 1.2rem;
  font-size: $font-size-small;
  color: $color-gray;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
}
</style>
