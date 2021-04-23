package p7
import "fmt"

func Test1() {
	a := [...]string{"a", "b", "c", "d"}
	for i, b := range a {
		fmt.Println("Array item: ", i, "is", a[i], b)
	}
}