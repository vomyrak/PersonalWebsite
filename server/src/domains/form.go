package domains

import (
	"errors"
	"net/mail"
)

type ContactForm struct {
	Name    string
	Email   string
	Subject string
	Content string
}

func (form *ContactForm) Validate() error {
	_, err := mail.ParseAddress(form.Email)
	if err != nil {
		return errors.New("Please provide a valid email address")
	}
	return nil
}
