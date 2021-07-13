
### 常见问题
1. 缓存击穿: 
   1. 指某个**key一直在扛着高并发**, 也就是说大量的请求都是获取这个key对应的值. 而这个key在某个时间突然失效了, 那就意味着大量的请求去查询数据库, 很可能导致数据库被击穿.
   2. 解决办法: 不设置过期时间, 如果该key的数据更新了, 那么就通过互斥锁的的方式将其更新(保证数据一致性).
2. 缓存雪崩:
   1. **在某个时间点, 大量的key失效, 导致大量请求获取不到数据而去请求数据库**. 导致数据库压力剧增, 直接宕机, 就算重启还是会因为巨大流量导致宕机.
   2. 解决方案:
      1. 加随机值: 设置key的过期时间的时候再加一个随机值
      2. 加锁: 在多个请求同时到达业务系统的时候, 只能有一个线程获取到锁, 去查询数据
         1. 可以很好的保护数据库, 缺点就是并发度极低. 可以配合线程池, 控制一定的并发数
         2. 可以考虑[令牌桶, 漏桶](https://www.jianshu.com/p/a59c13e70582)来控制并发
3. 缓存穿透:
   1. 某个不存在的key一直被访问, 然后数据库也没有这样的数据, 最终导致访问该key的所有请求都直接请求到数据库.
   2. 解决方案:
      1. 缓存空数据, 如果不存在, 直接缓存null
      2. 布隆过滤器
4. 缓存预热
   1. 将一些可能经常使用的数据在系统启动的时候预先设置到缓存中
5. 缓存降级
   1. 系统可以根据一些关键数据进行自动降级，降级的最终目的是保证核心服务可用，即使是有损的

### 外部链接
1. [cache相关理论](http://novoland.github.io/cache/2014/07/26/Cache%20%E7%9B%B8%E5%85%B3%E7%90%86%E8%AE%BA.html)

### 开发规范

- [阿里云开发规范](https://yq.aliyun.com/articles/531067)
- 按类划分, 不要多个业务共用
- 越简单越容易管理

### 进阶命令

#### scan

- 代替 keys

```
SCAN cursor [MATCH pattern] [COUNT count]
```

#### SLOW LOG 慢查询日志

- Redis 服务器将所有的慢查询日志保存在服务器状态的 `slowlog` 链表中， 每个链表节点都包含一个 `slowlogEntry` 结构， 每个 `slowlogEntry` 结构代表一条慢查询日志

```
typedef struct slowlogEntry {
    // 唯一标识符
    long long id;

    // 命令执行时的时间，格式为 UNIX 时间戳
    time_t time;

    // 执行命令消耗的时间，以微秒为单位
    long long duration;

    // 命令与命令参数
    robj **argv;

    // 命令与命令参数的数量
    int argc;

} slowlogEntry;
```

- 配置方法
- 修改配置文件 `redis.conf` ，重启redis
- 动态设置

```
# 慢查询的阈值（单位：微秒）
# 不要设置过大，默认为 10 ms，通常可设置为 1ms。
# =0: 记录所有;  <0: 不记录任何命令
slowlog-log-slower-than

# 指定服务器最多保存多少条慢查询日志, 默认值为 128
# 先进先出的队列; 固定长度; 保存在内存内, 可以定期持久化内存
# 不要设置过小，通常可设置在1000左右
slowlog-max-len

CONFIG SET slowlog-log-slower-than 0
```

- 查询慢日志
- SLOWLOG GET [n]
- SLOWLOG LEN
- SLOWLOG RESET

#### rename-command

- 在conf 配置文件中将一些高危命令重命名

```
rename-command flushall flushallall
rename-command keys keysys
```

#### bigkeys

- 检查大 key.
- redis-cli -p 6380 --bigkeys
- string类型可以筛选出最占内存的key, 其他类型只能筛选出元素最多的key

#### monitor

- 查看执行来源

#### info

- 全面反映redis运行情况

#### config

- 热修改 配置文件

```
config get *
config set xxx

# 将热修改的参数刷到redis配置文件, 避免重启时被原先的配置覆盖
config rewrite
```

#### set

- SET key value [EX seconds] [PX milliseconds] [NX|XX]

### Redis 分布式锁

- redlock
- http://redis.cn/topics/distlock.html

### Redis 数据过期策略

- 设置过期时间
- expire key time(以秒为单位)--这是最常用的方式
- setex(String key, int seconds, String value)–字符串独有的方式
- 过期策略
- 过期方式
  - 被动删除：
  - 当读/写一个已经过期的key时，会触发惰性删除策略，直接删除掉这个过期key
  - 对CPU友好,但是对内存不友好, 甚至会造成内存泄漏
  - 主动删除(定期删除)：
  - 由于惰性删除策略无法保证冷数据被及时删掉，所以Redis会定期主动淘汰一批已过期的key
  - 合理设置删除操作的执行时长（每次删除执行多长时间）和执行频率（每隔多长时间做一次删除）
  - 常规的自检主要包括:
    - 更新服务器的各类统计信息，比如时间、内存占用、数据库占用情况等。
    - 清理数据库中的过期键值对。
    - 对不合理的数据库进行大小调整。
    - 关闭和清理连接失效的客户端。
    - 尝试进行 AOF 或 RDB 持久化操作。
    - 如果服务器是主节点的话，对附属节点进行定期同步。
    - 如果处于集群模式的话，对集群进行定期同步和连接测试。
  - maxmemory
  - 当前已用内存超过maxmemory限定时，触发主动清理策略
    - volatile-lru：只对设置了过期时间的key进行LRU（默认值）
    - allkeys-lru ： 删除lru算法的key
    - volatile-random：随机删除即将过期key
    - allkeys-random：随机删除
    - volatile-ttl ： 删除即将过期的
    - noeviction ： 永不过期，返回错误当mem_used内存已经超过maxmemory的设定
- redis 采用的过期策略
- 惰性删除+定期删除
- 4、RDB对过期key的处理

过期key对RDB没有任何影响

- 从内存数据库持久化数据到RDB文件
  - 持久化key之前，会检查是否过期，过期的key不进入RDB文件
- 从RDB文件恢复数据到内存数据库
  - 数据载入数据库之前，会对key先进行过期检查，如果过期，不导入数据库（主库情况）
- 5、AOF对过期key的处理

过期key对AOF没有任何影响

- 从内存数据库持久化数据到AOF文件：
  - 当key过期后，还没有被删除，此时进行执行持久化操作（该key是不会进入aof文件的，因为没有发生修改命令）
  - 当key过期后，在发生删除操作时，程序会向aof文件追加一条del命令（在将来的以aof文件恢复数据的时候该过期的键就会被删掉）
- AOF重写
  - 重写时，会先判断key是否过期，已过期的key不会重写到aof文件

### 最大内存淘汰策略

- maxmemory-policy
- volatile-lru
- OOM

### 事务

Redis 通过 MULTI 、 DISCARD 、 EXEC和 WATCH 四个命令来实现事务功能

- MULTI # 开启事务

- EXEC # 触发事务

- \``` redis> MULTI OK

  redis> SET book-name "Mastering C++ in 21 days" QUEUED

  redis> GET book-name QUEUED

  redis> SADD tag "C++" "Programming" "Mastering Series" QUEUED

  redis> SMEMBERS tag QUEUED

  redis> EXEC 1) OK 2) "Mastering C++ in 21 days" 3) (integer) 3 4) 1) "Mastering Series" 2) "C++" 3) "Programming" ```

- 事务执行过程

- 开始事务。

- 命令入队。

- 执行事务。

- DISCARD

- 用于取消一个事务,清空客户端的整个事务队列,然后将客户端从事务状态调整回非事务状态

- WATCH

- 用于在事务开始之前监视任意数量的键： 当调用 EXEC 命令执行事务时， 如果任意一个被监视的键已经被其他客户端修改了， 那么整个事务不再执行， 直接返回失败

### Pipeline 与事务

#### 1. Pipeline概念

`Redis`客户端执行一条命令分为以下四个步骤:

1.发送命令 2.命令排队 3.命令执行 4.返回结果

其中,第一步+第四步称为`Round Trip Time`(`RTT`,往返时间).

![图1.1 没有Pipeline执行n次命令](https://segmentfault.com/img/bVV916?w=1372&h=744)

`Redis`提供了批量操作命令(例如`mget`,`mset`等),有效的节约`RTT`.但大部分命令是不支持批量操作的,例如要执行`n`次`hgetall`命令,并没有`mhgetall`存在,需要消耗`n`次`RTT`.`Redis`的客户端和服务端可能不是在不同的机器上.例如客户端在北京,`Redis`服务端在上海,两地直线距离为1300公里,那么1次`RTT`时间=`1300×2/(300000×2/3)=13毫秒`(光在真空中传输速度为每秒30万公里,这里假设光纤的速度为光速的2/3),那么客户端在1秒内大约只能执行80次左右的命令,这个和`Redis`的高并发高吞吐背道而驰.

`Pipeline`(流水线)机制能改善上面这类问题,它能将一组`Redis`命令进行组装,通过一次`RTT`传输给`Redis`,再将这组`Redis`命令按照顺序执行并装填结果返回给客户端.**图1.1**中未使用`Pipeline`执行了n次命令,整个过程需要n个`RTT`.

`Pipeline`并不是什么新的技术和机制,很多技术上都使用过.而且`RTT`在不同网络环境下会有不同,例如同机房和同机器会比较快,跨机房跨地区会比较慢.`Redis`命令真正执行的时间通常在微秒级别,所以才会有`Redis`性能瓶颈是网络这样的说法.

#### 2. 原生批量命令与Pipeline对比

可以使用`Pipeline`模拟出批量操作的效果,但是在使用时需要质疑它与原生批量命令的区别,具体包含几点:

- 原生批量命令是原子性,`Pipeline`是非原子性的.
- 原生批量命令是一个命令对应多个`key`,`Pipeline`支持多个命令.
- 原生批量命令是`Redis`服务端支持实现的,而`Pipeline`需要服务端与客户端的共同实现.

#### 3. Pipeline总结

`Pipeline`虽然好用,但是每次`Pipeline`组装的命令个数不能没有节制,否则一次组装`Pipeline`数据量过大,一方面会增加客户端的等待时机,另一方面会造成一定的网络阻塞,可以将一次包含大量命令的`Pipeline`拆分成多次较小的`Pipeline`来完成.

`Pipeline`只能操作一个`Redis`实例,但即使在分布式`Redis`场景中,也可以作为批量操作的重要优化方法.

### 事务

为了保证多条命令组合的原子性,`Redis`提供了简单的事务以及集成`Lua`脚本来解决这个问题.

熟悉关系型数据库的开发者应该对事务比较了解,简单地说,事务表示一组动作,要么全部成功,要不全部不成功.例如在在电商网站中**用户**购买**商品A**那么需要将**商品A**的库存-1,并创建一个订单.这两个操作要么远不执行成功,要么全部执行不成功,否则会出现数据不一致的情况.

`Redis`提供了简单的功能,将一组需要一起执行的命令放到`multi`和`exec`两个命令之间.`multi`命令代表事务的开始,`exec`命令代表事务结束,他们之间的命令是原子顺序执行的. 例如上述的用户购买商品问题:

```
    127.0.0.1:6379> multi
    OK
    127.0.0.1:6379> hincrby commodity:a:detail stock -1
    QUEUE
    127.0.0.1:6379> rpush user:1:orders {"commodity":'a',..}
    QUEUE
```

可以看到数据操作命令返回的结果是`QUEUE`,代表命令并没有真正执行,而是暂时保存在`Redis`中.如果此时另一个客户端执行`llen user:1:orders`返回结果为0.

```
    127.0.0.1:6379> llen user:1:orders
    (integer) 0
```

只有当`exec`执行后,用户购买商品的行为才算完成,如下两个结果对应`hincrby`和`rpush`命令.

```
    127.0.0.1:6379> exec
    1) (integer) 4  # 商品原库存为5
    2) (integer) 1
    127.0.0.1:6379> llen user:1:orders
    (integer) 1
```

如果要停止事务的执行,可以使用`discard`命令替代`exec`命令即可.

```
    127.0.0.1:6379> discard
    OK
    127.0.0.1:6379> llen user:1:orders
    (integer) 0
```

如果事务中的命令出现错误,`Redis`的处理机制也不尽相同.

1.**命令错误** 例如下面操作错将`set`写成了`sett`,属于语法错误,会造成整个事务无法执行,`key`和`counter`的值未发生变化:

```
    127.0.0.1:6379> mget key counter
    1) "hello"
    2) "100"
    127.0.0.1:6379> multi
    OK
    127.0.0.1:6379> sett key world
    (error) ERR unknown command 'sett'
    127.0.0.1:6379> incr counter
    QUEUE
    127.0.0.1:6379> exec
    (error) EXECABORT Transaction discarded because of previous errors.
    127.0.0.1:6379> mget key counter
    1) "hello"
    2) "100"
```

2.**运行时错误** 例如用户购买商品,误把`rpush`写成了`zadd`

```
    127.0.0.1:6379> multi
    OK
    127.0.0.1:6379> hincrby commodity:a:detail stock -1
    QUEUED
    127.0.0.1:6379> zadd user:1:orders {"commodity":'a',..}
    QUEUED
    127.0.0.1:6379> exec
    1) (integer) 1
    2) (error) WRONGTYPE Operation against a key holding the wrong kind of value.
    127.0.0.1:6379> hget commodity:a:detail stack
    (integer) 3
```

可以看到`Redis`并不支持回滚功能,`hincrby commodity:a:detail stock -1`命令已经执行成功,开发者需要自己修改这类问题.
