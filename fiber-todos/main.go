package main

import (
	"fiberTodoList/database"
	"fiberTodoList/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	database.Connect()
	routes.Setup(app)
	app.Listen(":8000")
}
