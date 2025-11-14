---
# Display name
title: 林昱廷

# Name pronunciation (optional)
name_pronunciation: Lin Yu Ting

# Full name (for SEO)
first_name: Yu Ting
last_name: Lin

# Status emoji
status:
  icon: 🐱

# Is this the primary user of the site?
superuser: true

# Role/position/tagline
role: 協會網頁與軟體志工

user_groups:
  - 幕後支援
# Organizations/Affiliations to display in Biography blox
organizations:
  - name: 現職奇景韌體工程師
    url: https://www.stanlincat.com/about/

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles: 
  - icon: at-symbol
    url: 'mailto:bacon4egg@gmail.com'
    label: E-mail Me
  - icon: brands/orcid
    url: https://orcid.org/0000-0003-3679-2823
  - icon: brands/github
    url: https://github.com/stanlincat
  - icon: brands/linkedin
    url: https://www.linkedin.com/in/yutinglin86/
  - icon: brands/youtube
    url: https://www.youtube.com/@%E6%9E%97%E6%98%B1%E5%BB%B7-g9t
  - icon: brands/instagram
    url: https://www.instagram.com/stan.lin.cat/

interests:
  - C語言應用
  - 不辣的美食
  - 和乖小孩玩

education:
  - area: 機械與控制工程碩士
    institution: 臺灣科技大學
    date_start: 2019-09-01
    date_end: 2021-08-31
    summary: |
      碩士論文針對飛彈的非線性系統，提出新的姿態適應控制器，其係將氣動力矩係數以及環境造成的外擾整合在未知函數中，再以函數近似估測之，並配合Lyapunov穩定法則來確保追蹤誤差的漸近收斂性，藉此改善傳統適應控制無法處理快速時變未知項的問題，同時也解除過往強健控制需已知未知邊界之限制。
    button:
      text: '查看論文'
      url: 'https://etheses.lib.ntust.edu.tw/detail/c2f4053b2a69a292a48c35876c2ad72d/'
  - area: 機械工程學士
    institution: 臺灣科技大學
    date_start: 2015-09-01
    date_end: 2019-06-30
    summary: |
      大學專題與電機系跨領域合作，提出一種基於肌肉機械訊號（MMG）的可穿戴式人機介面。利用固定於客製化錶帶上的三軸加速度計量測伸指肌末端的MMG訊號，並即時辨識八種手部遊戲手勢。系統從時間域及小波封包分解（WPD）係數中擷取特徵，並以逐步前向選擇（SFS）挑選重要特徵，以提升分類準確率並降低運算量。研究比較了KNN、SVM、LDA及DNN等分類器，並以35位受試者進行測試。
    button:
      text: '查看論文'
      url: 'https://ieeexplore.ieee.org/document/9146882'
  - area: 機械科
    institution: 嘉義高工
    date_start: 2013-06-01
    date_end: 2015-08-31
    summary: |
      高職專題利用行星輪系高減速比的特性，結合十字滑塊機構，設計出可進行內擺運動的新型減速機。研究並以擺線轉子與針狀定子替代齒輪驗證理論，其設計具高效率、結構緊湊、節省空間及自鎖功能。我們製作原型並進行效率測試，結果達92%。此外，針對偏心造成的震動問題，以向量迴路法分析重心位移，並提出「重心偏移」改善策略。
    button:
      text: '查看論文'
      url: 'https://www.ntsec.edu.tw/science/detail.aspx?a=21&cat=12389&sid=12423'
work:
  - position: 觸控韌體工程師
    company_name: 奇景光電
    company_url: 'https://www.himax.com.tw/zh/'
    date_start: 2023-07-03
    date_end: ''
    summary: |
      - 設計、維護並優化觸控韌體演算法，提升平板裝置上手指觸控與主動式手寫筆輸入的效能與可靠性。
      - 開發輔助觸控演算法的相關工具，以提升除錯效率並加速整體開發流程。
  - position: 助理研究員
    company_name: 國家中山科學研究院
    date_start: 2022-02-01
    date_end: 2023-06-30
    summary: |
      銳鳶二型光學酬載系統整合、武器模擬軟體、採購案與文書處理

# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: 軟體技能
    items:
      - name: Python
        description: ''
        percent: 75

      - name: C語言
        description: ''
        percent: 90

      - name: 數位訊號處理
        description: '分類器、濾波器、小波轉換'
        percent: 80

      - name: 控制理論
        description: '適應性控制、卡爾曼濾波'
        percent: 70

      - name: 靜態網頁
        description: ''
        percent: 30

  - name: 其他技能
    color: '#eeac02'
    color_border: '#f0bf23'
    items:
      - name: 居家修繕與清潔
        description: '掃廁所、修馬桶、冷氣維護'
        percent: 60

      - name: 兒童互動
        description: '基礎英文教學、主日學、團康'
        percent: 100

      - name: 料理
        description: '簡易家常菜、副食品製作'
        percent: 80



# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
awards:
  - title: IBM Data Warehouse Engineer認證
    certificate_url: https://coursera.org/share/4f34cd01ae3e02f6aa0ea88dce97ebb0
    date: '2023-01-01'
    awarder: Coursera
    summary: |
      具備撰寫與操作 SQL 查詢以管理資料庫的能力，能部署、維護並優化 MySQL、PostgreSQL 與 DB2 等關聯式資料庫系統。能以 Python 和 Shell 建立簡單的資料處理流程。了解資料庫的基本管理方式，並能運用資料分析工具整理與呈現資料。

  - title: 斐陶斐台科大分會110年榮譽會員
    url: 
    date: '2021-04-01'
    awarder: 中華民國斐陶斐榮譽學會國立台灣科技大學分會

  - title: '萬望福音中心 英文小老師志工'
    url: https://share.google/4lYAlDi9r9vL6Ymqi
    date: '2020-09-30'
    awarder: 台灣內地會(OMF)
    summary: |
      <p>2020年9月~2021年6月每周六上午，擔任英文老師志工，參與萬望福音中心兒童英文班，協助外師課程預備、講解聖經故事、帶領唱歌和小遊戲、英文單字與文法教學。</p>
      <div class="not-prose flex flex-wrap gap-2 items-center mt-1">
        <img src="2020omf1.jpg" style="width:120px !important; height:auto;" />
        <img src="2020omf2.jpg" style="width:120px !important; height:auto;" />
        <img src="2020omf3.jpg" style="width:120px !important; height:auto;" />
        <img src="2020omf4.jpg" style="width:120px !important; height:auto;" />
      </div>
  
  - title: '2019技職福音營 生活美宣組'
    url: 
    date: '2019-07-20'
    awarder: 校園福音團契
    summary: |
      <p>撒該家籌備，翹課少年的謎團，擔任生活美宣組的一員，協助活動主視覺印刷、營會總務，同時也負責出演舞台劇反派腳色。另外的次要工作包含臨時機動、交通、膳食預備、宿舍清點等等工作。籌備耗時約一年，很辛苦，但與撒該家人們有革命情感，也是此生難忘回憶。</p>
      <div class="not-prose flex flex-wrap gap-2 items-center mt-1">
        <img src="2019campus1.jpg" style="width:120px !important; height:auto;" />
        <img src="2019campus2.jpg" style="width:120px !important; height:auto;" />
        <img src="2019campus3.jpg" style="width:120px !important; height:auto;" />
        <img src="2019campus4.jpg" style="width:120px !important; height:auto;" />
      </div>

  - title: '2016才藝品格營 幕後PPT'
    url: 
    date: '2016-07-15'
    awarder: 台北靈糧堂
    summary: |
      <p>節目活動組的一員，由當時GO小組長推薦加入PPT組，團隊負責大活動背景音樂、敬拜PPT歌詞更新、排練確認整體詩歌順序與部分講員PPT撥放。另外協助其他節目組活動，例如遊戲試玩、現場機動支援。台北靈糧堂籌備團隊非常專業，我們事前花了很多時間練習。</p>
      <div class="not-prose flex flex-wrap gap-2 items-center mt-1">
        <img src="2016skill1.jpg" style="width:120px !important; height:auto;" />
        <img src="2016skill2.jpg" style="width:120px !important; height:auto;" />
        <img src="2016skill3.jpg" style="width:120px !important; height:auto;" />
        <img src="2016skill4.jpg" style="width:120px !important; height:auto;" />
      </div>

  - title: '三和福音中心兒童營 團康小老師'
    url: 
    date: '2015-07-20'
    awarder: 台灣內地會(OMF)
    summary: |
      <p>2015年7月底左右，三天的英文兒童營，與宣教士等外師合作，主要擔任團康小老師，團體遊戲規劃與帶領，協助其他老師各項活動，簡易中英翻譯，餅乾製作等等。結束繁忙的七月(連續三個營會)，我直接累倒在家兩天。</p>
      <div class="not-prose flex flex-wrap gap-2 items-center mt-1">
        <img src="3box3.jpg" style="width:120px !important; height:auto;" />
        <img src="3box4.jpg" style="width:120px !important; height:auto;" />
        <img src="3box5.jpg" style="width:120px !important; height:auto;" />
        <img src="3box1.jpg" style="width:120px !important; height:auto;" />
      </div>

  - title: '2015才藝品格營 輔導'
    url: 
    date: '2015-07-15'
    awarder: 台北靈糧堂
    summary: |
      <p>剛結束嘉義的兒童營，馬上就是帶領東石靈糧福音中心的年輕人參加才品，地點在逢甲大學，帶領小隊大地遊戲、晨更、晚禱、吃便當。</p>
      <div class="not-prose flex flex-wrap gap-2 items-center mt-1">
        <img src="2015skill1.jpg" style="width:120px !important; height:auto;" />
        <img src="2015skill2.jpg" style="width:120px !important; height:auto;" />
        <img src="2015skill3.jpg" style="width:120px !important; height:auto;" />
        <img src="2015skill4.jpg" style="width:120px !important; height:auto;" />
      </div>

  - title: '嘉義浸信會兒童營 團康小老師'
    url: 
    date: '2015-07-13'
    awarder: 嘉義基督教浸信會
    summary: |
      <p>2015年7月為期三天兒童營，擔任團康小老師，團體遊戲規劃與帶領，協助其他老師各項活動，陪伴孩子唱歌、手做、飲食與學習。</p>
      <div class="not-prose flex flex-wrap gap-2 items-center mt-1">
        <img src="c1.jpg" style="width:120px !important; height:auto;" />
        <img src="c2.jpg" style="width:120px !important; height:auto;" />
      </div>

  - title: '東石靈糧福音中心 各種志工'
    url: https://www.facebook.com/ilinkDongshi/photos_albums?locale=zh_TW
    date: '2013-08-01'
    awarder: 東石靈糧福音中心
    summary: |
      因為父親工作因素，我2013年從台北搬家到嘉義東石並轉學。之後就是各式各樣的支援和協助，幫小朋友課輔班、帶活動、講故事、做小點心、洗碗、洗很多碗、搬物資、處理問題兒童、協助探訪、接待、文書作業、攝影、房屋修繕、水電、清潔、災後救助等等。大多是兒童事工，上帝也間接讓我發現我在服事兒童有恩賜。

  - title: '2013才藝品格營 副輔導'
    url: 
    date: '2013-07-13'
    awarder: 台北靈糧堂
    summary: |
      <p>青年牧區年度盛會才品，大航海時代，地點在台北城市大學，帶領小隊大地遊戲、晨更、晚禱、吃便當。</p>
      <div class="not-prose flex flex-wrap gap-2 items-center mt-1">
        <img src="2013skill1.jpg" style="width:120px !important; height:auto;" />
        <img src="2013skill2.jpg" style="width:120px !important; height:auto;" />
        <img src="2013skill3.jpg" style="width:120px !important; height:auto;" />
        <img src="2013skill4.jpg" style="width:120px !important; height:auto;" />
      </div>




type: landing
sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: '林昱廷弟兄在協會中擔任網頁設計的要職。他的專業能力確保了西海岸「福音海岸、黃金海岸」的轉化使命，能透過數位平台廣為傳遞。他致力於打造一個高效能的網路門戶，使協會推動「四生」（生命、生產、生活、生態）發展策略的資訊能清晰地觸及大眾。同時也思考如何推廣西海岸在地文化「五生」，即生蠔、生菜、生魚片、生煎包、生啤酒。'
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: https://www.stanlincat.com/cv/
      headings:
        about: '關於昱廷'
        education: '教育背景'
        interests: '興趣'
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: resume-skills
    content:
      username: "admin"
      title: "相關技能"
    design:
      spacing:
        padding: ["1", "1", "1", "1"]
        columns: "2"
  - block: resume-experience
    content:
      username: "admin"
    design:
      columns: "1"
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: resume-awards
    content:
      username: "admin"
      title: "其他資訊"
      text: "社會服務、獎項、證書、證照、紀錄"
    design:
      background:
        color: ""
        # gradient_start: "#4f46e5"
        # gradient_end: "#7c3aed"
        # text_color_light: true
      # spacing:
      #   padding: ["6", "6", "6", "6"]
      # columns: "1"
---

