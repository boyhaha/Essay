1. client.updateSetting(user_id, setting) 异步化

1. yield gen.Task(transport.open)
2. async.run()

<!-- 3. 单独抽出来 __ -->

4. 手动生成moudle: thrift -gen py:tornado -out ./ hello.throft 
warn : yield 所有, 漏了就死
5. server: aio server