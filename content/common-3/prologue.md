# SITCON Camp 2016
## 共同課程二
> Git 進階操作
> GitHub Pages

2016/8/3 @qbane

---

<!-- .slide: style="text-align: left;" -->
### 進階 Git

* Git 基本操作複習
* Branch
* Fork
* Merge

### GitHub / GitHub Pages

* `README.md`
* `gh-pages` branch

---

## Git 快速複習

一鍵完成 git client 基本設定

```
git config --global user.name "----改成你的暱稱----"
git config --global user.email "----改成你的Email----"
git config --global color.ui true
git config --global alias.lg "log --color --graph --all \
--pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset \
%s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"
```

1. 貼到文字編輯器上
2. 填入名字和 Email
3. 貼到 Git Bash

---

<!-- .slide: style="text-align: left;" -->
### Cheatsheet

* `git clone`: 把遠端的 repo 下載回本地端
* `git add`: 目前目錄 → staging area
  (`git reset` 是退回來)
* `git commit`: staging area → history
* `git push`: 從本地端→遠端
  (第一次需要 `git push -u origin master`)

專案網址：https://github.com/andy0130tw/sitcon-camp-2015-test
預設的 remote name 是 origin，可以用 `git remote -v` 看
