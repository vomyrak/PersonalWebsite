package logger

import (
	"go.uber.org/zap"
)

var (
	Sugar *zap.SugaredLogger
)

func init() {
	Sugar = zap.NewExample().Sugar()
}

func Info(args ...interface{}) {
	Sugar.Info(args)
}

func Error(args ...interface{}) {
	Sugar.Info(args)
}

func Sync() {
	Sugar.Sync()
}
