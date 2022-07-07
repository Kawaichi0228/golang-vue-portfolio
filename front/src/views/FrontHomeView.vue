<template>
  <v-container class="home-page" fluid fill-height>
    <FrontHomeContents class="home-page__contents mb-16" />
    <FrontHomeFooterTop />
    <FrontHomeFooterBottom class="px-14" />
  </v-container>
</template>

<script>
import FrontHomeContents from "@/components/parts/FrontHomeContents.vue";
import FrontHomeFooterTop from "@/components/parts/FrontHomeFooterTop.vue";
import FrontHomeFooterBottom from "@/components/parts/FrontHomeFooterBottom.vue";

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
}
.home-page__contents {
}
</style>
