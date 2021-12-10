## **database**
1. <span style="background-color: #ffaaaa">models.ForeignKey（</span>
   * related\_name
     * 定义之后就无法使用“\_set”查询，会被“related\_name”代替
     * 如果
   * db\_constraint=True
     * 是否在数据库中创建外键约束
2. <span style="background-color: #ffaaaa">@transaction.atomic（</span>
   * 开启数据库事物
3. 查询条件
   1. iexact： 忽略大小写的 like
   2. exact：  like
4. 优化
   1. <span style="background-color: #ffaaaa"><span style="background-color: #ffaaaa">select\_related\(\)</span></span>
      1. 主要针一对一和多对一关系进行优化
      2. 使用SQL的JOIN语句进行优化，通过减少SQL查询的次数来进行优化、提高性能
      3. 可以通过可变长参数指定需要select\_related的字段名。也可以通过使用双下划线“\_\_”连接字段名来实现指定的递归查询，没有指定的字段不会缓存，没有指定的深度不会缓存，如果要访问的话Django会再次进行SQL查询。
      4. 也可以通过depth参数指定递归的深度，Django会自动缓存指定深度内所有的字段。如果要访问指定深度外的字段，Django会再次进行SQL查询
      5. 也接受无参数的调用，Django会尽可能深的递归查询所有的字段。但注意有Django递归的限制和性能的浪费。
      6. Django \>= 1.7，链式调用的select\_related相当于使用可变长参数。Django \< 1.7，链式调用会导致前边的select\_related失效，只保留最后一个。
   2. <span style="background-color: #ffaaaa"><span style="background-color: #ffaaaa">prefetch\_related\(\)</span></span>
      1. prefetch\_related主要针一对多和多对多关系进行优化。
      2. prefetch\_related通过分别获取各个表的内容，然后用Python处理他们之间的关系来进行优化。
      3. 可以通过可变长参数指定需要
      4. 在Django \>= 1.7可以通过Prefetch对象来实现复杂查询，但低版本的Django好像只能自己实现。
      5. 作为prefetch\_related的参数，Prefetch对象和字符串可以混用。
      6. prefetch\_related的链式调用会将对应的prefetch添加进去，而非替换，似乎没有基于不同版本上区别。
      7. 可以通过传入None来清空之前的prefetch\_related。
   3. <span style="background-color: #ffaaaa">select\_related</span>
      1. 因为select\_related\(\)总是在单次SQL查询中解决问题，而prefetch\_related\(\)会对每个相关表进行SQL查询，因此select\_related\(\)的效率通常比后者高。
      2. 鉴于第一条，尽可能的用select\_related\(\)解决问题。只有在select\_related\(\)不能解决问题的时候再去想prefetch\_related\(\)。
      3. 你可以在一个QuerySet中同时使用select\_related\(\)和prefetch\_related\(\)，从而减少SQL查询的次数。
      4. 只有prefetch\_related\(\)之前的select\_related\(\)是有效的，之后的将会被无视掉。
      5. select\_related是通过join来关联多表，一次获取数据，存放在内存中，但如果关联的表太多，会严重影响数据库性能。prefetch\_related是通过分表，先获取各个表的数据，存放在内存中，然后通过Python处理他们之间的关联。
   4. bulk\_create
      1. Django（1.4之后）  model中批量导入数据
      2. 只连接一次数据库
5. BinaryField
   1. 在
      1. 用于存放原始二进制数据，或
      2. MessagePack 
      3. 传感器原始数据
      4. 压缩的数据。如
      5. 二进制数据串可以会很大，这将会拖慢数据库。此时应将内容保存在一个文件中，然后用
      6. 绝对不要通过
         1. 对数据库的读写比对文件系统更慢
         2. 你的数据库会变得越来越大，从而性能越来越低
         3. 此时访问文件需要经过
   2. BinaryField
   3. 压缩时不会产生编码问题，
6. 为什么用数字，而不直接写字符串
   1. 直接存 int 虽然可读性不高，但是效率高，有助于比较
   2. 修改状态的话可以不改动数据，只改动逻辑
   3. 字符串会降低查询和连接的性能，并会增加存储开销，因为引擎在处理查询和连接时会逐个比较字符串中的每一个字符，而数字型一个就够了