package p6
import "fmt"

func Test3() {
	for i := 1; i < 30; i++ {
		fmt.Println("%d", fa(i))
	}
}

func fa(i int)(res int) {
	if i == 1{
		res = 1
	} else{
		res = i * fa(i-1)
	}
	return
}