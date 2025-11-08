---
title: 活動
type: landing

# Your landing page sections - add as many different content blocks as you like
sections:
  # A section to display blog posts
  - block: collection
    content:
      title: 最新活動
      subtitle:  subtitle
      text: text
      filters:
        folders:
          - newest
    design:
      view: card
      spacing:
        padding: ['3rem', 0, '6rem', 0]

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
      columns: '2'
---
