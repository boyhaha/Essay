# 使用



### [快捷键](https://blog.csdn.net/u010019717/article/details/50443970)


| 功能               | cmd + shift + v                   |                    |
| ------------------ | --------------------------------- | ------------------ |
| 格式化代码         | Shift + Option + F                |                    |
| 跳转到光标上次位置 | cmd + alt + $ $                   |                    |
| 预览MarkDown       | cmd + shift + v                   |                    |
| 搜索文件           | ctrl+P                            |                    |
| 跳转回之前位置     | ctrl+-                            |                    |
| 删除当前行         | ctrl+shift+k                      |                    |
| 快速删除空行       | ^\s*(?=\r?$)\n                    | ctrl + f, 然后替换 |
| 隐藏/显示 side bar | cmd + b                           |                    |
| 折叠代码           | cmd + k + 0                       |                    |
| 展开代码           | cmd + k + j                       |                    |
| 大小写转换         | 选中文本, 在命令面板输入transfrom | Cmd + Shift + P    |


### 1、工作区快捷键

| Mac 快捷键          | Win 快捷键               | 作用                                          | 备注                 |
| :------------------ | :----------------------- | :-------------------------------------------- | :------------------- |
| **Cmd + Shift + P** | **Ctrl + Shift + P**，F1 | 显示命令面板                                  |                      |
| **Cmd + B**         | **Ctrl + B**             | 显示/隐藏侧边栏                               | 很实用               |
| `Cmd + \`           | `Ctrl + \`               | **创建多个编辑器**                            | 【重要】抄代码利器   |
| **Cmd + 1、2**      | **Ctrl + 1、2**          | 聚焦到第 1、第 2 个编辑器                     | 同上重要             |
| **cmd +/-**         | **ctrl +/-**             | 将工作区放大/缩小（包括代码字体、左侧导航栏） | 在投影仪场景经常用到 |
| Cmd + J             | Ctrl + J                 | 显示/隐藏控制台                               |                      |
| **Cmd + Shift + N** | **Ctrl + Shift + N**     | 重新开一个软件的窗口                          | 很常用               |
| Cmd + Shift + W     | Ctrl + Shift + W         | 关闭软件的当前窗口                            |                      |
| Cmd + N             | Ctrl + N                 | 新建文件                                      |                      |
| Cmd + W             | Ctrl + W                 | 关闭当前文件                                  |                      |



### 2、跳转操作

| Mac 快捷键                    | Win 快捷键               | 作用                                 | 备注               |
| :---------------------------- | :----------------------- | :----------------------------------- | :----------------- |
| Cmd + `                       | 没有                     | 在同一个软件的**多个工作区**之间切换 | 使用很频繁         |
| **Cmd + Option + 左右方向键** | Ctrl + Page down/Page up | 在已经打开的**多个文件**之间进行切换 | 非常实用           |
| Ctrl + Tab                    | Ctrl + Tab               | 在已经打开的多个文件之间进行跳转     | 不如上面的快捷键快 |
| Cmd + Shift + O               | Ctrl + shift + O         | 在当前文件的各种**方法之间**进行跳转 |                    |
| Ctrl + G                      | Ctrl + G                 | 跳转到指定行                         |                    |
| `Cmd+Shift+\`                 | `Ctrl+Shift+\`           | 跳转到匹配的括号                     |                    |

### 3、移动光标

| Mac 快捷键 | Win 快捷键 | 作用 | 备注 |
| :--------- | :--------- | :--- | :--- |

| **option + 左右方向键** | **Ctrl + 左右方向键** | 在**单词**之间移动光标     | 很常用     |
| **Cmd + 左右方向键**    | **Fn + 左右方向键**   | 在**整行**之间移动光标     | 很常用     |

### 4、编辑操作

| Mac 快捷键             | Win 快捷键          | 作用                                 | 备注                                   |
| :--------------------- | :------------------ | :----------------------------------- | :------------------------------------- |
| **Cmd + Enter**        | **Ctrl + Enter**    | 在当前行的下方新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向下插入一行 |
| Cmd+Shift+Enter        | Ctrl+Shift+Enter    | 在当前行的上方新增一行，然后跳至该行 | 即使光标不在行尾，也能快速向上插入一行 |
| **Option + ↑**         | **Alt + ↑**         | 将代码向上移动                       | 很常用                                 |
| **Option + ↓**         | **Alt + ↓**         | 将代码向下移动                       | 很常用                                 |
| Option + Shift + ↑     | Alt + Shift + ↑     | 将代码向上复制                       |                                        |
| **Option + Shift + ↓** | **Alt + Shift + ↓** | 将代码向下复制                       | 写重复代码的利器                       |

### 5、多光标编辑

| Mac 快捷键                    | Win 快捷键                 | 作用                                 | 备注 |
| ----------------------------- | -------------------------- | ------------------------------------ | ---- |
| **Cmd + Option + 上下键**     | **Ctrl + Alt + 上下键**    | 在连续的多列上，同时出现光标         |      |
| **Option + 鼠标点击任意位置** | **Alt + 鼠标点击任意位置** | 在任意位置，同时出现光标             |      |
| Option + Shift + 鼠标拖动     | Alt + Shift + 鼠标拖动     | 在选中区域的每一行末尾，出现光标     |      |
| Cmd + Shift + L               | Ctrl + Shift + L           | 在选中文本的所有相同内容处，出现光标 |      |

其他的多光标编辑操作：（很重要）

- 选中某个文本，然后反复按住快捷键「 **Cmd + D** 」键（windows 用户是按住「**Ctrl + D**」键）， 即可将全文中相同的词逐一加入选择。
- 选中一堆文本后，按住「**Option + Shift + i**」键（windows 用户是按住「**Alt + Shift + I**」键），既可在**每一行的末尾**都创建一个光标。

### 6、删除操作

| Mac 快捷键             | Win 快捷键           | 作用                   | 备注                                      |
| :--------------------- | :------------------- | :--------------------- | :---------------------------------------- |
| Cmd + shift + K        | Ctrl + Shift + K     | 删除整行               | 「Cmd + X」的作用是剪切，但也可以删除整行 |
| **option + Backspace** | **Ctrl + Backspace** | 删除光标之前的一个单词 | 英文有效，很常用                          |
| option + delete        | Ctrl + delete        | 删除光标之后的一个单词 |                                           |
| **Cmd + Backspace**    |                      | 删除光标之前的整行内容 | 很常用                                    |
| Cmd + delete           |                      | 删除光标之后的整行内容 |                                           |

备注：上面所讲到的移动光标、编辑操作、删除操作的快捷键，在其他编辑器里，大部分都适用。

### 7、编程语言相关

| Mac 快捷键             | Win 快捷键      | 作用                         | 备注                             |
| :--------------------- | :-------------- | :--------------------------- | :------------------------------- |
| Cmd + /                | Ctrl + /        | 添加单行注释                 | 很常用                           |
| **Option + Shift + F** | Alt + shift + F | 代码格式化                   | 很常用                           |
| F2                     | F2              | 以重构的方式进行**重命名**   | 改代码备                         |
| Ctrl + J               |                 | 将多行代码合并为一行         | Win 用户可在命令面板搜索”合并行“ |
| Cmd + U                | Ctrl + U        | 将光标的移动回退到上一个位置 | 撤销光标的移动和选择             |

### 8、搜索相关

| Mac 快捷键          | Win 快捷键          | 作用                                       | 备注   |
| :------------------ | :------------------ | :----------------------------------------- | :----- |
| **Cmd + Shift + F** | **Ctrl + Shift +F** | 全局搜索代码                               | 很常用 |
| **Cmd + P**         | **Ctrl + P**        | 在当前的项目工程里，**全局**搜索文件名     |        |
| Cmd + F             | Ctrl + F            | 在当前文件中搜索代码，光标在搜索框里       |        |
| **Cmd + G**         | **F3**              | 在当前文件中搜索代码，光标仍停留在编辑器里 | 很巧妙 |

### 9、新建文件后的默认文件类型

当我们按下快捷键「Cmd + N」新建文件时，VS Code 默认无法识别这个文件到底是什么类型的，因此也就无法识别相应的语法高亮。

如果你想修改默认的文件类型，可以在设置项里搜索`files.defaultLanguage`，设置项如下：

### 10、 文件对比

可以安装compareit插件来增加vscode的对比功能

### 11、查找函数调用

快捷键: 「Shift + F12」



### 12、修改变量名

F2



### settings



```
{
    "window.zoomLevel": 1,
    "files.autoSave": "onFocusChange",
    "python.linting.flake8Enabled": true,
    "python.linting.enabled": true,
    "python.linting.flake8Args": ["--max-line-length=120"],
    "editor.selectionHighlight": true,
    "editor.tabSize": 4,
    "python.linting.pylintEnabled": false,
    "files.exclude": {
        "**/__pycache__": true,
        "**/*.pyc": true
    },
    "editor.rulers": [
        80, 120
    ],
    "terminal.integrated.shell.osx": "/bin/zsh",
    "editor.minimap.enabled": false,
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "tabnine.experimentalAutoImports": true,
    "editor.largeFileOptimizations": false,
    "workbench.iconTheme": "vscode-icons",
    "cSpell.userWords": [
    ],
    "sync.gist": "79ab3980400d3f6d9f766d2bf5acf578",
    "workbench.activityBar.visible": true,
    "files.defaultLanguage": "python",
    "todohighlight.isEnable": false,
    "terminal.integrated.automationShell.osx": "",
    "diffEditor.ignoreTrimWhitespace": false,
    "workbench.colorTheme": "Tiny Light",
    "python.formatting.autopep8Args": [
        "--max-line-length=120",
        "--ignore", "E402"
    ]
}


```

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "current",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal",
            "env": {
                "PYTHONPATH": "${workspaceRoot}"
            },
        },
        {
            "name": "runserver",
            "type": "python",
            "request": "launch",
            "program": "${workspaceFolder}/runserver.py",
        },
    ]
}
```

# 调试

```shell
# 快捷键
继续/暂停F5
越过F10
进入F11
步出⇧F11
重启⇧⌘F5
停止⇧F5
```

# 插件
```

GitLens
TabNine
Markdown All in one
Code Spell Checker  # 拼写检查
vscode-icons
Tiny Light
Settings Sync  # 上传/下载配置
compareit  # 对比插件
highlight-icemode  # 相同代码高亮
TODO tree
```