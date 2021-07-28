* * ### 数字
  * 无穷
    * float('inf') 表示正无穷
      * -float('inf') 或 float('-inf') 表示负无穷
      * inf 可写为 Inf
      * 正无穷与负无穷相加会返回一个 NaN 结果
    * math.isinf()
      * a + b  // nan
      * math.isnan()

* * ### 字符串
  		
      - [base64](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001431954588961d6b6f51000ca4279a3415ce14ed9d709000)
      - 使用64个字符表示任意二进制数据
      - basestring
      - basestring. str和unicode的父类，也是抽象类，不能被调用和实例化
      - Shuffle
      - random.shuffle (lst )
        - 随机排序
      - json
      - json.loads()
        - 标准的JSON语法中,不支持单引号,属性或者属性的值都必须是双括号括起来
        - 同时不支持转换Unicode对象
      
      ### 魔术方法
    
    ```
    _getattr_(self,attr)
    
    触发时机：获取不存在的对象成员时触发
        参数：1、接收当前对象的self，2、获取成员名称的字符串
        返回值： 必须有值
        作用：为访问不存在的属性设置值
        注意：_getattribute_()无论何时都会在_getattr_()之前触发，触发了_getattribute_()有返回值就不会在触发_getattr_()了
        
        
        _getattribute_(self,attr)
        
        触发时机：使用对象成员时触发，无论成员是否存在
        参数：1、接收当前对象的self，2、获取成员名称的字符串
        返回值： 必须有值
        作用：在具有封装操作（私有化时），为程序开部分访问权限使用
    ```
    
    ### 类
    
    - supper
    - 多继承中统一继承顺序，（MRO C3线性算法）确保父类不会被调用两次
    
    ### 执行参数
    
    - argparse
    - CLI
    
    ### 时间
    
    - 时间戳
    
    - time.time() 十位时间戳， 以秒为单位
    
    - 时间戳转换为datetime
    
    - datetime.datetime.fromtimestamp(timeStamp)
    
    - 获取UTC时间ISO格式
    
    - datetime.datetime.now().isoformat()
    
    - 时间字符串转换为时间戳
    
    - ``` python
        a = "2018-03-10 18:26:27.531"
        d = datetime.datetime.strptime(a, "%Y-%m-%d %H:%M:%S.%f")
        t = d.timetuple()
        timeStamp = int(time.mktime(t))
        print(timeStamp)    
      ```
    
    - 时间加减
    
    - datetime.timedelta(days=1)
    
    ### 脚本参数
    
    - argparse
    - positional arguments 必选参数
    
    ### 线程
    
    - 优先使用Queue模块的 `Queue` 数据类型作为线程间的数据通信方式
    - Codition 条件变量
    - 提供与Lock类似的acquire, release. 还有 wait, notify, notify_all
    
    ### 正则
    
    - POSIX
    - PCRE
    - https://liujiacai.net/blog/2014/12/07/regexp-favors/
    
    #### path
    
    - os.getcwd()
    - os.path.abspath(os.curdir)
    
    ```
    # 获取当前文件夹
    os.path.dirname(__file__)
    
    # h获取绝对路径
    os.path.dirname(os.path.realpath(__file__))
    
    # ****
    os.path.abspath(os.path.join(os.getcwd(), ".."))
    ```
    
    ### itertools模块
    
    - groupby
    
    ### 解压缩
    
    - type
    - gz： 即gzip。通常仅仅能压缩一个文件。与tar结合起来就能够实现先打包，再压缩。
    - tar： linux系统下的打包工具。仅仅打包。不压缩
    - tgz：即tar.gz。先用tar打包，然后再用gz压缩得到的文件
    - zip： 不同于gzip。尽管使用相似的算法，能够打包压缩多个文件。只是分别压缩文件。压缩率低于tar。
    - rar：打包压缩文件。最初用于DOS，基于window操作系统。
    
    ```python
    import gzip
    import os
    import tarfile
    import zipfile
    import rarfile
    # gz
    # 因为gz一般仅仅压缩一个文件，全部常与其它打包工具一起工作。比方能够先用tar打包为XXX.tar,然后在压缩为XXX.tar.gz
    # 解压gz，事实上就是读出当中的单一文件
    def un_gz(file_name):
        """ungz zip file"""
        #获取文件的名称，去掉gz
        f_name = file_name.replace(".gz", "")
        g_file = gzip.GzipFile(file_name)
        #创建gzip对象
        open(f_name, "w+").write(g_file.read())
        #gzip对象用read()打开后，写入open()建立的文件里。
        g_file.close()
        #关闭gzip对象
    
    # tar
    # XXX.tar.gz解压后得到XXX.tar，还要进一步解压出来。
    # 注：tgz与tar.gz是同样的格式，老版本号DOS扩展名最多三个字符，故用tgz表示。
    # 因为这里有多个文件，我们先读取全部文件名称。然后解压。例如以下：
    # 注：tgz文件与tar文件同样的解压方法。
    def un_tar(file_name):
           # untar zip file"""
        tar = tarfile.open(file_name)
        names = tar.getnames()
        if os.path.isdir(file_name + "_files"):
            pass
        else:
            os.mkdir(file_name + "_files")
        #因为解压后是很多文件，预先建立同名目录
        for name in names:
            tar.extract(name, file_name + "_files/")
        tar.close()
    
    # zip
    # 与tar类似，先读取多个文件名称，然后解压。例如以下：
    
    def un_zip(file_name):
        """unzip zip file"""
        zip_file = zipfile.ZipFile(file_name)
        if os.path.isdir(file_name + "_files"):
            pass
        else:
            os.mkdir(file_name + "_files")
        for names in zip_file.namelist():
            zip_file.extract(names,file_name + "_files/")
        zip_file.close()
    
    
    # rar
    # 由于rar通常为window下使用，须要额外的Python包rarfile。
    #
    # 可用地址： http://sourceforge.net/projects/rarfile.berlios/files/rarfile-2.4.tar.gz/download
    #
    # 解压到Python安装文件夹的/Scripts/文件夹下，在当前窗体打开命令行,
    #
    # 输入Python setup.py install
    #
    # 安装完毕。
    
    def un_rar(file_name):
        """unrar zip file"""
        rar = rarfile.RarFile(file_name)
        if os.path.isdir(file_name + "_files"):
            pass
        else:
            os.mkdir(file_name + "_files")
        os.chdir(file_name + "_files")
        rar.extractall()
        rar.close()
    
    
    inputname="icons.zip"
    un_zip(inputname)
    # un_gz(inputname)
    # un_rar(inputname)
    # un_tar(inputname)
    ```