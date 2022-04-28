package main

import "fmt"

type MyInt int

func main() {
	var a MyInt = 0
	a.Increase()
	fmt.Println(a)
}

func (mi *MyInt) Increase() {
	var co MyInt = 100
	fmt.Println("sss")
	*mi += co
}
