# JavaScript

![JS logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png) <!-- .element: width="200" -->

本來只是十天發明出來的語言，
如今卻有改變世界的潛力。

---

## 「假的！」
![](content/assets/javascript-fake.png)
~~「我眼睛業障重啊！」~~

---

## JavaScript 的擺放位置
  * 在 HTML 中寫 JS
    將 JS 寫在 `<script>...</script>` 標籤內。
  * 引入外部的 JS 檔
    ```html
    <script src="JS檔路徑"></script>
    ```

  和CSS不同，擺放位置會影響到執行順序，
  理想的擺放位置是**寫在 `</body>` 之前**。

---

## 開發者工具

在一個新分頁上按 `F12`，就會有一個互動的介面可以測試 JS。
稱它為 console。

![DevTool Console](content/assets/devtool-console.png)

---

## 資料型態 (Types)

這些稱為**初始型態** (primitive type)：
* 數值 (Number)
* 字串 (String)
* 真假值 (Boolean)
* `undefined`
* `null`

而今天將介紹以下這些：
* 陣列 (Array)
* 物件 (Object)
* 函式 (Function)

------

## 陣列 (Array)

一個列表，可以容納不同型態的值。

用 `[]` 來建立陣列，元素用逗號區隔。

```js
var numbers = [1, 2, 3, 4, 5];
var ma19    = ['ma', 19, true];
var matrix  = [[0, 1], [1, 0]];
```

也可以從 `Array` 類別直接建立。

```js
var nothing = new Array(3);      // [undefined] * 3
var twoElem = new Array(3, 4);   // [3, 4]
```

---

陣列可以用中括號取某一項的值 (從0起算)
如果索引值超過範圍，會回傳 `undefined`

```js
var fib = [1, 1, 2, 3, 5, 8, 13];
fib[6];  // 13
fib[7];  // undefined
```

可以用 `length` 屬性得知一個陣列的長度

```js
fib.length;  // 7
```

---

### 陣列的操作

用 `push` 從陣列尾部加元素(回傳陣列長度)；
用 `pop` 從陣列尾部移除元素(回傳這個元素)。

```js
var a = fib.push(21, 34);  // a == 9
fib;  // [1, 1, 2, 3, 5, 8, 13, 21, 34]

var b = fib.pop();  // b == 34
fib.length;  // 8 
```

---

### 字串與陣列的轉換

`split`: 用某個字串切割成陣列
`join`: 將陣列用某個字串串在一起

```js
var str = '1owo2owo3';
var arr = str.split('owo');  // [1, 2, 3]
var newStr = arr.join(' ');  // '1 2 3'
```

---

### 用 `for` 遍歷陣列

`for` 的語法為

```js
for (初始值; 條件; 遞增值) {
    // 區塊內容...
} 
```

印出陣列所有元素：

```js
for (var i = 0; i < fib.length; i++) {
    console.log(fib[i]);
}
``` 

---

## 練習 ε٩(๑> ₃ <)۶з
### 資策會 "[CodeEfficient](http://www.codefficient.org.tw/)" 平臺
