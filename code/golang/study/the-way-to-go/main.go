package main

import (
    "fmt"
    // "./p6"
    // "./p7"
    "./alg"
)

func main()  {
    // # 第六章
    fmt.Println("main executed")
    // p6.Test1()
    // p6.Test2()
    // p6.Test2_1()
	// p6.Test4()

    // # 第七章: 数组与切片
    // p7.Test1()
    // p7.Test2()
    // p7.Test3()
    // p7.Test4()

    // 排序
    var array = []int{1, 3, 4, 12, 2, 11, 29}
    var rlt = make([]int, 7)
    // rlt = alg.BubbleSort(array[:])
    rlt = alg.QuickSort(array[:])
    fmt.Println(rlt)
}