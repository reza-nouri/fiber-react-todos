package models

type Todo struct {
	Id        int    `json:"id" gorm:"primarykey"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}
