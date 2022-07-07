package utils

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"gopkg.in/ini.v1"
)

var (
	AppMode  string
	HttpPort string
	JwtKey   string

	DbUsername     string
	DbPassword     string
	DbHost         string
	DbPort         string
	DbDatabaseName string

	AccessKey     string
	SecretKey     string
	Bucket        string
	StorageServer string
)

// init関数: import時に呼び出される。mainモジュールに記載した場合には、main()より先に呼び出される。
func init() {
	loadEnv()
	loadConfigIni()
}

func loadEnv() {
	p := "./config/.env"
	err := godotenv.Load(p)
	if err != nil {
		log.Fatal(".envファイルの読込に失敗しました: ", err)
	}

	HttpPort = os.Getenv("HTTP_PORT")
	DbHost = os.Getenv("DB_HOST")
	DbPort = os.Getenv("DB_PORT")
	DbUsername = os.Getenv("DB_USERNAME")
	DbPassword = os.Getenv("DB_PASSWORD")
	DbDatabaseName = os.Getenv("DB_DATABASE")
}

func loadConfigIni() {
	p := "./config/config.ini"
	file, err := ini.Load(p)
	if err != nil {
		log.Fatal("config.iniの読込に失敗しました: ", err)
	}

	s1 := "server"
	AppMode = file.Section(s1).Key("AppMode").String()
	JwtKey = file.Section(s1).Key("JwtKey").String()

	s2 := "storage"
	AccessKey = file.Section(s2).Key("AccessKey").String()
	SecretKey = file.Section(s2).Key("SecretKey").String()
	Bucket = file.Section(s2).Key("Bucket").String()
	StorageServer = file.Section(s2).Key("StorageServer").String()
}
