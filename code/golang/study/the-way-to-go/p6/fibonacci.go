package p6
import "fmt"


func Test2() {
	for i := 0; i < 10; i++ {
		result := fibonacci(i)
		fmt.Println("index: %d, result%d", i, result)
	}
}

func fibonacci(index int)(res int){
	if index <= 1{
		res = 1
	} else {
		res = fibonacci(index-2) + fibonacci(index-1)
	}
	return
}



func Test2_1() {
	fmt.Println("V2---------")
	v2 := fibonacci_v2()
	for i := 1; i < 10; i++ {
		fmt.Println("index: %d, result%d", i, v2(i))
	}
}

func fibonacci_v2() func(int) int{
	var a, b int
	return func(index int) int {
			if index <= 1{
				a, b = 0, 1
			} else {
				a, b = b, a + b
			}
			return a + b
	}
}