package controllers

import (
	"fiberTodoList/database"
	"fiberTodoList/models"
	"github.com/gofiber/fiber/v2"
	"strconv"
)

type TodoDto struct {
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

func GetAllTodo(c *fiber.Ctx) error {
	var todos []models.Todo
	database.DB.Find(&todos)

	return c.JSON(todos)
}

func GetTodoById(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))
	db := database.DB
	todo := models.Todo{
		Id: id,
	}
	err := db.Find(&todo).Error
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Could not file todo",
		})
	}

	return c.JSON(todo)
}

func CreateTodo(c *fiber.Ctx) error {
	db := database.DB
	var todo models.Todo

	err := c.BodyParser(&todo)
	if err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "Check your input",
		})
	}

	db.Create(&todo)

	return c.Status(200).JSON(todo)
}

func UpdateTodo(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))
	var todoDto TodoDto
	err := c.BodyParser(&todoDto)
	if err != nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "Bad request",
		})
	}

	db := database.DB
	todo := models.Todo{
		Id: id,
	}
	err = db.Find(&todo, id).Error
	if err != nil {
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "Todo not found",
		})
	}

	todo.Title = todoDto.Title
	todo.Completed = todoDto.Completed

	db.Updates(&todo)

	return c.Status(fiber.StatusOK).JSON(todo)
}

func DeleteTodo(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))

	db := database.DB
	todo := models.Todo{
		Id: id,
	}
	db.Delete(&todo)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Todo Deleted",
	})
}
