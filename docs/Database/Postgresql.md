### 安装

```
sudo env LDFLAGS='-L/usr/local/lib -L/usr/local/opt/openssl/lib
-L/usr/local/opt/readline/lib' pip install psycopg2
```

### 数据结构

- 数组
- `sql  CREATE TABLE emptable (    　　arraycol1 integer[],    　　arraycol2 text[][],    　　arraycol3 text[3],  -- 数字表示数组长度    　　arraycol4 integer ARRAY,    　　arraycol5 integer ARRAY[4]   );`
- 操作:
  - <> 不等于
  - @> 包含
  - <@ 包含于
  - && 重叠
  - not [A] && [B]
- 字符串
- varchar和char 最大长度都是10485760（1GB）, 区别仅在于边长
- text和varchar几乎无性能差别，区别仅在于存储结构的不同

### 注释

- 添加注释

- \``` --语法 comment on [type] [target] is [comment]
  --为表添加注释 comment on table user is 'The user table'; --为字段注释 comment on column user.userid is 'The user ID';

  \```

- 查询注释

- \``` --查询字段注释，objsubid为表中字段的序号，从左侧从1开始 select description from pg_description join pg_class on pg_description.objoid = pg_class.oid where relname = 'tablename'

  --查询表名、表注释 select relname as tabname, cast(obj_description(relfilenode,'pg_class') as varchar) as comment from pg_class c where relkind = 'r' and relname not like 'pg_%' and relname not like 'sql_%' order by relname

  \```

### 执行计划 EXPLAIN

- ##### EXPLAIN 语法

- \``` EXPLAIN [ ( option [, ...] ) ] statement EXPLAIN [ ANALYZE ] [ VERBOSE ] statement

  where option can be one of:

  ```
  ANALYZE [ boolean ]
  VERBOSE [ boolean ]
  COSTS [ boolean ]
  BUFFERS [ boolean ]
  TIMING [ boolean ]
  SUMMARY [ boolean ]
  FORMAT { TEXT | XML | JSON | YAML }
  ```

  \```

- ANALYZE 选项为TRUE 会实际执行SQL，并获得相应的查询计划，输出真实执行信息

  - actual time 执行时间( 节点启动时间...实际需要时间)

- VERBOSE 选项为TRUE 会显示查询计划的附加信息，默认为FALSE。附加信息包括查询计划中每个节点（后面具体解释节点的含义）输出的列（Output），表的SCHEMA 信息，函数的SCHEMA 信息，表达式中列所属表的别名，被触发的触发器名称等。

- COSTS 选项为TRUE 会显示每个计划节点的预估启动代价（找到第一个符合条件的结果的代价）和总代价，以及预估行数和每行宽度，默认为TRUE。

- BUFFERS 选项为TRUE 会显示关于缓存的使用信息，默认为FALSE。该参数只能与ANALYZE 参数一起使用。缓冲区信息包括共享块（常规表或者索引块）、本地块（临时表或者索引块）和临时块（排序或者哈希等涉及到的短期存在的数据块）的命中块数，更新块数，挤出块数。

- TIMING 选项为TRUE 会显示每个计划节点的实际启动时间和总的执行时间，默认为TRUE。该参数只能与ANALYZE 参数一起使用。因为对于一些系统来说，获取系统时间需要比较大的代价，如果只需要准确的返回行数，而不需要准确的时间，可以把该参数关闭。

- SUMMARY 选项为TRUE 会在查询计划后面输出总结信息，例如查询计划生成的时间和查询计划执行的时间。当ANALYZE 选项打开时，它默认为TRUE。

- FORMAT 指定输出格式，默认为TEXT。各个格式输出的内容都是相同的，其中XML | JSON | YAML 更有利于我们通过程序解析SQL 语句的查询计划，为了更有利于阅读，我们下文的例子都是使用TEXT 格式的输出结果。

- ##### EXPLAIN 输出结构

- 一个树形结构的 查询计划树, 树的每个节点包括对应节点类型,作用对象以及其它

- 执行特点

  - 按照查询计划数从低往上执行
  - 基于火山模型执行

- ##### 节点类型

- 控制节点（Control Node)

- 扫描节点（ScanNode)

  - Seq Scan，顺序扫描
  - Index Scan，基于索引扫描，但不只是返回索引列的值
  - IndexOnly Scan，基于索引扫描，并且只返回索引列的值，简称为覆盖索引
  - BitmapIndex Scan，利用Bitmap 结构扫描
  - BitmapHeap Scan，把BitmapIndex Scan 返回的Bitmap 结构转换为元组结构
  - Tid Scan，用于扫描一个元组TID 数组
  - Subquery Scan，扫描一个子查询
  - Function Scan，处理含有函数的扫描
  - TableFunc Scan，处理tablefunc 相关的扫描
  - Values Scan，用于扫描Values 链表的扫描
  - Cte Scan，用于扫描WITH 字句的结果集
  - NamedTuplestore Scan，用于某些命名的结果集的扫描
  - WorkTable Scan，用于扫描Recursive Union 的中间数据
  - Foreign Scan，用于外键扫描
  - Custom Scan，用于用户自定义的扫描

- 物化节点（Materialization Node)

- 连接节点（Join Node)

- Tips

  - 大多数情况下，Index Scan 要比 Seq Scan 快。但是如果获取的结果集占所有数据的比重很大时，这时Index Scan 因为要先扫描索引再读表数据反而不如直接全表扫描来的快。
  - 如果获取的结果集的占比比较小，但是元组数很多时，可能Bitmap Index Scan 的性能要比Index Scan 好。
  - 如果获取的结果集能够被索引覆盖，则Index Only Scan 因为不用去读数据，只扫描索引，性能一般最好。但是如果VM 文件未生成，可能性能就会比Index Scan 要差。

### 备库

- PostgreSQL 的基于流复制的物理备库是基于redo的物理块复制备库，允许开放只读的功能，但是需要注意，由于主库可能不断的产生redo，这些redo可能会与备库的QUERY产生冲突。

### 常用命令

```
\h：查看SQL命令的解释，比如\h select。
\?：查看psql命令列表。
\l：列出所有数据库。
\c [database_name]：连接其他数据库。
\d：列出当前数据库的所有表格。
\d [table_name]：列出某一张表格的结构。
\du：列出所有用户。
\e：打开文本编辑器。
\conninfo：列出当前数据库和连接的信息。
\password uesrname :修改数据库用户密码。


