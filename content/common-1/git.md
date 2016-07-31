# Git

> <span style="font-size: 28px">"global information tracker": you're in a good mood...
> "goddamn idiotic truckload of sh*t": when it breaks
> -- [git README](https://github.com/git/git)</span>

---

## 為什麼需要版本控制
回想以前你怎麼團隊合作交一份純文字的報告：

  * 分頭進行
  * 於是寫了好多份檔案
  * 手動把大家的修改合併起來

<small>(嫌麻煩的話可能是開一個 Google Doc 或 Dropbox，但並沒辦法完全解決問題)</small>

---

## 不方便 ._.

  * 沒辦法很快知道哪些檔案被改過了
  * 手動合併可能會出錯
  * 合併的時候蓋掉別人的版本怎麼辦
  * 改壞了怎麼復原
  * ...
  * ~~日出前~~死線前要交件了！
    * 電腦裡堆著一大堆胡亂命名的檔案
    * 到底要交 final 幾之幾之幾？
    * 崩潰！

「版本控制」可以解決以上麻煩

---

## Git 的歷史
* 起源：Linux 之父 Linus Torvalds 開發 Linux kernel 時
* 特色
  * 「離線」的：使用的時候不需要隨時連著線
  * 「分散式」開發模式：每個人都會有一份完整的版本歷史

和 Google Docs、Dropbox 比較(?

---

<div style="display: flex; align-items: center">
<div>

## 精通 Git 並不輕鬆
但熟練幾個指令就足以完成日常版控工作

~~真的壞了的話就把 `.git` 刪掉重新 clone 一份乾淨的就好~~

</div>

<div>

![](https://imgs.xkcd.com/comics/git.png)  <!-- .element: style="width: 360px; margin-left: 40px" -->

</div>
</div>

---

<!-- .slide: class="sparse" -->
## 版本控制的階段

* working directory (工作目錄): 存在檔案系統裡的檔案
* staging area: 檔案某個版本的快照
* local repo: 被紀錄下來，成為歷史的一部份
* remote repo: 同步到遠端

---

[![](http://denny.one/SITCON-workshop-2014-ncku-git/img/local-remote.png) <!-- .element: style="background: white" -->](http://denny.one/SITCON-workshop-2014-ncku-git/img/local-remote.png)

---

## Git 的基本操作
![](http://www.amygori.com/gdi-rdu-git-github/images/basic-remote-workflow.png)  <!-- .element: width="65%" -->

------

## 安裝 Git

Windows: [![](content/assets/gwindows_logo.png) <!-- .element: width="60" --> Git for Windows](https://git-for-windows.github.io/)
Non-Windows: 找找版本套件庫，或自己編

Debian/Ubuntu: `apt-get install git`

---

## 環境設定
> [以下內容取自 Denny Huang 的 Git 教材](http://denny.one/SITCON-Camp-2015-git/#51)

---

設定身份；僅用來註記個人身份
**不具登入/身份驗證功能**

```
# 暱稱
git config --global user.name "Your Name"
# Email (建議跟註冊 GitHub 帳號用的相同)
git config --global user.email "you@example.com"
```

---

```
# 設定顏色
git config --global color.ui true
# 慣用的編輯器；Windows 下不一定需要
git config --global core.editor vim
# 別名 "git lg": 美化版的 log
git config --global alias.lg "log --color --graph --all \
--pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset \
%s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"
```

---

## `git init`

~~展開 git 力場~~

initialize
讓一個資料夾變成 git repo

---

## `git add`
把檔案加到 staging area

## `git reset`
把檔案從 staging area 退回來

---

## `git commit`
把 staging area 的東西編進版本紀錄
接著會跳出編輯器，要你寫 commit message

通常是簡介這次做了哪些事，以及為什麼做

也可以直接指定，方便省事：
`git commit -m <commit message>`

---

Windows 預設的編輯器是記事本
Non-Windows 可能是 vim 或 nano

不允許空白喔 (•ㅂ•)/
但也不要偷懶亂寫，你的伙伴會崩潰

[Commit Logs from Last Night](http://www.commitlogsfromlastnight.com/)
(警告：可能包含粗俗文字)

---

## `git push <remote_name>`
把本地端的歷史紀錄上傳到遠端
這時會要你輸入帳號與密碼
(也可以用 SSH key 驗證，這裡略過)

如果還沒有設定遠端的 repo，可以用以下語法：
`git remote add <remote_name> <repo_url>`

一般預設的 `remote_name` 叫作 `origin`

---

## 練習

1. 把剛才寫的網頁放進一個資料夾裡 (`mv`)
2. 在這個目錄下初始化一個 git repo
3. 建立一個新的 commit 來紀錄這次變動，
   commit message 自由發揮

------

<!-- .slide: class="sparse" -->
## GitHub 又是什麼
#### Git 是一個**程式**
#### GitHub 是一個提供 remote git repo 的**服務**

---

## `git clone <repo_name>`
將遠端 repo 的內容複製到本地端
~~超實用的下載器~~
會自動把 remote 加到 repo 的資訊且設定好追蹤關係

練習：
將以下的 repo clone 到本地端的一個資料夾：(待補)

---
