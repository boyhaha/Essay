package alg

import (
	"fmt"
)


func QuickSort(array []int) ([]int){
	Quick(array, 0, len(array) - 1)
	return array
}

func Quick(array []int, low int, high int){
	if low < high{
		var pivot int
		pivot = Partition(array, low, high)
		Quick(array, low, pivot - 1)
		Quick(array, pivot + 1, high)
	}
}

func Partition(array []int, low int, high int) (int){
	pivot := array[low]
	index := low
	for i := 0; i < high; i++{
		if array[i] < pivot{
			index++
			fmt.Println(index, i)
			array[i], array[index] = array[index], array[i]
		}
	}
	array[low], array[index] = array[index], array[low]
	return index
}
