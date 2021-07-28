# 01-Python2.X和Python3.X的区别

* 性能：
    * Python3比Python快（大部分情况下）
    * 启动时间，加密（
* 编码：
    * Python2 默认使用ASCII编码
    * Python3默认使用utf-8编码
* 语法：
    * 去除了<>  ,  全部采用   ！=
    * 整数除法返回浮点数，使用//  得到整数结果
    * 去除print语句，改用print函数，同意的还有exec （执行字符串或者文件中的Python语句，相比eval，可以执行更复杂的语句）
    * 输入函数改变
        * 删除raw_input( )，使用input( )代替。原本的input（）作用消失。
    * 八进制和二进制表示发生变化
    * 新的super（） 可以不传参数
    * 支持 class decorator 类装饰器
* 数据类型
    * 3.x去除了long类型，只存在int，不过类似于long
    * 字符串：
        * 去除了Unicode类型，新增了bytes类型
        * Python 2.X  str    ====  Python3.X bytes
        * Python 2.X  unicode == Python3.X str
        * Python中  str -----》encode ----》bytes
    * 字典
        * .keys()  .items()  .values() 返回迭代器 
        * 使用 in  代替 dict.has_key( )
* 面向对象：
    * 引入抽象基类（Abstract Base Class，ABCs）
        * 只定义，不实现，为子类定义共有的API，类似于java中的接口
    * 容器类和迭代器类被ABCs化
        * list  -----》 java中的 ArrayList
        * set  -----》               HashSet
        * dict -----》               HashMap  /  JS中的Json数组
    * 增加了  @abstractmethod   和   @abstractproperty      两个 decorator
* 异常
    * 捕获异常语法改变，加入as关键字
        * except  Exception，error ------》 except Exception as error
    * 手动抛出异常的方法改变
        * raise Exception（args） 代替 raise Exception Exception，args
* 其他
    * xrange（）改名为range（）返回对象从list变为 range对象
    * file类被废弃
