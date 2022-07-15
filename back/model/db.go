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

// DSNを生成する(各設定を1つの文字列として結合することで生成)
// 省略形 dsn: データベースの識別子(接続情報)
var (
	datasourceName = utils.DbDataSourceName
	// DBインスタンス
	DB *gorm.DB
)

var err error

func connect() {
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
