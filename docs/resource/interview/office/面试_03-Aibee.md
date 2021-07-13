# 面试 03-Aibee

* 问题
    1. 关于ai技术，爱笔铺的很开，想计算机视觉，语音识别大数据分析，机器人等。商业落地的话选择的是 线下零售，线下旅游。这些AI技术表现在这两个落地的产品中是如何体现的。
        * 当初选择这个切入点是有什么特殊的原因吗？我了解到线下零售应该是有很多大公司也在布局的。
    2. 方便说一下下一步的目标，或者落地方向是什么吗
    3. AI平台可以稍微讲解一下吗，
        * 现在到什么地步了，进展如何，大概有几个人
    4. 我本来还想再昨天晚上去官网再看看，但是一直进不去，所以就暂时是这些了

1. Linux分段，分页。
2. Redis进程模型
    * 单进程，单线程
3. Nginx进程模型
    * 多进程，单线程
    * 异步非阻塞：
4. MySQL索引为什么采用B\+树这种宽树，而不是二叉树，
    1. B树，B\+树，B\*树
        1. B树 
        2. B\+树   
            1. B\+树的关键字全部存放在叶子节点中，非叶子节点用来做索引，而叶子节点中有一个指针指向一下个叶子节点。做这个优化的目的是为了提高区间访问的性能。而正是这个特性决定了B\+树更适合用来存储外部数据
    2. 好处：
        1. 磁盘读写代价低。把节点分块，磁盘I/O变少
        2. 查询效率稳定
        3. 数据都存在叶子节点，方便扫库
5. ACID
    1. 原子性，一致性，隔离性，持久性
6. 隔离级别
    1. 隔离级别           脏读（Dirty Read）          不可重复读（NonRepeatable Read）     幻读（Phantom Read）
    2. 读未提交（Read uncommitted）        1                         1                    1
    3. 读已提交（Read committed）            0                         1                     1
    4. 可重复读（Repeatable read）          0                         0                     1
        * 避免脏读，不可重复读的发生
    5. 串行化（Serializable ）                    0                          0                     0
7. Python2中的库，Python3没有，如何解决。
8. 避免GIL
    1. 使用python3.4或更高版本（对GIL机制进行了优化）
    2. 使用多进程替换多线程（多进程之间没有GIL，但是进程本身的资源消耗较多）
    3. 使用C编写高性能模块（with nogil跳出GIL限制）
    4. 使用Jython、IronPython等无GIL解释器
    5. 全IO密集型任务时使用多线程
    6. 使用协程（高效的单线程模式，也称微线程；通常与多进程配合使用）
9. Python2，3区别
    * print 函数
    * 默认编码以及字符类型
    * 除法运算
        * Python2  
        * Python3 
    * Python3去除了long类型
    * 异常的形式
10. 实现with语句，要实现那个魔方方法
    * 实现\_\_enter\_\_和\_\_exit\_\_方法后，就能通过with语句进行上下文管理
11. 单链表逆序

```

class ListNode:
    def __init__(self,x):
        self.val=x;
        self.next=None;
    
'''
递归操作，先将从第一个点开始翻转转换，从下一个节点开始翻转
直至只剩一个节点
时间消耗O(n),空间消耗O(1)
'''
def reverse_linkedlist4(head):
    if head is None or head.next is None:
        return head
    else:
        newhead=reverse_linkedlist4(head.next)
        head.next.next=head
        head.next=None
    return newhead

```
