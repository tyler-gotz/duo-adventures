package controllers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tyler-gotz/duo-adventures/server/database"
	"github.com/tyler-gotz/duo-adventures/server/models"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return c.Status(500).Send([]byte("Internal Server Error"))
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 16)

	user := models.User{
		FirstName: data["firstName"],
		LastName:  data["lastName"],
		Email:     data["email"],
		Password:  password,
		Active:    true,
	}

	result := database.DB.Create(&user)

	if result.Error != nil {
		return c.Status(409).Send([]byte("Duplicate Email Found."))
	}

	return c.JSON(user.ID)
}
