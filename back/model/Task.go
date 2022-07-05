package model

import (
	"time"
	"webapp/enum"
	"webapp/utils/status"

	"gorm.io/gorm"
)

type Task struct {
	// UsersテーブルのIDをFKとして設定する
	User   User
	UserID uint `gorm:"not null" json:"user_id"`

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
	TaskID    uint           `gorm:"type:bigint(20)" json:"task_id"`
	Text      string         `gorm:"type:varchar(100)" json:"text"`
	Status    enum.State     `gorm:"type:bigint(20)" json:"status"`
}

// GetAll 指定したユーザーIDの、レコードを全て取得
func (t *Task) GetAll(uid any) ([]Task, int) {
	var tasks []Task
	_ = DB.Debug().Where("user_id = ?", uid).Find(&tasks)
	return tasks, status.SUCCESS
}

// GetMaxTaskId 指定したユーザーIDの、タスクIDの最大値を取得
func (t *Task) GetMaxTaskId(uid any) (uint, int) {
	var maxId uint
	row := DB.Debug().Table("tasks").Select("max(task_id)").Where("user_id = ?", uid).Row()
	row.Scan(&maxId)
	return maxId, status.SUCCESS
}
