* * # 基础
  
    1. fork
    2. 添加 源地址
    3. git remote add upstream https://github.com/被fork的仓库.git
    4. fetch
       1. git fetch
       2. git rebase
       3. 解决冲突
       4. git add 冲突文件
       5. git rebase –continue
       6. git push
    5. pull
       1. git pull upstream master:master --rebase
    6. branch
    7. 设置分支跟踪远程分支
       1. git branch --set-upstream-to=origin/dev_08 dev_08
  
    ## 设置语言
  
    - alias git='LANG=en_GB git'
  
    ### 查看某次提交
  
    - 查看某次提交修改了那些文件
    - git diff-tree -r --no-commit-id --name-only cca58dfd8a7f0363bb05d22cdf2801faf692c190
    - 将某次提交文件打包
    - git diff-tree -r --no-commit-id --name-only cca58dfd8a7f0363bb05d22cdf2801faf692c190 | xargs tar -rf mytarfile.tar
  
    ### 忽略文件
  
    1. .git/info/exclude
    2. .gitignore
    3. .git/config 文件的 core.excludesfils 选项，指定一个含有忽略规则的文件（完整路径）
  
    ### 子模块
  
    - git submodule add git://github.com/chneukirchen/rack.git rack
    - git submodule init
    - git submodule update
  
    ### stash
  
    - 删除某次 stash记录
    - git stash drop 0
  
    # centos7 配置git
  
    ```shell
    yum install git
    
    git --version
    
    git config --global user.name "flymegoc"
    git config --global user.email 343672271@qq.com
    
    # 查看配置
    git config --list
    
    # 生成秘钥
    ssh-keygen -t rsa -C “your email address”
    
    # 添加
    settings->SSH Keys->New SSH key
    
    # 测试
    ssh git@github.com
    ```
  
    