package p7
import "fmt"

func Test2() {
	var arr1 = new([5]int)
	// var arr2 [5]int
	arr2 := arr1
	arr2[2] = 100
	fmt.Println(arr1)
	fmt.Println(arr2)
}