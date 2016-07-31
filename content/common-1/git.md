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
# ...或者你比較喜歡 nano
git config --global core.editor nano

# 別名 "git lg": 美化版的 log
git config --global alias.lg "log --color --graph --all \
--pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset \
%s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"
```

---

## `git init`

~~展開 git 力場~~

initialize: 讓一個目錄變成 git repo

會在目錄下產生一個 `.git` 紀錄版本資料

---

## `git add [files...]`
把檔案加到 staging area

## `git reset [files...]`
把檔案從 staging area 退回來

---

## `git rm`
從版控與資料夾**同時刪除**檔案 (**危險！**)
`git rm --cached`: 僅從版控刪除，不刪除檔案

---

## `git status`
看看當前目錄的狀況

* 修改過的檔案 (正準備被 `add` 或 `rm`)
* 在 staging area (正準備 `commit`)
* 未被追蹤的檔案 (正準備被納入版本控制)

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

## 在 GitHub 上建立 repo
1. 登入 GitHub
2. 點選右上角的 "+"，選擇 "New Repository"
3. 取個測試用的名字和 Description
4. **其他選項維持預設**
5. 按下綠色按鈕！

---

![new repo](content/assets/github-add-repo.png)

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

(延續之前的練習)

5. 接下來會出現 remote repo URL，用 git add
![repo added](content/assets/github-clone-repo.png)
6. 製造一些 commit
7. `git push -u` (第一次要加 `-u` 設定追蹤關係)

---

## `git clone <repo_name>`
將遠端 repo 的內容複製到本地端
~~超實用的下載器~~
會自動把 remote 加到 repo 的資訊且設定好追蹤關係

---

## 練習
將以下的 repo clone 到本地端的一個資料夾：
https://github.com/andy0130tw/sitcon-camp-2015-test

---

## `git log`

列出歷史紀錄

```
commit 2590c7a7edd1b4ca05dbf6545bbf2e8447e5c630
Author: Andy Pan <... (Email) ...>
Date:   Wed Aug 5 12:11:06 2015 +0800

    add sitcon fbsdk test
```

**Commit hash**: `2590c7a...`
利用雜湊產生幾乎是唯一的值，用這個值來稱呼這個 commit
整串很長，一般用前 6~8 個字來簡稱就可以了

好讀版：記得我們剛才設定過 `git lg` 嗎？

---

## `git diff`

`git diff`：看 **staging area 跟工作目錄** 的差異

`git diff --cached`: 看 **staging area 跟目前 commit** 的差異

diff 格式：
參考 GitHub 上對應 commit 的 diff：[2590c7a](https://github.com/andy0130tw/sitcon-camp-2015-test/commit/2590c7a7edd1b4ca05dbf6545bbf2e8447e5c630)。

---

## 練習 ヽ(●´ε｀●)ノ

1. 編輯 `fbsdk.html` 這個檔案並存檔
2. 這個時候 `git diff` 和 `git diff --cached`，哪一個會呈現出差異？
3. `git add fbsdk.html`，這個動作的含意是什麼？
4. 這個時候 `git diff` 和 `git diff --cached`，哪一個會呈現出差異？

---

## 謝辭
這份投影片的完成有賴以下資源的協助，
我也是藉著大量的參考資料體會 git 之妙。

* [穿越時空的版本控制](https://speakerdeck.com/rschiang/chuan-yue-shi-kong-de-ban-ben-kong-zhi-git)，2014/10/31 @ 臺大開源社
* [Denny Huang 的 Git 教材](http://denny.one/SITCON-Camp-2015-git/)，SITCON Camp 2015
* [人生不能重來，但 Git 可以](https://speakerdeck.com/eddie/use-git-to-control-your-life)，高見龍 2016/7

偷偷說，我也是去年夏令營的學員 owo

---

## 預告

#### Git 的多重宇宙觀：Branch
#### GitHub Pages：迅速把網頁發佈上 GitHub
@ 共同課程三
