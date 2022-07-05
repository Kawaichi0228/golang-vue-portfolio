package status

// -------------------------------------------------------------------------
// ユーザ定義のHTTPレスポンスのHTTPステータスコード(net/httpモジュールを使ってもよい)
// -------------------------------------------------------------------------
// ステータスコード
const (
	SUCCESS = 200
	ERROR   = 500

	// MEMO: ユーザ定義は1000以降を使う(2000,3000と分けてもOK)
	// code= 1000... ユーザーモジュールエラー
	ERROR_PASSWORD_WRONG = 1001
	ERROR_USER_NOT_EXIST = 1002
)

// テキストフレーズ(ステータステキスト)
var textPhrase = map[int]string{
	SUCCESS:              "OK",
	ERROR:                "FAIL",
	ERROR_PASSWORD_WRONG: "パスワードが違います。",
	ERROR_USER_NOT_EXIST: "ユーザーが存在しません。",
}

// GetCodeMsg コードを引数に渡して、対応するテキストフレーズを取得するための関数
func GetTextPhrase(code int) string {
	return textPhrase[code]
}
