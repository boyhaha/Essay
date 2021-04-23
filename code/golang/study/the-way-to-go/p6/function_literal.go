package p6
import "fmt"

func Test4(){
	t()
}

func t(){
	for i := 0; i < 4; i++ {
		g := func(i int) {fmt.Printf("%d ", i)}
		g(i)
		fmt.Printf(" - g is of type %T and has value %#v\n", g, g)
	}
}