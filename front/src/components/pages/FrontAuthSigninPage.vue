<template>
  <v-container fluid class="text-center">
    <v-row justify="center" align-content="center">
      <v-card
        :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        class="fill-width"
        flat
        max-width="640"
      >
        <v-card-title class="pa-8">
          <h4 class="fill-width">ログイン</h4>
        </v-card-title>

        <v-divider> </v-divider>

        <AuthContents
          buttonValue="ログイン"
          :onSubmitFunction="login"
          :isVisibleErrmsg="isVisibleErrmsg"
          errMsgValue="メールアドレスまたはパスワードが違います"
          @form-data="addFormData"
        />

        <v-divider class="mb-4"> </v-divider>

        <div class="mb-8">
          <div>アカウントをお持ちでない方</div>
          <router-link to="/signup">会員登録に移動</router-link>
        </div>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import AuthContents from "@/components/parts/AuthContents.vue";

// リポジトリの生成
import { RepositoryFactory } from "@/repository/RepositoryFactory";
const UserRepository = RepositoryFactory.get("user");

export default {
  components: {
    AuthContents,
  },

  data() {
    return {
      login: this.login_,
      isVisibleErrmsg: false,
      formData: {},
    };
  },

  mounted() {
    // MEMO: エラー「Property 'XXX' does not exist on type」が出るため、@ts-ignoreで型を無視している
    //  (型推論が効いていないのが原因？)
    // @ts-ignore
    this.checkLoginState(); // ログイン状態のチェック
  },

  methods: {
    // 子のコンポーネントから値を受け取るためのメソッド
    addFormData(value) {
      this.formData = value;
    },

    // ログイン中か状態を確認
    async checkLoginState() {
      const res = await UserRepository.get().catch((err) => {
        return err.response;
      });
      if (res.status != 200) {
        console.warn("ログインしていない状態です");
        return;
      }
      console.info("ログイン中の状態です");
      console.table(res.data);

      // アプリ画面へ移動
      // @ts-ignore
      await this.$router.push("/dashboard");
    },

    // フォームに入力されたデータをapiへ送信する
    async login_() {
      const formData = {
        email: this.formData.email,
        password: this.formData.password,
      };

      const res = await UserRepository.login(formData).catch((err) => {
        return err.response;
      });
      if (res.status != 200) {
        console.warn("ログインに失敗しました");
        console.table(res.data);
        this.showErrMsg();

        // 認証フラグをfalseにする
        await this.$store.dispatch("user/setAuth", false);
        console.info({ isLoginState: this.$store.getters.auth });
        return;
      }
      console.group("success");
      console.info("ログインに成功しました");
      console.table(res.data);
      console.groupEnd("");

      // 認証フラグをtrueにする
      await this.$store.dispatch("user/setAuth", true);
      console.info({ isLoginState: this.$store.getters.auth });

      // リンクを移動
      await this.$router.push("/dashboard");
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