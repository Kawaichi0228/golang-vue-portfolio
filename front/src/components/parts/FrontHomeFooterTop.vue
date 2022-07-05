1<template>
  <div id="footer-top">
    <div class="footer-top__body">
      <div class="footer-top__column">
        <h2>{{ pageTitle }}とは</h2>

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
      </div>

      <div class="footer-top__column">
        <h2>お知らせ・ブログ</h2>
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
      </div>

      <div class="footer-top__column">
        <h2>サポート</h2>
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
      </div>
    </div>
  </div>
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

#footer-top {
  font-size: $font-size-small;

  h2 {
    font-size: $font-size-base;
    margin-bottom: 20px;
  }

  a {
    color: $color-gray;
    text-decoration: underlinnone;
    &:hover {
      text-decoration: none;
    }
  }

  ul {
    padding: 0;
  }

  li {
    margin: 10px 0px;
  }
}
.footer-top__body {
  margin-bottom: rem(80);

  @include tab {
    text-align: left;
    display: inline-flex;
    margin-left: rem(100);
    margin-bottom: rem(200);
  }
}
.footer-top__column {
  margin: rem(20) rem(40);

  @include tab {
    white-space: nowrap; // 改行を禁止
    max-width: 350px;
    margin: 0 rem(80);
  }
}
.footer-top__column--text {
  @include center-vertical;
}
</style>
