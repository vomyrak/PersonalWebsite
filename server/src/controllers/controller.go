package controllers

import (
	"net/http"
	"sync"

	"github.com/gin-gonic/gin"
	"github.com/vomyrak/PersonalServer/src/domains"
)

var (
	mutex        sync.Mutex
	requestCount = 0
)

func Get(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{})
}

func Post(c *gin.Context) {
	var contactForm domains.ContactForm

	// Marshall into JSON
	if err := c.ShouldBindJSON(&contactForm); err != nil {
		c.JSON(http.StatusBadRequest, "Invalid Contact Form Content")
		return
	}

	// TODO: Validate
	if err := contactForm.Validate(); err != nil {
		c.JSON(http.StatusBadRequest, "Invalid Contact Form Content")
	}

	// Update request index
	mutex.Lock()
	_ = requestCount + 1
	requestCount += 1
	mutex.Unlock()

	c.JSON(http.StatusOK, "OK")
}
