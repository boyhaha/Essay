package main

import (
	"fmt"
)

func main() {
	month := 11
	switch {
		case month < 3:
			fmt.Println("春")
		case month < 6:
			fmt.Println("夏")
		case month < 9:
			fmt.Println("秋")
		case month < 12:
			fmt.Println("冬")
	}
}