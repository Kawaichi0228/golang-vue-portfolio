package main

import (
	"webapp/model"
	"webapp/routes"
)

func main() {
	model.InitDb()
	routes.InitRouter()
}
