package utils

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

var (
	DbDataSourceName string
)

// init関数: import時に呼び出される。mainモジュールに記載した場合には、main()より先に呼び出される。
func init() {
	loadEnv()
}

func loadEnv() {
	p := "./config/.env.local"
	err := godotenv.Load(p)

	// -------------------------------------------------------------------------
	// 本番環境用の処理(.envの読み込みに失敗した場合、本番環境と判定する)
	// -------------------------------------------------------------------------
	if err != nil {
		// herokuの環境変数`DATABASE_URL`からDataSourceNameを生成する
		DbDataSourceName = os.Getenv("DATABASE_URL")
		return
	}

	// -------------------------------------------------------------------------
	// ローカル環境用の処理
	// -------------------------------------------------------------------------
	// ローカルのDataSourceNameを.envファイルの各環境変数から結合して生成
	DbSchema := os.Getenv("DB_SCHEMA")
	DbHost := os.Getenv("DB_HOST")
	DbPort := os.Getenv("DB_PORT")
	DbUsername := os.Getenv("DB_USERNAME")
	DbPassword := os.Getenv("DB_PASSWORD")
	DbDatabaseName := os.Getenv("DB_DATABASE")
	DbDataSourceName = fmt.Sprintf(DbSchema, DbUsername, DbPassword, DbHost, DbPort, DbDatabaseName)
}
