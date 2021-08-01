(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{487:function(t,a,s){"use strict";s.r(a);var i=s(44),v=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"centos7-配置git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7-配置git"}},[t._v("#")]),t._v(" centos7 配置git")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --version\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email xxx.com\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.quotepath "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 正常显示中文")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成秘钥")]),t._v("\nssh-keygen -t rsa -C “your email address”\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加")]),t._v("\nsettings-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("SSH Keys-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("New SSH key\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" git@github.com\n")])])]),s("h2",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("ol",[s("li",[t._v("fork\n"),s("ol",[s("li",[t._v("添加 源地址")]),t._v(" "),s("li",[t._v("git remote add upstream https://github.com/被fork的仓库.git")])])]),t._v(" "),s("li",[t._v("fetch\n"),s("ol",[s("li",[t._v("git fetch")]),t._v(" "),s("li",[t._v("git rebase")]),t._v(" "),s("li",[t._v("解决冲突")]),t._v(" "),s("li",[t._v("git add 冲突文件")]),t._v(" "),s("li",[t._v("git rebase –continue")]),t._v(" "),s("li",[t._v("git push")])])]),t._v(" "),s("li",[t._v("pull\n"),s("ol",[s("li",[t._v("git pull upstream master:master --rebase")])])]),t._v(" "),s("li",[t._v("branch\n"),s("ol",[s("li",[t._v("设置分支跟踪远程分支 git branch --set-upstream-to=origin/dev_08 dev_08")])])])]),t._v(" "),s("h3",{attrs:{id:"设置语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置语言"}},[t._v("#")]),t._v(" 设置语言")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("- alias git='LANG=en_GB git'\n")])])]),s("h3",{attrs:{id:"忽略文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[t._v("#")]),t._v(" 忽略文件")]),t._v(" "),s("ol",[s("li",[t._v(".git/info/exclude")]),t._v(" "),s("li",[t._v(".gitignore")]),t._v(" "),s("li",[t._v(".git/config 文件的 core.excludesfils 选项，指定一个含有忽略规则的文件（完整路径）")])]),t._v(" "),s("h3",{attrs:{id:"查看历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看历史"}},[t._v("#")]),t._v(" 查看历史")]),t._v(" "),s("ul",[s("li",[t._v("git log\n"),s("ul",[s("li",[t._v("可以显示所有提交过的版本信息，不包括已经被删除的 commit 记录和 reset 的操作")])])]),t._v(" "),s("li",[t._v("git reflog\n"),s("ul",[s("li",[t._v("是显示所有的操作记录，包括提交，回退的操作")])])]),t._v(" "),s("li",[t._v("在Git中，用HEAD表示当前版本\n"),s("ul",[s("li",[t._v("上一个版本就是HEAD^")]),t._v(" "),s("li",[t._v("再上一个版本就是HEAD^^")]),t._v(" "),s("li",[t._v("往上100个版本可以简写为  HEAD~100")])])])]),t._v(" "),s("h3",{attrs:{id:"重写git-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重写git-log"}},[t._v("#")]),t._v(" 重写git log")]),t._v(" "),s("ul",[s("li",[t._v("git commit --amend")])]),t._v(" "),s("h3",{attrs:{id:"查看某次提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看某次提交"}},[t._v("#")]),t._v(" 查看某次提交")]),t._v(" "),s("ul",[s("li",[t._v("查看某次提交修改了那些文件\n"),s("ul",[s("li",[s("code",[t._v("git diff-tree -r --no-commit-id --name-only cca58dfd8a7f0363bb05d22cdf2801faf692c190")])])])]),t._v(" "),s("li",[t._v("将某次提交文件打包\n"),s("ul",[s("li",[s("code",[t._v("git diff-tree -r --no-commit-id --name-only cca58dfd8a7f0363bb05d22cdf2801faf692c190 | xargs tar -rf mytarfile.tar")])])])])]),t._v(" "),s("ul",[s("li",[t._v("git diff HEAD -- df_user/models.py\n"),s("ul",[s("li",[t._v("对比工作区和仓库区某版本  某文件或某目录下   的不同")])])]),t._v(" "),s("li",[t._v("git diff HEAD HEAD^^  -- df_user/models.py\n"),s("ul",[s("li",[t._v("对比上次提交和上上次提交")])])]),t._v(" "),s("li",[t._v("git diff SHA1 SHA2\n"),s("ul",[s("li",[t._v("比较两个历史版本的区别")])])])]),t._v(" "),s("h3",{attrs:{id:"合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合并"}},[t._v("#")]),t._v(" 合并")]),t._v(" "),s("ul",[s("li",[s("p",[t._v('git merge --no-ff -m "修复bug-语言时区" bug001')]),t._v(" "),s("ul",[s("li",[t._v("因为临时分支用完后会被删除，无法通过分支查询历史记录，所以使用临时分支时需要使用no-ff的方式，")]),t._v(" "),s("li",[t._v("同时写上-m备注信息, 作为master分支上的一个节点")]),t._v(" "),s("li",[t._v("合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并")])]),t._v(" "),s("h3",{attrs:{id:"子模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子模块"}},[t._v("#")]),t._v(" 子模块")])]),t._v(" "),s("li",[s("p",[t._v("git submodule add git://github.com/chneukirchen/rack.git rack")])]),t._v(" "),s("li",[s("p",[t._v("git submodule init")])]),t._v(" "),s("li",[s("p",[t._v("git submodule update")])])]),t._v(" "),s("h3",{attrs:{id:"stash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[t._v("#")]),t._v(" stash")]),t._v(" "),s("ul",[s("li",[t._v("删除某次 stash记录\n"),s("ul",[s("li",[t._v("git stash drop 0")])])]),t._v(" "),s("li",[t._v("git stash list")]),t._v(" "),s("li",[t._v("git stash apply 1")]),t._v(" "),s("li",[t._v("git stash pop")])]),t._v(" "),s("h3",{attrs:{id:"撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#撤销"}},[t._v("#")]),t._v(" 撤销")]),t._v(" "),s("ul",[s("li",[t._v("git reset\n"),s("ul",[s("li",[t._v("将仓库区中某个版本的修改恢复到暂存区")]),t._v(" "),s("li",[t._v("删除指定的commit")])])]),t._v(" "),s("li",[t._v("git revert\n"),s("ul",[s("li",[t._v("在共有分支上回滚更改")]),t._v(" "),s("li",[t._v("是用一次新的commit来回滚之前的commit，")])])]),t._v(" "),s("li",[t._v("git checkout\n"),s("ul",[s("li",[t._v("切换分支或查看就版本")]),t._v(" "),s("li",[t._v("舍弃工作目录中的更改")])])])]),t._v(" "),s("h3",{attrs:{id:"tag"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tag"}},[t._v("#")]),t._v(" tag")]),t._v(" "),s("ul",[s("li",[t._v("查看tags\n"),s("ul",[s("li",[t._v("git tag")])])]),t._v(" "),s("li",[t._v("删除tag\n"),s("ul",[s("li",[t._v("git tag -d v1.4")])])]),t._v(" "),s("li",[t._v("添加注释\n"),s("ul",[s("li",[t._v('git tag -a tag_name -m "注释"')]),t._v(" "),s("li",[t._v('git tag -am "注释" tag_name')])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);