\dn: 查看模式
\dS+: 查看系统表, S表示系统
```

### 自定义函数

- 基础概念

- schema

  - 类似于命名空间,或者是一个文件系统中的目录, schema不能嵌套,同一schema下不能有同名对象

  - pg_catalog存放了各系统表,内置函数

  - | 目录名                                                       | 用途                                       | ...  |
    | ------------------------------------------------------------ | ------------------------------------------ | ---- |
    | [`pg_aggregate`](http://www.postgres.cn/docs/10/catalog-pg-aggregate.html) | 聚集函数                                   |      |
    | [`pg_am`](http://www.postgres.cn/docs/10/catalog-pg-am.html) | 索引访问方法                               |      |
    | [`pg_amop`](http://www.postgres.cn/docs/10/catalog-pg-amop.html) | 访问方法操作符                             |      |
    | [`pg_amproc`](http://www.postgres.cn/docs/10/catalog-pg-amproc.html) | 访问方法支持过程                           |      |
    | [`pg_attrdef`](http://www.postgres.cn/docs/10/catalog-pg-attrdef.html) | 列默认值                                   | ✅    |
    | [`pg_attribute`](http://www.postgres.cn/docs/10/catalog-pg-attribute.html) | 表列(“属性”)                               | ✅    |
    | [`pg_authid`](http://www.postgres.cn/docs/10/catalog-pg-authid.html) | 认证标识符（角色）                         |      |
    | [`pg_auth_members`](http://www.postgres.cn/docs/10/catalog-pg-auth-members.html) | 认证标识符成员关系                         |      |
    | [`pg_cast`](http://www.postgres.cn/docs/10/catalog-pg-cast.html) | 转换（数据类型转换）                       |      |
    | [`pg_class`](http://www.postgres.cn/docs/10/catalog-pg-class.html) | 表、索引、序列、视图 （“关系”）            | ✅    |
    | [`pg_collation`](http://www.postgres.cn/docs/10/catalog-pg-collation.html) | 排序规则（locale信息）                     |      |
    | [`pg_constraint`](http://www.postgres.cn/docs/10/catalog-pg-constraint.html) | 检查约束、唯一约束、主键约束、外键约束     |      |
    | [`pg_conversion`](http://www.postgres.cn/docs/10/catalog-pg-conversion.html) | 编码转换信息                               |      |
    | [`pg_database`](http://www.postgres.cn/docs/10/catalog-pg-database.html) | 本数据库集簇中的数据库                     |      |
    | [`pg_db_role_setting`](http://www.postgres.cn/docs/10/catalog-pg-db-role-setting.html) | 每角色和每数据库的设置                     |      |
    | [`pg_default_acl`](http://www.postgres.cn/docs/10/catalog-pg-default-acl.html) | 对象类型的默认权限                         |      |
    | [`pg_depend`](http://www.postgres.cn/docs/10/catalog-pg-depend.html) | 数据库对象间的依赖                         |      |
    | [`pg_description`](http://www.postgres.cn/docs/10/catalog-pg-description.html) | 数据库对象上的描述或注释                   |      |
    | [`pg_enum`](http://www.postgres.cn/docs/10/catalog-pg-enum.html) | 枚举标签和值定义                           |      |
    | [`pg_event_trigger`](http://www.postgres.cn/docs/10/catalog-pg-event-trigger.html) | 事件触发器                                 |      |
    | [`pg_extension`](http://www.postgres.cn/docs/10/catalog-pg-extension.html) | 已安装扩展                                 |      |
    | [`pg_foreign_data_wrapper`](http://www.postgres.cn/docs/10/catalog-pg-foreign-data-wrapper.html) | 外部数据包装器定义                         |      |
    | [`pg_foreign_server`](http://www.postgres.cn/docs/10/catalog-pg-foreign-server.html) | 外部服务器定义                             |      |
    | [`pg_foreign_table`](http://www.postgres.cn/docs/10/catalog-pg-foreign-table.html) | 外部表信息                                 |      |
    | [`pg_index`](http://www.postgres.cn/docs/10/catalog-pg-index.html) | 索引信息                                   |      |
    | [`pg_inherits`](http://www.postgres.cn/docs/10/catalog-pg-inherits.html) | 表继承层次                                 |      |
    | [`pg_init_privs`](http://www.postgres.cn/docs/10/catalog-pg-init-privs.html) | 对象初始特权                               |      |
    | [`pg_language`](http://www.postgres.cn/docs/10/catalog-pg-language.html) | 编写函数的语言                             |      |
    | [`pg_largeobject`](http://www.postgres.cn/docs/10/catalog-pg-largeobject.html) | 大对象的数据页                             |      |
    | [`pg_largeobject_metadata`](http://www.postgres.cn/docs/10/catalog-pg-largeobject-metadata.html) | 大对象的元数据                             |      |
    | [`pg_namespace`](http://www.postgres.cn/docs/10/catalog-pg-namespace.html) | 模式                                       | ✅    |
    | [`pg_opclass`](http://www.postgres.cn/docs/10/catalog-pg-opclass.html) | 访问方法操作符类                           |      |
    | [`pg_operator`](http://www.postgres.cn/docs/10/catalog-pg-operator.html) | 操作符                                     |      |
    | [`pg_opfamily`](http://www.postgres.cn/docs/10/catalog-pg-opfamily.html) | 访问方法操作符族                           |      |
    | [`pg_partitioned_table`](http://www.postgres.cn/docs/10/catalog-pg-partitioned-table.html) | 有关表的分区键的信息                       |      |
    | [`pg_pltemplate`](http://www.postgres.cn/docs/10/catalog-pg-pltemplate.html) | 过程语言的模板数据                         |      |
    | [`pg_policy`](http://www.postgres.cn/docs/10/catalog-pg-policy.html) | 行安全策略                                 |      |
    | [`pg_proc`](http://www.postgres.cn/docs/10/catalog-pg-proc.html) | 函数和过程                                 |      |
    | [`pg_publication`](http://www.postgres.cn/docs/10/catalog-pg-publication.html) | 逻辑复制的发布                             |      |
    | [`pg_publication_rel`](http://www.postgres.cn/docs/10/catalog-pg-publication-rel.html) | 与发布映射的关系                           |      |
    | [`pg_range`](http://www.postgres.cn/docs/10/catalog-pg-range.html) | 范围类型的信息                             |      |
    | [`pg_replication_origin`](http://www.postgres.cn/docs/10/catalog-pg-replication-origin.html) | 已注册的复制源                             |      |
    | [`pg_rewrite`](http://www.postgres.cn/docs/10/catalog-pg-rewrite.html) | 查询重写规则                               |      |
    | [`pg_seclabel`](http://www.postgres.cn/docs/10/catalog-pg-seclabel.html) | 数据库对象上的安全标签                     |      |
    | [`pg_sequence`](http://www.postgres.cn/docs/10/catalog-pg-sequence.html) | 有关序列的信息                             |      |
    | [`pg_shdepend`](http://www.postgres.cn/docs/10/catalog-pg-shdepend.html) | 共享对象上的依赖                           |      |
    | [`pg_shdescription`](http://www.postgres.cn/docs/10/catalog-pg-shdescription.html) | 共享对象上的注释                           |      |
    | [`pg_shseclabel`](http://www.postgres.cn/docs/10/catalog-pg-shseclabel.html) | 共享数据库对象上的安全标签                 |      |
    | [`pg_statistic`](http://www.postgres.cn/docs/10/catalog-pg-statistic.html) | 规划器统计                                 |      |
    | [`pg_statistic_ext`](http://www.postgres.cn/docs/10/catalog-pg-statistic-ext.html) | 扩展的规划器统计                           |      |
    | [`pg_subscription`](http://www.postgres.cn/docs/10/catalog-pg-subscription.html) | 逻辑复制订阅                               |      |
    | [`pg_subscription_rel`](http://www.postgres.cn/docs/10/catalog-pg-subscription-rel.html) | 订阅的关系状态                             |      |
    | [`pg_tablespace`](http://www.postgres.cn/docs/10/catalog-pg-tablespace.html) | 本数据库集簇内的表空间                     |      |
    | [`pg_transform`](http://www.postgres.cn/docs/10/catalog-pg-transform.html) | 转换（将数据类型转换为过程语言需要的形式） |      |
    | [`pg_trigger`](http://www.postgres.cn/docs/10/catalog-pg-trigger.html) | 触发器                                     |      |
    | [`pg_ts_config`](http://www.postgres.cn/docs/10/catalog-pg-ts-config.html) | 文本搜索配置                               |      |
    | [`pg_ts_config_map`](http://www.postgres.cn/docs/10/catalog-pg-ts-config-map.html) | 文本搜索配置的记号映射                     |      |
    | [`pg_ts_dict`](http://www.postgres.cn/docs/10/catalog-pg-ts-dict.html) | 文本搜索字典                               |      |
    | [`pg_ts_parser`](http://www.postgres.cn/docs/10/catalog-pg-ts-parser.html) | 文本搜索分析器                             |      |
    | [`pg_ts_template`](http://www.postgres.cn/docs/10/catalog-pg-ts-template.html) | 文本搜索模板                               |      |
    | [`pg_type`](http://www.postgres.cn/docs/10/catalog-pg-type.html) | 数据类型                                   |      |
    | [`pg_user_mapping`](http://www.postgres.cn/docs/10/catalog-pg-user-mapping.html) | 将用户映射到外部服务器                     |      |

  - pg_class

    - 目录`pg_class`记录表和几乎所有具有列或者像表的东西。 这包括索引（但还要参见`pg_index`）、序列 （`pg_sequence`）、视图、物化视图、组合类型和TOAST表

    - | 名称           | 类型   | 引用               | 描述                                         |
      | -------------- | ------ | ------------------ | -------------------------------------------- |
      | `oid`          | `oid`  |                    | 行标识符（隐藏属性，必须被显式选择才会显示） |
      | `relname`      | `name` |                    | 表、索引、视图等的名字                       |
      | `relnamespace` | `oid`  | `pg_namespace.oid` | 包含该关系的名字空间的OID                    |

  - pg_attribute

    - 存储有关表列的信息。数据库中的每一个表的每一个列都恰好在`pg_attribute`中有一行。（这其中也会有索引的属性项，并且事实上所有具有`pg_class`项的对象在这里都有属性项)

    - | 名称           | 类型   | 引用           | 描述                                                         |
      | -------------- | ------ | -------------- | ------------------------------------------------------------ |
      | `attrelid`     | `oid`  | `pg_class.oid` | 列所属的表                                                   |
      | `attname`      | `name` |                | 列名                                                         |
      | `atttypid`     | `oid`  | `pg_type.oid`  | 列的数据类型                                                 |
      | `attnum`       | `int2` |                | 列的编号。一般列从1开始向上编号。系统列（如`oid`）则拥有（任意）负值编号。 |
      | `attisdropped` | `bool` |                | 该列被删除且不再有效。一个删除的列仍然物理存在于表中，但是会被分析器忽略并因此无法通过SQL访问。 |
      | `atttypmod`    | `int4` |                | `atttypmod`记录了在表创建时提供的类型相关数据（例如一个`varchar`列的最大长度）。它会被传递给类型相关的输入函数和长度强制函数。对于那些不需要`atttypmod`的类型，这个值通常总是为-1。 |
      | `attnotnull`   | `bool` |                | 这表示一个非空约束。                                         |
      | `atthasdef`    | `bool` |                | 该列有一个默认值，在此情况下在`pg_attrdef`目录中会有一个对应项来真正记录默认值。 |

  - pg_namespace

    - `pg_namespace`存储名字空间。名字空间是SQL模式之下的结构：每个名字空间拥有一个独立的表、类型等的集合，且其中没有名字冲突

    - | 名称       | 类型        | 引用            | 描述                                                         |
      | ---------- | ----------- | --------------- | ------------------------------------------------------------ |
      | `oid`      | `oid`       |                 | 行标识符（隐藏属性，必须被显式选择才会显示）                 |
      | `nspname`  | `name`      |                 | 名字空间的名字                                               |
      | `nspowner` | `oid`       | `pg_authid.oid` | 名字空间的拥有者                                             |
      | `nspacl`   | `aclitem[]` |                 | 访问权限，详见[GRANT](http://www.postgres.cn/docs/10/sql-grant.html)和[REVOKE](http://www.postgres.cn/docs/10/sql-revoke.html) |

  - pg_attrdef

    - 存储列的默认值,显示指定时才会有

    - | 名称      | 类型           | 引用                  | 描述                                         |
      | --------- | -------------- | --------------------- | -------------------------------------------- |
      | `oid`     | `oid`          |                       | 行标识符（隐藏属性，必须被显式选择才会显示） |
      | `adrelid` | `oid`          | `pg_class.oid`        | 该列所属的表                                 |
      | `adnum`   | `int2`         | `pg_attribute.attnum` | 列号                                         |
      | `adbin`   | `pg_node_tree` |                       | 列默认值的内部表示                           |
      | `adsrc`   | `text`         | 不推荐使用            | 默认值的人类可读的表示                       |

  - pg_table_is_visible

    - 该表/视图是否在搜索路径中可见, 返回boolean型
    - 如果一个表所在的模式在搜索路径中，并且没有同名的表出现在搜索路径的更早的地方，那么就说这个表视可见的。 它等效于表可以不带明确模式修饰进行引用。

  - format_type

    - format_type(type_oid,typemod)
    - 获取一个数据类型的SQL名称, 返回字符串

  - pg_get_expr

    - pg_get_expr(expr_text,relation_oid) / pg_get_expr(expr_text,relation_oid, pretty_bool)
    - 反编译一个表达式的内部形式，假设其中的任何Vars都引用第二个参数指出的关系, 返回text

  - substring

    - substring(string [from int] [for int])
    - 抽取字符串
    - substring(string from pattern)
    - 抽取匹配 POSIX 正则表达式的子字串
    - substring(string from pattern for escape)
    - 抽取匹配SQL正则表达式的子字串

  - 查看模式

  - 搜索路径

  - 一般来说，找表可以加Schema，如果不加就找search_path指定的Schema

### 规则

- `sql  CREATE [OR REPLACE] RULE name AS ON 事件       TO table_name [WHERE condition ]      DO [ALSO | INSTEAD] {NOTHING | 命令 | （命令 ; 命令 ......）}`
- 规则实际上 是一种命令转换机制或者命令宏
- 这种转换会在命令的执行开始之前进行

### error

- duplicate key value violates unique constraint "kick_privilege_pkey"
- kick_privilege 表的 kick_privilege_id_seq 小于 max(id), 导致插入数据时,新生成的id 已存在