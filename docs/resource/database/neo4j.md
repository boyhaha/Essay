# Neo4j

1. [性能优化](!https://zhuanlan.zhihu.com/p/57768956)
2. 数据导入导出
      ```
        neo4j-admin  dump --database=graph.db --to=graph.db.dump

        neo4j-admin load --from=graph.db.dump --database=graph.db --force
      ```
3. 常见语句
   1. > match (n) where id(n) > 189450  DETACH  delete n
   2. > match (n) return  distinct n._language,count(n) as total, count(n)
   3. label
      1. > call db.labels();
      2. > match (n:oldLabel) remove n:oldLabel set n:newLabel
   4. 属性
      1. > call db.propertyKeys
      2. > MATCH (n:`机场`) RETURN properties(n)
      3. > MATCH (n { name: 'M3 Stuart' }) SET n.重量 = '46 吨' RETURN n
      4. > MATCH (n { name: 'M3 Stuart' }) REMOVE n.速度 RETURN n
   5. 关系
      1. > call db.relationshipTypes
      2. > match(n)-[r:知道]->(m) create(n)-[r2:认识]->(m) set r2=r with r delete r
   6. 节点
      1. CREATE (n:Person{name:‘ZJ’}) return n