<template>
  <div>
    <!-- 色付きドロワー -->
    <v-navigation-drawer app clipped v-model="drawer" color="white">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :href="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <!-- ログアウトボタン -->
          <v-btn color="secondary" block dark @click="logout()"
            >ログアウト</v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>

    <!-- ヘッダー  -->
    <v-app-bar app clipped-left color="primary" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/dashboard">
          <img
            class="dash-top__logo"
            src="@/assets/images/logos/logo-dark.png"
          />
        </router-link>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>


<script>
// リポジトリの生成
import { RepositoryFactory } from "@/repository/RepositoryFactory";
const UserRepository = RepositoryFactory.get("user");

export default {
  data() {
    return {
      drawer: null,

      // ここにドロワーアイテムを定義する
      items: [
        {
          title: "タスク一覧",
          icon: "mdi-order-bool-ascending-variant",
          to: "/#/dashboard/task",
        },
        {
          title: "アカウント",
          icon: "mdi-account-box",
          to: "/#/dashboard/acount",
        },
      ],
    };
  },

  methods: {
    // ログアウト
    async logout() {
      const res = await UserRepository.logout().catch((err) => {
        return err.response;
      });
      if (res.status != 200) {
        console.warn("ログアウトに失敗しました");
        return;
      }
      console.info("ログアウトに成功しました");

      // 認証フラグをfalseにする
      await this.$store.dispatch("user/setAuth", false);
      console.info({ isLoginState: this.$store.getters.auth });

      // トップ画面へ移動
      // @ts-ignore
      await this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/base/_variables.scss";

.dash-top__logo {
  max-height: rem(35);
  margin-top: rem(10);
  width: 100%;
  object-fit: contain; /* 画像縦横比を維持したまま、heightに対してリサイズする(ブロックに対してではない) */
}
</style>