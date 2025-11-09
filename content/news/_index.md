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