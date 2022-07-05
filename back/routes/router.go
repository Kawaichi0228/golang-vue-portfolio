package routes

import (
	"net/http" // 各ステータスコードの定数モジュール(ex. http.StatusOK = 200)
	"time"

	v1 "webapp/api/v1"
	"webapp/utils"

	"github.com/gin-gonic/gin"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/multitemplate"
)

// -------------------------------------------------------------------------
// レンダラーの設定
// -------------------------------------------------------------------------
// createMyRender htmlを読み込む(各HTTPメソッドで使用できるようにするため)
func createMyRender() multitemplate.Renderer {
	p := multitemplate.NewRenderer()

	// 以下に読み込むhtmlファイルを全て定義する
	//     渡す側: p.AddFromFiles("<key>", "<html path>")
	//     受け取る側: c.HTML(http.StatusOK, "<key>", nil)
	p.AddFromFiles("front", "./dist/index.html")
	return p
}

// -------------------------------------------------------------------------
// ルーティングの設定
// -------------------------------------------------------------------------
func InitRouter() { // 「setup」と命名することもある
	gin.SetMode(gin.ReleaseMode)

	// -------------------------------------------------------------------------
	// ルーターの作成
	// -------------------------------------------------------------------------
	r := gin.Default() // デフォルトのミドルウェア(ロガー&回復ミドルウェア)を持つginルータを作成
	/*
		// ミドルウェアを一切持たないginルータを作成
			MEMO:「gin.Default()」は以下と同じことをやっている
				r := gin.New()
				r.Use(gin.Logger()) // ロガー: HTTPメソッドのGET,POSTなどの出力ログなど
				r.Use(gin.Recovery())
	*/

	// -------------------------------------------------------------------------
	// Corsの設定
	// -------------------------------------------------------------------------
	r.Use(cors.New(cors.Config{
		// アクセスを許可したいアクセス元
		AllowOrigins: []string{
			"http://localhost:8080/",
		},
		// アクセスを許可したいHTTPメソッド
		AllowMethods: []string{
			"POST",
			"GET",
		},
		// 許可したいHTTPリクエストヘッダ
		AllowHeaders: []string{
			"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
		},
		// cookieなどの情報を必要とするかどうか
		AllowCredentials: true,
		// preflightリクエストの結果をキャッシュする時間
		MaxAge: 24 * time.Hour,
	}))

	// -------------------------------------------------------------------------
	// htmlファイルの事前読み込み(ルーティングでHTMLファイルを表示できるようにするため)
	// -------------------------------------------------------------------------
	r.HTMLRender = createMyRender()

	// -------------------------------------------------------------------------
	// 静的(Static)ファイルの読み込み(「npm run build」で生成された dist フォルダ内の静的フォルダを定義する)
	// ex. [ r.Static(<アウトプットパス(URIへ)>, <インプットパス(ローカルから)>) ]
	//      MEMO: 1つのURIにつき、1つのStatic または 複数のStaticFile しか使えない(1つのURIに対して Static と StaticFile の重複は不可)
	// -------------------------------------------------------------------------
	r.Static("/static", "./dist/static") // 静的ファイルをディレクトリごとまとめて読み込む
	//r.StaticFile("/static/foo.png", "./static/foo.png") // 特定の静的ファイルを読み込む

	// -------------------------------------------------------------------------
	// ルーティングの設定 & (ミドルウェアの適用)
	// -------------------------------------------------------------------------
	// 各ページの描画(レンダリング)のハンドル
	// - トップページ
	r.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "front", nil) // c.HTML(http.StatusOK, "<p.AddFromFilesのKey>", nil)
	})

	// Vue.js側でaxiosを経由してAPIを叩けるようにルーティングを設定
	i := new(v1.Upload)
	u := new(v1.User)
	t := new(v1.Task)

	// - 全般
	rV1 := r.Group("/api/v1")
	{
		rV1.POST("/upload", i.Add) // 画像アップロード機能
	}

	// - 認証が必要なもの
	rAuth := r.Group("/api/v1")
	rAuth.Use(u.SessionCheck())
	{
		rAuth.GET("/user", u.Get)
		rAuth.GET("/task", t.GetAll)
		rAuth.GET("/task/:id", t.Get)
		rAuth.POST("/task", t.Create)
		rAuth.PUT("/task/:id", t.Update)
		rAuth.DELETE("/task/:id", t.Delete)
	}

	// - ユーザー
	rUser := r.Group("/api/v1")
	{
		rUser.POST("/signup", u.Register)
		rUser.POST("/signin", u.Login)
		rUser.GET("/signout", u.Logout)
	}

	// ローカルでServerを立ち上げたときにファイアウォールを出させない
	//   MEMO: localhostでのWebページが表示されなくなってしまうためコメントアウト中
	//log.Fatal(http.ListenAndServe("localhost:8080", nil))

	// サーバーを起動
	httpPort := utils.HttpPort
	_ = r.Run(httpPort) // 引数のポートは省略も可能。その場合は「8080」となる。
}
