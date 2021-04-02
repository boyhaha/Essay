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
  - 程序正常退出的代码为0, 因异常退出返回非零值

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
  - iota: 自增长

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

- 简短形式, 使用:=赋值
  - 只能用在函数体内, 不能用于全局变量的声明与赋值

- init 函数
  - 变量除了在全局声明中初始化,也可以在init函数中初始化
  - 不能被人为调用, 执行优先级大于main
  - 每个源文件都只能包含一个 init 函数。初始化总是以单线程执行，并且按照包的依赖关系顺序执行
  - 开始执行程序前对数据进行检验或修复, 以保障程序状态的正确性

### 基本类型和运算符

- 基本类型
- bool
- 数字类型
  - int, 
    - int
    - int8（-128 -> 127）, int16（-32768 -> 32767）, int32（-2,147,483,648 -> 2,147,483,647）, int64（-9,223,372,036,854,775,808 -> 9,223,372,036,854,775,807）
    - uint8（0 -> 255）, uint16（0 -> 65,535）, uint32（0 -> 4,294,967,295）, uint64（0 -> 18,446,744,073,709,551,615）
  - float32(小数点后7位), float64(小数点后15位),
  - complex64 (32 位实数和虚数), complex128 (64 位实数和虚数)
  - 也支持基于架构的类型
  - 尽可能使用float64, math包中关于数学运算的函数都会要去接受这个类型
  - 进制
  - 增加前缀0 表示8进制
  - 增加前缀0x表示16进制
  - 复数
    - re+imI
    - 函数 `real(c)` 和 `imag(c)` 可以分别获得相应的实数和虚数部分
    - 推荐使用complex128
- 运算符
  - &&(和) 和 ||(或) 是具有快捷性质的运算符
- 位运算
  - 只能用于整数类型的变量,且需要等长位模式
  - 二元运算符
    - &(与), |(或), ^(异或)
      - 位清除 &^：将指定位置上的值设置为 0。
  - 一元运算符
    - 按位补足, 左移, 右移
- 逻辑运算符
  - ==, !=, <, <=, >, >=,
- 算术运算符
  - `/` 对于整数运算而言，结果依旧为整数
  - 取余运算符(%)只能作用于整数
  - 浮点数除以 0.0 会返回一个无穷尽的结果，使用 +Inf 表示
  - ++ — 只能作为语句, 而非表达式
  - 溢出将会 抛弃超出位数
- 随机数
  - rand
- 字符类型
- 格式化说明符:
  - %d: 格式化整数
    - %0nd: 用于规定输出长度为n的整数
  - %x和%X: 格式化16进制表示的数字
  - %g: 格式化浮点型
    - %n.mg: 用于表示数字 n 并精确到小数点后 m 位, (g也可以使用f/e 代替)
    - %f: 输出浮点数
    - %e: 输出科学计数表示法
  - %v 来表示复数，但当你希望只表示其中的一个部分的时候需要使用 %f
  - %c: 格式化字符
- 优先级
- 类型别名
  - 使用某个类型时,可以起一个别名, 不过重命名的类型不包含原类型所包含的方法
- 字符串
  - 字符串是 UTF-8 字符的一个序列
  - 解释字符串: 使用双引号括起来
  - 非解释字符串: 使用反引号括起来, 支持换行
  - 字符串拼接
    - "a" + "b"
    - strings.Join(), bytes.Buffer(更高效)
  - strings
    - 前缀, 后缀
      - s是否以prefix开头: strings.HasPrefix(s, prefix string) bool
      - s是否以结尾: strings.HasSuffix(s, suffix string) bool
    - 包含关系: strings.Contains(s, substr string) bool
    - 出现位置
      - strings.Index(s, str string) int
        - Index 返回字符串 str 在字符串 s 中的索引（str 的第一个字符的索引），-1 表示字符串 s 不包含字符串 str
      - strings.LastIndex(s, str string) int
        - 最后出现位置的索引（str 的第一个字符的索引），-1 表示字符串 s 不包含字符串 str
      - strings.IndexRune(s string, r rune) int
        - 查询非ASCII编码字符
    - 字符串替换
      - strings.Replace(str, old, new, n) string
        - 若n为 -1 表示替换所有
    - 统计次数
      - strings.Count(s, str string) int
    - 重复字符串. 重复 count 次字符串 s 并返回一个新的字符串
      - strings.Repeat(s, count int) string
    - 大小写
      - strings.ToLower(s) string
      - strings.ToUpper(s) string
    - 修剪字符串
      - strings.TrimSpace(s). 
        - 剔除开头和结尾的空白符号, 也可以剔除指定字符, strings.Trim(s, "cut")
      - TrimLeft / TrimRight
    - 分割字符串
      - strings.Fields(s). 使用1个或多个空白符分割
      - strings.Split(s, sep). 使用指定字符 step 分割
    - 拼接
      - strings.Join(sl []string, sep string) string
    - 从字符串读取内容
      - strings.NewReader(str), 生成 Reader读取字符串内容, 返回指向该Reader的指针
      - Read() 从[]byte 中读取内容
      - ReadByte() 和 ReadRune() 从字符串读取下一个byte或者rune
  - 字符串类型转换
    - strconv
- 指针
  - 提供了控制数据结构的指针的能力；但是，你不能进行指针运算。
  - 一个指针变量可以指向任何一个值的内存地址 
  - 指针的一个高级应用是你可以传递一个变量的引用（如函数的参数），这样不会传递变量的拷贝
    - 减少内存效率, 提高效率
  - 一个空指针的反向引用是不合法

### 5. 控制结构
1. 提高如下结构
   1. if-else 结构
   2. switch 结构
   3. select 结构，用于 channel 的选择
   4. for (range) 结构

### 6. 函数(function)
1. 介绍
   1. Go 函数的功能非常强大，以至于被认为拥有函数式编程语言的多种特性
2. Go 里面有三种类型的函数：
   1. 普通的带有名字的函数
   2. 匿名函数或者lambda函数
   3. 方法（Methods）
3. 不支持函数重载
4. 不支持泛型
5. defer 和追踪(有趣)
6. 内置函数(不需要导入就可以使用)
   1. close: 用于管道通信
   2. len: 返回某个类型的长度
   3. cap: 返回某个类型的最大容量(只能用于切片和map)
   4. copy: 复制切片
   5. append: 连接切片
   6. panic, recover: 均用于错误处理机制
   7. print, println: 底层打印函数, 在部署环境中建议使用fmt包
   8. complex, real imag: 创建和操作复数
7. 递归函数
   1. 自己调用自己
   2. 大量递归会导致程序栈内存分配耗尽
      1. 可以通过channel和goroutine解决
