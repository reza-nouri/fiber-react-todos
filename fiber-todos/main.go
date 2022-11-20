package main

import (
	"fiberTodoList/database"
	"fiberTodoList/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()
	app.Use(cors.New())
	database.Connect()
	routes.Setup(app)
	app.Listen(":8000")
}
