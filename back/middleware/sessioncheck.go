package middleware

import (
	"fmt"
	"net/http"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"

	v1 "webapp/api/v1"
)

type Claims struct {
	jwt.StandardClaims
}

func SessionCheck() gin.HandlerFunc {
	return func(c *gin.Context) {
		// ログイン時に作成されたCookieからJWTを取得
		cookie, err := c.Cookie(v1.COOKIE_KEY)
		if err != nil {
			fmt.Println("cookieの取得に失敗しました。ログインしていないか、もしくは"+
				"cookieの有効期限が切れているため、再度ログインして下さい。", err)

			code := http.StatusBadRequest
			c.JSON(http.StatusBadRequest, gin.H{
				"status":  code,
				"message": "cookieの取得に失敗しました",
			})
			return
		}
		fmt.Println("cookieの取得に成功しました", cookie)

		// token取得
		token, err := jwt.ParseWithClaims(cookie, &Claims{}, func(token *jwt.Token) (interface{}, error) {
			return []byte("secret"), nil
		})
		if err != nil {
			fmt.Println("tokenの取得に失敗しました", err)
			code := http.StatusBadRequest
			c.JSON(http.StatusBadRequest, gin.H{
				"status":  code,
				"message": "tokenの取得に失敗しました",
			})
			return
		}
		fmt.Println("tokenの取得に成功しました", cookie)

		// クレーム作成
		claims := token.Claims.(*Claims)

		// User IDをクレームから取得し、c.Set("UserId", id)として格納
		id := claims.Issuer
		c.Set("UserId", id)
		fmt.Println(`User IDをクレームから取得し、c.Set("UserId", id)として格納しました`, id)

		c.Next() // ミドルウェア後の処理を行うために記述
	}
}
