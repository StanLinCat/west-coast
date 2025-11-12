---
title: 成員
type: landing
# To publish author profile pages, remove all the `build` and `cascade` settings below.
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
        - 幕後支援
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
---
