package p7
import "fmt"

func Test3() {
	array := [3]float64{7.0, 8.5, 9.1}
	x := Sum(&array) // Note the explicit address-of operator
	// to pass a pointer to the array
	fmt.Printf("The sum of the array is: %f", x)
}

func Sum(a *[3]float64) (sum float64) {
	fmt.Println("aaa", a, *a)
	fmt.Printf("bb The sum of the array is: %p", a)
	fmt.Println()

	for _, v := range *a { // derefencing *a to get back to the array is not necessary!
		sum += v
	}
	return
}