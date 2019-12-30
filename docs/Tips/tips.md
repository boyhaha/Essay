- 查询方式
  - 自定义词典
- 分词方式
  - ik_smart既能满足英文的要求，又更智能更轻量，占用存储最小，所以首推ik_smart；standard对英语支持是最好的，但是对中文是简单暴力每个字建一个反向索引，浪费存储空间而且效果很差；ik_max_word比ik_smart对中文的支持更全面，但是存储上的开销实在太大，不建议使用。
- 修改默认分词器
  - `json    POST /chat_record/C2C/_mapping    {      "properties": {          "content": {              "type": "text",              "analyzer": "ik_smart",              "search_analyzer": "ik_smart"          }      }        }`
- 插件安装和卸载
  - ./bin/elasticsearch-plugin install lang-python
  - bin/elasticsearch-plugin remove lang-python

### tips

- 看一下 统计任务生成的文件