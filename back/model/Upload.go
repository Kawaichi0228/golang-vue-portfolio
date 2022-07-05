package model

import (
	"fmt"
	"io"
	"mime/multipart"
	"os"
	"webapp/utils/status"
)

type Upload struct {
}

func (u *Upload) AddFile(file multipart.File, path string, fileName string) int {

	// 指定したパスのフォルダオブジェクトを生成
	out, err := os.Create(path + "\\" + fileName)
	if err != nil {
		fmt.Println("指定されたパスが存在しません", err)
		return status.ERROR
	}

	// オブジェクト解放処理を予約
	defer out.Close()

	// ファイルをフォルダへコピー
	_, err = io.Copy(out, file)
	if err != nil {
		fmt.Println("ファイルがフォルダへコピーできませんでした", err)
		return status.ERROR
	}

	fmt.Println("ファイルのアップロードに成功しました", err)
	return status.SUCCESS
}
