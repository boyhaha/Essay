package main

import (
	"fmt"
	"reflect"
)

// 定义一个结构，通过反射来打印其信息，并调用方法
type Parser struct {
	Type string
	File
}

type File struct {
	FileName string
	Path     string
}

func (p Parser) Work(count int) int {
	fmt.Printf("%s is %s. parsed %d. \n", p.FileName, p.Type, count)
	return count
}

func main() {
	fmt.Println("start")
	image_parser := Parser{Type: "ImageParser", File: File{"水面舰艇", "../alan/file"}}
	count := image_parser.Work(100)
	fmt.Println(count)

	t := reflect.TypeOf(image_parser)
	v := reflect.ValueOf(image_parser)
	for i := 0; i < t.NumField(); i++ {
		fmt.Println(t.Field(i), v.Field(i).Interface())
	}

	method := v.MethodByName("Work")
	args := []reflect.Value{reflect.ValueOf(89)}
	b := method.Call(args)
	fmt.Println(b, b[0].Interface())

}
