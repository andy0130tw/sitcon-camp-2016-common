<!-- .slide: class="sparse" -->
## 網頁的組成
1. HTML
2. CSS
3. JavaScript

---

## HTML
  * Hypertext markup language
  * 網頁內容的基礎結構
  * 一種**標記語言**
  * 用來為某些文字或段落加上標記
    * 語意、額外的資訊、結構
    * "hyper": 賦予文字本身以外的意義

---

## Cascading Stylesheet
  * CSS，中文稱作「階層樣式表」
  * 從HTML選取元素，為它們加上樣式
  * "cascading": 依照**優先順序**，一層一層套用下來

---

## JavaScript
  * 簡稱 JS，在網頁上執行的**程式語言**
  * 一開始用來提供使用者與網頁互動的介面
  * 操作網頁的結構、動態控制網頁的行為

------

# HTML

![HTML5](https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg)  <!-- .element: width="240" style="padding: 20px" -->

文字和標籤煮成的，[美麗的湯](https://pypi.python.org/pypi/beautifulsoup4)。

---

## 註解 (Comment)
放在原始碼裡面，但解釋的時候會被忽略

註解用來：

1. 在原始碼裡面增加文字說明
2. 暫時把一段原始碼拿掉
3. ~~一些花式的技巧~~

語法：
```html
<!-- 註解的內容 -->
<!-- HTML的
註解
中間
可以換行 -->
```

---

## 標籤 (Tags)

> <big>`<p> This is a <b>book</b>. </p>`</big>  <!-- .element: style="font-style: normal" -->

* 標籤由**角括號 &lt; &gt;** 括起
* 標籤內的第一個單字稱為**標籤名稱**
* 標籤名稱**不區分大小寫**

---

### 標籤的種類

> <big>`<p> This is a <b>book</b>.<br>`
> `That is a <b>pen</b></p>`</big>  <!-- .element: style="font-style: normal" -->

* 需要包含內容的標籤
  * 這種標籤需要成對
  * 例如 `<p>` 是**起始標籤**，則 `</p>` 是**終止標籤**
* 不需要包含內容的標籤
  * 不需要成對
  * 如 `<br>`，就**沒有終止標籤**
* 一個標籤(配對)就是一個元素 (element)
  * 元素可以再包含元素，變成樹狀結構
  * 包在裡面的東西就是標籤的內容

---

## 範例

#### [@ CodePen](http://codepen.io/andy0130tw/pen/qNrkYx)

---

## 一些常見的標籤 (段落)

| | | |
| :---: | -------------- | - |
| `p`   | paragraph      | 段落 |
| `h1`  | header         | 標題 (h1 ~ h6) |
| `a`   | anchor         | 超連結 |
| `img` | image          | 圖片 |
| `ul`  | unordered list | 無編號清單 |
| `ol`  | ordered list   | 有編號清單 |
| `li`  | list item      | 清單項目 |

---

## 一些常見的標籤 (文字)

| | | |
| :------: | ---------- | - |
| `br`     | line break | 換行 |
| `strong` | (強調)     | 通常顯示為**粗體** |
| `em`     | (強調)     | 通常顯示為*斜體* |
| `del`    | (刪除)     | 通常顯示為~~刪除線~~ |
| `code`   | (程式碼)   | 通常顯示為`等寬字` |

---

還有兩個沒有預設格式；純粹為排版設計的標籤：

* `<div>`：表示一個**區塊**
* `<span>`：表示一段**文字**

---

## 屬性 (Attributes)
**屬性**用來指定標籤額外的資訊。

* 屬性和標籤名稱以空白隔開。
* 每個屬性的指定方式為**屬性名稱=值**，值要用雙引號包住。
* **屬性名稱不分大小寫**，但是值會區分。

共同的屬性 `id` 和 `class` 用來搭配 CSS 和 JavaScript 使用。

例如需要搭配屬性的兩個常見標籤：

```
<!-- 一個指向 Google 的連結 -->
<a href="http://google.com/">Go to Google!</a>
<!-- 來源為 meow.png 的文字；替代文字為 meow -->
<img src="meow.png" alt="meow">
```

------

## 網頁的結構
```
<!DOCTYPE html>       <!-- 這行稱為 DTD -->
<html>
  <head>              <!-- 前置的內容 -->
  </head>
  <body>              <!-- 網頁主要內容 -->
  </body>
</html>
```

前置的內容不會顯示在網頁上，而是紀錄網頁相關的資訊 (metadata)，或是標題 (title)、相關資源 (從外部引入的 CSS/JS) 等等。

---

### Document Type Definition
or DTD，指明這是一個網頁，採用哪個語法標準。

我們使用的標準是**HTML5**，請熟記它對應的DTD：

> <code>&lt;!DOCTYPE <u>html</u>&gt;</code>  <!-- .element: style="font-style: normal" -->

如果沒有這行，
瀏覽器可能會[~~一個HTML各自表述~~](https://zh.wikipedia.org/wiki/%E6%80%AA%E5%BC%82%E6%A8%A1%E5%BC%8F)，
有些時候會發生微妙的差異。

---

### 編碼 (Encoding)
因為文字內碼和實際字元有不同的對應方式，於是有了編碼。

常見的文字編碼：

* big5 (大五碼，繁體中文)
* gb2312 (简体中文)
* Unicode (萬國碼)，最常見的是 UTF-8

---

一般而言 HTML 檔案的編碼會由伺服器送出，不過在網頁裡一併聲明是不錯的作法。例如 UTF-8 的文件，在 `<head>` 中加入

```
<meta charset="utf-8">
```

便可以了。(big5 用 `big5`)

如果沒有指定或指定錯誤，瀏覽器會自行猜測，就有可能會變成亂碼。

---

### 關於 HTML 的觀念澄清

  * HTML **不是**一種程式語言
    你沒有辦法「執行」一篇文章<br>&nbsp;
  <!-- .element: class="fragment" data-fragment-index="1" -->

  * **不要**拿 HTML 標籤幫網頁加上格式
    套格式請用 CSS，才是觀念正確的作法<br>&nbsp;
  <!-- .element: class="fragment" data-fragment-index="2" -->

  * 不是所有標籤都可以自我結束
    `<script></script>` 不能寫成 `<script/>`<br>&nbsp;
  <!-- .element: class="fragment" data-fragment-index="3" -->

  * 我的HTML明明沒照正常標準，網頁卻沒出事 (ゝ∀･)b
    瀏覽器有容錯機制，會自動修正常見的錯誤
  <!-- .element: class="fragment" data-fragment-index="4" -->

---

<!-- .slide: class="sparse" -->
### 課堂練習 (っ●ω●)っ

1. 用文字介面切換目前的目錄到桌面 (`cd`)，並建立一個資料夾
   (桌面的資料夾是 `C:\Users\<User>\Desktop`)
2. 用喜歡的編輯器寫入[**完整的網頁架構(這裡可以複製)**](content/assets/boilerplate.html)，
   存在這個資料夾內，檔名為 `index.html`
3. 把[這段素材](content/material/meow-meow.txt)貼進 `<body>` 裡，試著仿造這個頁面本來的樣子。
3. `cd` 進這個資料夾，用 Python 啟動一個測試用主機：
   `python -m http.server 5566`
   <small>(也可以用 Node.js，不限方法)</small>
4. 在瀏覽器開啟 `http://localhost:5566/`

可以參考[我隨意完成的版本](content/material/meow-meow-demo.html)，看看原始碼。
