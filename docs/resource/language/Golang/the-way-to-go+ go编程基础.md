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
  - %c: 格式化字符
  - %t: bool
  - %T: a Go-syntax representation of the type of the value
  - %p: channel, pointer
  - %v %v the value in a default format
    - when printing structs, the plus flag (%+v) adds field names
    - %#v a Go-syntax representation of the value
    - 可以用来表示复数，但当你希望只表示其中的一个部分的时候需要使用 %f
  - 
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
      1. 支持初始化表达式（可以说并行方式）
         1. 初始化语句中的变量为block级别，同时会隐藏外部同名变量
      2. 支持单行模式
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
8. 将函数作为参数
9. 闭包
   1.  匿名函数
   2.  匿名函数同样被称之为闭包（函数式语言的术语）：它们被允许调用定义在其它环境下的变量。
   3.  闭包可使得某个函数捕捉到一些外部状态，例如：函数被创建时的状态。
   4.  另一种表示方式为：一个闭包继承了函数所声明时的作用域。这种状态（作用域内的变量）都被共享到闭包的环境中，因此这些变量可以在闭包中被操作，直到被销毁
   5.  闭包经常被用作包装函数：它们会预先定义好 1 个或多个参数以用于包装
   6.  另一个不错的应用就是使用闭包来完成更加简洁的错误检查
   7.  应用
       1.  将函数作为返回值(工厂函数)
       2.  调试, 打印函数当前执行位置,
       3.  计算耗时
10. 通过内存缓存提升性能
    1.  在使用计算成本相对昂贵的函数时非常有用
    2.  还可以应用于纯函数中，即相同输入必定获得相同输出的函数。

### 7. 数组与切片
1. 数组
   1. 概念
      1. 具有相同 唯一类型 的一组已编号且长度固定的数据项序列（这是一种同构的数据结构）；这种类型可以是任意的原始类型例如整型、字符串或者自定义类型。数组长度必须是一个常量表达式，并且必须是一个非负整数。数组长度也是数组类型的一部分，所以[5]int和[10]int是属于不同类型的。
      2. 如果我们想让数组元素类型为任意类型的话可以使用空接口作为类型
      3. 数组长度最大为 **2Gb**
      4. 数组是**可变**的
      5. 一种值类型（不像 C/C++ 中是指向首元素的指针）
   2. 多维数组
      1. 内部数组总是长度相同的。Go 语言的多维数组是矩形式的（唯一的例外是切片的数组)
   3. 将数组传递给函数
      1. 避免把一个大数组传递给函数会消耗很多内存
         1. 传递数组的指针(不常用)
         2. 使用数组的切片
2. 切片
   1. 是对数组一个连续片段的引用（该数组我们称之为相关数组，通常是匿名的），所以切片是一个引用类型
      1. 由起始和终止索引标识的一些项的子集。需要注意的是，终止索引标识的项不包括在切片内
      2. 可索引的, 并且可以由 len() 函数获取长度
      3. 长度可变的数组, 切片长度可以在运行时修改, 最小为0, 最大为相关数组长度
      4. cap(): 计算切片容量. 从 切片 s[0] 到数组末尾的数组长度
         1. 对于切片s: 0 <= len(s) <= cap(s)
      5. 多个切片的相关数组如果相同, 则可以共享数据. 数组实际上是切片的构建块
      6. 切片只能向后移动, s2 = s2[-1:] 会导致编译错误. 不能被重新分片以获取数组的前一个元素
      7. 绝对**不要用指针指向 slice**。切片本身已经是一个引用类型，所以它本身就是一个指针!!
   2. 使用make创建切片
      1.  func make([]T, len, cap), cap是可选参数
   3.  new() 和 make() 的区别
       1.  new 函数分配内存, make 函数初始化
       2.  new(T) 为每个新的类型T分配一片内存，初始化为 0 并且返回类型为*T的内存地址：这种方法 **返回一个指向类型为 T，值为 0 的地址的指针**，它适用于值类型如数组和结构体; 它相当于 &T{}
       3.  make(T) **返回一个类型为 T 的初始值**，它只适用于3种内建的引用类型：切片、map 和 channel
   4.  如何理解new、make、slice、map、channel的关系
       1.  slice、map以及channel都是golang内建的一种引用类型，三者在内存中存在多个组成部分， 需要对内存组成部分初始化后才能使用，而make就是对三者进行初始化的一种操作方式
       2.  new 获取的是存储指定变量内存地址的一个变量，对于变量内部结构并不会执行相应的初始化操作， 所以slice、map、channel需要make进行初始化并获取对应的内存地址，而非new简单的获取内存地址
   5.  多维分片
       1.  由一维组合成高维, 长度可以任意动态变化
       2.  内层的切片必须单独分配(通过make函数)
   6.  bytes包
       1.  []byte
       2.  bytes 包和字符串包十分类似
       3.  var buffer bytes.Buffer, 提供 Read 和 Write 方法
       4.  串联字符串
           1.  通过 buffer.WriteString(s) 方法将字符串 s 追加到后面，最后再通过 buffer.String() 方法转换为 string
           2.  比使用 += 要更节省内存和 CPU
3.  For-range 结构
    1.  ```
            for ix, value := range slice1 {
                    ...
            }
        ```
        1.  ix 为数组或切片的索引, value是在该索引位置的值(一个拷贝, 不能用来修改该索引位置的值)
4.  切片的复制与追加
    1.  增加切片容量
        1.  func append(s[]T, x ...T) []T
            1.  追加的元素需要和原切片元素类型相同
            2.  如果s容量不足, append会分配新的切片来保证已有切片元素和新增元素的存储. 因此, 返回的切片可能已经指向一个不同的相关数组了
            3.  x = append(x, y...)
                1.  将切片 y 追加到切片 x 后面
                2.  ... 将y打散
        2.  func copy(dst, src []T) in
            1.  将类型为 T 的切片从源地址 src 拷贝到目标地址 dst，覆盖 dst 的相关元素，并且返回拷贝的元素个数

### 8. Map
1. 声明、初始化和 make
   1. 概念
      1. 引用类型. 
      2. 声明: var map1 map[keytype]valuetype
         1. key的类型
            1. 可以使用 == 或 != 操作符比较的类型. 比如string, int, float.
            2. 数组, 切片, 结构体不能作为key,(只包含内建类型的struct可以作为key)
      3. 不需要知道map长度, 可以动态增长
      4. 传递给函数的代价很小, 无论存储了多少数据
      5. 比从数组和切片的索引中直接读取慢100倍

### 9. 包（package）
### 10. 结构（struct）与方法（method）
### 11. 接口（interface）与反射（reflection）



## Go 编程基础