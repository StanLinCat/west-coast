---
title: 聯絡資訊
type: landing

sections:
  - block: markdown
    id: section-1
    content:
      title: Section 1
      subtitle: A subtitle
      text: Add any **markdown** formatted content here - text, im1111 11111111 111111111111111 1111111111 11111111 111111111111 1111111111 1111 111111111 1111111 11111111 111111 11
  - block: markdown
  - id: section-2
    content:
      title: "我們的地點"
      text: | 
        <div style="text-align: center; margin-bottom: 20px;">
        <p>歡迎來到我們的辦公室！</p>
        </div>
        
        <iframe 
          width="200%" 
          height="500" 
          frameborder="0" 
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          src="https://www.openstreetmap.org/export/embed.html?bbox=120.1524066925049%2C23.377866364191988%2C120.15594720840456%2C23.37997383745687&amp;layer=mapnik&amp;marker=23.378993609429333%2C120.15450793011709" 
          style="border: 1px solid black; width: 100%; height: 500px; border-radius: 8px;"
        ></iframe>

        <br/><small><a href="https://www.openstreetmap.org/?#map=19/23.3789563/120.1545105">查看更大的地圖</a></small>
    design:
      columns: '1' 
      max_width: '100%'

  - block: contact-info
  - id: section-3
    content:
      title: Contact Us
      subtitle: Get in touch with our research team
      visit_title: Visit Our Lab
      connect_title: Connect With Us
      address:
        lines:
          - Smith Laboratory
          - Department of Computer Science
          - University of Excellence
          - 123 Science Drive
          - Excellence City, EC 12345
          - United States
      office_hours:
        - "Monday - Friday: 9:00 AM - 5:00 PM"
        - "Lab Meetings: Fridays 2:00 PM"
      email: lab@example.edu
      phone: "+1 (555) 123-4567"
      social:
        - icon: brands/x
          url: https://twitter.com/SmithLabResearch
        - icon: brands/linkedin
          url: https://linkedin.com/company/smith-lab
        - icon: brands/github
          url: https://github.com/smith-lab
      prospective:
        title: Prospective Members
        text: Interested in joining our lab? We're looking for motivated researchers.
        button:
          text: View Open Positions
          url: /opportunities
      map_url: https://maps.google.com/?q=University+of+Excellence
      show_form: false
    design:
      css_class: "bg-gray-50 dark:bg-gray-900"
      spacing:
        padding: ["3rem", 0, "3rem", 0]
---