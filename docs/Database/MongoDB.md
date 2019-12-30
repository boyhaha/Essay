## 0.数据库介绍：

- 数据的存储位置：
- 内存：存取速度快，不能长期保存，容量小
- 外存储器：存取速度慢，能长期保存数据，容量大
- 外存储器的存储形式：文件存储，数据库存储

```
文件管理阶段（word，excel，音频，视频）
    优点：数据可以长期保存
         存储容量大
         使用比较简单

    缺点：数据冗余大，数据一致性差，完整性维持困难
         查找修改不方便

数据库管理阶段
    优点：数据可以长期保存
         存储容量大
         数据组织结构好
         冗余度小
         容易扩充
         方便程序自动处理
         查找修改效率高

    缺点：难度和专业度相对文件要求较高
```

- 数据库的几个概念：

```
数据：能够输入到计算机并被识别和处理的信息集合
数据库：是按照数据结构组织、存储和管理的仓库，是在数据库管理系统管理和控制下存放在一定介质上的数据集合
数据库管理系统：管理数据库的软件，用于按照一定的方法建立，使用，维护数据库结构内容
数据库系统：由数据库，数据库管理系统，开发工具等共同构成的一个集合概念
```

------

## 1.数据库分类：

- 关系型数据库

```
采用关系模型来组织数据库的结构的数据库, 如：
Oracle  DB2  SQLServer  MySql  等数据库
SqLite(python提供标准化模块，小巧，多用于嵌入式设备)

优点：容易理解
     使用方便，通过sql语句操作，而sql语句是非常成熟的
     易于维护，完整性好，数据一致性高
     通用化程度高，使用SQL语句，技术成熟，可以进行外联操作

缺点：无法很好满足高并发的需求，每次数据操作都需要执行sql语句，对sql进行解析，导致高并发下读写性能不足
     针对海量数据的爆发，性能不足，因为关系型数据库每一步操作几乎都需要加锁
     扩展型不足，当数据量达到一定程度的时候不方便扩展
```

- 非关系型数据库（NoSQL ---> not only sql）

```
优点：高并发下，读写能力强
     支持分布式存储，易于拓展
     弱化数据结构，让数据结构简单

缺点：缺少join 等复杂的操作
     通用性差
     结构灵活也需要更灵活的操作，容易混乱，没有标准的语句
```

> 面试要求：能够描述关系型数据库和非关系型数据库的优缺点

- Nosql适用情况

```
1、数据模型简单
2、对数据一致性要求低
3、对并发处理要求高
4、对数据库扩展由需求
5、可以比较方便的以键值方式映射数据值
```

- 非关系型数据库分类

```
键值存储数据库
    Redis， Oracle BDB， Tokyo

文档型数据库（是键值型数据库的升级版）
    MongoDB， CouchDB

列存储数据库
    HBase

图形数据库
```

> 要求：知道非关系型数据库分为哪几类，mongodb是哪类的

- MongoDB和关系型数据库的概念对比

```
mysql          mongodb        含义
database       database       数据库
table          collection     表 / 集合
row            document       行、记录 / 文档
column         field          列、字段 / 域
index          index          索引
primary key    primary key    主键

在mongo中：数据库包含多个集合
          集合包含多条文档
          文档中标明域及域对应的值
```

------

## 2.MongoDB

- 介绍：

```
1、分布式的Nosql
2、由C++编写
3、是文档型数据库，支持的数据格式松散，类似于字典（Bson）
4、最类似于关系型数据库的非关系数据库，应用广泛
```

- 特点：

```
1、高性能，易部署，存储方便
2、支持的查询操作相对其他Nosql要丰富
3、支持的Bson数据格式包含数据类型比较全面
4、支持众多语言的编程接口（ruby、python、c++、c#、php）
5、有很好的扩展性
```

------

## 3.MongoDB 安装

- Ubuntu 系统：

```
sudo apt-get install mysql-server   # mysql 安装
sodo apt-get updata                 # 更新软件源
sodo apt-get install mongodb        # 安装mongodb

默认安装路径：/var/lib/mongodb
```

- 手动安装(Linux)：

```
1、下载对应版本的mongodb包
2、将压缩包放到某个目录下（/opt  或  /usr/local）
3、解压压缩包：tar -xvf mongo-linux-x86......-3.4.10.tgz
4、解压后将解压文件夹中的bin目录添加到环境变量，bin中是mongo的相关命令
5、cd /ect       sudo vi rc.local
    或        
   cd /ect       sudo vi bash.bashrc

   在 exit 0 前加入
   PATH=$PATH:/绝对路径/bin
   export PATH
6、reboot 重启
```

- Mac 系统：（推荐使用 homebrew 安装）

```
brew install mongodb
```

- centos 7

```
# 安装
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/

# 卸载
# 停止
sudo service mongod stop
# 移除MongoDB包
sudo yum erase $(rpm -qa | grep mongodb-org)
# 删除数据文件及日志文件
sudo rm -r /var/log/mongodb
```

------

## 4.启动mongodb 服务

- Linux 系统

```
mongod --dbpath /XX/YY    指定数据库路径
       --port 端口号       指定占用的端口（默认端口为 27017 端口）
```

- Mac 系统

```
brew services start mongodb    # 启动
brew services stop mongodb     # 停止
brew services restart mongodb  # 重启
```

- 启动mongo shell

```
mongo    进入mongo shell 模式
quit()   退出mongo shell
```

> 注：mongo shell下支持JavaScript代码

- 数据库的备份和恢复（在终端中输入）

```
备份：mongodump -h dbhost -d dbname -o dbdir
实例：mongodump -h 127.0.0.1 -d stu -o python

恢复：mongorestore -h 127.0.0.1:27017 -d dbname <path>
实例：mongorestore -h 127.0.0.1:27017 -d student python/stu
```

- 数据库的检测

```
mongostat
insert每秒插入次数 query查找 update更新 delete删除

mongotop
检测每个数据库的读写时长
```

------

## 5.库的管理

- 数据库的创建

```
use databasename

实例：创建一个名字为stu的数据库
> use stu
```

> use 并不会直接创建出数据库，当向数据库中插入数据时数据库才会被真正创建 , use 同时还有在多个数据库直接切换的功能

- 查看数据库：

```
实例：显示当前系统中的数据库
> show dbs
```

> db：是一个全局量，表示当前正在use的数据库。如果没有进行任何use操作，则表示test（系统自动创建）

- 数据库命名规则

```
数据库的名字可以是满足以下条件的任意 utf-8 字符串
    1、不能是空字符串
    2、不能含有：空格(' ')  点('.')  '/'  '\'  '\0'
    3、应全部小写
    4、不要超过64字节
    5、不要使用 admin local config 这三个名字（系统已经定义）
```

> admin：用来存储用户和权限的, local：不会被复制，只能用于本台服务器访问, config：分片处理的时候，保存分片信息

- 删除数据库

```
实例：删除db所代表的数据库
> db.dropDatabase()
```

------

## 6.集合的管理

- 创建集合1

```
db.createCollection('集合名称')

实例：创建一个名字为class的空集合
> use stu
> db.createCollection('class')

命名规则：
    1、不能为空字符串
    2、不能含有'\0'
    3、不能以'system.'开头。(是系统的保留集合前缀)
    4、集合名称不要和保留字重名，不要包含'$'
```

- 创建集合2:

```
当向一个集合中存入一条文档，则集合会被自动创建，这是更加常用的方法
db.collect_name.insert()

实例：自动创建class 这个集合
> db.class.insert({'name':'lucy', 'age':15, 'sex':'w'})
```

- 查看当前`use`的数据库中的所有集合

```
> show collections/tables
```

- 修改集合名称

```
db.collectionName.renameCollection(newName)

实例：
> db.class.renameCollection('class1')
```

- 删除集合

```
db.collectionName.drop()

实例：删除class1集合
> db.class1.drop()
```

------

## 7.文档介绍

> 集合中包含多个文档，集合实际就是文档的集合

- 同一集合中文档的设计原则：

```
同一类文档应当集中存储，便于管理
集合中可以使用不同格式的文档
集合中集中存储格式类似的文档，可以提高访问效率
```

