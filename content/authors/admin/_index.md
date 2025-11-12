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
role: 網頁軟體與維護專員

user_groups:
  - 幕後支援
# Organizations/Affiliations to display in Biography blox
organizations:
  - name: 現職奇景韌體工程師
    url: https://www.stanlincat.com/

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles: 
  - icon: at-symbol
    url: 'mailto:alex.johnson@meta.com'
    label: E-mail Me
interests:
  - Large Language Models
  - Computer Vision
  - Reinforcement Learning
  - AI Ethics

education:
  - area: 機械工程控制組碩士
    institution: 台科大
    date_start: 2016-01-01
    date_end: 2020-12-31
    summary: |
      Thesis on _Why LLMs are awesome_. Supervised by [Prof Joe Smith](https://example.com). Presented papers at 5 IEEE conferences with the contributions being published in 2 Springer journals.
    button:
      text: 'Read Thesis'
      url: 'https://example.com'
  - area: BSc Artificial Intelligence
    institution: Massachusetts Institute of Technology
    date_start: 2016-01-01
    date_end: 2020-12-31
    summary: |
      GPA: 3.4/4.0

      Courses included:
      - lorem ipsum dolor sit amet, consectetur adipiscing elit
      - lorem ipsum dolor sit amet, consectetur adipiscing elit
      - lorem ipsum dolor sit amet, consectetur adipiscing elit
work:
  - position: Director of Cloud Infrastructure
    company_name: GenCoin
    company_url: ''
    company_logo: ''
    date_start: 2021-01-01
    date_end: ''
    summary: |2-
      Responsibilities include:
      - lorem ipsum dolor sit amet, consectetur adipiscing elit
      - lorem ipsum dolor sit amet, consectetur adipiscing elit
      - lorem ipsum dolor sit amet, consectetur adipiscing elit
  - position: Backend Software Engineer
    company_name: X
    company_url: ''
    company_logo: ''
    date_start: 2016-01-01
    date_end: 2020-12-31
    summary: |
      Responsibilities include:
      - Migrated infrastructure to a new data center
      - lorem ipsum dolor sit amet, consectetur adipiscing elit
      - lorem ipsum dolor sit amet, consectetur adipiscing elit

# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: Technical Skills
    items:
      - name: Python
        description: ''
        percent: 80

      - name: RStudio
        description: ''
        percent: 100

      - name: PyTorch
        description: ''
        percent: 40

  - name: Hobbies
    color: '#eeac02'
    color_border: '#f0bf23'
    items:
      - name: Hiking
        description: ''
        percent: 60

      - name: Cats
        description: ''
        percent: 100

      - name: Photography
        description: ''
        percent: 80


languages:
  - name: English
    percent: 100
  - name: Chinese
    percent: 75
  - name: Portuguese
    percent: 25

# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
awards:
  - title: Neural Networks and Deep Learning
    url: https://www.coursera.org/learn/neural-networks-deep-learning
    date: '2023-11-25'
    awarder: Coursera
    summary: |
      I studied the foundational concept of neural networks and deep learning. By the end, I was familiar with the significant technological trends driving the rise of deep learning; build, train, and apply fully connected deep neural networks; implement efficient (vectorized) neural networks; identify key parameters in a neural network’s architecture; and apply deep learning to your own applications.
  - title: Blockchain Fundamentals
    url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
    date: '2023-07-01'
    awarder: edX
    summary: |
      Learned:
      - Synthesize your own blockchain solutions
      - Gain an in-depth understanding of the specific mechanics of Bitcoin
      - Understand Bitcoin’s real-life applications and learn how to attack and destroy Bitcoin, Ethereum, smart contracts and Dapps, and alternatives to Bitcoin’s Proof-of-Work consensus algorithm
  - title: 'Object-Oriented Programming in R'
    url: https://www.datacamp.com/courses/object-oriented-programming-with-s3-and-r6-in-r
    certificate_url: https://www.datacamp.com
    date: '2023-01-21'
    awarder: datacamp
    summary: |
      Object-oriented programming (OOP) lets you specify relationships between functions and the objects that they can act on, helping you manage complexity in your code. This is an intermediate level course, providing an introduction to OOP, using the S3 and R6 systems. S3 is a great day-to-day R programming tool that simplifies some of the functions that you write. R6 is especially useful for industry-specific analyses, working with web APIs, and building GUIs.

type: landing
sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
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
      title: "My Section Title"
      text: "This is sample text content for the section."
    design:
      background:
        color: ""
        # gradient_start: "#4f46e5"
        # gradient_end: "#7c3aed"
        # text_color_light: true
      # spacing:
      #   padding: ["6", "6", "6", "6"]
      # columns: "1"
  - block: resume-awards
    content:
      username: "admin"
      title: "My Section Title"
      text: "This is sample text content for the section."
    design:
      background:
        color: ""
        # gradient_start: "#4f46e5"
        # gradient_end: "#7c3aed"
        # text_color_light: true
      # spacing:
      #   padding: ["6", "6", "6", "6"]
      # columns: "1"
  - block: resume-experience
    content:
      title: "Experience"
      items:
        - title: "Senior Developer"
          company: "Tech Company"
          location: "San Francisco, CA"
          date_start: "2020-01-01"
          date_end: ""
          description: |
            * Led development of key features
            * Mentored junior developers
            * Improved system performance by 40%
        - title: "Software Engineer"
          company: "Startup Inc"
          location: "New York, NY"
          date_start: "2018-06-01"
          date_end: "2019-12-31"
          description: "Developed web applications using modern technologies"
    design:
      columns: "1"

---

本職位為社團法人台灣西海岸 (福音) 發展協會的關鍵執行者，負責實施新媒體策略，維護與發展協會的網頁、軟體及數位平台，以全力推動「西海岸成為福音海岸，西海岸成為黃金海岸」的雙重異象。專員須確保協會的**「四生」發展策略**——以生命為核心傳報福音，結合生產、生活、生態——能有效透過數位管道傳播，將「天國近了，你們應當悔改」的呼召帶給坐在黑暗裡的百姓。主要職責包括即時更新活動成果，如聖誕文化節和禱告祭壇的資訊，推廣神國法則的產業，並促進眾教會資源連結與培訓，同時協助協會強化禱告火牆，召喚在西海岸有根源的兒女回家共同發展四生。應徵者需運用技術力量，幫助這塊被稱為黑暗沉淪之地的區域 實現日光之下「沒淹水、嘸缺水、環境美、水質清、魚保證、人清盈、賺不停」的願景，將盼望的種子深植在這片土地中