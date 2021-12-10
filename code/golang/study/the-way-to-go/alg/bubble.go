package alg


func BubbleSort(array []int) ([]int) {
	swap := false
	for i := len(array)-1; i >= 0; i-- {
		for j := 0; j < i; j++ {
			if array[j] > array[j+1]{
				array[j], array[j+1] = array[j+1], array[j]
				swap = true
			}
		}
		if !swap {
			break
		}
	}
	return array
}