- 文档中对键的要求

```
1、一般来说是 utf-8格式的字符串
2、键中不能有'\0'，不能是空字符
3、通常不会用 . 和 $
4、一般以_开头的键都是系统的保留键，所以尽量不用下划线开头
```

- 文档中值的要求：

```
mongodb 中值是bson格式的数据是json格式进化版，支持的数据类型如下：
字符串         utf-8 格式的字符串均为合法
整型           32位整型
布尔           真 假
浮点型         存储小数
Arrays        列表或数组
Timestamp     时间戳
Object        内部文档
Null          空值
Symbol        同字符串，多用于存储特殊字符
Date          日期时间
ObjectId      objectid字串
Binary data   二进制数据
code          代码，js代码
regex         正则表达式
```

------

## 8.文档的增

- 插入文档1

```
db.collectionName.insert()
注意在插入文档的时候，键可以不加引号

插入多条数据
db.collectionName.insert([{}, {}, {}, {}])

实例：
> db.city.insert([{中国:'北京'}, {美国:'华盛顿'}, {德国:'柏林'}])
> db.city.find()
> db.city.drop()
```

> 如果插入时自己设置了_id那么系统则会使用设置的_id值，但是_id仍然为主键，不能重复

- 插入文档2

```
db.collectionName.save()

1、如果不加_id 进行插入效果同insert()
2、如果加_id 进行操作，如果_id值不存在则正常插入，如果存在则修改原文档
3、save() 不能同时插入多条数据
```

- 关于null

```
表示给某个域赋值为null
db.class2.insert({name:'Levi', age:null, date:'2017-9-1'})

表示某个域不存在的情况
db.class2.find({sex:null}, {_id:0})
```

- 时间：

```
date 类型
存储 ISODate('2018-02-27 11:45:36')

获取当前时间: new Date()
实例：插入数据包含当前时间
db.class2.insert({name:'Alex', age:13, date:new Date()})
```

- 练习1:

```
1、创建一个名为stu 的数据库
> use stu

2、创建一个名为class 的集合，插入几条记录，域为：name，age，sex，weight，course
> db.class.insert([
    {'name':'lucy', 'age':15, 'sex':'w', weight:85, course:['English', 'Chinese', 'Math', 'music']},
    {'name':'lisi', 'age':11, 'sex':'m', weight:48, course:['Chinese', 'Math', 'music']},
    {'name':'wang', 'age':18, 'sex':'w', weight:100, course:['English', 'Chinese']},
    {'name':'zhang', 'age':10, 'sex':'m', weight:60, course:['Chinese', 'Math']},
    {'name':'ming', 'age':12, 'sex':'w', weight:79, course:['English', 'Chinese', 'music']}
    ])

3、修改集合名class 为class1
> db.class.renameCollection('class1')
```

------

## 9.文档的查

- 格式：

```
db.collectionName.find(query, {filed:0/1})
db.collectionName.findOne(query, {field:0/1})
```

- 功能：

```
find 查找所有符合条件的文档，不加参数默认查找所有文档
findOne 查找第一条符合条件的文档
```

- 参数：

```
query：表示查找条件。相当于mysql中的where语句
field声明：展示指定域，其中0表示不显示该域，1表示显示该域。相当于mysql 中select 和from 间的内容。
```

> 两个参数均以{} 类似字典的方式传入, 如果是空字典, 则与不写一样
>
> 当设置某几个域值为1，则其他域值默认为0，如：db.class1.find({}, {name:1, age:1})。当设置某几个域值为0，则其他域值默认为1，_id 始终默认为1，如果不想显示_id 则需要手动设置为0。_id 设置为0时，其他的域可以设置为1；除_id 外其他的普通域0和1不能混合设置

- 返回值：

```
返回查找到的结果

实例：
> db.class1.find({name:'lucy'})

返回值：
{ "_id" : ObjectId("5a911a5fcb8d853e775289b2"), "name" : "lucy", "age" : 15, "sex" : "w" }

24个十六进制的数用于系统自动生成的_id的（key）:
    前8位文档创建时间
    6位 机器ID
    4位 进程ID
    6位 计数器
实例：
查找所有数据记录
> db.class1.find() --> select * from class1;

查找第一条符合条件的记录
> db.class1.findOne() --> select * from class1 where limit=1;

查找一个name为Lei的同学
> db.class1.findOne({name:'Lei'}, {_id:0}) --> select * from class1 where name='Lei' limit = 1;
```

- 使用集合定位方法查找：

```
> db.getCollection('collectionName').find() --> db.collectionName.find()
```

------

### 1.比较运算符：

> 字符串也可以比较大小，按ascii码值逐个比较

- $eq 等于

```
实例：查找age等于18的同学
> db.class1.find({age:{$eq:18}}, {_id:0}) --> db.class1.find({age:18}, {_id:0})
```

- $lt 小于

```
实例：查找age小于18的同学
> db.class1.find({age:{$lt:18}}, {_id:0})
```

- $lte 小于等于

```
实例：查找age小于等于18的同学
> db.class1.find({age:{$lte:18}}, {_id:0})
```

- $gt 大于

```
实例：查找age大于17的同学
> db.class1.find({age:{$gt:17}}, {_id:0})
```

- $gte 大于等于

```
实例：查找age大于等于17的同学
> db.class1.find({age:{$gte:17}}, {_id:0})
```

- $ne 不等于

```
实例：查找age不于等于18的同学
> db.class1.find({age:{$ne:18}}, {_id:0})
```

- $in 是否包含

```
实例：查找age包含10，11，17的同学
> db.class1.find({age:{$in:[10, 11, 17]}}, 
{_id:0})
```

- $nin 是否不包含

```
实例：查找age不包含10，11，17的同学
> db.class1.find({age:{$nin:[10, 11, 17]}}, 
{_id:0})
```

------

### 2.逻辑运算符

- $and 逻辑与（逗号隔开的即为and关系）

```
实例：查找age等于17，name是wang的同学
> db.class1.find({$and:[{age:17}, {name:'wang'}]}, {_id:0})

更常用：
> db.class1.find({age:17, name:'wang'}, {_id:0})
查找age大于15，小于18的同学
> db.class1.find({$and:[{age:{$gt:15}}, {age:{$lt:18}}]}, {_id:0})

更常用：
> db.class1.find({age:{$gt:15, $lt:18}}, {_id:0})
```

- $or 逻辑或

```
实例：查找age小于18或weight等于85的同学
> db.class1.find({$or:[{age:{$lt:18}}, {weight:85}]}, {_id:0})
```

- $not 逻辑非

```
实例：用$not 查找age不小于18的同学
> db.class1.find({age:{$not:{$lt:18}}}, {_id:0})
```

- $nor 既不也不

```
实例：查找age既不小于18也不要name为zhang的同学
> db.class1.find({$nor:[{age:{$lt:18}}, {name:'zhang'}]}, {_id:0})
```

------

### 3.混合查找实例

```
实例：name = 'Jame' and (age = 12 or age = 13)
> db.class1.find({name:'Jame', $or:[{age:12}, {age:13}]}, {_id:0})

实例：age > 13 or (name = 'wang' and sex = 'm')
> db.class1.find({$or:[{age:{$gt:13}}, {name:'wang', sex:'m'}]})
```

------

### 4.数组查找 (course的值是一个数组)

```
实例：筛选course 数组中包含'chinese' 的文档
> db.class3.find({course:'Chinese'}, {_id:0})
```

- $all

```
实例：筛选course 数组中包含$all:{'', ''} 子集的文档
> db.class3.find({course:{$all:['Chinese', 'English']}}, {_id:0})
```

- $size

```
实例：筛选course 数组中包含2 个元素的文档
> db.class3.find({course:{$size:2}}, {_id:0})
```

------

### 5.数组显示 (course的值是一个数组)

- $slice 可以和0 或1 搭配

```
实例：显示数组中前两项
> db.class3.find({}, {_id:0, course:{$slice:2}})

实例：显示数组中跳过第一项 显示后面两项
> db.class3.find({}, {_id:0, course:{$slice:[1, 2]}})
```

------

