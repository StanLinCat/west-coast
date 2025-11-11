---
# Page title
title: My page
# Page type - we want a landing page (such as a homepage)
type: landing

# Your landing page sections - add as many different content blocks as you like
sections:
  # A section to display blog posts
  
  - block: collection
    id: section-1
    content:
      title: 新聞資訊施工中....
      subtitle: A subtitle
      text: Add any **markdown** formatted content here - text, images, videos, galleries - and even HTML code!
      # Display content from the `content/post/` folder
      filters:
        folders:
          - news
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      # Choose your content listing view - here we use the `showcase` view
      view: date-title-summary 
      # For the Showcase view, do you want to flip alternate rows? 
      flip_alt_rows: true


  - block: list-manual
    id: manual-news-list
    content:
      title: "最新消息 (手動列表)"
      text: "這裡是手動維護的新聞與公告，不需建立內容檔案。"
      items:
        - title: "11111 Communicate your results effectively with the best data visualizations"
          summary: "Use popular tools such as Plotly, Mermaid, and data frames."
          date: 2023-10-25
          external_link: https://www.stanlincat.com/

        - title: "第二條消息：我們的活動報名開始了！"
          summary: "點擊連結直接前往活動報名頁面。"
          date: 2024-03-10
          external_link: https://www.your-event-link.com/

        - title: "協會年度報告發布"
          summary: "詳細說明了我們去年的所有成果。"
          date: 2024-01-05
          external_link: https://www.your-report-link.com/
    design:
      columns: "2"

  - block: markdown
    id: about
    content:
      title: "關於 西海岸發展協會"
      text: |
        #### 非以營利為目的之公益性社會團體
        本協會的宗旨是結合個人、工商社會團體、宗教團體及政府資源，發揮服務兼謀成長的精神，以促進西海岸在地居民四生（生活 生產 生態 生命）各大層面間的實質豐沛與飽滿，並致力於謀求社會福利、增進社會公益。  

        我們的任務包含協助推動發展台灣西海岸各項產業，使其符合永續發展的精神，同時透過珍惜與維護西海岸的自然資源，發展生態教育與觀摩活動，並提供各種生活體驗活動，辦理各種生活事業，以期提升生活品質，使人帶來豐盛與快樂。我們深信透過協助、關懷與推廣服務諮詢，能使人看見生命的真善美，促進生命熱情的發揚，發揮生命的光芒與未來。🌱
    design:
      columns: "1"
      background:
        color: "system"
      spacing:
        padding: ["3rem", 0, "3rem", 0]
  - block: collection
    id: section-1
    content:
      title: 信息資訊施工中....
      subtitle: A subtitle
      text: Add any **markdown** formatted content here - text, images, videos, galleries - and even HTML code!
      # Display content from the `content/post/` folder
      filters:
        folders:
          - news
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      # Choose your content listing view - here we use the `showcase` view
      view: citation
      # For the Showcase view, do you want to flip alternate rows?
      flip_alt_rows: true

  - block: collection
    id: papers
    content:
      title: Featured Publications
      filters:
        folders:
          - news
        featured_only: false
    design:
      view: article-grid
      columns: '4'
      
  - block: research-areas
    content:
      title: Research Focus Areas
      subtitle: Advancing Science Through Innovation
      text: Our lab conducts cutting-edge research across multiple domains
      items:
        - name: Computational Biology
          description: Developing algorithms for genomic analysis and protein structure prediction
          emoji: 🧬
          gradient: from-green-400 to-blue-500
          status: active
          topics:
            - Genomics
            - Proteomics
            - Bioinformatics
            - Systems Biology
          team_size: 12 researchers
          publications: 45 papers
          funding: $2.5M
          cta:
            text: Learn More
            url: /research/computational-biology

        - name: Machine Learning
          description: Advancing deep learning methods for scientific discovery
          emoji: 🤖
          gradient: from-purple-400 to-pink-500
          status: active
          topics:
            - Deep Learning
            - Neural Networks
            - Computer Vision
            - NLP
          team_size: 8 researchers
          publications: 32 papers
          funding: $1.8M

        - name: Materials Science
          description: Designing novel materials through computational modeling
          emoji: 🔬
          gradient: from-orange-400 to-red-500
          status: emerging
          topics:
            - Nanomaterials
            - Quantum Materials
            - Polymers
          team_size: 6 researchers
          publications: 28 papers
          funding: $1.2M
    design:
      layout: cards

  - block: logos
    content:
      title: Our Partners & Collaborators
      subtitle: Working with leading institutions worldwide
      text: We collaborate with top universities and research centers
      logos:
        - name: MIT
          image: partners/mit.png
          url: https://mit.edu
          description: Massachusetts Institute of Technology
        - name: Stanford University
          image: partners/stanford.svg
          url: https://stanford.edu
          description: Leading research university
        - name: Google Research
          image: partners/google.png
          url: https://research.google
          description: AI and ML research
        - name: Microsoft Research
          image: partners/microsoft.svg
          url: https://www.microsoft.com/research
          description: Computing research lab
    design:
      display_mode: grid
      css_class: "bg-gray-50 dark:bg-gray-900"


  - block: faq
    content:
      title: Frequently Asked Questions
      subtitle: Find answers to common questions
      text: Can't find what you're looking for? [Contact us](/contact)
      items:
        - question: What is Hugo Blox Builder?
          answer: Hugo Blox Builder is a no-code website builder framework powered by Hugo and Tailwind CSS.
        
        - question: Is it free to use?
          answer: Yes! Hugo Blox Builder is open source and free to use under the MIT license.
        
        - question: How do I get started?
          answer: |
            Getting started is easy:
            1. Choose a template
            2. Click "Use Template"
            3. Customize your content
            4. Deploy to GitHub Pages or Netlify
      
      button:
        text: View All FAQs
        url: /faq/
        icon: arrow-right
    design:
      spacing:
        padding: ["6rem", "0", "6rem", "0"]

  - block: cta-card
    content:
      title: 'Ready to Get Started?'
      text: 'Join thousands of users creating amazing websites'
      button:
        text: 'Get Started Free'
        url: '/signup/'
        icon: 'hero/rocket-launch'
    design:
      card:
        css_class: 'cta-glassmorphism'
        text_color: 'auto' # auto|light|dark
        overlay_opacity: 0.15 # 0.0-1.0 for contrast control
      background:
        gradient:
          start: 'primary-500'
          end: 'primary-700'
          direction: 135
        image:
          filename: 'career/career1.png'
          size: '32px'
          position: 'repeat'
  - block: search-hero
    content:
      badge:
        text: "500+ AI answers added this week"
        show_pulse: true  # Shows pulsing dot indicator
      
      title: "Master ==AI Tools==. ==Boost Your Productivity.=="
      
      subtitle: "Get instant answers to your AI questions from our comprehensive knowledge base."
      
      search_placeholder: "Ask anything about AI tools, prompts, or workflows..."
      
      suggestions:
        - "ChatGPT prompts"
        - "Midjourney tips"
        - "AI automation"
        - "Claude vs GPT-4"
      
      stats:
        - value: "2,500+"
          label: "Expert Answers"
        - value: "50K+"
          label: "Monthly Users"
        - value: "4.9/5"
          label: "User Rating"
    
    design:
      background:
        gradient_mesh:
          enable: true
          style: "orbs"       # orbs, waves, dots, grid
          animation: "pulse"   # pulse, float, rotate, none
          intensity: "subtle"  # subtle, medium, bold
          colors:
            - "primary-500/20"
            - "primary-600/20"
      spacing:
        padding: ["8rem", "0", "6rem", "0"]


  - blocks: knowledge-categories
    type: categories
    design:
      spacing:
        padding: ["6rem", "0", "6rem", "0"]
    content:
      title: "探索分類"
      subtitle: "依主題瀏覽我們的內容"
      categories:
        - title: "部落格"
          category: "blog"
          icon:
            name: "book"
            bg_color: "bg-blue-100"
            text_color: "text-blue-600"
        - title: "專案"
          category: "projects"
          icon:
            name: "briefcase"
        - title: "資源"
          category: "resources"
          icon:
            name: "archive"
      view_all:
        text: "檢視全部分類"
        link: "/categories"

  - block: collection
    content:
      filters:
        folders:
          - newest
    design:
      view: card
      spacing:
        padding: ['3rem', 0, '6rem', 0]
---