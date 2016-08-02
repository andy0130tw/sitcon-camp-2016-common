## JS 複習

---

## 陣列的進階運用

ES5 以後，陣列有些新的方法可以用...
它們接收一個 `function` 做為參數，回傳一個新的陣列

這個 `function` 接收 3 個參數：
1. 陣列裡的值
2. 這個值屬於哪個索引
3. 本來的陣列

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
});  // 回傳 undefined

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

## 練習 ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡

------

# JSON
"JavaScript Object Notation"
JavaScript 的 物件 表示法

---

* 簡便、檔案小，是一種程式間傳遞資料的格式
* 只有 `null`、`Number`、`String`、`Array`、`Object` 這幾種類型
* 遵守比較嚴格的格式標準
  合法的 JSON 一定是合法的 JavaScript 物件，
  但合法的 JavaScript 物件不一定是合法的 JSON

---

## JSON 的轉換
大部份(*)環境會有個 `JSON` 的全域變數

### `JSON.stringify`:JavaScript → JSON 字串
```js
JSON.stringify({a: 1, b: 2});  // '{"a":1,"b":2}'
```

### `JSON.parse`: JSON → JavaScript
```js
JSON.parse('{"a":1,"b":2}');  // {a: 1, b: 2}
```

<small>(*): IE7 以前不支援，需要引入外部的函式庫</small>

---

### 常見的陷阱

1. 沒有 `undefined`、`NaN`、`Infinity` 之類的關鍵字
2. JSON 裡物件的 key 一定要用雙引號 `"` 括住，不能省略
3. 字串只能用雙引號 `"` 括住，不能用單引號 `'`

(避免陷阱的方法：不要自己寫 JSON)

---

## 開放資料
許多開放資料的格式是 JSON，可以用瀏覽器套件排版，方便檢查

範例：http://ip-api.com/json

![](content/assets/json-view.png)

---

## 練習
挑戰把奇怪格式的開放資料轉為 JSON 格式！
@CodeEfficient
