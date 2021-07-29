(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{411:function(l,_,v){"use strict";v.r(_);var i=v(44),t=Object(i.a)({},(function(){var l=this,_=l.$createElement,v=l._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[v("h1",{attrs:{id:"_03-概念问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_03-概念问题"}},[l._v("#")]),l._v(" 03-概念问题")]),l._v(" "),v("ol",[v("li",[l._v("描述super、pass、yield、lamba关键字的理解\n"),v("ol",[v("li",[l._v("super：在继承中充当父类的代理对象，在多继承中，super的调用顺序是MRO的顺序。\n"),v("ul",[v("li",[l._v("经典类采用深度优先搜索")]),l._v(" "),v("li",[l._v("新式类采用C3算法\n"),v("ul",[v("li",[l._v("本地优先级")]),l._v(" "),v("li",[l._v("单调性")])])])])]),l._v(" "),v("li",[l._v("pass：空语句，什么也不做，在特别的时候用来保证格式或是语义的完整性。")]),l._v(" "),v("li",[l._v("yield：\n"),v("ol",[v("li",[l._v("保存当前运行状态（断点），然后暂停执行，即将函数挂起")]),l._v(" "),v("li",[l._v("将yield关键字后面表达式的值作为返回值返回，此时可以理解为起到了return的作用，当使用next()、send()函数让函数从断点处继续执行，即唤醒函数。")]),l._v(" "),v("li",[l._v("使用了yield的函数被称为生成器")])])]),l._v(" "),v("li",[l._v("lambda：定义匿名函数")])])]),l._v(" "),v("li",[l._v("闭包\n"),v("ul",[v("li",[l._v("在一个内部函数中，对外部作用域的变量进行引用，(并且一般外部函数的返回值为内部函数)，那么内部函数就被认为是闭包")]),l._v(" "),v("li",[l._v("作用域\n"),v("ul",[v("li",[l._v("嵌套作用域主要是为了实现闭包")]),l._v(" "),v("li",[l._v("局部 –> 闭包函数外的函数 –> 全局 –> 內建作用域")])])])])]),l._v(" "),v("li",[l._v("list，dict，tuple，set 深入理解\n"),v("ol",[v("li",[l._v("list： 本质是顺序表，只不过每次表的扩容都是指数级，所以动态增删数据时，表并不会频繁改变物理结构，同时受益于顺序表遍历的高效性（通过角标配合表头物理地址，计算目标元素的位置），使得python的list综合性能比较优秀")]),l._v(" "),v("li",[l._v("tuple： 本质上就是顺序表，不可修改不可扩容，只读")]),l._v(" "),v("li",[l._v("dict：本质上是散列表，每个元素存储位置的角标，是由key经过hash算法和其他机制，动态生成的，\n"),v("ol",[v("li",[l._v("即key通过hash散列，生成value应该存储的位置，然后再去存储这个value；\n"),v("ol",[v("li",[l._v("若发生冲突，采用开放寻址法中的 二次探测法：")]),l._v(" "),v("li",[l._v("开放寻址法包括：\n"),v("ol",[v("li",[l._v("线性探测：当发生散列冲突后，从当前位置开始，依次往后找，直到找到或到达空闲位置为止（这种方法需要注意删除时不能直接将值设为空，查找时遇到空会结束查找，使得后面的数据无法被探测到）")]),l._v(" "),v("li",[l._v("二次探测：线性探测的步长为1，二次探测步长为原来的二次方")]),l._v(" "),v("li",[l._v("双重散列：使用一组散列函数，第一组散列冲突了换第二组……")])])])])]),l._v(" "),v("li",[l._v("所以dict的查询时间复杂度是o（1）；")]),l._v(" "),v("li",[l._v("因此，dict的key只能为可hash的对象，即不可变类型；")]),l._v(" "),v("li",[v("a",{attrs:{href:"!https://zhuanlan.zhihu.com/p/73426505"}},[l._v("更多")])])])]),l._v(" "),v("li",[l._v("set：底层为散列表\n"),v("ol",[v("li",[l._v("存储之前要通过哈希函数来计算key的值，得到存储索引")]),l._v(" "),v("li",[l._v("通过__hash__和__eq__来实现对每个元素的hash散列，判断hash值是否一致")])])])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);