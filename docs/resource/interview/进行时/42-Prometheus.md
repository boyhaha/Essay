# 42-Prometheus

* _Prometheus_
* 特点：
    * 多维数据模型，时间序列由metric名字和K/V标签标识
    * 灵活的查询语言(PromQL)
    * 单机模式，不依赖分布式存储
    * 基于HTTP采用pull方式收集数据
    * 支持push数据到中间件(pushgateway)
    * 通过服务发现或静态配置发现目标
    * 多种图表和仪表盘
* 组件：
    * Prometheus server - 收集和存储时间序列数据
    * client library - 用于client访问server/pushgateway
    * pushgateway - 对于短暂运行的任务，负责接收和缓存时间序列数据，同时也是一个数据源
    * exporter - 各种专用exporter，面向硬件、存储、数据库、HTTP服务等
    * alertmanager - 处理报警
    * 其他各种支持的工具