### 6.其他查找命令

- $exits

```
实例：查找某个域存在与否的文档，true表示存在，false表示不存在
> db.class1.find({weight:{$exists:true}}, {_id:0})
```

- $mod # 取模运算

```
实例：查找某个域的值，匹配给定的除数和余数
> db.class1.find({age:{$mod:[3, 1]}}, {_id:0})
```

- $type

```
实例：查找某个域是指定类型的文档
> db.class3.find({course:{$type:2}}, {_id:0})
```

## > mongo 中每种数据类型对应一个整数

### 7.和查找结果相关的函数

- distinct(colName)

```
实例：查看class集合中所有文档age域包含哪些值
> db.class1.distinct('age')
```

- pretty()

```
实例：格式化显示结果
> db.class1.find().pretty()
```

- limit(num)

```
实例：显示查找结果的前num项
> db.class1.find({}, {_id:0}).limit(3)
```

- skip(num)

```
实例：跳过前num条记录进行显示
> db.class1.find({}, {_id:0}).skip(2)
```

- count()

```
实例：统计查询到的文档个数
> db.class1.find({}, {_id:0}).count()
```

- sort({}, {}, {}, .......) :

```
实例：按照指定的域值进行排序（指定某个域的值如果是1表示升序、-1表示降序）
> db.class1.find({}, {_id:0}).sort({age:1})
```

- query

  > 结果调用函数是可以连续调用的

```
实例：查找年龄最小的三个文档
> db.class1.find({}, {_id:0}).sort({age:1}).limit(3)
```

------

## 10.文档的改

- 格式：

```
db.collectionName.update(query, update, upset, multi)
update tablename set.... where....
```

- 功能：更新文档数据
- 参数：

```
query  定位要更新的文档，相当于where用法同查找
update 将数据更新为什么，相当于set，update需要配合修改器使用，如果不使用修改器，就是替换文本，而不是更新某个字段

upset  是boolean值，默认为false，如果query存在修改，不存在则不做任何改变，如果设置为true，表示如果query的文档不存在则根据update插入一条新的文档，如果存在则修改

multi  是boolean值，默认为false，如果query匹配到多个，只修改第一个，如果设置为true，表示修改所有query的文档
```

### 1.修改器：

- $set：修改某一个或多个域的值，如果该域不存在则添加这个域

```
实例：将名为Han 的性别修改为女
> db.class1.update({name:'Han'}, {$set:{sex:'w'}})
```

- $inc 将某个域的值，增加或者是减少

```
实例：所有年龄小于20 的人年龄加3
> db.class1.update({age:{$lt:18}}, {$inc:{age:3}}, false, true)
```

- $mul 乘法修改器，将某个域的值乘以多少

```
实例：将第一个人的年龄乘以2
> db.class1.update({}, {$mul:{age:2}})
```

- $unset 删除某一个或多个域，域后面加什么数字无所谓

```
实例：将第一个人的性别删除
db.class1.update({}, {$unset:{sex:1}})
```

- $rename 修改域名

```
实例：将所有存在sex域的文档的sex域名改为gender
db.class1.update({sex:{$exists:true}}, {$rename:{'sex':'gender'}}, false, true)
```

- $min 若匹配到的文档的指定域的值小于给定值则不做任何修改，如果大于给定的值则修改为给定值

```
实例：将所有age大于20的改为20
db.class1.update({}, {$min:{age:20}}, false, true)
```

- $max 若匹配到的文档指定域的值大于给出的值则不做修改，如果小于给出的值则改为指定值

```
实例：将所有age小于17的改为17
db.class1.update({}, {$max:{age:17}}, false, true)
```

------

### 2.数组修改器

- $push 向数组中添加一项元素

```
实例：向数组course添加一个python
> db.class3.update({name:'wang'}, {$inc:{age:1}, $push:{course:'python'}})
```

- $pushAll 向数组中添加多项元素

```
实例：向数组score添加
> db.class3.update({name:'li'}, {$pushAll:{score:[100, 99]}})
```

$each

```
> db.class3.update({name:'li'}, {$push:{score:{$each:[100, 99]}}})
```

- $pull 从数组中删除一项

```
实例：删除score数组中的78
> db.class3.update({name:'li'}, {$pull:{score:88}})
```

- $pullAll 从数组中删除多项

```
db.class3.update({name:'li'}, {$pullAll:{score:[99, 100]}})
```

- $pop 从数组两侧弹出数据, 1 从右侧弹出， -1 从左侧弹出

```
db.class3.update({name:'li'}, {$pop:{score:1}})
```

- $addToSet 同push 但是不能有重复项

```
实例：用$addToSet更新可以避免重复，将它与$each组合起来，可以一次性添加多条（就算后添加的值已存在也没有关系）
> db.user.update({"name":"li"},{"$addToSet":{"course":{"$each":["singing","dancing"]}}})
```

------

## 11.文档的删

- 格式：

```
db.collectionName.remove(query, justOne)
```

- 功能：删除文档
- 参数：

```
query：  定位要删除的记录，类似mysql中where，具体写法同查找
justOne：赋一个布尔类型值，如果不写则表示删除所有符合query条件的文档，如果赋值为true或者1，表示只删除第一条符合query条件的文档
实例：
删除所有age 小于13 的文档
db.class1.remove({age:{$lt:13}})

实例：
删除第一条age 大于17 的文档
db.class1.remove({age:{$gt:17}}, true)

删除第一条文档
db.collectionName.remove({}, 1)

删除所有文档
db.collectionName.remove({})
```

------

## 12.练习：

1.创建一个数据名库字为 grade

```
use grade
```

2.数据库中创建集合名称为 class

```
db.createCollection('class')
```

3.向集合插入文档，格式结构为：name age sex hobby[画画，唱歌，跳舞，篮球，足球]

```

```

4.查找练习

```
查看班级所有学生的信息
db.class.find({}, {_id:0})

查看班级所有年龄为4 岁的学生信息
db.class.find({age:4}, {_id:0})

查看班级所有年龄大于4 岁的学生
db.class.find({age:{$gt:4}}, {_id:0})

查看班级所有年龄4-7 岁之间的学生
db.class.find({age:{$gte:4, $lte:7}}, {_id:0})

查看所有年龄大于4 岁的女同学
db.class.find({age:{$gt:4}, sex:'g'}, {_id:0})

查看所有小于4 岁或者大于7岁的学生
db.class.find({$or:[{age:{$lt:4}}, {age:{$gt:7}}]}, {_id:0})

查看年龄是4 岁或者6岁的学生
db.class.find({age:{$in:[4, 6]}}, {_id:0})

查看有两项爱好的学生
db.class.find({hobby:{$size:2}}, {_id:0})

查看喜欢画画的学生
db.class.find({hobby:'画画'}, {_id:0})

查看既喜欢画画有喜欢跳舞的学生
db.class.find({hobby:{$all:['画画', '跳舞']}}, {_id:0})

统计有三项爱好的学生人数
db.class.find({hobby:{$size:3}}, {_id:0}).count()

查看本班第二位学生信息
db.class.find({}, {_id:0}).skip(1).limit(1)

将学生按年龄升序，年龄相同按姓名升序排序
db.class.find({}, {_id:0}).sort({age:1, name:1})

统计学生兴趣都覆盖哪些范围
db.class.distinct('hobby')

删除所有年龄小于4和大于9的学生
db.remove({$or:[{age:{$lt:4}}, {age:{$gt:9}}]}, {_id=0})
```

------

## 13.内部文档操作

```
在文档中，某个域的值也是文档，把这个文档称为内部文档

db.class2.insert({book:{'title':'python黑客编程从入门到入狱', 'prince':45.8}})
db.class2.find({'book.title':'python黑客编程从入门到入狱'})
使用外层文档的域 点 的方法引用内部文档域的值时，必须加引号
db.class2.update({book:{$exists:true}}, {$set:{'book.prince':99}})
```

通过数组域名应用索引序号的方式，修改查找数组中具体某一项 实例：查找course第一项是Chinese的 db.class3.find({'course.0':'Chinese'},{_id:0})

