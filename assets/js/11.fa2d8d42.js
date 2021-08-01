(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(v,_,l){v.exports=l.p+"assets/img/44439150904cf87b19b596ab7b4b59be.44439150.png"},433:function(v,_,l){"use strict";l.r(_);var i=l(44),o=Object(i.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"_20-mysql"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_20-mysql"}},[v._v("#")]),v._v(" 20-MySQL")]),v._v(" "),i("h2",{attrs:{id:"问题"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[v._v("#")]),v._v(" 问题")]),v._v(" "),i("ol",[i("li",[v._v("MySQL查询执行过程\n"),i("ol",[i("li",[i("img",{attrs:{src:l(364),alt:"44439150904cf87b19b596ab7b4b59be.png"}})]),v._v(" "),i("li",[v._v("客户端发送一个查询给服务器。")]),v._v(" "),i("li",[v._v("服务器先检查查询缓存，如果命中，则直接返回缓存中的结果。如果没有没有命中，则进入下一阶段（解析器）。")]),v._v(" "),i("li",[v._v("服务器由解析器检查sql语法是否正确，然后由预处理器检查sql中的表和字段是否存在，最后由优化器生成执行计划。这一步很耗资源。")]),v._v(" "),i("li",[v._v("mysql根据优化器生成的执行计划，调用存储引擎的API来执行查询。")]),v._v(" "),i("li",[v._v("将结果返回给客户端。")])])]),v._v(" "),i("li",[v._v("MySQL客户端和服务端之间的通信\n"),i("ol",[i("li",[v._v("在mysql服务器和客户端之间的通信时“半双工”的。就是在同一时刻要么由客户向Mysql服务器发送数据，要么由MySQL服务器向客户端发送数据")])])]),v._v(" "),i("li",[v._v("varchar（16）和 varchar（256）的区别\n"),i("ol",[i("li",[v._v("对于varchar数据类型来说，硬盘上的存储空间虽然都是根据实际字符长度来分配存储空间的，但是对于内存来说，它是使用固定大小的内存块来保存值，也就是说varchar(200)是使用200个字符空间来保存值")]),v._v(" "),i("li",[v._v("varchar (N)中的N指的是该字段最多能存储多少个字符")]),v._v(" "),i("li",[v._v("索引大小：建立索引时如果没有限制索引的大小，索引长度会默认采用的该字段的长度")])])])]),v._v(" "),i("ul",[i("li",[v._v("完整的select语句")])]),v._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[v._v("select distinct *\n\nfrom 表名\n\nwhere ....\n\ngroup by ... having ...\n\norder by ...\n\nlimit start,count\n")])])]),i("ul",[i("li",[v._v("执行顺序为：\n"),i("ul",[i("li",[v._v("from 表名")]),v._v(" "),i("li",[v._v("where ....")]),v._v(" "),i("li",[v._v("group by ...")]),v._v(" "),i("li",[v._v("select distinct *")]),v._v(" "),i("li",[v._v("having ...")]),v._v(" "),i("li",[v._v("order by ...")]),v._v(" "),i("li",[v._v("limit start,count")])])]),v._v(" "),i("li",[v._v("表备份\n"),i("ul",[i("li",[v._v("mysqldump –u root –p 数据库名 > python.sql;")]),v._v(" "),i("li",[v._v("mysql -u root –p 新数据库名 < python.sql")])])])]),v._v(" "),i("h2",{attrs:{id:"mysql数据库引擎"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mysql数据库引擎"}},[v._v("#")]),v._v(" "),i("strong",[v._v("MySQL数据库引擎:")])]),v._v(" "),i("ul",[i("li",[i("p",[v._v("MySQL5.5版本之前默认的是MyISAM存储引擎，5.5版本之后是InnoDB。")])]),v._v(" "),i("li",[i("p",[v._v("现在最新的版本是8.0，速度相比5.7提高了两倍，而且默认字符集utf8mb4，在这以前是latin1。")])]),v._v(" "),i("li",[i("p",[v._v("MySQL的“utf8”实际上不是真正的UTF-8编码。“utf8”只支持每个字符最多三个字节，而真正的UTF-8是每个字符最多四个字节。MySQL的“utf8mb4”才是真正的“UTF-8”编码, 可以同其他程序的“UTF-8”兼容。")])]),v._v(" "),i("li",[i("p",[v._v("关于引擎：常用的就是MyISAM和InnoDB，除了这两个还有CSV（支持从数据库中拷入/拷出CSV文件）、HEAP（也称为MEMORY，通过在内存中创建临时表来存储数据，拥有极高的插入、更新和查询效率，缺点就是不稳定，发生 异常，或者重启电脑都会丢失数据）")])])]),v._v(" "),i("ol",[i("li",[i("p",[i("strong",[v._v("InnoDB")])]),v._v(" "),i("ol",[i("li",[v._v("Innodb引擎提供了对数据库事务四个基本要素"),i("strong",[v._v("ACID")]),v._v("的支持（原子性 atomicity，一致性 consistency，隔离性 isolation，持久性 durability）。")]),v._v(" "),i("li",[v._v("并且还提供了行级锁和外键的约束，同时也支持表锁。InnoDB 的行级锁（默认）基于索引，如果用不到索引，InnoDB 则对表中的所有记录加锁，实际效果就和表锁一样。")]),v._v(" "),i("li",[v._v("大部分情况都是使用行级锁，它的粒度小，写操作不锁定全表。所以在并发度较高的场景下使用InnoDB会提升效率的。它的设计的目标就是处理大数据容量的数据库系统，")]),v._v(" "),i("li",[v._v("InnoDB更适合写密集的的表，适合作为线上事物型数据库。")])])]),v._v(" "),i("li",[i("p",[i("strong",[v._v("MyISAM")])]),v._v(" "),i("ol",[i("li",[v._v("不提供事务的支持，也不支持行级锁和外键，只支持表锁。")]),v._v(" "),i("li",[v._v("MyISAM可以支持查询和插入操作的并发进行.而且大量的insert操作时比较快，但是大量update时速度就不尽人意了。")]),v._v(" "),i("li",[v._v("如果表的读操作远远多于写操作时，并且不需要事务的支持的。可以将MyIASM作为数据库引擎的首选，它强调的是性能，就读取数据而言比InnoDB更快。")]),v._v(" "),i("li",[v._v("MyISAM更适合读密集的表，适用于ROLAP数据仓库")])])]),v._v(" "),i("li",[i("p",[v._v("事务隔离级别")]),v._v(" "),i("ol",[i("li",[v._v("可重复读（Repeatable read）\n"),i("ul",[i("li",[v._v("避免脏读，不可重复读的发生")]),v._v(" "),i("li",[v._v("MySQL默认隔离级别")]),v._v(" "),i("li",[v._v("不过会有幻读现象，InnoDB引擎可以通过next-key locks机制来避免幻读")])])]),v._v(" "),i("li",[v._v("序列化（Serializable ）\n"),i("ul",[i("li",[v._v("该隔离级别下事务都是串行顺序执行的，MySQL 数据库的 InnoDB 引擎会给读操作隐式加一把读共享锁，")]),v._v(" "),i("li",[v._v("从而避免了脏读、不可重读复读和幻读问题。")]),v._v(" "),i("li",[v._v("但是执行效率奇差，性能开销也最大")])])]),v._v(" "),i("li",[v._v("其他\n"),i("ol",[i("li",[v._v("快照读：既能保证一致性又不加锁的读也被称为“快照读（Snapshot Read）”")]),v._v(" "),i("li",[v._v("幻读：在一次事务里面，多次查询之后，结果集的个数不一致的情况叫做幻读。而多出来或者少的哪一行被叫做 幻行\n"),i("ol",[i("li",[v._v("幻读是由于“插入或者删除操作（Insert or Delete）”而产生的")]),v._v(" "),i("li",[v._v("原因：行锁只能锁住行，即使把所有的行记录都上锁，也阻止不了新插入的记录。")]),v._v(" "),i("li",[v._v("解决办法：\n"),i("ol",[i("li",[v._v("在快照读读情况下，mysql通过mvcc来避免幻读。\n"),i("ol",[i("li",[v._v("mvcc： Multi-Version Concurrency Control（多版本并发控制）。是乐观锁的一种实现方式")])])]),v._v(" "),i("li",[v._v("在当前读读情况下，mysql通过next-key来避免幻读\n"),i("ol",[i("li",[v._v("当前读：读取最新版本的记录, 没有快照。 在InnoDB中，当前读取根本不会创建任何快照。")]),v._v(" "),i("li",[v._v("next-key：锁定一个范围，防止insert或者delete 带来的幻读，对于唯一索引，会转换为行级锁")])])])])])])])])]),v._v(" "),i("li",[v._v("总结\n"),i("ol",[i("li",[v._v("为什么会出现“脏读”？因为“select”操作没有规矩。")]),v._v(" "),i("li",[v._v("为什么会出现“不可重复读”？因为“update”操作没有规矩。")]),v._v(" "),i("li",[v._v("为什么会出现“幻读”？因为“insert”和“delete”操作没有规矩。")]),v._v(" "),i("li",[v._v("“读未提（Read Uncommitted）”能预防啥？啥都预防不了。")]),v._v(" "),i("li",[v._v("“串行化（Serializable）”能预防啥？排排坐，吃果果，有效避免“脏读”、“不可重复读”、“幻读”，不过效果谁用谁知道。")])])])])])]),v._v(" "),i("table",[i("thead",[i("tr",[i("th",[v._v("隔离级别")]),v._v(" "),i("th",[v._v("脏读（Dirty Read）")]),v._v(" "),i("th",[v._v("不可重复读（NonRepeatable Read）")]),v._v(" "),i("th",[v._v("幻读（Phantom Read）")])])]),v._v(" "),i("tbody",[i("tr",[i("td",[v._v("读未提交")]),v._v(" "),i("td",[v._v("1")]),v._v(" "),i("td",[v._v("1")]),v._v(" "),i("td",[v._v("1")])]),v._v(" "),i("tr",[i("td",[v._v("读已提交")]),v._v(" "),i("td",[v._v("0")]),v._v(" "),i("td",[v._v("1")]),v._v(" "),i("td",[v._v("1")])]),v._v(" "),i("tr",[i("td",[v._v("可重复读（Repeatable read）")]),v._v(" "),i("td",[v._v("0")]),v._v(" "),i("td",[v._v("0")]),v._v(" "),i("td",[v._v("1")])]),v._v(" "),i("tr",[i("td",[v._v("序列化（Serializable）")]),v._v(" "),i("td",[v._v("0")]),v._v(" "),i("td",[v._v("0")]),v._v(" "),i("td",[v._v("0")])])])]),v._v(" "),i("h2",{attrs:{id:"索引"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[v._v("#")]),v._v(" "),i("strong",[v._v("索引")])]),v._v(" "),i("ol",[i("li",[i("p",[v._v("MySQL索引的类型：")]),v._v(" "),i("ol",[i("li",[v._v("主键（聚集）索引，非聚集索引（普通索引、全文索引，唯一索引（unique），），\n"),i("ol",[i("li",[v._v("主键索引是唯一索引的特殊类型。求主键中的每个值是唯一的，并且不能为空")]),v._v(" "),i("li",[v._v("聚集索引表中各行的物理顺序与键值的逻辑（索引）顺序相同，每个表只能有一个。MySQL里主键就是聚集索引。聚集索引在叶子节点存储的是表中的数据。")]),v._v(" "),i("li",[v._v("非聚集索引指定表的逻辑顺序。数据存储在一个位置，索引存储在另一个位置，索引中包含指向数据存储位置的指针。可以理解为：非聚集索引在叶子节点存储的是主键和索引列。使用非聚集索引查询出数据时，拿到叶子节点上的主键，再去根据主键查到想要查找的数据，因此速度会慢一点。")])])])])]),v._v(" "),i("li",[i("p",[v._v("特点")]),v._v(" "),i("ol",[i("li",[v._v("可以加快数据库的检索速度,但是会降低插入、删除、修改等维护任务的速度。")]),v._v(" "),i("li",[v._v("索引需要占物理和内存空间，所以不要建太多，注意平衡。")]),v._v(" "),i("li",[v._v("最左匹配原则（最左前缀原则）\n"),i("ol",[i("li",[v._v("联合索引可以包含最多16列")]),v._v(" "),i("li",[v._v("(col1, col2, col3)这个联合索引的所有前缀 就是(col1), (col1, col2), (col1, col2, col3), 包含这些列的查询都会启用索引查询.\n"),i("ul",[i("li",[v._v("(col1, col3)会启用(col1)的索引查询")])])]),v._v(" "),i("li",[v._v("其他所有不在最左前缀里的列都不会启用索引, 即使包含了联合索引里的部分列 也不行. 即上述中的(col2), (col3), (col2, col3) 都不会启用索引去查询.")])])])])]),v._v(" "),i("li",[i("p",[v._v("Mysql支持Hash索引和B+树索引两种")]),v._v(" "),i("ol",[i("li",[i("p",[i("strong",[v._v("B+树索引:")])]),v._v(" "),i("ol",[i("li",[v._v("将无序的数据变成有序(相对)-----\x3e>底层结构就是B+树")]),v._v(" "),i("li",[v._v("B+树检索速度相当较快,所以就会提高检索速度")]),v._v(" "),i("li",[v._v("但因为B+树是一种平衡树,对这颗树增删改的话，那肯定会破坏它的原有结构,而要维持平衡树的结构就得做一些额外的工作,因此也就降低了增删改的效率\n"),i("ol",[i("li",[v._v("平衡树:一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡树")])])]),v._v(" "),i("li",[v._v("MySQL索引为什么采用B+树这种宽树，而不是二叉树，\n"),i("ol",[i("li",[v._v("B+树的数据全部存放在叶子节点中，非叶子节点用来做索引，而叶子节点中有一个指针指向一下个叶子节点。做这个优化的目的是为了提高区间访问的性能。而正是这个特性决定了B+树更适合用来存储外部数据")]),v._v(" "),i("li",[v._v("好处：\n"),i("ol",[i("li",[v._v("磁盘读写代价低。把节点分块，磁盘I/O变少")]),v._v(" "),i("li",[v._v("查询效率稳定")]),v._v(" "),i("li",[v._v("数据都存在叶子节点，方便扫库")])])])])])])]),v._v(" "),i("li",[i("p",[i("strong",[v._v("哈希索引")])]),v._v(" "),i("ol",[i("li",[v._v("就是采用一定的哈希算法，把键值换算成新的哈希值")]),v._v(" "),i("li",[v._v("只需一次哈希算法即可立刻定位到相应的位置，速度非常快")]),v._v(" "),i("li",[v._v("局限性:\n"),i("ol",[i("li",[v._v("哈希索引没办法利用索引完成排序")]),v._v(" "),i("li",[v._v("不支持最左匹配原则")]),v._v(" "),i("li",[v._v("在有大量重复键值情况下，哈希索引的效率也是极低的--\x3e哈希碰撞问题")]),v._v(" "),i("li",[v._v("不支持范围查询,同样也就不支持模糊查询.")])])])])])])])]),v._v(" "),i("h2",{attrs:{id:"锁"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[v._v("#")]),v._v(" 锁")]),v._v(" "),i("ol",[i("li",[i("p",[i("strong",[v._v("锁")])]),v._v(" "),i("ol",[i("li",[v._v("我们在操作数据库的时候，可能会由于并发问题而引起的数据的不一致性（数据冲突）,这时候就需要锁了.比较幸运的是锁会隐式添加, 对于UPDATE、DELETE、INSERT语句，InnoDB会自动给涉及数据集加排他锁（X);MyISAM在执行查询语句SELECT前，会自动给涉及的所有表加读锁，在执行更新操作（UPDATE、DELETE、INSERT等）前，会自动给涉及的表加写锁，这个过程并不需要用户干预")])])]),v._v(" "),i("li",[i("p",[v._v("分类:")]),v._v(" "),i("ol",[i("li",[i("p",[v._v("按使用方式")]),v._v(" "),i("ol",[i("li",[v._v("乐观锁/ 悲观锁")])])]),v._v(" "),i("li",[i("p",[v._v("按照粒度")]),v._v(" "),i("ul",[i("li",[v._v("表级锁(MyISAM，CSV，Memory)----共享读锁,独占写锁")]),v._v(" "),i("li",[v._v("行级锁(InnoDB)----共享锁(S) / 排它锁(X)")]),v._v(" "),i("li",[v._v("页级锁(Berkeley DB—开源的文件数据库，2006年被ORACAL收购)")])])])])]),v._v(" "),i("li",[i("p",[i("strong",[v._v("乐观锁:")])]),v._v(" "),i("ol",[i("li",[v._v("不是数据库自带的,需要我们自己去实现.一般我们添加一个版本字段来实现")]),v._v(" "),i("li",[v._v("在操作数据库(更新操作)时,想法很乐观,认为这次操作不会导致冲突,并不进行其他的特殊处理(不加锁),而是在进行更新后,再去判断是否有冲突")])])]),v._v(" "),i("li",[i("p",[i("strong",[v._v("实现:")])]),v._v(" "),i("ol",[i("li",[i("p",[v._v("在表中的数据进行操作时(更新)，先给数据表加一个版本(version)字段")])]),v._v(" "),i("li",[i("p",[v._v("每操作一次，将那条记录的版本号加1。也就是先查询出那条记录，获取出version字段,")])]),v._v(" "),i("li",[i("p",[v._v("如果要对那条记录进行操作(更新),则先判断此刻version的值是否与刚刚查询出来时的version的值相等，如果相等，则说明这段期间，没有其他程序对其进行操作，则可以执行更新，将version字段的值加1；")])]),v._v(" "),i("li",[i("p",[v._v("如果更新时发现此刻的version值与刚刚获取出来的version的值不相等，则说明这段期间已经有其他程序对其进行操作了，则不进行更新操作。")])]),v._v(" "),i("li",[i("p",[v._v("乐观锁适用于写比较少的情况下（多读场景），即冲突真的很少发生的时候，这样可以省去了锁的开销，加大了系统的整个吞吐量。")])])])]),v._v(" "),i("li",[i("p",[i("strong",[v._v("悲观锁")])]),v._v(" "),i("ol",[i("li",[v._v("在操作数据时，认为此操作会出现数据冲突，所以在进行每次操作时都要通过获取锁才能进行对相同数据的操作,所以会耗费比较多的时间，悲观锁是由数据库自己实现了的，可以直接调用数据库的相关语句。")]),v._v(" "),i("li",[v._v("悲观锁涉及到另外两个锁:共享锁与排它锁\n"),i("ol",[i("li",[v._v("共享锁:\n"),i("ol",[i("li",[v._v("又被称为读锁，其他用户可以并发读取数据(不断加读锁)，但任何事务都不能获取数据上的排他锁，直到已释放所有共享锁。")]),v._v(" "),i("li",[v._v("共享锁下其它用户可以并发读取，查询数据。但不能修改，增加，删除数据。资源共享.。")]),v._v(" "),i("li",[v._v("在执行语句后面加上lock in share mode")])])]),v._v(" "),i("li",[v._v("排它锁:\n"),i("ol",[i("li",[v._v("又称为写锁。若事务T对数据对象A加上X锁，则只允许T读取和修改A，其它任何事务都不能再对A加任何类型的锁，直到T释放A上的锁。")]),v._v(" "),i("li",[v._v("在更新操作(INSERT、UPDATE 或 DELETE)过程中始终应用排它锁。")]),v._v(" "),i("li",[v._v("在执行语句后面加上for update")])])])])])])]),v._v(" "),i("li",[i("p",[v._v("行锁:")]),v._v(" "),i("ol",[i("li",[v._v("开销大，加锁慢；会出现死锁；锁定粒度小，发生锁冲突的概率低，并发度高")]),v._v(" "),i("li",[v._v("InnoDB存储引擎有3种行锁的算法，分别是：\n"),i("ol",[i("li",[v._v("Record Lock: 单个记录上的锁")]),v._v(" "),i("li",[v._v("Gap Lock: 间隙锁，锁定一个范围，但不包括记录本上")]),v._v(" "),i("li",[v._v("Next-Key Lock: Gap Lock+Record Lock，锁定一个范围，并且锁定记录本身")])])])])]),v._v(" "),i("li",[i("p",[v._v("表锁")]),v._v(" "),i("ol",[i("li",[v._v("开销小，加锁快；不会出现死锁；锁定力度大，发生锁冲突概率高，并发度最低")])])]),v._v(" "),i("li",[i("p",[v._v("页锁")]),v._v(" "),i("ol",[i("li",[v._v("开销和加锁速度介于表锁和行锁之间；会出现死锁；锁定粒度介于表锁和行锁之间，并发度一般")])])]),v._v(" "),i("li",[i("p",[v._v("死锁：")]),v._v(" "),i("ol",[i("li",[v._v("并发的问题就少不了死锁,幸运的是mysql的回滚会解决不少死锁问题,但还是存在。\n"),i("ol",[i("li",[v._v("两个（或以上）的session加锁顺序不一致")])])]),v._v(" "),i("li",[v._v("解决:\n"),i("ol",[i("li",[v._v("以固定的顺序访问表和行。")]),v._v(" "),i("li",[v._v("大事务拆小。大事务更倾向于死锁，如果业务允许，将大事务拆小。")]),v._v(" "),i("li",[v._v("在同一个事务中，尽可能做到一次锁定所需要的所有资源，减少死锁概率")]),v._v(" "),i("li",[v._v("在业务环境允许的情况下，尽量降低隔离级别")]),v._v(" "),i("li",[v._v("为表添加合理的索引。可以看到如果不走索引将会为表的每一行记录添加上锁，死锁的概率大大增大")])])])])])]),v._v(" "),i("h2",{attrs:{id:"sql-优化"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sql-优化"}},[v._v("#")]),v._v(" SQL 优化")]),v._v(" "),i("ol",[i("li",[v._v("MySQL大表优化\n"),i("ol",[i("li",[v._v("字段\n"),i("ol",[i("li",[v._v("尽量使用TINYINT、SMALLINT、MEDIUM_INT作为整数类型而非INT，如果非负则加上UNSIGNED")]),v._v(" "),i("li",[v._v("使用枚举或整数代替字符串类型")]),v._v(" "),i("li",[v._v("尽可能的使用 varchar")]),v._v(" "),i("li",[v._v("尽量使用TIMESTAMP而非DATETIME，（TIMESTAMP空间消耗少，操作方便）")]),v._v(" "),i("li",[v._v("避免使用NULL字段，很难查询优化且占用额外索引空间")]),v._v(" "),i("li",[v._v("用整型来存IP")])])]),v._v(" "),i("li",[v._v("索引\n"),i("ol",[i("li",[v._v("索引并不是越多越好，要根据查询有针对性的创建，考虑在WHERE和ORDER BY命令上涉及的列建立索引")]),v._v(" "),i("li",[v._v("应尽量避免在WHERE子句中对字段进行NULL值判断，否则将导致引擎放弃使用索引而进行全表扫描")]),v._v(" "),i("li",[v._v("不用外键，由程序保证约束db_constraint=False")]),v._v(" "),i("li",[v._v("尽量不用UNIQUE，由程序保证约束")])])]),v._v(" "),i("li",[v._v("查询SQL\n"),i("ol",[i("li",[v._v("不做列运算：SELECT id WHERE age + 1 = 10，任何对列的操作都将导致表扫描，")]),v._v(" "),i("li",[v._v("sql语句尽可能简单：一条sql只能在一个cpu运算；")]),v._v(" "),i("li",[v._v("大语句拆小语句，减少锁时间；一条大sql可以堵死整个库")]),v._v(" "),i("li",[v._v("不用SELECT *")]),v._v(" "),i("li",[v._v("不用函数和触发器，在应用程序实现")]),v._v(" "),i("li",[v._v("少用JOIN")]),v._v(" "),i("li",[v._v("尽量避免在WHERE子句中使用!=或<>操作符，否则引擎将放弃使用索引而进行全表扫描")]),v._v(" "),i("li",[v._v("OR改写成IN：OR的效率是n级别，IN的效率是log(n)级别，in的个数建议控制在200以内")]),v._v(" "),i("li",[v._v("对于连续数值，使用BETWEEN不用IN：")])])]),v._v(" "),i("li",[v._v("引擎\n"),i("ol",[i("li",[v._v("InnoDB\n"),i("ol",[i("li",[v._v("在并发度较高的场景下使用InnoDB会提升效率的。它的设计的目标就是处理大数据容量的数据库系统，")]),v._v(" "),i("li",[v._v("InnoDB更适合写密集的的表，适合作为线上事物型数据库。")])])]),v._v(" "),i("li",[v._v("MyISAM\n"),i("ol",[i("li",[v._v("如果表的读操作远远多于写操作时，并且不需要事务的支持的。可以将MyIASM作为数据库引擎的首选，")]),v._v(" "),i("li",[v._v("它强调的是性能，就读取数据而言比InnoDB更快。")]),v._v(" "),i("li",[v._v("MyISAM更适合读密集的表，适用于ROLAP数据仓库")])])])])])])]),v._v(" "),i("li",[v._v("系统调优参数")]),v._v(" "),i("li",[v._v("升级硬件")]),v._v(" "),i("li",[v._v("读写分离:v主库写，从库读")]),v._v(" "),i("li",[v._v("缓存")]),v._v(" "),i("li",[v._v("mysql内部：缓存区的设置")]),v._v(" "),i("li",[v._v("数据访问层：对SQL语句做缓存，利用 drf-extensions + Redis进行缓存，减少服务器的访问次数")]),v._v(" "),i("li",[v._v("web层：页面静态化")]),v._v(" "),i("li",[v._v("浏览器客户端：客户端缓存")]),v._v(" "),i("li",[v._v("表拆分：垂直/水平拆分")]),v._v(" "),i("li",[v._v("代理架构：通过独立的中间件来统一管理所有数据源和数据分片整合")]),v._v(" "),i("li",[v._v("选择NoSQL")]),v._v(" "),i("li",[v._v("面试常见\n"),i("ol",[i("li",[v._v("表的设计\n"),i("ol",[i("li",[v._v("架构方向：\n"),i("ol",[i("li",[v._v("对数据库性能影响较大的特性少用；应将计算集中在服务层，解放数据库CPU；数据库擅长索引和存储，勿让数据库背负重负")]),v._v(" "),i("li",[v._v("必须使用默认的InnoDB存储引擎--支持事务、行级锁、并发性能好、CPU及内存缓存页优化使得资源利用率高")]),v._v(" "),i("li",[v._v("表和字段使用中文注释--便于后人理解")]),v._v(" "),i("li",[v._v("使用默认utf8mb4字符集--标准、万国码、无乱码风险、无需转码")]),v._v(" "),i("li",[v._v("禁止使用触发器、视图、存储过程和event")]),v._v(" "),i("li",[v._v("禁止使用外键--外键导致表之间的耦合，update和delete操作都会涉及相关表，影响性能")]),v._v(" "),i("li",[v._v("禁止存大文件或者照片--在数据库里存储URI")])])]),v._v(" "),i("li",[v._v("字段：\n"),i("ol",[i("li",[v._v("必须把字段定义为NOT NULL并设置默认值--null值需要更多的存储空间；")]),v._v(" "),i("li",[v._v("禁止使用TEXT/BOLB字段类型--浪费磁盘和内存空间，非必要的大量的大字段查询导致内存命中率降低，影响数据库性能")])])]),v._v(" "),i("li",[v._v("索引：\n"),i("ol",[i("li",[v._v("单表索引控制在5个以内")]),v._v(" "),i("li",[v._v("联合索引不超过5个字段--超过5个起不到有效过滤数据的效果")]),v._v(" "),i("li",[v._v("建立组合索引，必须把区分度高的字段放在前边--更加有效的过滤数据")]),v._v(" "),i("li",[v._v("数据区分度不大的字段不应使用索引--例如：性别只有男，女，每次过滤数据很少")])])])])]),v._v(" "),i("li",[v._v("SQL查询规范：\n"),i("ol",[i("li",[v._v("禁止使用select *，只获取需要的字段--查询很多无用字段，增加CPU/IO/NET消耗；不能有效的利用覆盖索引；增删字段易出bug")]),v._v(" "),i("li",[v._v("禁止使用属性的隐式转换select * from customer where phone=123123--会导致全表扫描，不能命中索引")]),v._v(" "),i("li",[v._v("禁止在where条件上使用函数和计算")]),v._v(" "),i("li",[v._v("禁止负向查询（NOT != <> !< !> NOT IN NOT LIKE）和%开头的like（前导模糊查询）--会导致全表扫描")]),v._v(" "),i("li",[v._v("禁止大表使用JOIN查询和子查询--会产生临时表，消耗较多CPU和内存，影响数据库性能")]),v._v(" "),i("li",[v._v("在属性上进行计算不能命中索引--如 select * from order where YEAR(date) <= '2017'不能命中索引导致全表扫描")]),v._v(" "),i("li",[v._v("明知道只有一条记录返回，建议加上limit 1")])])])])])])])}),[],!1,null,null,null);_.default=o.exports}}]);