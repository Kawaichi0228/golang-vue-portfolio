<template>
  <v-container class="text-center pa-16">
    <v-row class="justify-center"><h1 class="notfound__title">404</h1></v-row>
    <v-row class="justify-center mb-5"><h3>404 Not Found</h3></v-row>
    <v-row class="justify-center mb-5">
      お探しのページはURLが間違っているか、削除された可能性があります。
    </v-row>

    <v-row class="justify-center"
      ><v-btn class="primary white--text" text to="/">
        トップへ戻る
      </v-btn></v-row
    >
  </v-container>
</template>


<style lang="scss" scoped>
.notfound__title {
  font-size: 5rem;
}
</style>
