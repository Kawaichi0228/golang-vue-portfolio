package v1

import (
	"fmt"
	"net/http" // 各ステータスコードの定数モジュール(ex. http.StatusOK = 200)
	"os"
	"strconv"
	"time"

	"webapp/model"
	"webapp/utils/status"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v4"
)

type User struct {
	us model.User
}

const (
	COOKIE_KEY = "jwt"
)

func (u *User) Register(c *gin.Context) {
	var formData model.User

	// リクエストJSONをパース(bodyデータをGo側で取得する。引数に、リクエストされたJSONの値が格納される)
	c.BindJSON(&formData)

	// 取得したリクエスト値を引数として渡し関数を実行
	code := u.us.CreateUser(&formData)
	if code != status.SUCCESS {
		fmt.Println("ユーザ登録のCREATEクエリ実行に失敗しました")
	}
	fmt.Println("ユーザ登録のCREATEクエリ実行に成功しました")

	// JSONレスポンス
	c.JSON(http.StatusOK, gin.H{
		"status":   code,
		"message":  status.GetTextPhrase(code),
		"email":    formData.Email,
		"password": formData.Password,
	})
}

func (u *User) Login(c *gin.Context) {
	// リクエストJSONで使用できるようにするKEYのstructを定義(ex. Email string `json:"email"`)
	var formData model.User

	// リクエストJSONをパース(bodyデータをGo側で取得する。引数に、リクエストされたJSONの値が格納される)
	//err = c.ShouldBindJSON(&formData) // ShouldBindJSON: 手動エラーハンドリング(リクエストデータが不正だったとき)
	c.BindJSON(&formData) // BindJSON: 自動エラーハンドリング(リクエストデータが不正だったとき)

	// 取得したリクエスト値を引数へ渡し、ログインチェック
	formData, code := u.us.CheckLogin(formData.Email, formData.Password)

	if code == status.SUCCESS {
		fmt.Println("ログインに成功しました")

		// クレームを作成
		claims := jwt.StandardClaims{
			Issuer:    strconv.Itoa(int(formData.ID)),        // stringに型変換
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(), // 有効期限
		}

		// JWTトークンを作成
		jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
		token, err := jwtToken.SignedString([]byte("secret"))
		if err != nil {
			fmt.Println("トークンエラー", err)
		}

		// CookieにJWTトークン情報をセット(保存)
		cookie := new(http.Cookie)
		cookie.Value = token //Cookieに入れる値

		maxAge_sec := 3600 // cookieの有効期限(秒)などの設定
		secure := false
		httpOnly := false

		var domain string
		if os.Getenv("ENV") == "production" { // 本番環境の場合
			domain = "golang-vue-portfolio.herokuapp.com"

		} else if os.Getenv("ENV") == "local" { // ローカルの場合
			domain = "localhost"

		} else {
			fmt.Println("cookieをセットできませんでした。(環境変数`ENV` が取得できませんでした。)")
			c.JSON(http.StatusBadRequest, gin.H{
				"message": "cookieのセットができませんでした",
			})
			return
		}
		c.SetSameSite(http.SameSiteDefaultMode) // クロスオリジンの際にCookieを送付するかどうか
		c.SetCookie(COOKIE_KEY, cookie.Value,
			maxAge_sec, "/", domain, secure, httpOnly) // cookieをセット

		fmt.Println("cookieをセットしました")

		c.JSON(http.StatusOK, gin.H{
			"status":  code,
			"message": status.GetTextPhrase(code),
			"data":    formData,
			"token":   token,
		})

	} else {
		fmt.Println("ログインに失敗しました")
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  code,
			"message": status.GetTextPhrase(code),
		})
	}
}

// Get ログイン済みのユーザ情報をクッキー・トークンから取得する
func (u *User) Get(c *gin.Context) {
	// User IDを取得
	uid, _ := c.Get("UserId")
	fmt.Println("クレームからUserIdを取得しました", uid)

	var user model.User
	model.DB.Debug().Where("id = ?", uid).First(&user)

	code := status.SUCCESS
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": status.GetTextPhrase(code),
		"data":    user,
	})
}

func (u *User) Logout(c *gin.Context) {
	value := ""      // tokenを空にする
	maxAge_sec := -1 // マイナス値を入れて期限切れにする
	secure := false
	httpOnly := false
	c.SetCookie(COOKIE_KEY, value,
		maxAge_sec, "/", "localhost", secure, httpOnly) // cookieをセット

	fmt.Println("ログアウトに成功しました")
	code := status.SUCCESS
	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": status.GetTextPhrase(code),
	})
}
