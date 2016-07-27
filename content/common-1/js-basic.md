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
* `switch`
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

---

還有兩個搭配迴圈使用的敘述：

* `break`: **跳出**這個迴圈
* `continue`: **中斷**這個迴圈，**直接開始下一次**

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
  consol.log(prop,     cat[prop]);
  //         ^^^^ key  ^^^^^^^^^ value
}
```

注意：**屬性不一定會照順序被走過**
(雖然大部份的瀏覽器會照順序)

---

## 練習 ε٩(๑> ₃ <)۶з

---

## "Call by Sharing"

JavaScript 裡...

* 除了初始型別之外的值都是物件
  ```js
  var x = [];
  x.type = 'array';  // 當作 Object 用
  x.type;            // 'array' 
  ```
* 除了初始型別之外，「指定」並不會「複製」一個出來
  ```js
  var x = [1, 2, 3];
  var y = x;
  y.push(4);
  x;  // [1, 2, 3] or [1, 2, 3, 4]?
  ```
  如果要複製應該怎麼寫？

------

## 函數 (Function)

就是一段小程式，有輸入和輸出。

* 函數名稱
* 輸入：**參數 (arguments)**
* 輸出：**回傳值 (return value)**

```js
function square(num) {
  return num * num;
}
```

---

### 呼叫

函數名稱加個**括號 ()**，丟參數進去，就可以呼叫它

多丟的參數會被忽略
少丟的參數會被當作 `undefined`

```js
function multiply(a, b) {
  return a * b;
}

multiply(2, 3);  // 6   (a = 2,         b = 3)
multiply(2);     // NaN (a = 2,         b = undefined)
multiply();      // NaN (a = undefined, b = undefined)
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

```js
function doNothing() {
  // nothing here at all
}

var nothing = doNothing();  // undefined
```

---

### 匿名函數 (Anonymous Function)

函數也可以被指定給變數！

這種函數可以不命名

```js
var multiply = function (a, b) { return a * b; }
```

建立函數完直接執行也是可以的！
只是你就再也拿不到它了

```js
(function (a, b) { return a * b; })(11, 506);  // 5566 
```

<small>~~寫成一行好像很厲害~~</small>

---

### 作用域 (scope)

變數有作用範圍，超過這個範圍就「看不到」了

有個特別的域叫作**全域 (global)**
表示它在最外層，所有地方都看得到
在 JavaScript 中，未宣告的變數是全域的

```js
(function() {
  var x = 1;
  y = 2;
})();  // 立刻執行它

x;  // Error!! x is not defined.
y;  // 2 (why?)
```

---

裡面的可以看到外面的...

```js
(function() {
  var x = 1;
  (function() {
    var y = 2;
    console.log('inner: ' + x);
  })();  // 在裡面再塞一層！
  console.log('outer: ' + y);  // Error!!
})();

/*
inner: 1
Error!! y is not defined.
*/
```

---

裡面的可以**遮蔽**外面的...

```js
(function() {
  var x = 1;
  (function() {
    var x = 2;
    console.log('inner: ' + x);
  })();  // 在裡面再塞一層！
  console.log('outer: ' + x);
})();

/*
inner: 2
outer: 1
*/
```

---

### 物件導向 (?

```js
var pusheen = {
  lives: 9,            // <- 物件的「屬性」 (property) 
  ddos: function() {   // <- 物件的「方法」 (method)
    alert('I am merely a cat!!');
  },
  die: function() {
    if (pusheen.lives > 0) {
      pusheen.lives--;
      alert('I still have ' + pusheen.lives + ' live(s).');
    } else {
      alert('I am already dead. X_X');
    }
  }
};
```

---

## 練習 ε٩(๑> ₃ <)۶з

------

## 陣列的進階運用

ES5 以後，陣列有些新的方法可以用...
它們接收一個 `function` 做為參數，回傳一個新的陣列 

這個 `function` 接收 3 個參數：
1. 陣列裡的值
2. 這個值屬於哪個索引
3. 本來的這個陣列

註：IE 可能不太適應這些新的東西，請小心 :3

---

## `forEach`

依序查詢陣列的每個元素
跟用 `for` 做很像，但更加直覺好懂 

```js
[1, 2, 3, 4, 5].forEach(function(val, index, array) {
  if (val % 2 == 0) {
    console.log(val + ' is even');
  } else {
    console.log(val + ' is odd');
  }
});  // 回傳原來的陣列

/*
1 is odd
2 is even
3 is odd
4 is even
5 is odd
*/
```

---

## `map`

每個元素用一個新的元素來代表它
這些回傳值會被收集成新的陣列

```js
[1, 2, 3, 4, 5].map(function(val, index, array) {
  return val * val;
});  // 回傳 [1, 4, 9, 16, 25]
```

---

## `filter`

依序查詢陣列的每個元素，用回傳值來篩選
`true` 表示留著、`false` 表示丟掉

```js
[1, 2, 3, 4, 5].map(function(val, index, array) {
  return (val % 2 == 0);
});  // 回傳 [2, 4]
```

---

## 練習 ε٩(๑> ₃ <)۶з
