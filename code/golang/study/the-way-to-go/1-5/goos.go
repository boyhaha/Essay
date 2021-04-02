package main

import (
	"fmt"
	"runtime"
	// "os"
)

func main() {
	var goos = runtime.GOOS
	fmt.Printf("The operating system is %s\n", goos)
	// path := os.Getenv("PATH")
	println("Path is", "sss")
}