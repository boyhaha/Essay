(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{365:function(t,v,s){"use strict";s.r(v);var l=s(42),e=Object(l.a)({},(function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"安装-卸载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-卸载"}},[t._v("#")]),t._v(" 安装,卸载")]),t._v(" "),s("ul",[s("li",[t._v("centos 下卸载 MySQL")]),t._v(" "),s("li",[t._v("yum remove mysql mysql-server mysql-libs mysql-server;")]),t._v(" "),s("li",[t._v("find / -name mysql 将找到的相关东西delete掉；")]),t._v(" "),s("li",[t._v("rpm -qa|grep mysql(查询出来的东东yum remove掉)")]),t._v(" "),s("li",[t._v("安装")]),t._v(" "),s("li",[t._v("yum install mysql mysql-server mysql-libs mysql-server")])]),t._v(" "),s("h3",{attrs:{id:"新建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建数据库"}},[t._v("#")]),t._v(" 新建数据库")]),t._v(" "),s("ul",[s("li",[t._v("CREATE DATABASE "),s("code",[t._v("huluwa")]),t._v(" CHARACTER SET utf8 COLLATE utf8_general_ci")]),t._v(" "),s("li",[t._v("新建数据库,并指定编码方式为utf8")])]),t._v(" "),s("h3",{attrs:{id:"sql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),s("ul",[s("li",[t._v("对于InnoDB来说")]),t._v(" "),s("li",[t._v("按照效率排序的话，"),s("strong",[t._v("count(字段) < count(主键id) < count(1) ≈ count(*)")]),t._v("。所以"),s("strong",[t._v("建议尽量使用count(*)")]),t._v("。")])]),t._v(" "),s("h4",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),s("ul",[s("li",[t._v("varchar")]),t._v(" "),s("li",[t._v("InnoDB存储引擎的表索引的前缀长度最长是767字节(bytes)")]),t._v(" "),s("li",[t._v("你如果需要建索引，就不能超过 767 bytes；utf8编码时 255*3=765bytes ,恰恰是能建索引情况下的最大值。")]),t._v(" "),s("li",[t._v("如果像lavavel5.3往后 使用的是utf8mb4编码，默认字符长度则应该是 767除以4向下取整，也就是191。")]),t._v(" "),s("li",[t._v("varchar(255) 不是最优的字符长度，最优还是应该根据实际需要的来。但是这是一个保证你能少出错的一个很好的默认值")])])])}),[],!1,null,null,null);v.default=e.exports}}]);