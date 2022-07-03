package server

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var (
	router = gin.Default()
)

func StartServer() {
	router.Use(cors.Default())
	router.LoadHTMLGlob("public/index.html")
	router.StaticFS("/", http.Dir("public"))
	routeUrls()
	router.Run(":8080")
}
