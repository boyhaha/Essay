# 11-Git

git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit

开发

    添加ssh账户

    本地克隆

    同步分支

        git branch \-\-set\-upstream\-to=origin/分支名称 分支名称

            将本地分支跟踪服务器分支

                git checkout \-b dev origin/dev

                    将github上的dev分支同步到本地，

            开发过程中，所有组员都向这个分支上提交阶段性代码，并从这个分支获取最新代码

    开发管理

        工作区和暂存区

            图片

                

            git add 目录

                添加到暂存区

            git checkout \-\- 文件名

                回到暂存区的状态

        暂存区与仓库区

            图片

                

            git status

                查看暂存区未提交的记录

            git commit \-m '本次提交的说明信息'

                将暂存区的记录提交到仓库区

        本地与服务器

            图片

                

            建议

                每天开始前先与服务器同步一次

            开发完一个功能后合并到dev分支

                git checkout dev

                    切换到dev分支

                git pull

                    获取代码，如果dev分支上有更新的记录则会同步到本地

                git merge huluwa

                    合并

                git push origin dev

                    添加、提交并推送

                git checkout huluwa

                    切换回工作分支

                git merge dev

                    在最新代码上继续开发，所以将dev分支合并到huluwa分支

        解决冲突

            合并时 \-\-\- 出现冲突后需要手动提交

    历史

        查看历史

            git reflog

                在Git中，用HEAD表示当前版本

                上一个版本就是HEAD^

                再上一个版本就是HEAD^^

                往上100个版本可以简写为  HEAD~100

        比较不同

            git diff \*\*\*\*\*\*\*\*\*

                git diff HEAD \-\- df\_user/models.py

                    对比工作区和仓库区某版本  某文件或某目录下   的不同

                git diff HEAD HEAD^^  \-\- df\_user/models.py

                    对比上次提交和上上次提交

                git diff SHA1 SHA2

                    比较两个历史版本的区别

        回退

            git reset HEAD^或版本号

                将仓库区中某个版本的修改恢复到暂存区

            git status

            git checkout \-\- df\_user/models.py

                将暂存区的恢复到工作区

    删除

        先删除文件

        git rm 文件名

            在暂存区删除

        git commit \-m '说明信息'

            提交到仓库区

        同样可以回退

    Debug分支

        暂停开发,修改bug

        git stash

            保存现场

        git checkout master

        git checkout \-b bug001

        修改文件

        git add 文件或者目录

        git commit \-m '修复时区语言'

        git checkout master

        git merge \-\-no\-ff \-m "修复bug\-语言时区" bug001

            因为临时分支用完后会被删除，无法通过分支查询历史记录，所以使用临时分支时需要使用no\-ff的方式，

            同时写上\-m备注信息, 作为master分支上的一个节点

        git push

            推送

        git branch \-d bug001

            删除临时分支

        git checkout huluwa

            切换回工作分支

        git stash list

            查看现场列表

        git stash pop

            恢复现场

            回到之前的工作进度

            子主题 3
