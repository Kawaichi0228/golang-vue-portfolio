package v1

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"webapp/model"
	"webapp/utils/status"
)

type Task struct {
	tsk model.Task
}

// GetAll タスク全件取得
func (t *Task) GetAll(c *gin.Context) {
	uid, _ := c.Get("UserId") // cookieから取得したUserID

	// タスク全件取得
	tasks, code := t.tsk.GetAll(uid)

	c.JSON(http.StatusOK, gin.H{
		"status":  code,
		"message": status.GetTextPhrase(code),
		"data":    tasks,
	})
}

// Create タスク新規作成
func (t *Task) Create(c *gin.Context) {
	var err error

	// `task.Text`をクライアントから取得
	// リクエストJSONをパース(bodyデータをGo側で取得する。引数に、リクエストされたJSONの値が格納される)
	var formData model.Task
	c.BindJSON(&formData)

	// cookieから取得したUserIDを使用
	task := model.Task{}
	uid, _ := c.Get("UserId")

	// dbから取得した最大値+1のTaskIDを使用(連番として作成するため)
	maxId, _ := t.tsk.GetMaxTaskId(uid)
	maxIdNext := maxId + 1

	// レコードを挿入
	err = model.DB.Model(&Task{}).Create(map[string]interface{}{
		"user_id":    uid,
		"created_at": time.Now(),
		"updated_at": time.Now(),
		"task_id":    maxIdNext,
		"text":       formData.Text,
		"status":     0,
	}).Error
	if err != nil {
		fmt.Println("タスク作成に失敗しました")
		return
	}
	fmt.Println("タスク作成に成功しました")

	c.JSON(http.StatusOK, &task)
}

// Get タスク取得
func (t *Task) Get(c *gin.Context) {
	// TODO: uid指定の実装がまだ
	task := model.Task{}
	id := c.Param("id")

	// idに一致するレコードを取得
	model.DB.Debug().First(&task, id)

	c.JSON(http.StatusOK, task)
}

// Update タスク更新
func (t *Task) Update(c *gin.Context) {
	var err error
	task := model.Task{}
	query := "user_id = ? AND task_id = ?"
	uid, _ := c.Get("UserId") // cookieから取得したUserID
	tid := c.Param("id")      // URLから渡されたTaskIDを取得

	// 指定のレコードが存在するかチェック
	err = model.DB.Debug().Where(query, uid, tid).First(&task).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "レコードの更新に失敗しました(指定のレコードが存在しない又は既に削除されています)",
		})
		return
	}

	// JSONバインド
	request := model.Task{}
	err = c.BindJSON(&request)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 指定のレコードを更新する
	task.Text = request.Text
	model.DB.Debug().Where(query, uid, tid).Save(&task)

	c.JSON(http.StatusOK, gin.H{
		"message": "レコードの更新に成功しました",
	})
}

// Delete タスク削除
func (t *Task) Delete(c *gin.Context) {
	task := model.Task{}
	query := "user_id = ? AND task_id = ?"
	uid, _ := c.Get("UserId") // cookieから取得したUserID
	tid := c.Param("id")      // URLから渡されたTaskIDを取得

	// 指定のレコードが存在するかチェック(Deleteメソッド直接ではcatchできないため事前にSELECTでチェックしている)
	err := model.DB.Debug().Where(query, uid, tid).First(&task).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "レコードの削除に失敗しました(指定のレコードが存在しない又は既に削除されています)",
		})
		return
	}

	// 指定のレコードを削除する
	model.DB.Debug().Where(query, uid, tid).Delete(&task)

	c.JSON(http.StatusOK, gin.H{
		"message": "レコードの削除に成功しました",
	})
}
