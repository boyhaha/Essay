# 转换

- 查询content.raw

```
s = s.query('term', content__raw='python')
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Search

client = Elasticsearch()

s = Search(using=client, index="my-index") \
    .filter("term", category="search") \
    .query("match", title="python")   \
    .exclude("match", description="beta")

s.aggs.bucket('per_tag', 'terms', field='tags') \
    .metric('max_lines', 'max', field='lines')

response = s.execute()

for hit in response:
    print(hit.meta.score, hit.title)

# 查询所有 
for hit in s.scan():
    hit.to_dict()

for tag in response.aggregations.per_tag.buckets:
    print(tag.key, tag.max_lines.value)
```

[Next ](https://cucurbitbrothers.github.io/Essay/Language/Python/env/)[ Previous](https://cucurbitbrothers.github.io/Essay/Language/Python/base/)