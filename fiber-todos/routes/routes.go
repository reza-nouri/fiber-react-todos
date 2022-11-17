package routes

import (
	"fiberTodoList/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", hello)
	app.Get("/todos", controllers.GetAllTodo)
	app.Post("/todos", controllers.CreateTodo)
	app.Get("/todos/:id", controllers.GetTodoById)
	app.Put("/todos/:id", controllers.UpdateTodo)
	app.Delete("/todos/:id", controllers.DeleteTodo)
}

func hello(c *fiber.Ctx) error {
	return c.SendString("Hello, World 👋!")
}
