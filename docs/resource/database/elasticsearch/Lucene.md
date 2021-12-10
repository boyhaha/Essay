# Lucene
## 链接
[Lucene 的实用评分函数](https://www.elastic.co/guide/cn/elasticsearch/guide/current/practical-scoring-function.html)

- 对于多词查询， Lucene 使用 [布尔模型（Boolean model）](https://www.elastic.co/guide/cn/elasticsearch/guide/current/scoring-theory.html#boolean-model) 、 [TF/IDF](https://www.elastic.co/guide/cn/elasticsearch/guide/current/scoring-theory.html#tfidf) 以及 [向量空间模型（vector space model）](https://www.elastic.co/guide/cn/elasticsearch/guide/current/scoring-theory.html#vector-space-model) ，然后将它们组合到单个高效的包里以收集匹配文档并进行评分计算。