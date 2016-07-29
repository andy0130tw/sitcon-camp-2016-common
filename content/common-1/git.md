# Git

> <small>"global information tracker": you're in a good mood...
> "goddamn idiotic truckload of sh*t": when it breaks
> -- git README</small>

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

---

<!-- .slide: class="sparse" -->
## GitHub 又是什麼
#### Git 是一個**程式**
#### GitHub 是一個提供 remote git repo 的**服務**
