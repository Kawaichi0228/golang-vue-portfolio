<template>
  <div class="pa-6">
    <v-toolbar-title class="mb-6">アカウント情報</v-toolbar-title>
    <v-divider></v-divider>

    <v-simple-table border="1" height="500px">
      <tbody class="text-left">
        <tr>
          <th class="py-6" width="25%">メールアドレス(アカウント名)</th>
          <td class="site-name">{{ userData.email }}</td>
        </tr>
        <tr>
          <th class="py-6" width="25%">パスワード</th>
          <td>
            ***************
            <div class="text-caption">
              ※セキュリティ保護のため表示していません。
            </div>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
// リポジトリの生成
import { RepositoryFactory } from "@/repository/RepositoryFactory";
const UserRepository = RepositoryFactory.get("user");

export default {
  data() {
    return {
      userData: {},
    };
  },

  created() {
    this.getUserInfo();
  },

  methods: {
    // ユーザ情報を取得
    async getUserInfo() {
      const res = await UserRepository.get().catch((err) => {
        return err.response;
      });
      if (res.status != 200) {
        console.warn("ユーザー情報の取得に失敗しました");
        return;
      }
      console.info("ユーザー情報の取得に成功しました");
      console.table(res.data);

      // 取得したデータをdata()へ格納
      this.userData = res.data.data;
    },
  },
};
</script>

<style scoped>
</style>
