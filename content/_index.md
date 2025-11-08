---
title: ''
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: 台灣西海岸發展協會🦪 
      text: Taiwan West Coast Development Association🐟 
      primary_action:
        text: 最新消息
        url: "#solutions"
        icon: rocket-launch
      # secondary_action:
      #   text: Read the docs
      #   url: https://docs.hugoblox.com
      announcement:
        text: "相關報導"
        link:
          text: "Read more"
          url: "news/"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "system"
      background:
        # color: "navy"
        image:
          # Add your image background to `assets/media/`.
          filename: home_big_image1.png
          filters:
            brightness: 0.5
          size: contain
          position: center
          parallax: false
        text_color_light: false

  - block: stats
    content:
      items:
        - statistic: "1,000+"
          description: |
            服務總人數估計  
            從2022年成立至今
        - statistic: "12"
          description: |
            合作與連結單位  
            地方教會、非營利組織等
        - statistic: "1"
          description: |
            政府等主管機關  
            認證與獎項
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "0rem", 0]

  - block: markdown
    id: about
    content:
      title: "關於 西海岸發展協會"
      text: |
        ## 非以營利為目的之公益性社會團體
        本協會的宗旨是結合個人、工商社會團體、宗教團體及政府資源，發揮服務兼謀成長的精神，以促進西海岸在地居民四生（生活 生產 生態 生命）各大層面間的實質豐沛與飽滿，並致力於謀求社會福利、增進社會公益。  

        我們的任務包含協助推動發展台灣西海岸各項產業，使其符合永續發展的精神，同時透過珍惜與維護西海岸的自然資源，發展生態教育與觀摩活動，並提供各種生活體驗活動，辦理各種生活事業，以期提升生活品質，使人帶來豐盛與快樂。我們深信透過協助、關懷與推廣服務諮詢，能使人看見生命的真善美，促進生命熱情的發揚，發揮生命的光芒與未來。🌱
    design:
      columns: "1"
      background:
        color: "system"
      spacing:
        padding: ["3rem", 0, "3rem", 0]

  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: 生活 生產 生態 生命
          text: 西海岸百姓四元素
          feature_icon: check
          features:
            - "生活：藉由提供生活體驗活動、辦理各種生活事業及各種活動，來改善生活條件，提升生活品質"
            - "生產：涉及協助推動發展台灣西海岸的各項產"
            - "生態：旨在珍惜與維護西海岸的自然資源，以維持生態多樣性的自然景觀，並透過豐富的優質景觀，推進生態教育的活動"
            - "生命：透過協助、關懷與推廣服務諮詢，發揮各種適當的活動，目的是使人看見生命的真善美，發揮生命的熱情與光芒，並帶來豐盛與快樂，使西海岸充滿活力與未來"
          image: 4life2.jpg
          button:
            text: 回首頁
            url: /
        - title: 團隊三個心聲
          text: 西海岸協會的共識
          feature_icon: bolt
          features:
            - "第一，將不負眾人愛心，彼此相愛合而為一"
            - "第二，為福音遍傳忠心擺上齊效力"
            - "第三，願聯合全臺灣西海岸團隊，同心合意興旺福音"
          # Upload image to `assets/media/` and reference the filename here
          image: crownflag.jpg
          button:
            text: 聯絡我們
            url: /contact
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["0rem", 0, "0rem", 0]

  - block: testimonials
    content:
      items:
        - name: "林洽松 牧師"
          role: "西海岸發展協會理事長"
          # Upload image to `assets/media/` and reference the filename here
          image: "LinQiasong.jpg"
          text: 四百年來，先祖移民、各族各方，都從西海岸上岸。由於早年許多渡海來台的先人，同步把偶像崇拜帶進西海岸，成為當地的核心根源。雖然在荷蘭時期，曾因宣教士為平埔族帶來短暫復興，陸陸續續也有許多的神父、牧師進入西海岸，但是卻難以帶來大規模突破。如今看見上帝的手開始在西海岸做工，將苗栗、台中、彰化、雲林、嘉義、台南連成一線，相信將要為西海岸、為嘉義的福音帶來大復興！
        - name: "林碧亮 牧師"
          role: "某位西海岸的牧師"
          # Upload image to `assets/media/` and reference the filename here
          image: "BillBright.jpg"
          text: 回首2022年，五味雜陳充滿，協會設立時，因著感動哭了幾次，一方面神有恩典，一方面又感到疲累，前行艱難…。然而當我們轉向神，來感恩時，神就開始說話，神蹟是相信神，相信神掌權，正在引領我們前行。
        - name: "黃國倫 音樂人"
          role: "台灣詞曲作家、唱片製作人"
          # Upload image to `assets/media/` and reference the filename here
          image: "YellowMusic.jpg"
          text: "當時(2023)神感動我，除非你們不要我來，否則我要去西海岸（辦音樂佈道會）。這次巡迴佈道主題就叫『沒有不可能』，就是鼓勵說道不要放棄，靠神，凡事都有可能，我們就一起來做。"
    design:
      spacing:
        # Reduce bottom spacing so the testimonial appears vertically centered between sections
        padding: ["1rem", 0, 0, 0]

---
