# 個人數位助理（早期版本）

注意事項：
舊版本不再更新，<a href="https://github.com/aaaa931/assistant" target="_blank">查看新版本個人數位助理</a>

使用說明：
* 記事
    * 在上方輸入待辦事項 Input 輸入後按下 Enter 即可紀錄，在列表中左方 Icon 為是否完成狀態，填滿代表已完成，反之則未完成，可透過編輯與刪除 Button 進行編輯刪除，刪除時不會進行確定動作，請留意。
* 記帳
    * 包含首頁、項目、記帳、紀錄頁面，首頁以 Chart.js 顯示出當月的記帳圖表，用於快速了解當月支出結構，記帳前需在項目登陸項目才能進行記帳，目的是快速記帳，記帳使用登陸項目時提供的編號進行登記，輸入編號與日期送出後即可記帳，紀錄可查看過往所有紀錄，以上三個頁面均有排序功能。
<pre>
使用技術：React、Bootstrap、Chart.js、Emotion.js、React-table.js
資料存儲：localStorage
</pre>

## 檔案架構

<pre>
component（通用 component）
|-- btn.js
|-- form.js
|-- nav.js
|-- table.js
|-- task.js
|-- theme.js
頁面 component、頁面 slice
index.css
</pre>

### 通用（index.js、init.js、component/btn.js、component/form.js、component/nav.js、component/table.js、component/theme.js）

* index
    * 根據對應 path 導向各頁面
* init
    * 初始資料設定
* btn
    * 切換模式的 Button，根據 localStorage 在網站開啟時自動切換至上次使用的主題
* form
    * 存放各種會運用在 form 的 component
* nav
    * 網站的導覽列
* table
    * 存放 table component，擁有排序功能
* theme
    * 所有 styled component 主題設定檔

### 首頁（dashboard.js）

接收資料回傳給 Chart.js 產生出圖表

### 記事（note.js、component/task.js）

* task
    * 記事列表 component，根據 edit state 是否為 true 呈現編輯中的 view 或一般的 view
* note
    * 組合所有記事頁面 components，包含從 localStorage 接收資料邏輯

### 項目（item.js）

* item
    * 組合所有項目頁面 components，包含從 localStorage 接收資料邏輯

### 記帳（accounting.js）

* accounting
    * 組合所有記帳頁面 components，包含從 localStorage 接收資料邏輯

### 紀錄（record.js）

* record
    * 組合所有紀錄頁面 components，包含從 localStorage 接收資料邏輯
