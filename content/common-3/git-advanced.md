## `git branch`
「分支」

---

## `git reset`
「回到過去」

---

## `git checkout`
「岔出世界線」

會產生 `detached state`:

```
Note: checking out '30c9e94'.
You are in 'detached HEAD' state. ...
git checkout -b <new-branch-name>

HEAD is now at 30c9e94...
```

---

有三個選擇：

1. 回到 master: `git checkout master`
2. 建立新的 branch: `git checkout -b <branch>`
3. 另外一條世界線: `commit`

---

## `git merge <branch>`

把**目前的 branch** 合併進指定的 branch 裡

順利的話：git 會自動合併兩邊
不然：衝突 (conflict)

---

## 練習

---

## GitHub Pages

迅速把一個專案變成靜態網頁！

### user site: <username>.github.io
建立一個 repo 叫作 `<username>.github.io`

### project site: <username>.github.io/repo-name
建立一個 branch 叫作 `gh-pages`

先確定 GitHub 帳號有驗證 Email

---

## 練習
