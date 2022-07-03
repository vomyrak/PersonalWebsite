package main

import (
	"github.com/vomyrak/PersonalServer/src/logger"
	"github.com/vomyrak/PersonalServer/src/server"
)

func main() {
	server.StartServer()
	defer logger.Sync()
}
