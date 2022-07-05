package model

import (
	"fmt"
	"log"
	"webapp/utils/status"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

// 作成するテーブル内のカラムを構造体として定義
type User struct {
	// <gorm.Modelの中身>
	//   type Model struct {
	//   	ID        uint `gorm:"primarykey"`
	//   	CreatedAt time.Time
	//   	UpdatedAt time.Time
	//   	DeletedAt gorm.DeletedAt `gorm:"index"`
	//   }
	gorm.Model
	Email    string `gorm:"type:varchar(200)" json:"email"`
	Password string `gorm:"type:varchar(500);not null" json:"password" validate:"required,min=6,max=120" label:"パスワード"`
}

func (u *User) CreateUser(data *User) int {
	// パスワードのハッシュ化
	data.Password = u.hashingPassword(data.Password)

	// クエリ実行
	err := DB.Debug().Create(&data).Error
	if err != nil {
		return status.ERROR
	}
	return status.SUCCESS
}

func (u *User) CheckLogin(email string, password string) (User, int) {
	var user User
	// ユーザをWhere句で取得(`&user`に格納される)
	DB.Debug().Where("email = ?", email).First(&user)

	// ユーザが存在しない場合
	fmt.Println("user.ID", user.ID)
	if user.ID == 0 {
		return user, status.ERROR_USER_NOT_EXIST
	}

	// ハッシュパスワードが一致するか比較
	fmt.Println("user.Password", user.Password)
	err := u.compareHashPassword(user.Password, password)

	// パスワードが間違っている場合
	if err != nil {
		return user, status.ERROR_PASSWORD_WRONG
	}

	return user, status.SUCCESS
}

// -------------------------------------------------------------------------
// Private Method
// -------------------------------------------------------------------------
// hashingPassword パスワードをbyteとしてハッシュ化する→Stringとして返す
func (u *User) hashingPassword(password string) string {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		log.Fatal(err)
	}
	return string(hash)
}

// compareHashPassword ハッシュ化されたパスワードを比較する
//   dbPassword: DBから取得したパスワード
//   requestPassword: リクエストデータのパスワード
func (u *User) compareHashPassword(dbPassword string, requestPassword string) error {
	err := bcrypt.CompareHashAndPassword([]byte(dbPassword), []byte(requestPassword))
	return err
}
