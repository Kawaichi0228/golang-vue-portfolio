package utils

import (
	"fmt"

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
	// configファイルを読み込む
	p := "config/config.ini"
	file, err := ini.Load(p)
	if err != nil {
		fmt.Println("configファイルの読込に失敗しました。:", err)
	}

	// 読み込んだconfigから、宣言しておいた各varに値をセットする
	LoadServer(file)
	LoadData(file)
	LoadStorage(file)
}

func LoadServer(file *ini.File) {
	s := "server"
	AppMode = file.Section(s).Key("AppMode").String()
	HttpPort = file.Section(s).Key("HttpPort").String()
	JwtKey = file.Section(s).Key("JwtKey").String()
}

func LoadData(file *ini.File) {
	s := "database"
	DbUsername = file.Section(s).Key("DbUsername").String()
	DbPassword = file.Section(s).Key("DbPassword").String()
	DbHost = file.Section(s).Key("DbHost").String()
	DbPort = file.Section(s).Key("DbPort").String()
	DbDatabaseName = file.Section(s).Key("DbDatabaseName").String()
}

func LoadStorage(file *ini.File) {
	s := "storage"
	AccessKey = file.Section(s).Key("AccessKey").String()
	SecretKey = file.Section(s).Key("SecretKey").String()
	Bucket = file.Section(s).Key("Bucket").String()
	StorageServer = file.Section(s).Key("StorageServer").String()
}
