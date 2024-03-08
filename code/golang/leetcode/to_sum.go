package main

func main() {
	var numb = []int{2, 7, 11, 15}
	target := 9
	twoSum(numb, target)
}

func twoSum(nums []int, target int) []int {
	var x_map map[int]int
	x_map = make(map[int]int)
	for i, v := range nums {
		if p, ok := x_map[target-v]; ok {
			return []int{i, p}
		}
		x_map[v] = i
	}
	return []int{}
}
