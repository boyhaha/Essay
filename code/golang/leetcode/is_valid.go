package main

import "fmt"

func main() {
	s := "()"
	fmt.Println(isValid(s))
}

func isValid(s string) bool {
	var dict map[string]string
	dict = map[string]string{"{": "}", "[": "]", "(": ")", "?": "?"}
	length := len(s)
	var bs []string = make([]string, 1, length)
	bs[0] = "?"
	for i := 0; i < length; i++ {
		_, ok := dict[string(s[i])]
		if ok {
			bs = append(bs, string(s[i]))
		} else if dict[bs[len(bs)-1]] == string(s[i]) {
			bs = bs[:len(bs)-1]
			continue
		} else {
			return false
		}
	}
	return len(bs) == 1
}
