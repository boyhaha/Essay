---
sidebar: auto
---
# Git

## centos7 配置git
```shell
yum install git

git --version

git config --global user.name "xxx"
git config --global user.email xxx.com
git config --global core.quotepath false  # 正常显示中文

# 查看配置
git config --list
git config core.editor "vim"  # 设置vim为编辑器

# 生成秘钥
ssh-keygen -t rsa -C “your email address”

# 添加
settings->SSH Keys->New SSH key

# 测试
ssh git@github.com

# 指定特定key
git config core.sshCommand "ssh -i ~/.ssh/you_ssh_key"
git clone git@github.com:yoyun/hello.git --config core.sshCommand="ssh -i ~/.ssh/you_ssh_key"
```

## 基础
  
  1. fork
     1. 添加 源地址
     2. git remote add upstream https://github.com/被fork的仓库.git
  2. fetch
      1. git fetch
      2. git rebase
      3. 解决冲突
      4. git add 冲突文件
      5. git rebase –continue
      6. git push
  3. pull
      1. git pull upstream master:master --rebase
  4. branch
     1. 设置分支跟踪远程分支 git branch --set-upstream-to=origin/dev_08 dev_08

  ### 设置语言
    - alias git='LANG=en_GB git'
  ### 忽略文件

  1. .git/info/exclude
  2. .gitignore
  3. .git/config 文件的 core.excludesfils 选项，指定一个含有忽略规则的文件（完整路径）

  ### 查看历史
  * git log
    * 可以显示所有提交过的版本信息，不包括已经被删除的 commit 记录和 reset 的操作
  * git reflog
    * 是显示所有的操作记录，包括提交，回退的操作
  * 在Git中，用HEAD表示当前版本
    * 上一个版本就是HEAD^
    * 再上一个版本就是HEAD^^
    * 往上100个版本可以简写为  HEAD~100
  ### 重写git log
  * git commit --amend

  ### 查看某次提交
  - 查看某次提交修改了那些文件
    - `git diff-tree -r --no-commit-id --name-only cca58dfd8a7f0363bb05d22cdf2801faf692c190`
  - 将某次提交文件打包
    - `git diff-tree -r --no-commit-id --name-only cca58dfd8a7f0363bb05d22cdf2801faf692c190 | xargs tar -rf mytarfile.tar`
  * git diff HEAD -- df_user/models.py
    * 对比工作区和仓库区某版本  某文件或某目录下   的不同
  * git diff HEAD HEAD^^  -- df_user/models.py
    * 对比上次提交和上上次提交
  * git diff SHA1 SHA2
    * 比较两个历史版本的区别
  
  ### 合并
  - git merge --no-ff -m "修复bug-语言时区" bug001
    - 因为临时分支用完后会被删除，无法通过分支查询历史记录，所以使用临时分支时需要使用no-ff的方式，
    - 同时写上-m备注信息, 作为master分支上的一个节点
    - 合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并

    ### 子模块

  - git submodule add git://github.com/chneukirchen/rack.git rack
  - git submodule init
  - git submodule update

  ### stash

  - 删除某次 stash记录
    - git stash drop 0
  - git stash list
  - git stash apply 1
  - git stash pop
  ### 撤销
  * git reset
    * 将仓库区中某个版本的修改恢复到暂存区
    * 删除指定的commit
  * git revert
    * 在共有分支上回滚更改
    * 是用一次新的commit来回滚之前的commit，
  * git checkout
    * 切换分支或查看就版本
    * 舍弃工作目录中的更改
  ### tag
  * 查看tags
    * git tag
  * 删除tag
    * git tag -d v1.4
  * 添加注释
    * git tag -a tag_name -m "注释"
    * git tag -am "注释" tag_name
    

### branch
* 删除本地已不存在的远程分支
  * git remote prune origin