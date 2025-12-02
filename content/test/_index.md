---
title: google sheet 測試
type: landing

sections:
  - block: markdown # 這裡只放標題或其他文字
    id: id1
    content:
      title: "測試"
      text: "" # 內容留空或放簡短介紹
    design:
      columns: "1"
      background:
        color: "system"

  - block: full_width_content # 建立一個新的空白區塊來放表單
    content:
      # 假設您將表單程式碼放在 layouts/shortcodes/contact_form.html
      text: "{{< contact_form >}}" 
    design:
      columns: "1"
      # 調整 design 參數，讓這個區塊的內容可以佔滿畫面，例如：
      # 調整為 max_width: "100%"
---