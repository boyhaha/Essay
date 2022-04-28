package main

import (
	"fmt"
	"io"
	"os"
	// "strings"
)

var (
	data []byte
	err  error
)

func main() {
	data, err = ReadFrom(os.Stdin, 20)
	// fmt.Println(data)
	// data, err = ReadFrom(strings.NewReader("abs"), 12)

	fmt.Printf("读取到的数据是：%s\n", data)
}

func ReadFrom(reader io.Reader, num int) ([]byte, error) {
	p := make([]byte, num)
	n, err := reader.Read(p)
	if n > 0 {
		return p[:n], nil
	}
	return p, err
}
