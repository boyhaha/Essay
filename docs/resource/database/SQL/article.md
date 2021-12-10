# SQL
## 1. 无限容量数据库架构设计

> [链接](https://mp.weixin.qq.com/s/ad4tpM6cdi9r6vgfbaTzxg?)


## 2. MySQL命名, 设计及使用规范
> [链接](https://cloud.tencent.com/developer/article/1141367)
> [58到家30条军规](<https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&mid=2651959906&idx=1&sn=2cbdc66cfb5b53cf4327a1e0d18d9b4a&chksm=bd2d07be8a5a8ea86dc3c04eced3f411ee5ec207f73d317245e1fefea1628feb037ad71531bc&mpshare=1&scene=23&srcid=02230Q4SXp9mcQe8E4NzZOUB#rd>)
  * 禁止使用属性隐式转换，会导致全表扫描，而不能命中索引
  * 禁止使用负向 查询