package server

import "github.com/vomyrak/PersonalServer/src/controllers"

func routeUrls() {
	router.POST("/", controllers.Post)
}
