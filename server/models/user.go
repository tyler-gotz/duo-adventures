package models

import "time"

type User struct {
	ID        uint   `gorm:"primaryKey" json:"id"`
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
	Email     string `json:"email" gorm:"unique"`
	Password  []byte `json:"-"`
	Active    bool   `json:"active"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