修改name=li 的文档score数组中的一个数为76 db.class3.update({name:'li'}, {$set:{'score.0':76}})

- 引深：

```
db.class2.insert({name:'book message', book:[{title:'Python入门', price:46}, {title:'Html入门', price:47}, {title:'Java入门', price:48}]})

查询1: 数组包含项查询
db.class2.find({book:{title:'Python入门', price:46}}, {_id:0}).pretty()

查询2:
db.class2.find({'book.title':'Python入门', 'book.price':46}, {_id:0}).pretty()

查询3：出现问题
db.class2.find({'book.title':'Python入门', 'book.price':47}, {_id:0}).pretty()
```

- $elemMatch 操作符解决上面的问题, 专门用于查询数组中的元素是否满足指定条件:

```
db.class2.find({book:{$elemMatch:{title:'Python入门', price:47}}}).pretty()
```

------

## 14.练习：接上练习文档grade

```
1、将该班上名为小红的同学年龄变为8岁，兴趣爱好变为跳舞、画画
2、追加小明的兴趣爱好：唱歌
3、增加小王爱好：吹牛和打篮球
4、增加小李爱好：吹牛、唱歌，要保证不要和以前的重复
5、给该班所有同学都增加1岁
6、删除小明sex属性
7、删除小明爱好中的第一项
8、删除小红爱好中的画画
```

------

## 15.索引：

> 指的是建立指定键值所在文档中存储闻之的对应关系清单。使用索引进行查找可以方便快速查找，减少遍历，提高效率。如果不使用索引，往往进行大量扫描，效率低

