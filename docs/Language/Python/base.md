### 字符串

* [base64](<https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001431954588961d6b6f51000ca4279a3415ce14ed9d709000>)
  * 使用64个字符表示任意二进制数据
* basestring
  * basestring. str和unicode的父类，也是抽象类，不能被调用和实例化 







### 类

* supper
  * 多继承中统一继承顺序，（MRO  C3线性算法）确保父类不会被调用两次

















### 时间

* 时间戳

  * time.time()        十位时间戳， 以秒为单位

* 时间戳转换为datetime

  * datetime.datetime.fromtimestamp(timeStamp)

* 时间字符串转换为时间戳

  * ```
    		try:        
            d = datetime.datetime.strptime(strValue, "%Y-%m-%d %H:%M:%S.%f")
            t = d.timetuple()
            timeStamp = int(time.mktime(t))
            timeStamp = float(str(timeStamp) + str("%06d" % d.microsecond))/1000000
            print timeStamp
            return timeStamp
        except ValueError as e:
            print e
            d = datetime.datetime.strptime(str2, "%Y-%m-%d %H:%M:%S")
            t = d.timetuple()
            timeStamp = int(time.mktime(t))
            timeStamp = float(str(timeStamp) + str("%06d" % d.microsecond))/1000000
            print timeStamp
    
    ```

    