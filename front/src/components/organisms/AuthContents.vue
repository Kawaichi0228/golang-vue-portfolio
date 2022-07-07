<template>
  <v-container class="auth px-6 py-8 mx-auto" style="max-width: 410px">
    <div class="pt-6">
      <!-- フォーム -->
      <div class="mb-6">
        <!-- メールアドレス入力フォーム -->
        <v-text-field
          v-model="formData.email"
          :rules="[emailRules.required, emailRules.regex]"
          autofocus
          dense
          :height="localConst.formAndBtnHeight"
          outlined
          :placeholder="localConst.placeholderTextEmail"
        ></v-text-field>

        <!-- パスワード入力フォーム -->
        <v-text-field
          v-model="formData.password"
          :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[passwordRules.required, passwordRules.regex]"
          :type="passwordShow ? 'text' : 'password'"
          dense
          :height="localConst.formAndBtnHeight"
          name="input-password"
          outlined
          :placeholder="localConst.placeholderTextPassword"
          @click:append="passwordShow = !passwordShow"
        ></v-text-field>

        <!-- パスワードルールの注釈 -->
        <div class="auth__form--pw-description">
          ※{{ ruleDescription_password }}
        </div>

        <!-- メールアドレスorパスワードエラー時の表示エラーメッセージ -->
        <v-container fill-height v-show="isVisibleErrmsg">
          <v-row class="auth__error-msg" align-content="center">
            <v-col cols="12" align="center" class="text-left">
              <v-alert
                class="auth__error-msg pa-2 my-1"
                slot="no-results"
                :value="true"
                color="error"
                dark
                icon="mdi-alert-circle-outline"
              >
                {{ errMsgValue }}
              </v-alert>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- 会員登録 or ログインボタン -->
      <div class="mb-6">
        <v-btn
          class="
            auth__submit-button auth__submit-button--margin
            fill-width
            primary
            white--text
          "
          text
          :height="localConst.formAndBtnHeight"
          @click="onSubmitFunction_()"
        >
          {{ buttonValue }}
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import {
  validationRules,
  ruleDescription_password,
} from "@/utils/validationRules";

const placeholderTextEmail = "例) taro.yamada@example.com";
const placeholderTextPassword = "例) password01";
const formAndBtnHeight = "48px";

export default {
  mixins: [validationRules],

  props: {
    buttonValue: {
      type: String,
      required: true,
    },
    onSubmitFunction: {
      type: Function,
      required: true,
    },
    isVisibleErrmsg: {
      type: Boolean,
      required: true,
    },
    errMsgValue: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      localConst: {
        placeholderTextEmail: placeholderTextEmail,
        placeholderTextPassword: placeholderTextPassword,
        formAndBtnHeight: formAndBtnHeight,
      },
      formData: {
        // MEMO:
        //   Key名はAPIのmodelの`json`と一致させておくこと(KeyがそのままリクエストJSON形式として送信されるため)
        //   ex.
        //     type User struct {
        //       Email    string `json:"email"`
        //       Password string `json:"password"`
        //     }
        email: null,
        password: null,
      },
      passwordShow: false,
      ruleDescription_password: ruleDescription_password,
      isVisibleErrmsg_: null,
    };
  },

  methods: {
    // APIを叩く関数
    onSubmitFunction_() {
      this.addFormData();
      this.onSubmitFunction();
    },

    // 親コンポーネントにフォームデータの値を伝えるための関数
    addFormData() {
      this.$emit("form-data", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/function/_rem.scss";
@import "@/styles/base/_variables.scss";

.auth {
}
.auth__form {
}
.auth__form--pw-description {
  font-size: $font-size-small;
}
.auth__error-msg {
  font-size: $font-size-small;
}
.auth__error-msg--icon {
}
.auth__submit-button {
}
.auth__submit-button--margin {
  width: 100%;
}
</style>