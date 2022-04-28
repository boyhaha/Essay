package main

import "fmt"

const (
	B  float64 = iota
	KB         = 1 << (iota * 10)
	MB
	GB
	TB
	PB
)

func main() {
	// test()
	// g := ""
	// for i := 0; i < 5; i++ {
	// 	g += "G"
	// 	println(g)
	// }
	println(1 << 30)
	fmt.Println(B, KB, MB, TB, PB)
}

// func test() {
// 	i := 0
// 	for { //since there are no checks, this is an infinite loop
// 		if i >= 3 {
// 			break
// 		}
// 		//break out of this for loop when this condition is met
// 		fmt.Println("Value of i is:", i)
// 		i++
// 	}
// 	fmt.Println("A statement just after for loop.")
// }
