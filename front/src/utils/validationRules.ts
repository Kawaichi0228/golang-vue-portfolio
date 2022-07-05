// -------------------------------------------------------------------------
// バリデーションに使用するルール
// -------------------------------------------------------------------------
const err_notEntered_password = "パスワードを入力してください";
export const ruleDescription_password =
  "半角英字と半角数字それぞれ1文字以上含む8文字以上";
const err_valid_password = "正しいパスワードを入力してください";
// 正規表現ルール
//  [半角英字と半角数字それぞれ1文字以上含む8文字以上100文字以下]
const rule_password = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i;

const err_notEntered_email = "メールアドレスを入力してください";
const err_valid_email = "正しいメールアドレスを入力してください";
// 正規表現ルール
const rule_email =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validationRules = {
  data() {
    return {
      // email
      emailRules: {
        required: (value: string | boolean) => !!value || err_notEntered_email,
        regex: (value: any) => rule_email.test(value) || err_valid_email,
      },

      // password
      passwordRules: {
        required: (value: string | boolean) =>
          !!value || err_notEntered_password,
        regex: (value: any) => rule_password.test(value) || err_valid_password,
      },
    };
  },
};
