(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{480:function(t,v,_){"use strict";_.r(v);var a=_(44),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"基础-05-基本数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础-05-基本数据类型"}},[t._v("#")]),t._v(" 基础 05-基本数据类型")]),t._v(" "),_("p",[_("strong",[t._v("问题")])]),t._v(" "),_("ol",[_("li",[t._v("set，list区别\n"),_("ol",[_("li",[t._v("List 是有序的，可以通过下标访问")]),t._v(" "),_("li",[t._v("Set 是一组无序的，不能重复的元素，可用来做列表去重")])])]),t._v(" "),_("li",[t._v("python list 的数据结构是怎样的\n"),_("ol",[_("li",[t._v("在CPython中，列表被实现为长度可变（指数级）的数组\n"),_("ol",[_("li",[t._v("预先申请的空间大于列表长度")]),t._v(" "),_("li",[t._v("空间占满后会重新申请更大的空间，将原来的数据复制过去")])])]),t._v(" "),_("li",[t._v("由对其它对象的引用组成的连续数组")])])])]),t._v(" "),_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" "),_("strong",[t._v("前言")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("* 有序的数据类型： 字符串，列表，元组\n* 无序的数据类型： 字典，集合\n* 区间问题\n    * randint(a,b)          -> [a, b]\n    * range(a,b)            -> [a,b)\n    * [a:b]（切片操作） -> [a,b)\n")])])]),_("h2",{attrs:{id:"字符串"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" "),_("strong",[t._v("字符串")])]),t._v(" "),_("p",[_("strong",[t._v("常用操作")])]),t._v(" "),_("ol",[_("li",[_("span",{staticStyle:{"background-color":"#ffaaaa"}},[t._v("python 字符串快速逆置")]),t._v(" "),_("ol",[_("li",[_("span",{staticStyle:{"background-color":"#ffaaaa"}},[t._v("print(s[::-1])  # 从后向前，按步长为1进行取值")])])])]),t._v(" "),_("li",[t._v("basestring.")]),t._v(" "),_("li",[t._v('mystr.split(str=" ", maxsplit=2)\n'),_("ol",[_("li",[t._v("以 str 为分隔符切片 mystr，如果 maxsplit有指定值，则仅分隔 maxsplit 个子字符串，结果为列表，len 为 maxsplit + 1")])])]),t._v(" "),_("li",[_("span",{staticStyle:{"background-color":"#ffaaaa"}},[t._v("'str'.join(seq)")]),t._v(" "),_("ol",[_("li",[t._v("以str为分隔符，将seq中的所有元素合并成一个新的字符串")]),t._v(" "),_("li",[t._v("返回值：以分隔符str连接各个元素好生成的字符串")]),t._v(" "),_("li",[t._v("使用 “+” 效率较低，建议使用join")])])]),t._v(" "),_("li",[t._v("查找：\n"),_("ol",[_("li",[t._v('str.find( "" )        返回索引,不存在返回-1')]),t._v(" "),_("li",[t._v("index                  ........,不存在会报异常(ValueError)")])])]),t._v(" "),_("li",[t._v("替换：str.replace(str1, str2, count) count为替换次数")]),t._v(" "),_("li",[t._v("'str'.strip 删除str字符串两端的空白字符")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("                    str='cast'\n                    rel=str.strip(\"ct\")\n                    print(rel)\n")])])]),_("p",[t._v("结果：  as")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('                    my_string = "wwwfewww"\n                    result = my_string.strip("w")\n')])])]),_("p",[t._v("结果: fe")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('                    my_string = "ww wew ww"\n                    result = my_string.strip("w")\n')])])]),_("p",[t._v("结果:  wew (前后有空格)")]),t._v(" "),_("h2",{attrs:{id:"列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表"}},[t._v("#")]),t._v(" "),_("strong",[t._v("列表")])]),t._v(" "),_("ol",[_("li",[t._v('添加元素("增"append, extend, insert)\n'),_("ol",[_("li",[t._v("列表名.insert(index, 数据)：在指定位置插入数据(位置前有空元素会补位)")]),t._v(" "),_("li",[t._v("现有的列表下标是0-4，如果我们要在下标是6的地方插入数据，那个会自动插入到下标为5的地方，也就是插入到最后")])])]),t._v(" "),_("li",[t._v("列表的排序\n"),_("ol",[_("li",[t._v("sort 将list按特定顺序排序，默认从小到大， 参数reverse=True 可以改为倒序，由大到小\n"),_("ol",[_("li",[t._v("sort为永久性排序")]),t._v(" "),_("li",[t._v("内置sorted（），临时排序，不会修改原来数据")])])]),t._v(" "),_("li",[t._v("reverse 方法是将列表逆置。")])])]),t._v(" "),_("li",[t._v("列表的删除")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("func")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("del my_list[2]")]),t._v(" "),_("td",[t._v("删除指定索引的元素")])]),t._v(" "),_("tr",[_("td",[t._v("my_list.pop( )")]),t._v(" "),_("td",[t._v("删除列表最后一个元素,并返回删除的元素")])]),t._v(" "),_("tr",[_("td",[t._v("remove( 元素 )")]),t._v(" "),_("td",[t._v("删除第一个出现的指定元素")])]),t._v(" "),_("tr",[_("td",[t._v("clear( )")]),t._v(" "),_("td",[t._v("清空列表")])]),t._v(" "),_("tr",[_("td"),t._v(" "),_("td")])])]),t._v(" "),_("h2",{attrs:{id:"元组-tuple"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元组-tuple"}},[t._v("#")]),t._v(" "),_("strong",[t._v("元组（Tuple）")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("* 元组的元素不能修改、删除\n* 创建一个有且仅有一个元素的元组，\n    * 格式：  元组名 = （元素1，）\n")])])]),_("ul",[_("li",[t._v("元组的意义： 保证数据安全。")])]),t._v(" "),_("h2",{attrs:{id:"字典-dictionary"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字典-dictionary"}},[t._v("#")]),t._v(" "),_("strong",[t._v("字典（dictionary")])]),t._v(" "),_("ol",[_("li",[_("p",[t._v("字典的key可以是任意数据类型，但不能是可变数据类型，而且不可变的数据类型中某个元素也不能是可变的，")]),t._v(" "),_("ul",[_("li",[t._v("例：（1,2，[1,2]）")])])]),t._v(" "),_("li",[_("p",[t._v("根据键访问值(key唯一)，若键不存在，会报错。")]),t._v(" "),_("ul",[_("li",[t._v("age = info.get('age', 18)")]),t._v(" "),_("li",[t._v("若info中不存在'age'这个键，就返回默认值18，不会对字典做任何操作，若没有返回值，返回None")]),t._v(" "),_("li",[t._v("若info中存在'age'这个键，就返回对应的值")])])]),t._v(" "),_("li",[_("p",[t._v("age = info.setdefault('age', 18)")]),t._v(" "),_("ul",[_("li",[t._v("若info中不存在'age'这个键，就返回默认值18，并把该键值对插入字典中，若没有返回值，返回None")]),t._v(" "),_("li",[t._v("若info中存在'age'这个键，就返回对应的值")])])]),t._v(" "),_("li",[_("p",[t._v("删除字典：")]),t._v(" "),_("ol",[_("li",[t._v("del  info /  info.clear()               删除（清空字典）")]),t._v(" "),_("li",[t._v("del info[key]                           删除指定键值对，key 不存在会报错，")]),t._v(" "),_("li",[t._v("info.pop(key[,default])                 删除指定键值对，key 若不存在,返回default值，不设返回值会报错")]),t._v(" "),_("li",[t._v("popiteam(）                             随机返回并删除字典中的一个键值对")])])]),t._v(" "),_("li",[_("p",[t._v("字典的其他内置函数")])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("func")]),t._v(" "),_("th",[t._v("desc")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("dict.copy()")]),t._v(" "),_("td",[t._v("返回一个字典的浅拷贝")])]),t._v(" "),_("tr",[_("td",[t._v("dict.fromkeys(seq, [val])")]),t._v(" "),_("td",[t._v("创建一个新字典，以序列 seq 中元素做字典的键，val 为字典所有键对应的初始值, 默认为None")])]),t._v(" "),_("tr",[_("td",[t._v("dict.update(dict2)")]),t._v(" "),_("td",[t._v("把字典dict2的键/值对更新到dict里（key相同的话会覆盖之前的value）")])]),t._v(" "),_("tr",[_("td",[t._v("dict.has_key(key)")]),t._v(" "),_("td",[t._v("如果键在字典dict里返回true，否则返回false")])]),t._v(" "),_("tr",[_("td",[t._v("dict.get(key, default=None)")]),t._v(" "),_("td",[t._v("返回指定键的值，如果值不在字典中返回default值")])]),t._v(" "),_("tr",[_("td",[t._v("dict.setdefault(key, default=None)")]),t._v(" "),_("td",[t._v("和get()类似, 但如果键不存在于字典中，将会添加键并将值设为default")])]),t._v(" "),_("tr",[_("td",[t._v("dict.keys()")]),t._v(" "),_("td",[t._v("以列表返回一个字典所有的键")])]),t._v(" "),_("tr",[_("td",[t._v("dict.values()")]),t._v(" "),_("td",[t._v("以列表返回字典中的所有值")])]),t._v(" "),_("tr",[_("td",[t._v("dict.items()")]),t._v(" "),_("td",[t._v('返回列表 [("键", "值").............]')])])])]),t._v(" "),_("h2",{attrs:{id:"集合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[t._v("#")]),t._v(" "),_("strong",[t._v("集合")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("特点")]),t._v(" "),_("ol",[_("li",[t._v("合是无序的，元素唯一，")]),t._v(" "),_("li",[t._v("集合可以保存任意不可变的数据类型")])])]),t._v(" "),_("li",[_("p",[t._v("定义空集合  \n      my_set = set()")]),t._v(" "),_("ul",[_("li",[t._v("set.add(),添加单个任意元素，                                                                              -----》")]),t._v(" "),_("li",[t._v("set.update()，把要传入的元素（字符串）拆分，作为个体（字符）传入集合         -----》")])])]),t._v(" "),_("li",[_("p",[_("span",{staticStyle:{"background-color":"#ffaaaa"}},[t._v("删除元素")])]),t._v(" "),_("ul",[_("li",[t._v("set.remove()          删除集合中的元素，如果有，直接删除，没有会报错。")]),t._v(" "),_("li",[t._v("set.discard()          删除集合中的元素，如果有，直接删除，没有的话不做操作。")]),t._v(" "),_("li",[t._v("set.pop()               随机删除集合中的元素，如果集合中没有元素，会报错。")])])]),t._v(" "),_("li",[_("p",[t._v("交集（&）并集 （ | ） 差集（ - ）对称差集（ ^ ）")])]),t._v(" "),_("li",[_("p",[_("span",{staticStyle:{"background-color":"#ffaaaa"}},[t._v("enumarate() 用于将一个可遍历的数据对象（如列表，元组，字符串等）组合成一个索引序列，同时列出数据和下标，一般用于for循环")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("公共方法")])])])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("运算符")]),t._v(" "),_("th",[t._v("表达式")]),t._v(" "),_("th",[t._v("结果")]),t._v(" "),_("th",[t._v("描述")]),t._v(" "),_("th",[t._v("支持的数据类型")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("+")]),t._v(" "),_("td",[t._v("[2] + [3, 4]")]),t._v(" "),_("td",[t._v("[1, 2, 3, 4]")]),t._v(" "),_("td",[t._v("合并")]),t._v(" "),_("td",[t._v("字符串、列表、元组")])]),t._v(" "),_("tr",[_("td",[t._v("*")]),t._v(" "),_("td",[t._v("['Hi!'] * 4")]),t._v(" "),_("td",[t._v("['Hi!', 'Hi!', 'Hi!', 'Hi!']")]),t._v(" "),_("td",[t._v("复制")]),t._v(" "),_("td",[t._v("字符串、列表、元组")])]),t._v(" "),_("tr",[_("td",[t._v("in")]),t._v(" "),_("td",[t._v("1 in (1, 2, 3)")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("元素是否存在")]),t._v(" "),_("td",[t._v("字符串、列表、元组、字典")])]),t._v(" "),_("tr",[_("td",[t._v("not in")]),t._v(" "),_("td",[t._v("5 not in (1, 2, 3)")]),t._v(" "),_("td",[t._v("True")]),t._v(" "),_("td",[t._v("元素是否不存在")]),t._v(" "),_("td",[t._v("字符串、列表、元组、字典")])])])]),t._v(" "),_("h2",{attrs:{id:"内置函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内置函数"}},[t._v("#")]),t._v(" "),_("strong",[t._v("内置函数")])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("* len(item),\n* max(item),\n* min(item),\n* del(item)\n* len操作字典时，返回的是键值对的个数\n* del有两种用法，一种是del加空格，另一种是del()\n")])])]),_("p",[t._v("del a   /   del( a )")]),t._v(" "),_("ul",[_("li",[t._v("zip( )   将可迭代的对象作为参数，将对象中对应的元素打包成一个个元组，然后返回由这些元组组成的对象，这样做的好处是节约了不少的内存\n"),_("ul",[_("li",[t._v("zip")])])])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v(">>>a = [1,2,3] \n>>> b = [4,5,6]\n>>> c = [4,5,6,7,8] \n>>> zipped = zip(a,b) # 返回一个对象 \n>>> zipped <zip object at 0x103abc288>\n>>> list(zipped) # list() 转换为列表 [(1, 4), (2, 5), (3, 6)] \n>>> list(zip(a,c)) # 元素个数与最短的列表一致 [(1, 4), (2, 5), (3, 6)] \n>>> a1, a2 = zip(*zip(a,b)) # 与 zip 相反，*zip 可理解为解压，返回二维矩阵式 \n>>> list(a1) [1, 2, 3] \n>>> list(a2) [4, 5, 6] \n")])])]),_("h2",{attrs:{id:"字典和列表的不同以及使用字典的目的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字典和列表的不同以及使用字典的目的"}},[t._v("#")]),t._v(" "),_("strong",[t._v("字典和列表的不同以及使用字典的目的")])]),t._v(" "),_("ol",[_("li",[t._v("list是有序的，dict是无序的")]),t._v(" "),_("li",[t._v("list通过索引访问，dict使用key访问")]),t._v(" "),_("li",[t._v("list随着数量的正常增长要想查找元素的时间复杂度为O(n),dict不随数量而增长而变化，时间复杂度为O(1)")]),t._v(" "),_("li",[t._v("dict的占用内存稍比list大，会在1.5倍左右")]),t._v(" "),_("li",[t._v("dict的可读性更高")]),t._v(" "),_("li",[t._v("特征决定用途：list一般可作为队列、堆栈使用，而dict一般作为聚合统计或者快速使用特征访问，可以存储一些有标识性的数据等")])])])}),[],!1,null,null,null);v.default=e.exports}}]);