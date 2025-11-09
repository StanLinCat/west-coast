---
title: 活動
type: landing

# Your landing page sections - add as many different content blocks as you like
sections:
  # A section to display blog posts
  - block: collection
    content:
      title: 最新活動
      filters:
        folders:
          - newest
    design:
      view: card
      spacing:
        padding: ['3rem', 0, '1rem', 0]

  - block: collection
    id: papers
    content:
      title: 其他活動 & 過去活動
      filters:
        folders:
          - event
        featured_only: false
    design:
      view: article-grid
      columns: '2'
---
