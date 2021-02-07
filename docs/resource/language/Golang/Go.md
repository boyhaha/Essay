### 引言

- 短小精悍
- 语音特性
- 没有类和继承的概念,通过接口(interface) 来实现多态性
- 静态,强类型
- 支持交叉编译,完全支持 UTF-8
- 提供了海量的并行支持
- 不适合用来开发对实时性要求很高的软件
  - 因为垃圾回收和自动内存分配
- 是一门类型安全和内存安全的编程语言(虽然 Go 语言中仍有指针的存在，但并不允许进行指针运算)

### 格式化代码

- gofmt

- 格式化该源文件,并覆盖原始内容

  - gofmt –w program.go
  - 如果不加 -w 则只会打印格式化后的结果而不重写文件

- 格式化并重写所有go源文件

  - gofmt -w *.go

- 格式化并重写map1目录及其子目录下的所有Go源文件

  - gofmt map1

- 简单的代码重构(替换)

  - \```go # 去掉多余的括号 gofmt -r '(a) -> a' –w *.go

  \# 将源文件中多余的 len(a)去掉 gofmt -r 'a[n:len(a)] -> a[n:]' –w *.go ```

### 生成代码文档

- go doc
- 一般用法
- `go doc package` 获取包的文档注释，例如：`go doc fmt` 会显示使用 `godoc` 生成的 `fmt` 包的文档注释。
- `go doc package/subpackage` 获取子包的文档注释，例如：`go doc container/list`。
- `go doc package function` 获取某个函数在某个包中的文档注释，例如：`go doc fmt Printf` 会显示有关 `fmt.Printf()` 的使用说明。

### 其他工具

- go install
  - 安装go包的工具
- go fix
  - 将你的Go代码从旧的发行版迁移到最新的发行版
- go test
  - 轻量级单元测试框架

### 基本结构和要素

- 可见性规则

- 标识符 以大写字母(任何Unicode编码)开头 ——> public

- 标识符 以小写字母开头 ——> private

- 包的别名

- \```go package main

  import fm "fmt" // alias3

  func main() { fm.Println("hello, world") } ```

- 函数

- `go    func functionName(parameter_list) (return_value_list) {       …    }`

  - parameter_list 的形式为 (param1 type1, param2 type2, …)
  - return_value_list 的形式为 (ret1 type1, ret2 type2, …)

- main 函数是一个可执行程序必须包含的, 一般来说是启动后第一个执行的函数(如果有init() 函数则会先执行该函数). 它没有参数,也没有返回类型

- 类型

- 基本类型:

  - int、float、bool、string

- 结构化:

  - struct、array、slice、map、channel

- 只描述行为

  - interface

- 类型转换

- 不支持隐式转换, 必须显式说明

- 常量

- const

- 只能是基本类型

- iota

- 变量

- var

- \```go // var identifier type var a int var ( b bool str string )

  // var identifier [type] = value var a int = 15

  a := 1 ```

- 声明后会自动赋予它该类型的零值

- 命名规则遵循驼峰命名法(public 需要首字母大写)

- 如果局部变量和全局变量同名, 全局变量会暂时隐藏

- 值类型和引用类型

- 值类型

  - int、float、bool 和 string 这些基本类型都属于值类型; 数组, 结构这些复合类型也是值类型
  - = 是将内存中的值进行了拷贝
  - 值类型的变量的值存储在栈中

- 引用类型

  - 指针(内存地址), slices, maps, channel
  - 同一个引用类型的指针指向的多个字可以是在连续的内存地址中（内存布局是连续的），这也是计算效率最高的一种存储形式；也可以将这些字分散存放在内存中，每个字都指示了下一个字所在的内存地址
  - 被引用的变量存储在堆中, 以便进行垃圾回收,且比栈拥有更大的内存空间

- 打印

- Printf, Println

- Sprintf, 与Printf作用相同,只是会将格式化后的字符串返回

- init 函数

- 变量除了在全局声明中初始化,也可以在init函数中初始化

- 每个源文件都只能包含一个 init 函数。初始化总是以单线程执行，并且按照包的依赖关系顺序执行

- 开始执行程序前对数据进行检验或修复, 以保障程序状态的正确性

### 基本类型和运算符

- 基本类型
- bool
- 数字类型
  - int,
  - float32(小数点后7位), float64(小数点后15位),
  - complex64 (32 位实数和虚数), complex128 (64 位实数和虚数)
  - 也支持基于架构的类型
  - 尽可能使用float64, math包中关于数学运算的函数都会要去接受这个类型
  - 进制
  - 增加前缀0 表示8进制
  - 增加前缀0x表示16进制
  - 使用e 表示10的连乘
  - 复数
  - re+imI
  - 函数 `real(c)` 和 `imag(c)` 可以分别获得相应的实数和虚数部分
  - 推荐使用complex128
- 运算符
- 逻辑运算
  - && 和 || 是具有快捷性质的运算符
- 位运算
  - 只能用于整数类型的变量,且需要等长位模式
- 算术运算符
  - `/` 对于整数运算而言，结果依旧为整数
  - 取余运算符只能作用于整数
  - ++ — 只能作为语句, 而非表达式
  - 溢出将会 抛弃超出位数
- 随机数
  - rand
- 优先级
- 类型别名
- 使用某个类型是,可以起一个别名