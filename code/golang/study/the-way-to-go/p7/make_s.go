package p7

import ("fmt")


func Test4(){
	s := make([]byte, 5)
	fmt.Println("ss", len(s), cap(s))  // 5, 5
	s = s[2:4]
	fmt.Println("ss", len(s), cap(s))  // 2, 3
}