- 创建索引：(过去的方法：createIndex()）

```
db.collection.ensureIndex()

实例：以name域创建索引
db.class1.ensureIndex({'name':1})  1 表示正向索引， -1 表示逆向索引
```

- 查看当前集合中的索引

```
db.class1.getIndexes()
```

- 创建复合索引

```
实例：同时为两个域创建索引
db.class1.ensureIndex({'name':1, 'age': -1})
```

- 设置过期时间:

```
expireAfterSeconds: 秒
db.test_timer.ensureIndex({"timer":1}, {expireAfterSeconds: 10})
```

- 删除索引

```
db.class1.dropIndex(name:1)
```

- 删除复合索引

```
db.class1.dropIndex({name:1, age:-1})
```

- 删除全部索引

```
db.class1.dropIndexes()
不会删除 _id 索引
```

其他索引 数组索引：如果对某个域创建索引，这个域的值为数组，那么会对数组的值也会创建索引，提高数组中值的查找效率 db.class3.find('bobby':'足球')

```
子文档索引：如果某个域的值时文档，那么可以单独对这个子文档中的域创建索引
db.class2.ensureIndex({'book.title':1})

唯一索引：如果希望索引拥有不重复的值可以通过创建唯一索引来约束对应的值
db.class1.ensureIndex({age:1}, {'unique':true})

覆盖索引：查找时不获取具体文档，仅从索引中就可以获取到全部要查询的数据
         具体使用：查询时，限定返回的数据仅包含索引数据

稀疏索引：只针对存在指定域的文档建立索引表，跳过不存在指定域的文档，使索引表更小巧，提高效率
db.class2.ensureIndex({age:1}, {sparse:true})

文本索引：使用文本索引可以较快速的进行文本检索，文本索引可以建立在任意格式的字符串上
实例：给python这个域创建索引
db.class2.ensureIndex({python:'text', description:'text'})
查找python域中的字符串，如果包含search的内容则查找出来
db.class2.find({$text:{$search:'python html css'}})
* search 后的字符串以空格分割为多个部分，只要查找到其中一部分就会返回相应的文档
* 如果查找的字符串中本身包含空格，则需要用引号作为一个整体饮用，此时内部引号需要转译字符
db.class2.find({$text:{$search:"\"learn java\""}})

不包含Linux 包含learn
db.class2.find({$text:{$search:'learn -Linux'}})

删除文本索引
1、使用getIndexes() 查看索引名称
2、dropIndex() 按照索引名称
根据名称删除索引
```

索引约束： 1、影响插入删除修改操作的效率，当数据发生修改时，不仅需要更新文档，还需要更新索引 2、占用了一定的存储空间 综上：当数据库较小，或者数据需要频繁的修改而不是查询的时候不宜创建索引

固定集合 mongo中固定集合指的是性能出色且有着固定大小的集合 作用：处理日志， 处理暂存， 做临时缓存区 特点：插入数据快，顺序查询速度快，能够及时淘汰早期数据

```
创建
db.createCollection('collectionName', {capped:true, size:10000, max:10000})
参数：capped：true 表示固定集合
     size： 空间大小 单位 KB
     max：  可以存放文档的个数上限

检查一个集合是否是固定集合
db.log.isCapped()
```

聚合：用于对文档查找结果的统计或者加工 统计一个集合中文档数量 db.class1.count()

```
聚合函数配合聚合标识符来使用
db.collectionName.aggregate()

统计方法：
$sum: 求和
$avg: 求平均数
$min: 最小值
$max: 最大值
$first: 获取第一个值
$last:  获取最后一个值

聚合标识符
1、$group 分组
{$group:{_id:'$name', num:{$sum:1}}}
  分组     按照姓名     统计结果名称

统计每一个姓名人数
db.class4.aggregate({$group:{_id:'$name', num:{$sum:1}}})

统计每一个姓名的年龄之和
db.class4.aggregate({$group:{_id:'$name', num:{$sum:'$age'}}})

统计每个名字人的平均年龄
db.class4.aggregate({$group:{_id:'$name', avg:{$avg:'$age'}}})

可以同时统计多项内容
db.class4.aggregate({$group:{_id:'$name', num:{$sum:'$age'}, avg:{$avg:'$age'}}})

统计同名中年龄最大的
db.class4.aggregate({$group:{_id:'$name', max:{$max:'$age'}}})

统计每个性别中的第一个人
db.class4.aggregate({$group:{_id:'$sex', name:{$first:'$name'}}})

2、$project: 用于修改文档显示结构
db.class4.aggregate({$project:{_id:0, name:1, age:1, sex:1}})

更灵活的增加显示内容
db.class4.aggregate({$project:{_id:0, name:1, age:1, realName:'$name'}})

3、$match： 过滤
db.class4.aggregate({$match:{'age':{$gt:13}}})

4、$limit：取多少条数据
db.class4.aggregate({$limit:3})

5、$skip：跳过多少条数据
db.class4.aggregate({$skip:3})

6、$sort：排序
db.class4.aggregate({$sort:{age:1}})
```

聚合管道：将前一个聚合的结果传给后一个聚合操作继续执行 统计年龄大于13 的男女人数 db.class4.aggregate([{$match:{age:{$gt:13}}}, {$group:{_id:'$sex', num:{$sum:1}}}])

GridFS：mongo提供的文件存储方式 当文件大小大于16M的时候可以使用这种方式进行存储 将文件存储在mongo的集合中，通过两个集合共同确定该文件的存储

```
fs.files: 存储和文件有关的内容信息，比如filename，文件类型content_type等
fs.chunks:实际存储文件的内容，以二进制方式分块存储，将文件分割为多个小块，每块作为chunks集合中的文档进行存储

mongofiles -d dbName put fileName
* db.Name :要存储的数据库，如果不存在自动创建
* fileName:要存储的文件名

查看文件信息：
db.fs.files.find({}, {_id:0}).pretty()

查看文件：
db.fs.chunks.find({files_id:Object()})

优缺点：
优点：1、存储方便
     2、文件没有个数限制，方便管理
缺点：读写效率低，中能整体替换不能部分更新
```

游标： * 防止网络拥塞，造成数据传输慢 * 避免客户端 var cursor = db.student.find() cursor.hasNext() 查看是否有下一项 cursor.next() 获取下一项

```
实例：js创建游标
var cursor = db.class1.find()
```

------

python 的mongodb接口模块

- 安装：

```
sudo pip3 install pymongo
```

- 插入操作

```
insert()
insert_many()
insert_one()
save()
```

- 查找操作

```
find()
find_one()
```

> 注意游标操作变动，会对后续游标的使用产生一定的影响

```
cursor = my_set.find()
print(cursor.count())
print(cursor.next())  # 会影响排序操作
for i in my_set.find().sort([('age', 1)]):  # 不能用游标，去掉上一句 next 才可以
    print(i['name'], ':', i['age'])

for i in cursor.skip(3).limit(3):
    print(i['name'], ':', i['age'])
```

> 同样支持 $and $or $not $nor $gt $gte $lt $lte $ne $nin $eq $in

------

rs.slaveOk();

### 使用JavaScript操作MongoDB

```
db = db.getSiblingDB("sneaky")
count = db.pw_live_room.count({cover_url:/https:\/\/avatar.peiwo.cn\/https:*/, "state":0}, {cover_url: 1, owner_uid: 1, _id: 0})

print(count)
for (i = 0; i < count; i++) { 

    var find_cursor = db.pw_live_room.find({cover_url:/https:\/\/avatar.peiwo.cn\/https:*/, "state":0}, {cover_url: 1, owner_uid: 1, _id: 0}).limit(i+1).skip(i);
    rlt = find_cursor.next();
    cover_url = rlt.cover_url;
    new_cover_url = cover_url.substr(24,90);
    print(new_cover_url)

    rlt = db.pw_live_room.update({cover_url:/https:\/\/avatar.peiwo.cn\/https:*/, "state":0}, {$set: {"cover_url": new_cover_url}});
    print(rlt)
    }
```

### 查看数据库空间大小

- db.stats();
- `{        "db" : "xxx",   //当前数据库        "collections" : 27,  //当前数据库多少表         "objects" : 18738550,  //当前数据库所有表多少条数据        "avgObjSize" : 1153.54876188392, //每条数据的平均大小        "dataSize" : 21615831152.0,  //所有数据的总大小        "storageSize" : 23223312272.0,  //所有数据占的磁盘大小         "numExtents" : 121,        "indexes" : 26,   //索引数         "indexSize" : 821082976,  //索引大小         "fileSize" : 25691160576.0,  //预分配给数据库的文件大小        "nsSizeMB" : 16,        "dataFileVersion" : {            "major" : 4,            "minor" : 5        },        "extentFreeList" : {            "num" : 1,            "totalSize" : 65536        },        "ok" : 1.0    }`

### MongoDB 执行计划 [1](https://segmentfault.com/a/1190000012208991)

- db.collection.explain()

- db.collection.explain("executionStats")

- ## 引子

MongoDB 3.0之后，explain的返回与使用方法与之前版本有了不少变化，介于3.0之后的优秀特色，本文仅针对MongoDB 3.0+的explain进行讨论。

现版本explain有三种模式，分别如下：

- queryPlanner
- executionStats
- allPlansExecution

\## 正文

\### queryPlanner

queryPlanner是现版本explain的默认模式，queryPlanner模式下并不会去真正进行query语句查询，而是针对query语句进行执行计划分析并选出winning plan。

```
{          "queryPlanner" : {                  "plannerVersion" : 1,                  "namespace" : "game_db.game_user",                  "indexFilterSet" : false,                  "parsedQuery" : {                          "w" : {                                  "$eq" : 1                          }                  },                  "winningPlan" : {                          "stage" : "FETCH",                          "inputStage" : {                                  "stage" : "IXSCAN",                                  "keyPattern" : {                                          "w" : 1,                                          "n" : 1                                  },                                  "indexName" : "w_1_n_1",                                  "isMultiKey" : false,                                  "direction" : "forward",                                  "indexBounds" : {                                          "w" : [                                                  "[1.0, 1.0]"                                          ],                                          "n" : [                                                  "[MinKey, MaxKey]"                                          ]                                  }                          }                  },                  "rejectedPlans" : [                          {                                  "stage" : "FETCH",                                  "inputStage" : {                                          "stage" : "IXSCAN",                                          "keyPattern" : {                                                  "w" : 1,                                                  "v" : 1                                          },                                          "indexName" : "w_1_v_1",                                          "isMultiKey" : false,                                          "direction" : "forward",                                          "indexBounds" : {                                                  "w" : [                                                          "[1.0, 1.0]"                                                  ],                                                  "v" : [                                                          "[MinKey, MaxKey]"                                                  ]                                          }                                  }                          }                  ]          },
```

先来看queryPlanner模式的各个返回意义。

**explain.queryPlanner**

queryPlanner的返回。

**explain.queryPlanner.namespace**

顾名思义，该值返回的是该query所查询的表。

**explain.queryPlanner.indexFilterSet**

针对该query是否有indexfilter（会在后文进行详细解释）。

**explain.queryPlanner.winningPlan**

查询优化器针对该query所返回的最优执行计划的详细内容。

**explain.queryPlanner.winningPlan.stage**

最优执行计划的stage，这里返回是FETCH，可以理解为通过返回的index位置去检索具体的文档（stage有数个模式，将在后文中进行详解）。

**explain.queryPlanner.winningPlan.inputStage**

explain.queryPlanner.winningPlan.stage的child stage，此处是IXSCAN，表示进行的是index scanning。

**explain.queryPlanner.winningPlan.keyPattern**

所扫描的index内容，此处是w:1与n:1。

**explain.queryPlanner.winningPlan.indexName**

winning plan所选用的index。

**explain.queryPlanner.winningPlan.isMultiKey**

是否是Multikey，此处返回是false，如果索引建立在array上，此处将是true。

**explain.queryPlanner.winningPlan.direction**

此query的查询顺序，此处是forward，如果用了.sort({w:-1})将显示backward。

**explain.queryPlanner.winningPlan.indexBounds**

winningplan所扫描的索引范围，此处查询条件是w:1,使用的index是w与n的联合索引，故w是[1.0,1.0]而n没有指定在查询条件中，故是[MinKey,MaxKey]。

**explain.queryPlanner.rejectedPlans**

其他执行计划（非最优而被查询优化器reject的）的详细返回，其中具体信息与winningPlan的返回中意义相同，故不在此赘述。

\### executionStats

executionStats的返回中多了如下：

```
"executionStats" : {                  "executionSuccess" : true,                  "nReturned" : 29861,                  "executionTimeMillis" : 23079,                  "totalKeysExamined" : 29861,                  "totalDocsExamined" : 29861,                  "executionStages" : {                          "stage" : "FETCH",                          "nReturned" : 29861,                          "executionTimeMillisEstimate" : 22685,                          "works" : 29862,                          "advanced" : 29861,                          "needTime" : 0,                          "needFetch" : 0,                          "saveState" : 946,                          "restoreState" : 946,                          "isEOF" : 1,                          "invalidates" : 0,                          "docsExamined" : 29861,                          "alreadyHasObj" : 0,                          "inputStage" : {                                  "stage" : "IXSCAN",                                  "nReturned" : 29861,                                  "executionTimeMillisEstimate" : 70,                                  "works" : 29862,                                  "advanced" : 29861,                                  "needTime" : 0,                                  "needFetch" : 0,                                  "saveState" : 946,                                  "restoreState" : 946,                                  "isEOF" : 1,                                  "invalidates" : 0,                                  "keyPattern" : {                                          "w" : 1,                                          "n" : 1                                  },                                  "indexName" : "w_1_n_1",                                  "isMultiKey" : false,                                  "direction" : "forward",                                  "indexBounds" : {                                          "w" : [                                                  "[1.0, 1.0]"                                          ],                                          "n" : [                                                  "[MinKey, MaxKey]"                                          ]                                  },                                  "keysExamined" : 29861,                                  "dupsTested" : 0,                                  "dupsDropped" : 0,                                  "seenInvalidated" : 0,                                  "matchTested" : 0                          }                  }          },
```

executionStats模式中，我们主要需要注意的返回有如下几个

**executionStats.executionSuccess**

是否执行成功

**executionStats.nReturned**

查询的返回条数

**executionStats.executionTimeMillis**

整体执行时间

**executionStats.totalKeysExamined**

索引扫描次数

**executionStats.totalDocsExamined**

document扫描次数

以上几个非常好理解，我们就不在这里详述，后文的案例中会有分析。

**executionStats.executionStages.stage**

这里是FETCH去扫描对于documents

**executionStats.executionStages.nReturned**

由于是FETCH，所以这里该值与executionStats.nReturned一致

**executionStats.executionStages.docsExamined**

与executionStats.totalDocsExamined一致

**executionStats.inputStage**中的与上述理解方式相同

还有一些文档中没有描述的返回如：

“works” : 29862,

“advanced” : 29861,

“isEOF” : 1,

这些值都会在explan之初初始化：

mongo/src/mongo/db/exec/plan_stats.h

```
struct CommonStats {      CommonStats(const char* type)          : stageTypeStr(type),            works(0),            yields(0),            unyields(0),            invalidates(0),            advanced(0),            needTime(0),            needYield(0),            executionTimeMillis(0),            isEOF(false) {}
```

以works为例，查看源码中发现，每次操作会加1，且会把执行时间记录在executionTimeMillis中。

mongo/src/mongo/db/exec/fetch.cpp

\``` ++_commonStats.works;

```
      // Adds the amount of time taken by work() to executionTimeMillis.
      ScopedTimer timer(&_commonStats.executionTimeMillis);
```

\```

而在查询结束EOF，works又会加1，advanced不加。

mongo/src/mongo/db/exec/eof.cpp

```
PlanStage::StageState EOFStage::work(WorkingSetID* out) {      ++_commonStats.works;      // Adds the amount of time taken by work() to executionTimeMillis.      ScopedTimer timer(&_commonStats.executionTimeMillis);      return PlanStage::IS_EOF;  }
```

故正常的返回works会比nReturned多1，这时候isEOF为true（1）：

mongo/src/mongo/db/exec/eof.cpp

\``` bool EOFStage::isEOF() { return true; }

unique_ptr EOFStage::getStats() { _commonStats.isEOF = isEOF(); return make_unique(_commonStats, STAGE_EOF); } ```

advanced的返回值在命中的时候+1，在skip,eof的时候不会增加如：

mongo/src/mongo/db/exec/skip.cpp

\``` if (PlanStage::ADVANCED == status) { // If we're still skipping results... if (_toSkip > 0) { // ...drop the result. --_toSkip; _ws->free(id); ++_commonStats.needTime; return PlanStage::NEED_TIME; }

```
      *out = id;
      ++_commonStats.advanced;
      return PlanStage::ADVANCED;
```

\```

\### IndexFilter

IndexFilter决定了查询优化器对于某一类型的查询将如何使用index，indexFilter仅影响查询优化器对于该类查询可以用尝试哪些index的执行计划分析，查询优化器还是根据分析情况选择最优计划。

如果某一类型的查询设定了IndexFilter，那么执行时通过hint指定了其他的index，查询优化器将会忽略hint所设置index，仍然使用indexfilter中设定的查询计划。

IndexFilter可以通过命令移除，也将在实例重启后清空。

\##### IndexFilter的创建

可以通过如下命令为某一个collection建立indexFilter

```
db.runCommand(     {        planCacheSetFilter: ,        query: ,        sort: ,        projection: ,        indexes: [ , , ...]     }  )  db.runCommand(     {        planCacheSetFilter: "orders",        query: { status: "A" },        indexes: [           { cust_id: 1, status: 1 },           { status: 1, order_date: -1 }        ]     }  )
```

上图针对orders表建立了一个indexFilter，indexFilter指定了对于orders表只有status条件（仅对status进行查询，无sort等）的查询的indexes，故下图的查询语句的查询优化器仅仅会从`{cust_id:1,status:1}`和`{status:1,order_date:-1}`中进行winning plan的选择

```
db.orders.find( { status: "D" } )  db.orders.find( { status: "P" } )
```

\##### indexFilter的列表

可以通过如下命令展示某一个collecton的所有indexFilter

```
db.runCommand( { planCacheListFilters:  } )
```

\##### indexFilter的删除

可以通过如下命令对IndexFilter进行删除

```
db.runCommand(     {        planCacheClearFilters: ,        query: ,        sort: ,        projection:      }  )
```

\### Stage的意义

如**explain.queryPlanner.winningPlan.stage**和**explain.queryPlanner.winningPlan.inputStage**等。

文档中仅有如下几类介绍

**COLLSCAN**

全表扫描

**IXSCAN**

索引扫描

**FETCH**

根据索引去检索指定document

**SHARD_MERGE**

将各个分片返回数据进行merge

但是根据源码中的信息，个人还总结了文档中没有的如下几类(常用如下，由于是通过源码查找，可能有所遗漏)

**SORT**

表明在内存中进行了排序（与老版本的scanAndOrder:true一致）

**LIMIT**

使用limit限制返回数

**SKIP**

使用skip进行跳过

**IDHACK**

针对_id进行查询

**SHARDING_FILTER**

通过mongos对分片数据进行查询

**COUNT**

利用db.coll.explain().count()之类进行count运算

**COUNTSCAN**

count不使用用Index进行count时的stage返回

**COUNT_SCAN**

count使用了Index进行count时的stage返回

**SUBPLA**

未使用到索引的$or查询的stage返回

**TEXT**

使用全文索引进行查询时候的stage返回

**PROJECTION**

限定返回字段时候stage的返回

部分源码如下：

mongo/jstests/libs/analyze_plan.js

\``` / *** A query is covered iff it does\* not* have a FETCH stage or a COLLSCAN. * * Given the root stage of explain's BSON representation of a query plan ('root'), * returns true if the plan is index only. Otherwise returns false. */ function isIndexOnly(root) { return !planHasStage(root, "FETCH") && !planHasStage(root, "COLLSCAN"); }

/* ** Returns true if the BSON representation of a plan rooted at 'root' is using \* an index scan, and false otherwise.* / function isIxscan(root) { return planHasStage(root, "IXSCAN"); }

/* ** Returns true if the BSON representation of a plan rooted at 'root' is using \* the idhack fast path, and false otherwise.* / function isIdhack(root) { return planHasStage(root, "IDHACK"); }

/* ** Returns true if the BSON representation of a plan rooted at 'root' is using \* a collection scan, and false otherwise.* / function isCollscan(root) { return planHasStage(root, "COLLSCAN"); }

/* ** Get the number of chunk skips for the BSON exec stats tree rooted at 'root'.* / function getChunkSkips(root) { if (root.stage === "SHARDING_FILTER") { return root.chunkSkips; } else if ("inputStage" in root) { return getChunkSkips(root.inputStage); } else if ("inputStages" in root) { var skips = 0; for (var i = 0; i < root.inputStages.length; i++) { skips += getChunkSkips(root.inputStages[0]); } return skips; } ```

mongo/jstests/concurrency/fsm_workloads/explain_count.js

```
$config.states = Object.extend({          explainBasicCount: function explainBasicCount(db, collName) {              var res = db[collName].explain().count();              assertAlways.commandWorked(res);              assertAlways(planHasStage(res.queryPlanner.winningPlan, 'COUNT'));          },          explainCountHint: function explainCountHint(db, collName) {              assertWhenOwnColl(function() {                  var res = db[collName].explain()                                        .find({ i: this.nInserted / 2 })                                        .hint({ i: 1 }).count();                  assertWhenOwnColl.commandWorked(res);                  assertWhenOwnColl(planHasStage(res.queryPlanner.winningPlan, 'COUNT'));                  assertWhenOwnColl(planHasStage(res.queryPlanner.winningPlan, 'COUNT_SCAN'));              });
```

mongo/jstests/concurrency/fsm_workloads/explain_find.js

```
$config.states = Object.extend({          explainLimit: function explainLimit(db, collName) {              var res = db[collName].find().limit(3).explain();              assertAlways.commandWorked(res);              assertAlways(planHasStage(res.queryPlanner.winningPlan, 'LIMIT'));          },          explainBatchSize: function explainBatchSize(db, collName) {              var res = db[collName].find().batchSize(3).explain();              assertAlways.commandWorked(res);          },          explainAddOption: function explainAddOption(db, collName) {              var res = db[collName].explain().find().addOption(DBQuery.Option.exhaust).finish();              assertAlways.commandWorked(res);          },          explainSkip: function explainSkip(db, collName) {              var res = db[collName].explain().find().skip(3).finish();              assertAlways.commandWorked(res);              assertAlways(planHasStage(res.queryPlanner.winningPlan, 'SKIP'));          },          explainSort: function explainSort(db, collName) {              var res = db[collName].find().sort({ i: -1 }).explain();              assertAlways.commandWorked(res);              assertAlways(planHasStage(res.queryPlanner.winningPlan, 'SORT'));          },  /**   * The SubplanStage is used for rooted $or queries. It plans each clause of the $or   * individually, and then creates an overall query plan based on the winning plan from   * each clause.   *   * Uses the MultiPlanStage in order to rank plans for the individual clauses.   *   * Notes on caching strategy:   *   *   --Interaction with the plan cache is done on a per-clause basis. For a given clause C,   *   if there is a plan in the cache for shape C, then C is planned using the index tags   *   obtained from the plan cache entry. If no cached plan is found for C, then a MultiPlanStage   *   is used to determine the best plan for the clause; unless there is a tie between multiple   *   candidate plans, the winner is inserted into the plan cache and used to plan subsequent   *   executions of C. These subsequent executions of shape C could be either as a clause in   *   another rooted $or query, or shape C as its own query.   *   *   --Plans for entire rooted $or queries are neither written to nor read from the plan cache.   */
```

\### allPlansExecution

顾名思义，allPlansExecution模式是将所有的执行计划均进行executionStats模式的操作，不在此赘述了。

\### 对Explain返回逐层分析

\#### 第一层，executionTimeMillis。

首先，最为直观explain返回值是**executionTimeMillis**值，指的是我们这条语句的执行时间，这个值当然是希望越少越好。

且**executionTimeMillis** 与stage有同样的层数，即：

```
"executionStats" : {                  "executionSuccess" : true,                  "nReturned" : 29861,                  "executionTimeMillis" : 66948,                  "totalKeysExamined" : 29861,                  "totalDocsExamined" : 29861,                  "executionStages" : {                          "stage" : "FETCH",                          "nReturned" : 29861,                          "executionTimeMillisEstimate" : 66244,                          "works" : 29862,                          "advanced" : 29861,                          "needTime" : 0,                          "needFetch" : 0,                          "saveState" : 2934,                          "restoreState" : 2934,                          "isEOF" : 1,                          "invalidates" : 0,                          "docsExamined" : 29861,                          "alreadyHasObj" : 0,                          "inputStage" : {                                  "stage" : "IXSCAN",                                  "nReturned" : 29861,                                  "executionTimeMillisEstimate" : 290,                                  "works" : 29862,                                  "advanced" : 29861,                                  "needTime" : 0,                                  "needFetch" : 0,                                  "saveState" : 2934,                                  "restoreState" : 2934,                                  ...
```

其中有3个**executionTimeMillis**，分别是

**executionStats.executionTimeMillis**

该query的整体查询时间

**executionStats.executionStages.executionTimeMillis**

该查询根据index去检索document获取29861条具体数据的时间

**executionStats.executionStages.inputStage.executionTimeMillis**

该查询扫描29861行index所用时间

这三个值我们都希望越少越好，那么是什么影响这这三个返回值呢？

抛开硬件因素等不谈，我们来进行下一层的剥离。

\#### 第二层，index与document扫描数与查询返回条目数

这里主要谈3个返回项，nReturned，totalKeysExamined与totalDocsExamined，分别代表该条查询返回的条目、索引扫描条目和文档扫描条目。

很好理解，这些都直观的影响到executionTimeMillis，我们需要扫描的越少速度越快。

对于一个查询， 我们最理想的状态是

nReturned=totalKeysExamined & totalDocsExamined=0

（cover index，仅仅使用到了index，无需文档扫描，这是最理想状态。）

或者

nReturned=totalKeysExamined=totalDocsExamined(需要具体情况具体分析)

（正常index利用，无多余index扫描与文档扫描。）

如果有sort的时候，为了使得sort不在内存中进行，我们可以在保证nReturned=totalDocsExamined

的基础上，totalKeysExamined可以大于totalDocsExamined与nReturned，因为量级较大的时候内存排序非常消耗性能。

后面我们会针对例子来进行分析。

\#### 第三层，Stage状态分析

那么又是什么影响到了totalKeysExamined与totalDocsExamined呢？就是Stage的类型，Stage的具体含义在上文中有提及，如果认真看的同学就不难理解为何Stage会影响到totalKeysExamined 和totalDocsExamined从而影响executionTimeMillis了。

此前有讲解过stage的类型，这里再简单列举下（具体意义请看上文）

**COLLSCAN**

**IXSCAN**

**FETCH**

**SHARD_MERGE**

**SORT**

**LIMIT**

**SKIP**

**IDHACK**

**SHARDING_FILTER**

**COUNT**

**COUNTSCAN**

**COUNT_SCAN**

**SUBPLA**

**TEXT**

**PROJECTION**

\#### 对于普通查询，我们最希望看到的组合有这些：

Fetch+IDHACK

Fetch+ixscan

Limit+（Fetch+ixscan）

PROJECTION+ixscan

SHARDING_FILTER+ixscan

等

\#### 不希望看到包含如下的stage：

COLLSCAN（全表扫），SORT（使用sort但是无index），不合理的SKIP，SUBPLA（未用到index的$or）

\#### 对于count查询，希望看到的有：

COUNT_SCAN

\#### 不希望看到的有:

COUNTSCAN

\### Explain分析实例

表中数据如下(简单测试用例，仅10条数据，主要是对explain分析的逻辑进行解析)：

```
{ "_id" : ObjectId("55b86d6bd7e3f4ccaaf20d70"), "a" : 1, "b" : 1, "c" : 1 }  { "_id" : ObjectId("55b86d6fd7e3f4ccaaf20d71"), "a" : 1, "b" : 2, "c" : 2 }  { "_id" : ObjectId("55b86d72d7e3f4ccaaf20d72"), "a" : 1, "b" : 3, "c" : 3 }  { "_id" : ObjectId("55b86d74d7e3f4ccaaf20d73"), "a" : 4, "b" : 2, "c" : 3 }  { "_id" : ObjectId("55b86d75d7e3f4ccaaf20d74"), "a" : 4, "b" : 2, "c" : 5 }  { "_id" : ObjectId("55b86d77d7e3f4ccaaf20d75"), "a" : 4, "b" : 2, "c" : 5 }  { "_id" : ObjectId("55b879b442bfd1a462bd8990"), "a" : 2, "b" : 1, "c" : 1 }  { "_id" : ObjectId("55b87fe842bfd1a462bd8991"), "a" : 1, "b" : 9, "c" : 1 }  { "_id" : ObjectId("55b87fe942bfd1a462bd8992"), "a" : 1, "b" : 9, "c" : 1 }  { "_id" : ObjectId("55b87fe942bfd1a462bd8993"), "a" : 1, "b" : 9, "c" : 1 }
```

查询语句：

```
db.d.find({a:1,b:{$lt:3}}).sort({c:-1})
```

\##### 首先，我们看看没有index时候的查询计划

```
"executionStats" : {                  "executionSuccess" : true,                  "nReturned" : 2,                  "executionTimeMillis" : 0,                  "totalKeysExamined" : 0,                  "totalDocsExamined" : 10,                  "executionStages" : {                          "stage" : "SORT",                          "nReturned" : 2,                          ...                          "sortPattern" : {                                  "c" : -1                          },                          "memUsage" : 126,                          "memLimit" : 33554432,                          "inputStage" : {                                  "stage" : "COLLSCAN",                                  "filter" : {                                          "$and" : [                                                  {                                                          "a" : {                                                                  "$eq" : 1                                                          }                                                  },                                                  {                                                          "b" : {                                                                  "$lt" : 3                                                          }                                                  }                                          ]                                  },                                  "nReturned" : 2,                                 ...                                  "direction" : "forward",                                  "docsExamined" : 10                          }
```

nReturned为2，符合的条件的返回为2条。

totalKeysExamined为0，没有使用index。

totalDocsExamined为10，扫描了所有记录。

executionStages.stage为SORT,未使用index的sort，占用的内存与内存限制为”memUsage” : 126, “memLimit” : 33554432。

executionStages.inputStage.stage为COLLSCAN，全表扫描，扫描条件为

```
"filter" : {      "$and" : [          {              "a" : {                    "$eq" : 1                   }          },          {              "b" : {                  "$lt" : 3                  }          }              ]          },
```

很明显，没有index的时候，进行了**全表扫描**，**没有使用到index**，**在内存中sort**，很显然，和都是不可取的。

\##### 下面，我们来对sort项c加一个索引

```
db.d.ensureIndex({c:1})
```

再来看看执行计划

```
"executionStats" : {                  "executionSuccess" : true,                  "nReturned" : 2,                  "executionTimeMillis" : 1,                  "totalKeysExamined" : 10,                  "totalDocsExamined" : 10,                  "executionStages" : {                          "stage" : "FETCH",                          "filter" : {                                  "$and" : [                                          {                                                  "a" : {                                                          "$eq" : 1                                                  }                                          },                                          {                                                  "b" : {                                                          "$lt" : 3                                                  }                                          }                                  ]                          },                          "nReturned" : 2,                          ...                          "inputStage" : {                                  "stage" : "IXSCAN",                                  "nReturned" : 10,                                 ...                                  "keyPattern" : {                                          "c" : 1                                  },                                  "indexName" : "c_1",                                  "isMultiKey" : false,                                  "direction" : "backward",                                  "indexBounds" : {                                          "c" : [                                                  "[MaxKey, MinKey]"                                          ]                                  },
```

我们发现，Stage没有了SORT，因为我们sort字段有了index，但是由于查询还是没有index，故totalDocsExamined还是10，但是由于sort用了index，totalKeysExamined也是10，但是仅对sort排序做了优化，查询性能还是一样的低效。

\##### 接下来， 我们对查询条件做index（做多种index方案寻找最优）

我们的查询语句依然是:

```
db.d.find({a:1,b:{$lt:3}}).sort({c:-1})
```

**使用db.d.ensureIndex({b:1,a:1,c:1})索引的执行计划：**

```
"executionStats" : {                  "executionSuccess" : true,                  "nReturned" : 2,                  "executionTimeMillis" : 0,                  "totalKeysExamined" : 4,                  "totalDocsExamined" : 2,                  "executionStages" : {                          "stage" : "SORT",                          "nReturned" : 2,                          ...                          "sortPattern" : {                                  "c" : -1                          },                          "memUsage" : 126,                          "memLimit" : 33554432,                          "inputStage" : {                                  "stage" : "FETCH",                                  "nReturned" : 2,                                  ...                                  "inputStage" : {                                          "stage" : "IXSCAN",                                          "nReturned" : 2,                                         ...                                          "keyPattern" : {                                                  "b" : 1,                                                  "a" : 1,                                                  "c" : 1                                          },                                          "indexName" : "b_1_a_1_c_1",                                          "isMultiKey" : false,                                          "direction" : "forward",                                          "indexBounds" : {                                                  "b" : [                                                          "[-inf.0, 3.0)"                                                  ],                                                  "a" : [                                                          "[1.0, 1.0]"                                                  ],                                                  "c" : [                                                          "[MinKey, MaxKey]"                                                  ]                                          },
```

我们可以看到

nReturned为2，返回2条记录

totalKeysExamined为4，扫描了4个index

totalDocsExamined为2，扫描了2个docs

此时nReturned=totalDocsExamined<totalKeysExamined，不符合我们的期望。

且executionStages.Stage为Sort，在内存中进行排序了，也不符合我们的期望

**使用db.d.ensureIndex({a:1,b:1,c:1})索引的执行计划：**

```
"executionStats" : {                  "executionSuccess" : true,                  "nReturned" : 2,                  "executionTimeMillis" : 0,                  "totalKeysExamined" : 2,                  "totalDocsExamined" : 2,                  "executionStages" : {                          "stage" : "SORT",                          "nReturned" : 2,                          ...                          "sortPattern" : {                                  "c" : -1                          },                          "memUsage" : 126,                          "memLimit" : 33554432,                          "inputStage" : {                                  "stage" : "FETCH",                                  "nReturned" : 2,                                  ...                                  "inputStage" : {                                          "stage" : "IXSCAN",                                          "nReturned" : 2,                                          ...                                          "keyPattern" : {                                                  "a" : 1,                                                  "b" : 1,                                                  "c" : 1                                          },                                          "indexName" : "a_1_b_1_c_1",                                          "isMultiKey" : false,                                          "direction" : "forward",                                          "indexBounds" : {                                                  "a" : [                                                          "[1.0, 1.0]"                                                  ],                                                  "b" : [                                                          "[-inf.0, 3.0)"                                                  ],                                                  "c" : [                                                          "[MinKey, MaxKey]"                                                  ]                                          },
```

我们可以看到

nReturned为2，返回2条记录

totalKeysExamined为2，扫描了2个index

totalDocsExamined为2，扫描了2个docs

此时nReturned=totalDocsExamined=totalKeysExamined，符合我们的期望。看起来很美吧？

**但是，但是，但是**！**重要的事情说三遍**！executionStages.Stage为Sort，在内存中进行排序了，这个在生产环境中尤其是在数据量较大的时候，是非常消耗性能的，这个千万不能忽视了，我们需要改进这个点。

**最后，我们要在nReturned=totalDocsExamined的基础上，让排序也使用index，我们使用db.d.ensureIndex({a:1,c:1,b:1})索引,执行计划如下：**

```
"executionStats" : {                  "executionSuccess" : true,                  "nReturned" : 2,                  "executionTimeMillis" : 0,                  "totalKeysExamined" : 4,                  "totalDocsExamined" : 2,                  "executionStages" : {                          "stage" : "FETCH",                          "nReturned" : 2,                           ...                          "inputStage" : {                                  "stage" : "IXSCAN",                                  "nReturned" : 2,                                   ...                                  "keyPattern" : {                                          "a" : 1,                                          "c" : 1,                                          "b" : 1                                  },                                  "indexName" : "a_1_c_1_b_1",                                  "isMultiKey" : false,                                  "direction" : "backward",                                  "indexBounds" : {                                          "a" : [                                                  "[1.0, 1.0]"                                          ],                                          "c" : [                                                  "[MaxKey, MinKey]"                                          ],                                          "b" : [                                                  "(3.0, -inf.0]"                                          ]                                  },                                  "keysExamined" : 4,                                  "dupsTested" : 0,                                  "dupsDropped" : 0,                                  "seenInvalidated" : 0,                                  "matchTested" : 0
```

我们可以看到

nReturned为2，返回2条记录

totalKeysExamined为4，扫描了4个index

totalDocsExamined为2，扫描了2个docs

虽然不是nReturned=totalKeysExamined=totalDocsExamined，但是Stage无Sort，即利用了index进行排序，而非内存，这个性能的提升高于多扫几个index的代价。

综上可以有一个小结论，当查询覆盖精确匹配，范围查询与排序的时候，

`{精确匹配字段,排序字段,范围查询字段}`这样的索引排序会更为高效

```js
db.wjt.aggregate([

    // Match the possible documents to reduce the working set
    { "$match": {
        "_id": { "$ne": ObjectId("538181738d6bd23253654690") },
        "movies._id": { "$in": [ 1, 2, 3 ] },
        "$and": [
            { "movies": { "$not": { "$size": 1 } } }
        ]
    }},

    // Project a copy of the document if you want to keep more than `_id`
    { "$project": {
        "_id": {
            "_id": "$_id",
            "movies": "$movies"
        },
        "movies": 1,
    }},

    // Unwind the array
    { "$unwind": "$movies" },

    // Build the array back with just `_id` values
    { "$group": {
        "_id": "$_id",
        "movies": { "$push": "$movies._id" }
    }},

    // Find the "set intersection" of the two arrays
    { "$project": {
        "movies": {
            "$size": {
                "$setIntersection": [
                   [ 1, 2, 3 ],
                   "$movies"
                ]
            }
        }
    }},

    // Filter the results to those that actually match
    { "$match": { "movies": { "$gte": 2 } } }

])
```