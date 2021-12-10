package main
import (
	"fmt"
	"strconv"
)

func main() {
	a := 1e9
	fmt.Println("a is %s", int(a))
	fmt.Println("a is %s", a)
	var b float64 = 0.5212
	println("f rlt", strconv.FormatFloat(b, 'f', 2, 64))
	println("b rlt", strconv.FormatFloat(b, 'b', 2, 64))
	println("e rlt", strconv.FormatFloat(b, 'e', 2, 64))
	println("E rlt", strconv.FormatFloat(b, 'E', 2, 64))
	println("g rlt", strconv.FormatFloat(b, 'g', 2, 64))
}