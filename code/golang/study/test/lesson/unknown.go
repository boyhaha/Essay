package main

import "fmt"
import "sort"

func main() {
	m := map[int]string{1: "a", 2: "b", 3: "c"}
	s := make([]int, len(m))
	c := 0
	for i := range m {
		s[c] = i
		c += 1
	}
	sort.Ints(s)
	fmt.Println(m)
	fmt.Println(s)

	m1 := map[int]string{1: "a", 2: "b", 3: "c", 4: "d", 5: "e"}
	m2 := make(map[string]int, len(m))
	for k, v := range m1 {
		m2[v] = k
	}
	fmt.Println(m1)
	fmt.Println(m2)
}
