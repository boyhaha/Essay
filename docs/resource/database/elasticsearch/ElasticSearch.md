# Elasticsearch
[Elasticsearch中文社区](https://elasticsearch.cn/)
[Elasticsearch中文文档](https://learnku.com/docs/elasticsearch73/7.3)

[Python Elasticsearch Client](https://elasticsearch-py.readthedocs.io/en/master/)

[Elasticsearch 入门教程](http://www.ruanyifeng.com/blog/2017/08/elasticsearch.html)

[Elasticsearch7.1中文文档](https://juejin.im/post/5cf77ef16fb9a07eeb1396df)

# 基础入门

**关于Lucene：**

ApacheLucene将写入索引的所有信息组织成一种倒排索引（Inverted Index）的结构之中，该结构是种将词项映射到文档的数据结构。

其工作方式与传统的关系数据库不同，大致来说倒排索引是面向词项而不是面向文档的。且Lucene索引之中还存储了很多其他的信息，如词向量等等，每个Lucene都是由多个段构成的，每个段只会被创建一次但会被查询多次，段一旦创建就不会再被修改。多个段会在段合并的阶段合并在一起，何时合并由Lucene的内在机制决定，段合并后数量会变少，但是相应的段本身会变大。段合并的过程是非常消耗I/O的，且与之同时会有些不再使用的信息被清理掉。

在Lucene中，将数据转化为倒排索引，将完整串转化为可用于搜索的词项的过程叫做分析。文本分析由分析器（Analyzer）来执行，分析其由分词器（Tokenizer），过滤器（Filter）和字符映射器（Character Mapper）组成，其各个功能显而易见。

除此之外，Lucene有自己的一套完整的查询语言来帮助我们进行搜索和读写。

### Node 和 Cluster

Elasticsearch 本质上是一个分布式数据库，允许多台服务器协同工作，每台服务器可以运行多个 Elasticsearch 实例。

单个 Elasticsearch 实例称为一个节点（Node）。一组节点构成一个集群（Cluster）。

### Index

Elasticsearch 会索引所有字段，经过处理后写入一个反向索引（Inverted Index）。查找数据的时候，直接查找该索引。

所以，Elasticsearch 数据管理的顶层单位就叫做 Index（索引），其实就相当于 MySQL、MongoDB 等里面的数据库的概念。另外值得注意的是，**每个 Index （即数据库）的名字必须是小写**。

```
$ curl --user rdeniro:taxidriver GET 'http://localhost:9200/_cat/indices?v'
```

### Document

Index 里面单条的记录称为 Document（文档）。许多条 Document 构成了一个 Index。

Document 使用 JSON 格式表示，下面是一个例子。

同一个 Index 里面的 Document，不要求有相同的结构（scheme），但是最好保持相同，这样有利于提高搜索效率。

### Type

不同的 Type 应该有相似的结构（Schema），举例来说，id 字段不能在这个组是字符串，在另一个组是数值。这是与关系型数据库的表的一个区别。性质完全不同的数据（比如 products 和 logs）应该存成两个 Index，而不是一个 Index 里面的两个 Type（虽然可以做到）。

根据规划，Elastic 6.x 版只允许每个 Index 包含一个 Type，7.x 版将会彻底移除 Type。

```
$ curl 'localhost:9200/_mapping?pretty=true'
```

### Fields

即字段，每个 Document 都类似一个 JSON 结构，它包含了许多字段，每个字段都有其对应的值，多个字段组成了一个 Document，其实就可以类比 MySQL 数据表中的字段。

在 Elasticsearch 中，文档归属于一种类型（Type），而这些类型存在于索引（Index）中，我们可以画一些简单的对比图来类比传统关系型数据库：

> Relational DB -> Databases -> Tables -> Rows -> Columns
>
> Elasticsearch -> Indices -> Types -> Documents -> Fields

# 状态监控

- 查看所有index

```
curl 'localhost:9200/_cat/indices?v'
```

# 简单搜索

- 删除索引

```
curl -XDELETE http://localhost:9200/twitter 
```

# 深入搜索

- 范围查询

```
# 支持数字, 时间, 字符串(字典顺序)
"range" : {
    "price" : {
        "gte" : 20,
        "lte" : 40
    }
}
```

- 短语查询
- 布尔匹配
- constant_score: 不关心检索词频率TF(Term Frequency) 对搜索结果排序的影响,可以使用它将query/ filter 语句包起来

### 聚合查询

- terms 桶聚合
- size参数规定了最后返回的term个数(默认是10个)
- shard_size参数规定了每个分片上返回的个数
- 如果shard_size小于size，那么分片也会按照size指定的个数计算
- metric

### Reindex

- 把documents从一个index复制到另一个

#### helper.scan

#### scroll

### 分词器

- 不同大版本的安装方式略有差异
- 5.x
- 下载analysis-ik-5.x.zip 文件
- 在 elasticsearch/plugins 下新建文件夹 analysis-ik
- 将 .zip 文件解压到 analysis-ik 文件下
- 重启es
  - 看到 loaded plugin [analysis-ik] 即为成功

### 调优

- 字段相关
- StoreFiled
  - 关闭 _source
  - 部分接口不可用
  - update(更新)
  - update_by_query(先query出符合条件的内容再进行update操作，新增字段，修改字段值都可以满足)
  - reindex(迁移数据, 重建索引)
- DocValues
  - doc_values
  - 影响 sorting, aggregations和scripts
- InvertIndex
  - index
  - 控制倒排索引
- _all
  - 支持整个json全文检索(ES 6.0+以上的版本不再支持_all字段)
  - 7.x 已去掉了该字段
- _field_names
  - 用于exists查询，来确认某个doc里面有无一个字段存在
- 关闭索引
- 一个关闭的索引几乎不占用系统资源。我们可以临时关闭某个索引，在需要时再重新打开该索引。

```
POST my_index/_close
```

### reindex

- 数据迁移(可以跨集群迁移)

```
POST _reindex?slices=5
        {
            "source": {
                "remote": {
                    "host": "http://172.16.0.39:9200"
                },
                "index": "test1",
                "size": 5000,
                "query": {
                    "match": {
                        "title": "elasticsearch"
                    }
                }
            },
            "dest": {
                "index": "test2"
            }
        }
```
  - 设置批量大小：默认为1000
  - 借助scroll的sliced提升写入效率
    - 可以手动指定，或者设置slices设置为auto，auto的含义是：针对单索引，slices大小=分片数；针对多索引，slices=分片的最小值
    - 当slices的数量等于索引中的分片数量时，查询性能最高效。slices大小大于分片数，非但不会提升效率，反而会增加开销。

### 聚合查询

- terms 桶聚合
- size参数规定了最后返回的term个数(默认是10个)
- shard_size参数规定了每个分片上返回的个数
- 如果shard_size小于size，那么分片也会按照size指定的个数计算
- metric

## 别名

- aliases

# Tips
- 查询方式
  - 自定义词典
- 分词方式
  - ik_smart既能满足英文的要求，又更智能更轻量，占用存储最小，所以首推ik_smart；standard对英语支持是最好的，但是对中文是简单暴力每个字建一个反向索引，浪费存储空间而且效果很差；ik_max_word比ik_smart对中文的支持更全面，但是存储上的开销实在太大，不建议使用。
- 修改默认分词器

- 插件安装和卸载
  - ./bin/elasticsearch-plugin install lang-python
  - bin/elasticsearch-plugin remove lang-python


# 常见错误

1. Fielddata is disabled on text fields by default

2. 5.x 之后,text属性字段默认关闭fielddata, 需要手动开启

   1. 使用别的方式: 使用text field 搜索, keyword field 进行聚合分析

      ```console
      PUT my_index
      {
          "mappings": {
              "properties": {
                  "my_field": {
                      "type": "text",
                      "fields": {
                          "keyword": {
                              "type": "keyword"
                          }
                      }
                  }
              }
          }
      }
      ```

   2. 

3. `console      PUT my_index/_mapping      {        "properties": {          "my_field": {             "type":     "text",            "fielddata": true          }        }      }`

4. fielddata_frequency_filter

   1. `POST /test_index/_mapping/my_type     {       "properties": {         "my_field": {           "type": "text",           "fielddata": {              "filter": {               "frequency": {                  "min":              0.01,                  "min_segment_size": 500                 }             }           }         }       }     }`
   2. 可以减少一些内存占用
   3. **min：仅仅加载至少在1%的doc中出现过的term对应的fielddata**
   4. **min_segment_size：少于500 doc的segment不加载fielddata**

5. CircuitBreakingException, [parent] Data too large

6. es 升级后未修改jvm.options 默认堆大小(生产环境1G一般都不够用)

7. [Elasticsearch堆内存](https://blog.csdn.net/laoyang360/article/details/79998974)