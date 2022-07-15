package model

import (
	"fmt"
	"os"

	"webapp/utils"

	// gorm: GO言語のORMマッピング用モジュール
	// ORMのメリット:
	//   - コードを簡素化できる
	//   - 単純なDB操作を行いやすい
	// 備考: 複雑な操作の場合は、gormを使わずに、SQL文でデータベースを操作したほうがよい
	"gorm.io/gorm"

	"gorm.io/driver/mysql"
)

// データベース接続設定を定義
const (
	DB_SCHEMA = "%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local"
)

// DSNを生成する(各設定を1つの文字列として結合することで生成)
// 省略形 dsn: データベースの識別子(接続情報)
var (
	schema         = DB_SCHEMA
	username       = utils.DbUsername
	password       = utils.DbPassword
	host           = utils.DbHost
	port           = utils.DbPort
	dbName         = utils.DbDatabaseName
	datasourceName = fmt.Sprintf(schema, username, password, host, port, dbName)
	// DBインスタンス
	DB *gorm.DB
)

var err error

func connect() {
	// https://devcenter.heroku.com/ja/articles/heroku-postgresql#:~:text=%E3%83%97%E3%83%AD%E3%83%93%E3%82%B8%E3%83%A7%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%81%AE%E4%B8%80%E9%83%A8%E3%81%A8%E3%81%97%E3%81%A6%E3%80%81DATABASE_URL%E2%80%8B%20%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A%E3%81%8C%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82DATABASE_URL%E2%80%8B%20%E3%81%AB%E3%81%AF%E3%80%81
	//   herokuのDBへの接続情報は環境変数DATABASE_URLで渡される
	//   なので、環境変数のDATABASE_URLからdatasourceNameを読み込むように修正する必要がある
	// ローカルでAPIを動かす際は以下のように環境変数をセットする
	// export DATABASE_URL="<username>:<password>@tcp(<host>:<port>)/<dbname>?charset=utf8mb4&parseTime=True&loc=Local"
	DB, err = gorm.Open(mysql.Open(datasourceName), &gorm.Config{})

	if err != nil {
		fmt.Println("データベースへの接続に失敗しました。サーバーが起動されているか、もしくはパラメータを確認してください。：", err)
		os.Exit(1) // os.Exit(1): 強制終了コマンド(deferも実行されない)
	}

	fmt.Println("データベースへの接続が成功しました。", DB)
}

func migrate() {
	// オートマイグレーション: (DBに保存されているデータを保持したまま、テーブルの作成やカラムの変更などを行う)
	// ※作成したい各テーブル設定をここに定義
	_ = DB.AutoMigrate(
		&User{},
		&Task{},
	)

	fmt.Println("データベースのオートマイグレーションに成功しました。")
}

func InitDb() {
	connect()
	migrate()
	/*
		sqlDB, _ := db.DB()
		// 接続プールのアイドル接続の最大数を設定
		sqlDB.SetMaxIdleConns(10)

		// データベースへの最大接続数を設定
		sqlDB.SetMaxOpenConns(100)

		// 接続の最大再利用可能時間を設定
		sqlDB.SetConnMaxLifetime(10 * time.Second)
	*/
}
