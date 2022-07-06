package routes

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tyler-gotz/duo-adventures/server/controllers"
)

func RegisterRoutes(api fiber.Router) {
	/*
		GET /ping
		Health check of server :)
	*/
	api.Get("/ping", controllers.Ping)

	/*
		POST /register
		Register User
	*/
	api.Post("/register", controllers.Register)

	/*
		POST /login
		Login User
	*/
	api.Post("/login", controllers.Login)
}
