(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{482:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("ul",[s("li",[s("ul",[s("li",[s("h3",{attrs:{id:"数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[t._v("#")]),t._v(" 数字")])]),t._v(" "),s("li",[t._v("无穷\n"),s("ul",[s("li",[t._v("float('inf') 表示正无穷\n"),s("ul",[s("li",[t._v("-float('inf') 或 float('-inf') 表示负无穷")]),t._v(" "),s("li",[t._v("inf 可写为 Inf")]),t._v(" "),s("li",[t._v("正无穷与负无穷相加会返回一个 NaN 结果")])])]),t._v(" "),s("li",[t._v("math.isinf()\n"),s("ul",[s("li",[t._v("a + b  // nan")]),t._v(" "),s("li",[t._v("math.isnan()")])])])])])])]),t._v(" "),s("li",[s("ul",[s("li",[s("h3",{attrs:{id:"字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001431954588961d6b6f51000ca4279a3415ce14ed9d709000",target:"_blank",rel:"noopener noreferrer"}},[t._v("base64"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("使用64个字符表示任意二进制数据")]),t._v(" "),s("li",[t._v("basestring")]),t._v(" "),s("li",[t._v("basestring. str和unicode的父类，也是抽象类，不能被调用和实例化")]),t._v(" "),s("li",[t._v("Shuffle")]),t._v(" "),s("li",[t._v("random.shuffle (lst )\n"),s("ul",[s("li",[t._v("随机排序")])])]),t._v(" "),s("li",[t._v("json")]),t._v(" "),s("li",[t._v("json.loads()\n"),s("ul",[s("li",[t._v("标准的JSON语法中,不支持单引号,属性或者属性的值都必须是双括号括起来")]),t._v(" "),s("li",[t._v("同时不支持转换Unicode对象")])])])]),t._v(" "),s("h3",{attrs:{id:"魔术方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#魔术方法"}},[t._v("#")]),t._v(" 魔术方法")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("_getattr_(self,attr)\n\n触发时机：获取不存在的对象成员时触发\n    参数：1、接收当前对象的self，2、获取成员名称的字符串\n    返回值： 必须有值\n    作用：为访问不存在的属性设置值\n    注意：_getattribute_()无论何时都会在_getattr_()之前触发，触发了_getattribute_()有返回值就不会在触发_getattr_()了\n    \n    \n    _getattribute_(self,attr)\n    \n    触发时机：使用对象成员时触发，无论成员是否存在\n    参数：1、接收当前对象的self，2、获取成员名称的字符串\n    返回值： 必须有值\n    作用：在具有封装操作（私有化时），为程序开部分访问权限使用\n")])])]),s("h3",{attrs:{id:"类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[t._v("#")]),t._v(" 类")]),t._v(" "),s("ul",[s("li",[t._v("supper")]),t._v(" "),s("li",[t._v("多继承中统一继承顺序，（MRO C3线性算法）确保父类不会被调用两次")])]),t._v(" "),s("h3",{attrs:{id:"执行参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行参数"}},[t._v("#")]),t._v(" 执行参数")]),t._v(" "),s("ul",[s("li",[t._v("argparse")]),t._v(" "),s("li",[t._v("CLI")])]),t._v(" "),s("h3",{attrs:{id:"时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间"}},[t._v("#")]),t._v(" 时间")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("时间戳")])]),t._v(" "),s("li",[s("p",[t._v("time.time() 十位时间戳， 以秒为单位")])]),t._v(" "),s("li",[s("p",[t._v("时间戳转换为datetime")])]),t._v(" "),s("li",[s("p",[t._v("datetime.datetime.fromtimestamp(timeStamp)")])]),t._v(" "),s("li",[s("p",[t._v("获取UTC时间ISO格式")])]),t._v(" "),s("li",[s("p",[t._v("datetime.datetime.now().isoformat()")])]),t._v(" "),s("li",[s("p",[t._v("时间字符串转换为时间戳")])]),t._v(" "),s("li",[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-03-10 18:26:27.531"')]),t._v("\n  d "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datetime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strptime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%Y-%m-%d %H:%M:%S.%f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timetuple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  timeStamp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mktime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeStamp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    \n")])])])]),t._v(" "),s("li",[s("p",[t._v("时间加减")])]),t._v(" "),s("li",[s("p",[t._v("datetime.timedelta(days=1)")])])]),t._v(" "),s("h3",{attrs:{id:"脚本参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本参数"}},[t._v("#")]),t._v(" 脚本参数")]),t._v(" "),s("ul",[s("li",[t._v("argparse")]),t._v(" "),s("li",[t._v("positional arguments 必选参数")])]),t._v(" "),s("h3",{attrs:{id:"线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),s("ul",[s("li",[t._v("优先使用Queue模块的 "),s("code",[t._v("Queue")]),t._v(" 数据类型作为线程间的数据通信方式")]),t._v(" "),s("li",[t._v("Codition 条件变量")]),t._v(" "),s("li",[t._v("提供与Lock类似的acquire, release. 还有 wait, notify, notify_all")])]),t._v(" "),s("h3",{attrs:{id:"正则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则"}},[t._v("#")]),t._v(" 正则")]),t._v(" "),s("ul",[s("li",[t._v("POSIX")]),t._v(" "),s("li",[t._v("PCRE")]),t._v(" "),s("li",[t._v("https://liujiacai.net/blog/2014/12/07/regexp-favors/")])]),t._v(" "),s("h4",{attrs:{id:"path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[t._v("#")]),t._v(" path")]),t._v(" "),s("ul",[s("li",[t._v("os.getcwd()")]),t._v(" "),s("li",[t._v("os.path.abspath(os.curdir)")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# 获取当前文件夹\nos.path.dirname(__file__)\n\n# h获取绝对路径\nos.path.dirname(os.path.realpath(__file__))\n\n# ****\nos.path.abspath(os.path.join(os.getcwd(), ".."))\n')])])]),s("h3",{attrs:{id:"itertools模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#itertools模块"}},[t._v("#")]),t._v(" itertools模块")]),t._v(" "),s("ul",[s("li",[t._v("groupby")])]),t._v(" "),s("h3",{attrs:{id:"解压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压缩"}},[t._v("#")]),t._v(" 解压缩")]),t._v(" "),s("ul",[s("li",[t._v("type")]),t._v(" "),s("li",[t._v("gz： 即gzip。通常仅仅能压缩一个文件。与tar结合起来就能够实现先打包，再压缩。")]),t._v(" "),s("li",[t._v("tar： linux系统下的打包工具。仅仅打包。不压缩")]),t._v(" "),s("li",[t._v("tgz：即tar.gz。先用tar打包，然后再用gz压缩得到的文件")]),t._v(" "),s("li",[t._v("zip： 不同于gzip。尽管使用相似的算法，能够打包压缩多个文件。只是分别压缩文件。压缩率低于tar。")]),t._v(" "),s("li",[t._v("rar：打包压缩文件。最初用于DOS，基于window操作系统。")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gzip\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tarfile\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" zipfile\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rarfile\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gz")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为gz一般仅仅压缩一个文件，全部常与其它打包工具一起工作。比方能够先用tar打包为XXX.tar,然后在压缩为XXX.tar.gz")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压gz，事实上就是读出当中的单一文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("un_gz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""ungz zip file"""')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#获取文件的名称，去掉gz")]),t._v("\n    f_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".gz"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    g_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gzip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GzipFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建gzip对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"w+"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#gzip对象用read()打开后，写入open()建立的文件里。")]),t._v("\n    g_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#关闭gzip对象")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# XXX.tar.gz解压后得到XXX.tar，还要进一步解压出来。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注：tgz与tar.gz是同样的格式，老版本号DOS扩展名最多三个字符，故用tgz表示。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为这里有多个文件，我们先读取全部文件名称。然后解压。例如以下：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注：tgz文件与tar文件同样的解压方法。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("un_tar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# untar zip file"""')]),t._v("\n    tar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tarfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    names "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getnames"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mkdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#因为解压后是很多文件，预先建立同名目录")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        tar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zip")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 与tar类似，先读取多个文件名称，然后解压。例如以下：")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("un_zip")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""unzip zip file"""')]),t._v("\n    zip_file "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" zipfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ZipFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mkdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" names "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" zip_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("namelist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        zip_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    zip_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rar")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 由于rar通常为window下使用，须要额外的Python包rarfile。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可用地址： http://sourceforge.net/projects/rarfile.berlios/files/rarfile-2.4.tar.gz/download")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压到Python安装文件夹的/Scripts/文件夹下，在当前窗体打开命令行,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入Python setup.py install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装完毕。")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("un_rar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""unrar zip file"""')]),t._v("\n    rar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rarfile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RarFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pass")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mkdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chdir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_files"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    rar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extractall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    rar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\ninputname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icons.zip"')]),t._v("\nun_zip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inputname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# un_gz(inputname)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# un_rar(inputname)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# un_tar(inputname)")]),t._v("\n")])])])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);