### 安装,卸载

- centos 下卸载 MySQL
- yum remove mysql mysql-server mysql-libs mysql-server;
- find / -name mysql 将找到的相关东西delete掉；
- rpm -qa|grep mysql(查询出来的东东yum remove掉)
- 安装
- yum install mysql mysql-server mysql-libs mysql-server

### 新建数据库

- CREATE DATABASE `huluwa` CHARACTER SET utf8 COLLATE utf8_general_ci
- 新建数据库,并指定编码方式为utf8

### SQL

- 对于InnoDB来说
- 按照效率排序的话，**count(字段) < count(主键id) < count(1) ≈ count(\*)**。所以**建议尽量使用count(\*)**。

#### 数据类型

- varchar
- InnoDB存储引擎的表索引的前缀长度最长是767字节(bytes)
- 你如果需要建索引，就不能超过 767 bytes；utf8编码时 255*3=765bytes ,恰恰是能建索引情况下的最大值。
- 如果像lavavel5.3往后 使用的是utf8mb4编码，默认字符长度则应该是 767除以4向下取整，也就是191。
- varchar(255) 不是最优的字符长度，最优还是应该根据实际需要的来。但是这是一个保证你能少出错的一个很好的默认值


### 索引
- https://mp.weixin.qq.com/s/ifUM69cb_53-sm9yEUyg3w
- https://mp.weixin.qq.com/s/oVpiU16PCHQhHr00G3OK-g