# 45-Fast DFS

FastDFS 是用 c 语言编写的一款开源的分布式文件系统。 FastDFS 为互联网量身定制， 充分考虑了冗余备份、负载均衡、线性扩容等机制，并注重高可用、高性能等指标，使用 FastDFS 很容易搭建一套高性能的文件服务器集群提供文件上传、下载等服务

FastDFS 架构包括 **Tracker server** 和 **Storage server**。客户端请求 Tracker server 进行文件上传、下载，通过 Tracker server 调度最终由 Storage server 完成文件上传和下载

* **Tracker server**
* **Storage server**

* **Tracker**
* **Storage**

![FastDFS结构.png](image/FastDFS结构.png)

![FastDFS文件上传流程.png](image/FastDFS文件上传流程.png)

file_id： 文件索引信息包括:组名，虚拟磁盘路径，数据两级目录，文件名
