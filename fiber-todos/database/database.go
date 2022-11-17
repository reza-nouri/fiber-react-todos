package database

import (
	"fiberTodoList/models"
	"fmt"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dsn := "host=localhost user=postgres password=123 dbname=todo_list port=5432"
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database!")
	}
	fmt.Println("Database connected!")

	DB = database

	err = database.AutoMigrate(&models.Todo{})
	if err != nil {
		panic("Failed to migrate to database!")
	}
	fmt.Println("Migrated db!")
}
