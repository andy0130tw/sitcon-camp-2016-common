# CSS
![CSS3](https://upload.wikimedia.org/wikipedia/commons/a/ad/Html5_css3_styling.svg)  <!-- .element: width="200" style="background-color: rgba(255,255,255,.4); padding: 20px" -->

---

### 「人家...人家才不是什麼百葉窗呢！」

![](https://i.imgur.com/Q3cUg29.gif)

---

### ID &amp; Class

```
<h1 id="title"> ID 在同一個網頁內是唯一的 </h1>
<p class="x"> class 則不是 </p>
<p class="x y z"> class 名稱以空白分隔 </p>
```

---

## 選擇器 (Selectors)

可以把 HTML 想像成是一顆樹
選擇器就是從樹上把節點挑出來...

* `*`: 表示選擇所有元素
* `p`: 選擇 p 這個標籤
* `#id`: 前面的 `#` 表示選擇 ID
* `.class`: 前面的 `.` 表示選擇 class

規則可以組合，表示**且**的意思，如 `tag#id.class`。

---

### 更多選擇器

然後是表達關係的規則：

* `A, B`: 表示 A **或** B
* `A > B`: 表示 A **子代**中的 B 
* `A B`: 表示 A **所有子孫**中的 B

還有很多，這裡只先簡單介紹

---

### 練習 (\,\,・ω・\,\,)

```html
<h1 id="app-title">Todo List</h1>
<ul>
  <li><strong>[v]</strong> Learn CSS</li>
  <li><strong>[v]</strong> Write some rules</li>
  <li>[ ] Read what you have done</li>
  <li class="cry">[ ] Only speghetti code
    <ul>
      <li class="cry"><strong>[v]</strong> And no one loves you</li>
      <li><strong>[v]</strong> Hide yourself under the table</li>
    </ul>
  </li>
</ul>
```

有哪些方式可以選到：
  * Todo list 的標題
  * 第一層清單裡的所有項目
  * 第二層清單裡有 `cry` 這個 class 的 `<strong>`

---

## CSS 的擺放位置
  * HTML 元素上 (inline)
    適用只用一次的樣式，會和HTML綁在一起，不方便維護。
    ```html
    <p style="color: red;"> Red Red </p>
    ```
  * `<style>` 標籤內
    直接將 CSS 的內容寫在 HTML 裡面。
    ```html
    <style> p { color: red; } </style>
    ```
  
  * 外部的 CSS 檔內
    最為常見的作法。 `<head>` 中加入下面的程式碼來引用外部的 CSS。
    ```html
    <link rel="stylesheet" href="CSS 檔案路徑">
    ```

---

### 練習 (\,\,・ω・\,\,)

1. 把剛才的例子貼到 HTML 檔案裡
2. 用以上三個方式分別編寫三個小題的 CSS
3. 將選到的內容的文字變成不一樣的顏色
