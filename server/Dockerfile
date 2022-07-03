FROM golang:1.18

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY src /app/src
COPY public /app/public

RUN go build -v -o app ./src

CMD ["./app"]