# JavaScript

![JS logo](content/assets/javascript.png) <!-- .element: width="200" -->

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

## 運算子

* 算術運算子 (`+, -, *, /, %, ++, --`)
* 比較運算子 (`==, !=, ===, !==,  >, >=, <, <=`)
* 邏輯運算子 (且 `&&`, 或 `||`, 非 `!`)
* 指定運算子 (`+=, -=, *=, /=, %=`)
* 三元運算子 `?:`
  ```js
  A ? B : C  // 若 A 則回傳 B ，否則回傳 C
  ```

---

## 流程控制

* `if`
  ```js
  if (條件) {
    // 條件為真的時候執行
  } else {
    // 條件為假的時候執行
  }
  ```

---

* `for` 迴圈
  ```js
  for (初始值; 條件; 遞增值) {
    // 區塊內容...
  }
  ```
* `while` 迴圈
  ```js
  while (條件) {
     // 區塊內容...
  }
  ```

除了 `0`, `''`, `NaN`, `null`, `undefined` 之外的值，都會被轉成 `true`。

---

還有兩個搭配迴圈使用的敘述：

* `break`: **跳出**這個迴圈
* `continue`: **中斷**這個迴圈，**直接回到迴圈開頭**

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
var nothing = new Array(3);      // [undefined * 3]
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

印出陣列所有元素：

```js
for (var i = 0; i < fib.length; i++) {
    console.log(fib[i]);
}
```

---

## 練習 ε٩(๑> ₃ <)۶з
### 資策會 "[CodeEfficient](http://www.codefficient.org.tw/)" 平臺

------

## 物件 (Object)

一個**無序**的列表
列表上的屬性用**字串**來存取

```js
var cat = {
  /* key: value */
  name: 'pusheeeen',
  lives: 9,
  /* key 用引號包起來也是可以的，用在有特殊字元的情況下 */
  'self-description': 'meow!',
  web: 'http://www.pusheeeen.com/'
};

cat.lives;     // 9
cat['lives'];  // 9
cat.NAME;      // undefined
cat.isCat = true;
```

---

### 用 `for...in` 遍歷物件

因為是無序的，用一個變數走過所有屬性
屬性稱為 **key**，用屬性取到的值稱為 **value**

```
for (var prop in cat) {
  console.log(prop,     cat[prop]);
  //          ^^^^ key  ^^^^^^^^^ value
}
```

注意：**屬性不一定會照順序被走過**
(雖然大部份的瀏覽器會照順序)

---

## 練習 ε٩(๑> ₃ <)۶з

------

## 函數 (Function)

就是一段小程式，有輸入和輸出。

* 函數名稱
* 輸入：**參數 (arguments)**
* 輸出：**回傳值 (return value)**

宣告方式

```js
function square(num) {
  return num * num;
}

var multiply = function (a, b) { return a * b; }
```

---

執行到 `return` 之後函數就會收工

```js
function alwaysReturnTrue() {
  return true;
  console.log('I will never be executed');
}
```

什麼都不回傳，執行結束之後會回傳 `undefined`
`return` 後面不指定回傳值，也會回傳 `undefined`

```js
function doNothing() {
  // nothing here at all
}

function returnNothing() {
  return;  // as if returned undefined
}

var nothingOwO = doNothing();      // undefined
var nothingOwQ = returnNothing();  // undefined
```

---

### 作用域 (scope)

變數有作用範圍，超過這個範圍就「看不到」了

有個特別的域叫作**全域 (global)**
表示它在最外層，所有地方都看得到
在 JavaScript 中，未宣告的變數是全域的

```js
function demo() {
  var x = 1;
  y = 2;
}

demo();

x;  // Error!! x is not defined.
y;  // 2 (why?)
```

---

裡面的可以看到外面的...

```js
function func1() {
  var x = 1;
  function func2() {
    var y = 2;
    console.log('inner: ' + x);
  }
  func2();
  console.log('outer: ' + y);  // Error!!
}
func1();

/*
inner: 1
Error!! y is not defined.
*/
```

---

裡面的可以**遮蔽**外面的...

```js
function func1() {
  var x = 1;
  function func2() {
    var x = 2;
    console.log('inner: ' + x);
  }
  func2();
  console.log('outer: ' + x);
}
func1();

/*
inner: 2
outer: 1
*/
```

---

## 練習 ヽ(・×・´)ゞ

---

<!-- .slide: class="sparse" -->
# 預告 -- 更多的 JS

* 共同：JavaScript 的進階運用
* 前端分流：jQuery
* 後端分流：Node.js
