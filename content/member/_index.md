---
title: 聯絡資訊
type: landing
sections:
  - block: team-showcase
    content:
      title: Meet Our Team
      subtitle: World-class researchers advancing science
      text: Our diverse team brings together expertise from multiple disciplines.
      user_groups:
        - Principal Investigators
        - Postdoctoral Researchers
        - PhD Students
      sort_by: 'Params.last_name'
      sort_ascending: true
      cta:
        text: Join Our Team
        url: /opportunities
        icon: user-plus
    design:
      show_role: true
      show_organizations: false
      show_interests: true
      show_social: true
      # Section background color (CSS class)
      css_class: "bg-gray-50 dark:bg-gray-900"

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
          filename: 'textures/noise-pattern.svg'
          size: '32px'
          position: 'repeat'
---
