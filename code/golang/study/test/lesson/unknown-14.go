package main

import (
	"fmt"
	// "sync"
)

// 创建一个 goroutine，与主线程按顺序相互发送信息若干次并打印

func main() {
	main_c, sub_c := make(chan string), make(chan string)
	fin_c := make(chan bool)
	go func() {
		fmt.Println("go")
		sub_c <- "hello, i am sub"
		fmt.Println(<-main_c)
		sub_c <- "How are you?"
		fmt.Println(<-main_c)

		fin_c <- true

	}()
	fmt.Println(<-sub_c)
	main_c <- "hello, i am main"
	fmt.Println(<-sub_c)
	main_c <- "i am fine, thanks!"
	<-fin_c
}
