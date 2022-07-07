<template>
  <v-container class="home-page" fluid fill-height>
    <FrontHomeContents class="home-page__contents mb-16" />
    <FrontHomeFooterTop class="mb-16 ml-16" />
    <FrontHomeFooterBottom />
  </v-container>
</template>

<script>
import FrontHomeContents from "@/components/organisms/FrontHomeContents.vue";
import FrontHomeFooterTop from "@/components/organisms/FrontHomeFooterTop.vue";
import FrontHomeFooterBottom from "@/components/organisms/FrontHomeFooterBottom.vue";

export default {
  components: {
    FrontHomeContents,
    FrontHomeFooterTop,
    FrontHomeFooterBottom,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/function/_rem.scss";

.home-page {
  padding: 0 6rem;
}
.home-page__contents {
}
</style>
