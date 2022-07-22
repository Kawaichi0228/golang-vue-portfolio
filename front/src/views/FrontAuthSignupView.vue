<template>
  <v-container fluid class="text-center">
    <v-row justify="center" align-content="center">
      <v-card :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs" class="fill-width" flat max-width="640">
        <v-card-title class="pa-8">
          <h4 class="fill-width">新規会員登録</h4>
        </v-card-title>

        <v-divider> </v-divider>

        <AuthContents buttonValue="会員登録" :onSubmitFunction="registerCallBackFunction" :isVisibleErrmsg="isVisibleErrmsg"
          errMsgValue="メールアドレスおよびパスワードを正しく入力してください" @form-data="addFormData" />

        <v-divider class="mb-4"> </v-divider>

        <div class="mb-8">
          <div>アカウントをお持ちの方</div>
          <router-link to="/signin">ログインに移動</router-link>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import log from 'loglevel';
import AuthContents from "@/components/organisms/AuthContents.vue";

// リポジトリの生成
import { RepositoryFactory } from "@/repository/RepositoryFactory";
const UserRepository = RepositoryFactory.get("user");

export default {
  components: {
    AuthContents,
  },

  data() {
    return {
      registerCallBackFunction: this.register,
      isVisibleErrmsg: false,
    };
  },

  methods: {
    // 子のコンポーネントから値を受け取るためのメソッド
    addFormData(value) {
      this.formData = value;
    },

    // フォームに入力されたデータをapiへ送信する
    async register() {
      const formData = {
        email: this.formData.email,
        password: this.formData.password,
      };

      const res = await UserRepository.register(formData).catch((err) => {
        return err.response;
      });
      if (res.status !== 200) {
        log.warn("会員登録に失敗しました");
        log.info(res.data);
        this.showErrMsg();
        return;
      }
      log.info("会員登録に成功しました");
      log.info(res.data);

      // ログインページに移動
      await this.$router.push("/signin");
    },

    // templateにエラーメッセージを表示させる(フラグをtrueにすることで)
    showErrMsg() {
      this.isVisibleErrmsg = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.fill-width {
  width: 100%;
}
</style>