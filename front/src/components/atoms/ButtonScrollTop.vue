<template>
  <transition name="fade">
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      @click="toTop"
      fab
      dark
      fixed
      bottom
      right
      color="secondary"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </transition>
</template>

<script>
export default {
  data: () => {
    return {
      fab: false,
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 100;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>