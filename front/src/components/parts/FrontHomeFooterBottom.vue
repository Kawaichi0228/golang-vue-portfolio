1<template>
  <v-container>
    <v-row class="mb-8"><v-divider></v-divider></v-row>
    <v-row class="footer-bottom">
      <!-- ロゴ -->
      <img
        class="footer-bottom__logo"
        src="@/assets/images/logos/logo-light.png"
        alt=""
      />

      <!-- コピーライト -->
      <span class="footer-bottom__text"
        >© 2022 Kawaichi. All rights reserved</span
      >
    </v-row>
  </v-container>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/styles/base/_mixin.scss";
@import "@/styles/base/_variables.scss";
@import "@/styles/utils/_centering.scss";
@import "@/styles/function/_rem.scss";

.footer-bottom {
  margin-bottom: rem(40);
  @include center-horizontal;
  @include center-vertical;
  @include tab {
    justify-content: left;
  }
}
.footer-bottom__logo {
  max-height: rem(30);
  margin-right: rem(20);
  object-fit: contain; /* 画像縦横比を維持したまま、heightに対してリサイズする(ブロックに対してではない) */
}
.footer-bottom__text {
  font-size: $font-size-small;
  color: $color-gray;
}
</style>
