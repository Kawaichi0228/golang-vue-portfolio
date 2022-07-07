<template>
  <v-container fluid fill-height>
    <NotFoundContents class="mb-14" />
    <FrontHomeFooterTop />
    <FrontHomeFooterBottom class="px-14" />
  </v-container>
</template>

<script>
import NotFoundContents from "@/components/organisms/NotFoundContents.vue";
import FrontHomeFooterTop from "@/components/organisms/FrontHomeFooterTop.vue";
import FrontHomeFooterBottom from "@/components/organisms/FrontHomeFooterBottom.vue";

export default {
  components: {
    NotFoundContents,
    FrontHomeFooterTop,
    FrontHomeFooterBottom,
  },
};
</script>

<style lang="scss" scoped>
</style>
