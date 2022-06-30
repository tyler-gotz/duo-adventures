package database

import (
	"github.com/tyler-gotz/duo-adventures/server/config"
	"github.com/tyler-gotz/duo-adventures/server/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	dbConnection := config.GetEnvVariable("MYSQL_CONN")

	connection, err := gorm.Open(mysql.Open(dbConnection), &gorm.Config{})

	if err != nil {
		panic("Could Not Connect to DB")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
