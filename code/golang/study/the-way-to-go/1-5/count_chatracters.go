package main
import (
	"fmt"
	"unicode/utf8"
)

func main() {
	a := "asSASA ddd dsjkdsjs dk"
	fmt.Println("字节: %d", len(a))
	b := utf8.RuneCountInString(a)
	fmt.Println("zz: %d", b)
	a = "asSASA ddd dsjkdsjsこん dk"
	fmt.Println("字节: %d", len(a))
	b = utf8.RuneCountInString(a)
	fmt.Println("zz: %d", b)
	
	var arrAge = [5]int{18, 20, 15, 22, 16}
	c := Pop(arrAge)
	fmt.Println("cc: %d", c)
}


func Pop(st [5]int) int {
    v := 0
    for ix := len(st) - 1; ix >= 0; ix-- {
        if v = st[ix]; v != 0 {
            st[ix] = 0
            return v
        }
    }
	return v
}  