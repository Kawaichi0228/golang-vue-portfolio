package v1

import (
	"net/http" // 各ステータスコードの定数モジュール(ex. http.StatusOK = 200)
	"os"
	"webapp/model"
	"webapp/utils/status"

	"github.com/gin-gonic/gin"
)

type Upload struct {
	up model.Upload
}

func (u *Upload) Add(c *gin.Context) {
	// フォーム選択ファイルを取得
	file, fileHeader, _ := c.Request.FormFile("image")

	// 画像をアップロード

	dir, _ := os.Getwd()         // 現在のディレクトリ絶対パスを取得
	path := dir + "\\uploadfile" // アップロード先のパス
	code := u.up.AddFile(file, path, fileHeader.Filename)
	if code != status.SUCCESS {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  code,
			"message": status.GetTextPhrase(code),
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": status.GetTextPhrase(code),
	})
}
