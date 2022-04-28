package alg

import "fmt"

func BubbleSortV2(array []int) []int {
	a_len := len(array)
	swap := false
	for i := a_len - 1; i < a_len; i-- {
		for j := 0; j < i; j++ {
			if array[j] > array[j+1] {
				array[j], array[j+1] = array[j+1], array[j]
				swap = true
			}
		}
		if !swap {
			break
		}
		swap = false
		fmt.Println(i)
	}
	return array
}
