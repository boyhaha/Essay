(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{383:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://elasticsearch.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch中文社区"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch权威指南"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://elasticsearch-py.readthedocs.io/en/master/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python Elasticsearch Client"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/08/elasticsearch.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch 入门教程"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5cf77ef16fb9a07eeb1396df",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch7.1中文文档"),a("OutboundLink")],1)]),e._v(" "),a("h1",{attrs:{id:"基础入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础入门"}},[e._v("#")]),e._v(" 基础入门")]),e._v(" "),a("p",[a("strong",[e._v("关于Lucene：")])]),e._v(" "),a("p",[e._v("ApacheLucene将写入索引的所有信息组织成一种倒排索引（Inverted Index）的结构之中，该结构是种将词项映射到文档的数据结构。")]),e._v(" "),a("p",[e._v("其工作方式与传统的关系数据库不同，大致来说倒排索引是面向词项而不是面向文档的。且Lucene索引之中还存储了很多其他的信息，如词向量等等，每个Lucene都是由多个段构成的，每个段只会被创建一次但会被查询多次，段一旦创建就不会再被修改。多个段会在段合并的阶段合并在一起，何时合并由Lucene的内在机制决定，段合并后数量会变少，但是相应的段本身会变大。段合并的过程是非常消耗I/O的，且与之同时会有些不再使用的信息被清理掉。")]),e._v(" "),a("p",[e._v("在Lucene中，将数据转化为倒排索引，将完整串转化为可用于搜索的词项的过程叫做分析。文本分析由分析器（Analyzer）来执行，分析其由分词器（Tokenizer），过滤器（Filter）和字符映射器（Character Mapper）组成，其各个功能显而易见。")]),e._v(" "),a("p",[e._v("除此之外，Lucene有自己的一套完整的查询语言来帮助我们进行搜索和读写。")]),e._v(" "),a("h3",{attrs:{id:"node-和-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-和-cluster"}},[e._v("#")]),e._v(" Node 和 Cluster")]),e._v(" "),a("p",[e._v("Elasticsearch 本质上是一个分布式数据库，允许多台服务器协同工作，每台服务器可以运行多个 Elasticsearch 实例。")]),e._v(" "),a("p",[e._v("单个 Elasticsearch 实例称为一个节点（Node）。一组节点构成一个集群（Cluster）。")]),e._v(" "),a("h3",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),a("p",[e._v("Elasticsearch 会索引所有字段，经过处理后写入一个反向索引（Inverted Index）。查找数据的时候，直接查找该索引。")]),e._v(" "),a("p",[e._v("所以，Elasticsearch 数据管理的顶层单位就叫做 Index（索引），其实就相当于 MySQL、MongoDB 等里面的数据库的概念。另外值得注意的是，"),a("strong",[e._v("每个 Index （即数据库）的名字必须是小写")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ curl --user rdeniro:taxidriver GET 'http://localhost:9200/_cat/indices?v'\n")])])]),a("h3",{attrs:{id:"document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[e._v("#")]),e._v(" Document")]),e._v(" "),a("p",[e._v("Index 里面单条的记录称为 Document（文档）。许多条 Document 构成了一个 Index。")]),e._v(" "),a("p",[e._v("Document 使用 JSON 格式表示，下面是一个例子。")]),e._v(" "),a("p",[e._v("同一个 Index 里面的 Document，不要求有相同的结构（scheme），但是最好保持相同，这样有利于提高搜索效率。")]),e._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[e._v("#")]),e._v(" Type")]),e._v(" "),a("p",[e._v("不同的 Type 应该有相似的结构（Schema），举例来说，id 字段不能在这个组是字符串，在另一个组是数值。这是与关系型数据库的表的一个区别。性质完全不同的数据（比如 products 和 logs）应该存成两个 Index，而不是一个 Index 里面的两个 Type（虽然可以做到）。")]),e._v(" "),a("p",[e._v("根据规划，Elastic 6.x 版只允许每个 Index 包含一个 Type，7.x 版将会彻底移除 Type。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ curl 'localhost:9200/_mapping?pretty=true'\n")])])]),a("h3",{attrs:{id:"fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fields"}},[e._v("#")]),e._v(" Fields")]),e._v(" "),a("p",[e._v("即字段，每个 Document 都类似一个 JSON 结构，它包含了许多字段，每个字段都有其对应的值，多个字段组成了一个 Document，其实就可以类比 MySQL 数据表中的字段。")]),e._v(" "),a("p",[e._v("在 Elasticsearch 中，文档归属于一种类型（Type），而这些类型存在于索引（Index）中，我们可以画一些简单的对比图来类比传统关系型数据库：")]),e._v(" "),a("blockquote",[a("p",[e._v("Relational DB -> Databases -> Tables -> Rows -> Columns")]),e._v(" "),a("p",[e._v("Elasticsearch -> Indices -> Types -> Documents -> Fields")])]),e._v(" "),a("h1",{attrs:{id:"状态监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态监控"}},[e._v("#")]),e._v(" 状态监控")]),e._v(" "),a("ul",[a("li",[e._v("查看所有index")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl 'localhost:9200/_cat/indices?v'\n")])])]),a("h1",{attrs:{id:"简单搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单搜索"}},[e._v("#")]),e._v(" 简单搜索")]),e._v(" "),a("ul",[a("li",[e._v("删除索引")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -XDELETE http://localhost:9200/twitter \n")])])]),a("h1",{attrs:{id:"深入搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入搜索"}},[e._v("#")]),e._v(" 深入搜索")]),e._v(" "),a("ul",[a("li",[e._v("范围查询")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# 支持数字, 时间, 字符串(字典顺序)\n"range" : {\n    "price" : {\n        "gte" : 20,\n        "lte" : 40\n    }\n}\n')])])]),a("ul",[a("li",[e._v("短语查询")]),e._v(" "),a("li",[e._v("布尔匹配")]),e._v(" "),a("li",[e._v("constant_score: 不关心检索词频率TF(Term Frequency) 对搜索结果排序的影响,可以使用它将query/ filter 语句包起来")])]),e._v(" "),a("h3",{attrs:{id:"聚合查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合查询"}},[e._v("#")]),e._v(" 聚合查询")]),e._v(" "),a("ul",[a("li",[e._v("terms 桶聚合")]),e._v(" "),a("li",[e._v("size参数规定了最后返回的term个数(默认是10个)")]),e._v(" "),a("li",[e._v("shard_size参数规定了每个分片上返回的个数")]),e._v(" "),a("li",[e._v("如果shard_size小于size，那么分片也会按照size指定的个数计算")]),e._v(" "),a("li",[e._v("metric")])]),e._v(" "),a("h3",{attrs:{id:"reindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reindex"}},[e._v("#")]),e._v(" Reindex")]),e._v(" "),a("ul",[a("li",[e._v("把documents从一个index复制到另一个")])]),e._v(" "),a("h4",{attrs:{id:"helper-scan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-scan"}},[e._v("#")]),e._v(" helper.scan")]),e._v(" "),a("h4",{attrs:{id:"scroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scroll"}},[e._v("#")]),e._v(" scroll")]),e._v(" "),a("h3",{attrs:{id:"分词器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分词器"}},[e._v("#")]),e._v(" 分词器")]),e._v(" "),a("ul",[a("li",[e._v("不同大版本的安装方式略有差异")]),e._v(" "),a("li",[e._v("5.x")]),e._v(" "),a("li",[e._v("下载analysis-ik-5.x.zip 文件")]),e._v(" "),a("li",[e._v("在 elasticsearch/plugins 下新建文件夹 analysis-ik")]),e._v(" "),a("li",[e._v("将 .zip 文件解压到 analysis-ik 文件下")]),e._v(" "),a("li",[e._v("重启es\n"),a("ul",[a("li",[e._v("看到 loaded plugin [analysis-ik] 即为成功")])])])]),e._v(" "),a("h3",{attrs:{id:"调优"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调优"}},[e._v("#")]),e._v(" 调优")]),e._v(" "),a("ul",[a("li",[e._v("字段相关")]),e._v(" "),a("li",[e._v("StoreFiled\n"),a("ul",[a("li",[e._v("关闭 _source")]),e._v(" "),a("li",[e._v("部分接口不可用")]),e._v(" "),a("li",[e._v("update(更新)")]),e._v(" "),a("li",[e._v("update_by_query(先query出符合条件的内容再进行update操作，新增字段，修改字段值都可以满足)")]),e._v(" "),a("li",[e._v("reindex(迁移数据, 重建索引)")])])]),e._v(" "),a("li",[e._v("DocValues\n"),a("ul",[a("li",[e._v("doc_values")]),e._v(" "),a("li",[e._v("影响 sorting, aggregations和scripts")])])]),e._v(" "),a("li",[e._v("InvertIndex\n"),a("ul",[a("li",[e._v("index")]),e._v(" "),a("li",[e._v("控制倒排索引")])])]),e._v(" "),a("li",[e._v("_all\n"),a("ul",[a("li",[e._v("支持整个json全文检索(ES 6.0+以上的版本不再支持_all字段)")]),e._v(" "),a("li",[e._v("7.x 已去掉了该字段")])])]),e._v(" "),a("li",[e._v("_field_names\n"),a("ul",[a("li",[e._v("用于exists查询，来确认某个doc里面有无一个字段存在")])])]),e._v(" "),a("li",[e._v("关闭索引")]),e._v(" "),a("li",[e._v("一个关闭的索引几乎不占用系统资源。我们可以临时关闭某个索引，在需要时再重新打开该索引。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("POST my_index/_close\n")])])]),a("h3",{attrs:{id:"reindex-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reindex-2"}},[e._v("#")]),e._v(" reindex")]),e._v(" "),a("ul",[a("li",[e._v("数据迁移(可以跨集群迁移)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('POST _reindex\n        {\n            "source": {\n                "remote": {\n                    "host": "http://172.16.0.39:9200"\n                },\n                "index": "test1",\n                "query": {\n                    "match": {\n                        "title": "elasticsearch"\n                    }\n                }\n            },\n            "dest": {\n                "index": "test2"\n            }\n        }\n')])])]),a("h3",{attrs:{id:"聚合查询-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合查询-2"}},[e._v("#")]),e._v(" 聚合查询")]),e._v(" "),a("ul",[a("li",[e._v("terms 桶聚合")]),e._v(" "),a("li",[e._v("size参数规定了最后返回的term个数(默认是10个)")]),e._v(" "),a("li",[e._v("shard_size参数规定了每个分片上返回的个数")]),e._v(" "),a("li",[e._v("如果shard_size小于size，那么分片也会按照size指定的个数计算")]),e._v(" "),a("li",[e._v("metric")])]),e._v(" "),a("h2",{attrs:{id:"别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[e._v("#")]),e._v(" 别名")]),e._v(" "),a("ul",[a("li",[e._v("aliases")])]),e._v(" "),a("h1",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[e._v("#")]),e._v(" Tips")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("查询方式")]),e._v(" "),a("ul",[a("li",[e._v("自定义词典")])])]),e._v(" "),a("li",[a("p",[e._v("分词方式")]),e._v(" "),a("ul",[a("li",[e._v("ik_smart既能满足英文的要求，又更智能更轻量，占用存储最小，所以首推ik_smart；standard对英语支持是最好的，但是对中文是简单暴力每个字建一个反向索引，浪费存储空间而且效果很差；ik_max_word比ik_smart对中文的支持更全面，但是存储上的开销实在太大，不建议使用。")])])]),e._v(" "),a("li",[a("p",[e._v("修改默认分词器")])]),e._v(" "),a("li",[a("p",[e._v("插件安装和卸载")]),e._v(" "),a("ul",[a("li",[e._v("./bin/elasticsearch-plugin install lang-python")]),e._v(" "),a("li",[e._v("bin/elasticsearch-plugin remove lang-python")])])])]),e._v(" "),a("h1",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[e._v("#")]),e._v(" 常见错误")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Fielddata is disabled on text fields by default")])]),e._v(" "),a("li",[a("p",[e._v("5.x 之后,text属性字段默认关闭fielddata, 需要手动开启")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("使用别的方式: 使用text field 搜索, keyword field 进行聚合分析")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PUT my_index\n{\n    "mappings": {\n        "properties": {\n            "my_field": {\n                "type": "text",\n                "fields": {\n                    "keyword": {\n                        "type": "keyword"\n                    }\n                }\n            }\n        }\n    }\n}\n')])])])]),e._v(" "),a("li")])]),e._v(" "),a("li",[a("p",[a("code",[e._v('console PUT my_index/_mapping { "properties": { "my_field": { "type": "text", "fielddata": true } } }')])])]),e._v(" "),a("li",[a("p",[e._v("fielddata_frequency_filter")]),e._v(" "),a("ol",[a("li",[a("code",[e._v('POST /test_index/_mapping/my_type { "properties": { "my_field": { "type": "text", "fielddata": { "filter": { "frequency": { "min": 0.01, "min_segment_size": 500 } } } } } }')])]),e._v(" "),a("li",[e._v("可以减少一些内存占用")]),e._v(" "),a("li",[a("strong",[e._v("min：仅仅加载至少在1%的doc中出现过的term对应的fielddata")])]),e._v(" "),a("li",[a("strong",[e._v("min_segment_size：少于500 doc的segment不加载fielddata")])])])]),e._v(" "),a("li",[a("p",[e._v("CircuitBreakingException, [parent] Data too large")])]),e._v(" "),a("li",[a("p",[e._v("es 升级后未修改jvm.options 默认堆大小(生产环境1G一般都不够用)")])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/laoyang360/article/details/79998974",target:"_blank",rel:"noopener noreferrer"}},[e._v("Elasticsearch堆内存"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=r.exports}}]);