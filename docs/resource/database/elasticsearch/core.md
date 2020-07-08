[转自](!https://zq99299.github.io/note-book/elasticsearch-core/)

## core

* 全文搜索, 倒排索引
* Lucene
* Elasticsearch
  * 自动维护数据的分布到多个节点的索引建立、检索请求分布到多个节点的执行
  * 自动维护数据的冗余副本，保证一些机器宕机了，不会丢失任何数据
  * 封装了更多的高级功能, 复杂搜索, 聚合分析全文检索，同义词处理，相关度排名，复杂数据分析，海量数据的近实时处理, 基于地理位置搜索
  * 支持PB级数据
  * 作为传统数据库的补充, 提供了数据库所不能提供的很多功能

https://uzshare.com/view/822075


## 入门案例

* 面向文档的数据格式

### 集群管理
1. 快速查看集群健康状况
   * ```
     GET /_cat/health?v
     参数v: 显示标题头
     unassign：未分配数量
     active_shards_percent：可用 shards 百分比
     ```
    * status 状态
      * green：每个索引的 primary shard 和 replica shard 都是 active 状态的
      * yellow：每个索引的 primary shard 都是 active 状态的，但是部分 replica shard 不是 active 状态，处于不可用的状态
      * red：不是所有索引的 primary shard 都是 active 状态的，部分索引有数据丢失了
2. 查看集群索引
   * ```
    GET /_cat/indices?v
    pri 默认是 5 个，rep 默认是 1 个
     ```

### CRUD
1. 创建索引
  * ```
    PUT test_index
    {
      "mappings": {
        "properties" : {
          "create_time" : {
            "type":   "date",
            "format": "yyyy-MM-dd HH:mm:ss"
            },
          "gender" : {
            "type" : "long"
          },
          "id" : {
            "type" : "long"
          },
          "image_thumbnail" : {
            "type" : "text",
            "fields" : {
              "keyword" : {
                "type" : "keyword",
                "ignore_above" : 256
              }
            }
          },
          "liked_number" : {
            "type" : "long"
          },
          "name" : {
            "type" : "text",
            "fields" : {
              "keyword" : {
                "type" : "keyword",
                "ignore_above" : 256
              }
            }
          },
          "state" : {
            "type" : "long"
          }
        }
      }
    }
    ```

2. 删除索引
   * ```
      DELETE /test_index?pretty
     ```
3. 新增数据
   * ```
      PUT /test_index/_doc/1
      {
        "create_time": "2020-05-30 12:26:25"
      }

      *** resp ***

      {
        "_index" : "test_index",
        "_type" : "_doc",
        "_id" : "4005",  # 数据版本号
        "_version" : 1,
        "result" : "created",
        "_shards" : {
          "total" : 2,  # 总的要写的分片数量
          "successful" : 2,
          "failed" : 0
        },
        "_seq_no" : 6,
        "_primary_term" : 1
      }
     ```

4. 查询数据
   * ```
      GET /test_index/_search
      {
        "query": {
          "match_all": {}
        }
      }
     ```
5. 替换数据
   * ```
      PUT /test_index/_doc/4005
      {
        "create_time": "2020-05-30 14:26:25"
      }
     ```
    * 替换_id 为4005的所有数据
6. 更新数据
   * ```
      
     ```





   * ```
      
     ```
   * ```
      
     ```
   * ```
      
     ```