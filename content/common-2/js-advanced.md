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

## 練習 ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡
