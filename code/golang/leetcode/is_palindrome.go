package main

import (
	"fmt"
	"strconv"
)

func main() {
	var numb = 121
	rlt := isPalindrome(numb)
	fmt.Println(rlt)
}

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	y := strconv.Itoa(x)
	fmt.Println(y, len(y), len(y)/2)
	for i := 0; i <= len(y)/2; i++ {
		fmt.Println(y[i], y[len(y)-1-i], len(y)/2)
		if y[i] == y[len(y)-i-1] {
			continue
		}
		return false
	}
	return true
}
