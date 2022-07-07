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

<script lang="ts">
import { getUserInfo } from "@/utils/userAxios";

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
      const res = await getUserInfo().catch((err) => {
        return err.response;
      });
      // 取得したデータをdata()へ格納
      this.userData = res;
    },
  },
};
</script>

<style scoped>
</style>
