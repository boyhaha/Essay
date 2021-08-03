(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{395:function(t,a,s){"use strict";s.r(a);var n=s(44),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"十大排序算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#十大排序算法"}},[t._v("#")]),t._v(" 十大排序算法")]),t._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),s("ol",[s("li",[t._v("排序的稳定性\n"),s("ol",[s("li",[t._v("在待排序序列中, 若多个相同关键字, 经过排序后, 他们之间的相对次序保持不变, 该算法是稳定的, 否则称为不稳定的\n"),s("ol",[s("li",[t._v("如果只是简单的进行数字的排序, 那么稳定性毫无意义")]),t._v(" "),s("li",[t._v("只有要排序的内容是一个复杂的对象的多个数字属性, 且原本的初始顺序存在意义, 那么才需要在二次排序的基础上保持原有排序的顺序. 例如: 一组原本按照价格高低排序的对象，如今需要按照销量高低排序，使用稳定性算法，可以使得想同销量的对象依旧保持着价格高低的排序展现，只有销量不同的才会重新排序")])])]),t._v(" "),s("li",[t._v("不稳定算法\n"),s("ol",[s("li",[t._v("快速排序, 堆排序, 希尔排序, 直接选择排序")])])]),t._v(" "),s("li",[t._v("稳定算法\n"),s("ol",[s("li",[t._v("冒泡排序, 基数排序, 归并排序, 直接插入排序, 折半插入排序, 归并排序")])])])])])]),t._v(" "),s("h3",{attrs:{id:"_1-冒泡排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-冒泡排序"}},[t._v("#")]),t._v(" 1. 冒泡排序")]),t._v(" "),s("ol",[s("li",[t._v("重复走访要排序的数列, 一次比较两个元素, 如果顺序错误就把他们交换")]),t._v(" "),s("li",[t._v('算法的由来: 越小的元素会经由交换慢慢 "浮" 到数列的顶端')]),t._v(" "),s("li",[t._v("算法描述:\n"),s("ol",[s("li",[t._v("比较相邻元素. 如果第一个比第二个大, 就交换它们")]),t._v(" "),s("li",[t._v("对每一对相邻元素做同样的工作, 从开始第一对到结尾一对, 这样最后的元素就是最大的")]),t._v(" "),s("li",[t._v("针对所有的元素重复以上的步骤, 除了最后一个")]),t._v(" "),s("li",[t._v("重复1-3步骤, 直到排序完成")])])]),t._v(" "),s("li",[t._v("代码示例\n"),s("ol",[s("li",[t._v("Python\n"),s("ul",[s("li",[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bubble_sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""冒泡排序"""')]),t._v("\n       length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          swap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否交换标志")]),t._v("\n          end "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                   array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                   swap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" swap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" array\n")])])])])])]),t._v(" "),s("li",[t._v("Golang\n"),s("ul",[s("li",[s("div",{staticClass:"language-golang extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" package alg\n func BubbleSort(array []int) ([]int) {\n    swap := false\n    for i := len(array)-1; i >= 0; i-- {\n       for j := 0; j < i; j++ {\n          if array[j] > array[j+1]{\n             array[j], array[j+1] = array[j+1], array[j]\n             swap = true\n          }\n       }\n       if !swap {\n          break\n       }\n    }\n    return array\n }\n")])])])])])])])]),t._v(" "),s("li",[t._v("复杂度:\n"),s("ol",[s("li",[t._v("数据完全有序是, 为O(n). 其他情况下, 几乎总是 O(n2)")])])]),t._v(" "),s("li",[t._v("稳定排序")]),t._v(" "),s("li",[t._v("适用场景: 算法复杂度高, 适合小数据排序, 不适合大数据排序")])]),t._v(" "),s("h3",{attrs:{id:"_2-快速排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速排序"}},[t._v("#")]),t._v(" 2. 快速排序")]),t._v(" "),s("ol",[s("li",[t._v('从数列中挑出一个元素, 称为"基准"(pivot)')]),t._v(" "),s("li",[t._v("分区: 所有比基准值小的元素摆放在基准前面, 比基准值大的放在基准后面(相同的数可以放在任何一边)")]),t._v(" "),s("li",[t._v("递归的把小于基准值元素的子数列和大于基准值元素的子数列排序")]),t._v(" "),s("li",[t._v("代码示例\n"),s("ol",[s("li",[t._v("Python\n"),s("ul",[s("li",[s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quick_sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""算法导论: 快速排序"""')]),t._v("\n       high "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" high "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" low "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" high"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" partition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          quick_sort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          quick_sort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" array\n\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("partition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       pivot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" low\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pivot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 利用额外空间")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不用进行排序")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr\n       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          pivot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          less "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" pivot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          great "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pivot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" quickSort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("less"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pivot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" quickSort"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("great"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])]),t._v(" "),s("li",[t._v("Golang\n"),s("ul",[s("li",[s("div",{staticClass:"language-golang extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(' package alg\n\n import (\n    "fmt"\n )\n\n\n func QuickSort(array []int) ([]int){\n    Quick(array, 0, len(array) - 1)\n    return array\n }\n\n func Quick(array []int, low int, high int){\n    if low < high{\n       var pivot int\n       pivot = Partition(array, low, high)\n       Quick(array, low, pivot - 1)\n       Quick(array, pivot + 1, high)\n    }\n }\n\n func Partition(array []int, low int, high int) (int){\n    pivot := array[low]\n    index := low\n    for i := 0; i < high; i++{\n       if array[i] < pivot{\n          index++\n          fmt.Println(index, i)\n          array[i], array[index] = array[index], array[i]\n       }\n    }\n    array[low], array[index] = array[index], array[low]\n    return index\n }\n\n')])])])])])])])])]),t._v(" "),s("h3",{attrs:{id:"_3-归并排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-归并排序"}},[t._v("#")]),t._v(" 3. 归并排序")])])}),[],!1,null,null,null);a.default=r.exports}}]);