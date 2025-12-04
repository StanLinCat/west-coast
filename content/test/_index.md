---
title: 奉獻 google sheet
type: landing

sections:
  - block: markdown
    content:
      title: 
      text: |
        ## 奉獻帳號資訊如下：
        銀行：第一銀行興嘉分行 (一銀代號007)  
        戶名：社團法人台灣西海岸發展協會  
        帳號：50310051844  
        備註：您的名字與奉獻原因（選擇性填寫）  

        ### 若您捐款，滙款後，請提供資訊：  
        開立捐款收據，使您報税時可以列舉申報，同時協會也在經管上，受政府稽查，收支清楚。
        
        若要報稅與收據，請務必確認包含以下資訊  
        1.滙款時間&金額  
        2.奉獻帳號後五碼  
        3.收據寄給您的地址  
        4.收據抬頭，通常是捐款人姓名或是公司完整姓名  
        5.您的連絡電話  
    design:
      spacing:
        padding: ["1rem", 0, "0rem", 0]
      columns: "1"
      background:
        color: "system"

  - block: full_width_content # 建立一個新的空白區塊來放表單
    content:
      # 假設您將表單程式碼放在 layouts/shortcodes/contact_form.html
      text: "{{< contact_form >}}" 
    design:
      spacing:
        padding: ["0rem", 0, "0rem", 0]
      columns: "1"
      max_width: "100%"
      # 調整 design 參數，讓這個區塊的內容可以佔滿畫面，例如：
      # 調整為 max_width: "100%"

  - block: markdown
    content:
      title: 
      text: |
        有任何問題請洽 專員 王竑雅  
        電話0966-152104  
        謝謝您的愛心&提供資訊。    


        <br><br>

        ### 協會資訊
        本會為合法的非營利組織  
        抬頭：社團法人台灣西海岸發展協會  
        統編：88912761  
        地址：625嘉義縣布袋鎮海興街6號  

        [設立許可(內政部110.05.19台內團字第1100022717號)](https://www.judicial.gov.tw/tw/cp-144-712488-4c585-1.html)
        法人登記證書通過 (台灣嘉義地方法院111.09.07，111證社字第000011號)  

        ![donate](donate_image.jpg)


    design:
      spacing:
        padding: ["0rem", 0, "1rem", 0]
      columns: "1"
      background:
        color: "system"
---