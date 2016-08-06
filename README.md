# SITCON Camp 2016 共同課程

這是我為了營期間 (2016/8/2~5) 的共同課程所編寫的投影片。所使用的投影片框架為 [Reveal.js](http://lab.hakim.se/reveal-js)，內文使用 Markdown 撰寫，並且從原本的佈景修改了配色。最初是假定學員有基本的 HTML、CSS、JavaScript 基礎，並對網路傳遞資料、瀏覽器與伺服器的溝通有初步理解，在課程間為了即時配合學員程度，對投影片的架構與內容又進行了不小幅度的修改。由於這是我第一次使用 Reveal.js ，時間不多(應該說是壓死線)，能提供與想到的梗有限，且在排版上無法盡善盡美，希望能在技術上留下一點內容。

不免俗地，如果這份投影片有幫助到你，請不要吝惜給我一顆 star！

## 技術說明
除了 Reveal.js 本身的 code 之外，我尚對其中的一些程式碼做了調整，以期有更佳的瀏覽體驗。

### Markdown Parser
這是我第一個進行修改的項目。因為在開源社的期初專案研究了 Markdown 語法，那時候選定了 [markdown-it](https://github.com/markdown-it/markdown-it)，進行了一點研究與探討，因此若能改用這個 parse，我較能靈活預測與調整其輸出結果。於是我花了一點時間把 Reveal.js 本來用的 [marked](https://github.com/chjj/marked) 換掉。本來以為很麻煩，其實不難，只要將呼叫到 `marked` 的地方換成呼叫 `markdownit.render` 就完成了。

### Minimal Templating engine
為了減少重複修改 HTML 造成的困擾，決定將輸出投影片的瑣事自動化，我寫了一個簡單的模版引擎 [`gen`](blob/gh-pages/gen) 來產出統一的靜態 HTML，其中用了一個 JSON 檔來指定輸出內容、標題和容納 slides 對應的 `<section>` 標籤。既然內容已經導入 JS，就順便做了 minify 的工作。~~因為本人習慣使用的 build tool 是 [Gulp](gulpjs.com) 所以並沒有將這個步驟放進 gruntfile 裡。~~

### Tlk.io Integration
由於先前參加臺科程式設計社的工作坊，看到活動用 [Tlk.io](http://tlk.io/) 來做為聊天室，提供內容廣播與即時/匿名支援，便想要把這個有趣的功能收進自己的 slides 裡，於是研究了一下找到了 [這個套件](https://github.com/denehyg/reveal.js-menu) 生出不錯的側邊欄。本來想利用修改樣式來讓它更融入網頁本身，卻發現只能透過外連 CSS 的方式引用，因此樣式部份運用了 Data URI 來 inject 進網頁中，是一個很優雅的 hack。

# License
Code licensed under [MIT](blob/gh-pages/LICENSE).  
Markdown content licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
