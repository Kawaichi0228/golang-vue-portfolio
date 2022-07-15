package utils

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

var (
	AppMode string
	JwtKey  string

	DbSchema         string
	DbUsername       string
	DbPassword       string
	DbHost           string
	DbPort           string
	DbDatabaseName   string
	DbDataSourceName string

	AccessKey     string
	SecretKey     string
	Bucket        string
	StorageServer string
)

// init関数: import時に呼び出される。mainモジュールに記載した場合には、main()より先に呼び出される。
func init() {
	loadEnv()
}

func loadEnv() {
	p := "./config/.env"
	err := godotenv.Load(p)

	// .envの読み込みに失敗した(=本番環境)の場合、herokuの環境変数`DATABASE_URL`から
	// DataSourceNameを生成する
	if err != nil {
		DbDataSourceName = os.Getenv("DATABASE_URL")
		return
	}

	// ローカルのDataSourceNameを.envファイルから生成
	DbSchema = os.Getenv("DB_SCHEMA")
	DbHost = os.Getenv("DB_HOST")
	DbPort = os.Getenv("DB_PORT")
	DbUsername = os.Getenv("DB_USERNAME")
	DbPassword = os.Getenv("DB_PASSWORD")
	DbDatabaseName = os.Getenv("DB_DATABASE")
	DbDataSourceName = fmt.Sprintf(DbSchema, DbUsername, DbPassword, DbHost, DbPort, DbDatabaseName)
}
