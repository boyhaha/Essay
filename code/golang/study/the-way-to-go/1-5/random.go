package main
import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	for i := 0; i < 10; i++ {
		a := rand.Int()
		fmt.Printf("ss1 %d / ", a)
	}

	fmt.Println()
	for i := 0; i < 10; i++ {
		r := rand.Intn(8)
		fmt.Printf("ss2 %d / ", r)
	}
	fmt.Println()
	fmt.Println()
	timens := int64(time.Now().Nanosecond())
	rand.Seed(timens)
	for i := 0; i < 10; i++ {
		fmt.Printf("ss3 %2.2f / ", 100*rand.Float32())
	}
}