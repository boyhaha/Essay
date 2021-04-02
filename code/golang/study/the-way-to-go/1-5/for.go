package main

import "fmt"

func main() {
	for i := 1; i <= 9; i++ {
		for j := 1; j <= i; j++ {
			fmt.Printf("%d * %d = %d ", i, j, i*j)
		}
		fmt.Println("")
	}
}

func setZeroes(matrix [][]int) {
	row_len := len(matrix[0])
	col_len := len(matrix)
	row_flag := false
	col_flag := false
	for i := 0; i < row_len; i++ {
		if matrix[0][i] == 0 {
			row_flag = true
			break
		}
	}
	for j := 0; j < col_len; j++ {
		if matrix[j][0] == 0 {
			col_flag = true
			break
		}
	}

	for x := 1; x < row_len; x++ {
		for y := 1; y < col_len; y++ {
			if matrix[y][x] == 0 {
				matrix[0][x] = 0
				matrix[y][0] = 0
			}
		}
	}
	for x := 1; x < row_len; x++ {
		for y := 1; y < col_len; y++ {
			if matrix[y][0] == 0 || matrix[0][x] == 0 {
				matrix[y][x] = 0
			}
		}
	}
	if col_flag {
		for r := 0; r < col_len; r++ {
			matrix[r][0] = 0
		}
	}
	if row_flag {
		for s := 0; s < row_len; s++ {
			matrix[0][s] = 0
		}
	}
}
