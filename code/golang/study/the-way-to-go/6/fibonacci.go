package main
import "fmt"


func main() {
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