# 🤖 Claude Code Implementation Checklist

**Step-by-Step Guide for Building the Bitcoin vs AI Power Dashboard**

This checklist breaks down the project into manageable tasks for Claude Code to implement. Work through these in order for the best results.

---

## 🎯 Project Goals Reminder
- Create a **shippable MVP** first (working dashboard with 2 charts)
- Use **ApexCharts** for visualizations
- Implement **glassmorphism design** throughout
- Deploy to **GitHub Pages** when MVP complete
- Make it **responsive** and beautiful

---

## ✅ PHASE 1: FOUNDATION (MVP - Must Ship!)

### Task 1: Project Setup
- [ ] Create project directory structure:
  ```
  bitcoin-ai-power-dashboard/
  ├── index.html
  ├── css/
  │   ├── styles.css
  │   └── animations.css
  ├── js/
  │   ├── data.js
  │   ├── charts.js
  │   └── main.js
  ├── assets/
  └── README.md
  ```
- [ ] Add .gitignore file (optional, for future use)
- [ ] Create LICENSE file (MIT)

**Success Check**: Directory structure created, files initialized

---

### Task 2: HTML Structure (index.html)
Create the semantic HTML structure:

**Required Elements**:
- [ ] `<!DOCTYPE html>` with lang="en"
- [ ] Meta tags:
  - [ ] UTF-8 charset
  - [ ] Viewport for mobile
  - [ ] Description meta tag
  - [ ] Open Graph tags (for social sharing)
- [ ] Link to Google Fonts (Inter, weights: 300,400,500,600,700,800)
- [ ] Link to CSS files (styles.css, animations.css)
- [ ] CDN link to ApexCharts
- [ ] Header section:
  - [ ] Logo/title "⚡ Bitcoin vs AI Power Dashboard"
  - [ ] Subtitle: "Energy Consumption Analysis 2015-2030"
  - [ ] Dark mode toggle button (placeholder for Phase 2)
- [ ] Main section with:
  - [ ] Executive summary cards container (3 cards)
  - [ ] Chart container 1 (Multi-line time series) - id="chart-timeline"
  - [ ] Chart container 2 (Stacked area) - id="chart-breakdown"
  - [ ] Placeholder divs for future charts (ids: chart-geo, chart-efficiency, etc.)
- [ ] Footer section:
  - [ ] Data sources text
  - [ ] GitHub link
  - [ ] Copyright
- [ ] Script tags for JS files (data.js, charts.js, main.js) at end of body

**Success Check**: HTML validates, all structure in place, looks basic but organized

---

### Task 3: Glassmorphism CSS (styles.css)

**Body & Background**:
- [ ] Animated gradient background:
  ```css
  body {
    background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
  }
  ```
- [ ] @keyframes gradientShift for background animation
- [ ] Reset margins, padding, box-sizing
- [ ] Font family: 'Inter', sans-serif
- [ ] Color: white
- [ ] Smooth scroll behavior

**Header**:
- [ ] Sticky positioning (top: 0)
- [ ] Glassmorphism effect:
  ```css
  backdrop-filter: blur(30px);
  background: rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  ```
- [ ] Flexbox layout for title and controls
- [ ] Padding and z-index

**Glass Cards** (class: .glass-card):
- [ ] Glassmorphism properties:
  ```css
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  ```
- [ ] Hover effect (transform translateY, box-shadow increase)
- [ ] Transition: all 0.3s ease
- [ ] Padding: 2rem

**Summary Cards Grid**:
- [ ] Display: grid
- [ ] grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
- [ ] Gap: 2rem
- [ ] Margin-bottom: 3rem

**Chart Containers**:
- [ ] Glass card styling
- [ ] Min-height: 400px
- [ ] Margin-bottom: 3rem

**Typography**:
- [ ] H1: 2.5rem, weight 800, text-shadow
- [ ] H2: 2rem, weight 700
- [ ] H3: 1.5rem, weight 600
- [ ] Body text: 1rem, weight 400
- [ ] All text: color white with subtle shadow

**Footer**:
- [ ] Text-align: center
- [ ] Padding: 2rem
- [ ] Font-size: 0.9rem
- [ ] Opacity: 0.8

**Success Check**: Dashboard has beautiful glassmorphism effect, gradient animates, cards look frosted

---

### Task 4: Responsive Layout (styles.css - media queries)
- [ ] Base (mobile first): single column, 1rem padding
- [ ] @media (min-width: 768px): 2rem padding, 2-column grid
- [ ] @media (min-width: 1024px): max-width 1400px, centered container
- [ ] @media (min-width: 1440px): 3rem padding, larger charts

**Success Check**: Test on mobile (375px), tablet (768px), desktop (1440px) - looks good on all

---

### Task 5: Static Data File (data.js)

Create comprehensive data object with all datasets. **Copy structure from PROJECT_PLAN.md**:

- [ ] powerData object with:
  - [ ] years array (2015-2025)
  - [ ] bitcoin object (actual, projected)
  - [ ] ai object (training, inference, projected_total)
  - [ ] benchmarks object (datacenters_total, gold_mining, banking_system)
  - [ ] country_equivalents array
  - [ ] renewable_percentage object
  - [ ] geographic_distribution object
  - [ ] efficiency_metrics object
- [ ] dataSources array (references)
- [ ] Export data for use in charts.js

**Success Check**: Open browser console, verify data.js loads and powerData is accessible

---

### Task 6: Chart 1 - Multi-Line Time Series (charts.js)

Implement the PRIMARY chart: Bitcoin vs AI power consumption over time

**ApexCharts Configuration**:
- [ ] Chart type: 'line' with area fill
- [ ] Series data:
  - [ ] "Bitcoin Mining" - powerData.bitcoin.actual
  - [ ] "AI Training" - powerData.ai.training
  - [ ] "AI Inference" - powerData.ai.inference
  - [ ] "Gold Mining" (benchmark) - powerData.benchmarks.gold_mining
- [ ] X-axis: powerData.years
- [ ] Y-axis: TWh/year, title "Power Consumption (TWh)"
- [ ] Colors: 
  - [ ] Bitcoin: '#f5576c' (red/orange)
  - [ ] AI Training: '#667eea' (blue)
  - [ ] AI Inference: '#764ba2' (purple)
  - [ ] Gold: '#f0a500' (gold color)
- [ ] Stroke: smooth curve, width 3
- [ ] Fill: gradient (opacityFrom: 0.7, opacityTo: 0.1)
- [ ] Tooltip: shared, theme 'dark'
- [ ] Legend: position 'top', show/hide series on click
- [ ] Annotations (key events):
  - [ ] 2017: "Bitcoin Price Peak"
  - [ ] 2021: "China Mining Ban"
  - [ ] 2022: "ChatGPT Launch"
  - [ ] 2025: "AI Surpasses Bitcoin"
- [ ] Animations: enabled, speed 1200ms
- [ ] Responsive: true

**Render**:
- [ ] Initialize ApexChart with config
- [ ] Render to #chart-timeline div
- [ ] Test: Chart displays, lines are smooth, tooltips work, legend clickable

**Success Check**: Beautiful time-series chart loads, shows all data, interactive, annotations visible

---

### Task 7: Chart 2 - Stacked Area Breakdown (charts.js)

Implement the SECONDARY chart: Data center energy breakdown

**ApexCharts Configuration**:
- [ ] Chart type: 'area', stacked: true
- [ ] Series data (create mock data for 2015-2025):
  - [ ] "Traditional Workloads" (blue) - calculated as: datacenters_total - crypto - ai
  - [ ] "Cryptocurrency" (orange) - bitcoin data
  - [ ] "AI Training" (red) - ai.training
  - [ ] "AI Inference" (purple) - ai.inference
- [ ] X-axis: years
- [ ] Y-axis: TWh/year, stacked format
- [ ] Colors: ['#4facfe', '#f5576c', '#667eea', '#764ba2']
- [ ] Stroke: smooth curve
- [ ] Fill: solid (stacked areas)
- [ ] Tooltip: shared, show total
- [ ] Legend: position 'top'
- [ ] Animation: enabled, easing 'easeinout'

**Render**:
- [ ] Initialize and render to #chart-breakdown
- [ ] Test: Stacked areas display, colors distinct, tooltip shows breakdown

**Success Check**: Stacked area chart works, shows how data center usage has evolved, visually clear

---

### Task 8: Summary Cards (main.js)

Create 3 animated summary cards at top of dashboard:

**Card 1 - Bitcoin 2025**:
- [ ] Icon: ⚡ or Bitcoin logo
- [ ] Number: 173 TWh (animated count-up)
- [ ] Label: "Bitcoin Mining (2025)"
- [ ] Subtext: "= Poland's annual consumption"

**Card 2 - AI 2025**:
- [ ] Icon: 🤖 or AI chip icon
- [ ] Number: 220 TWh (animated count-up)
- [ ] Label: "AI Infrastructure (2025)"
- [ ] Subtext: "= Spain's annual consumption"

**Card 3 - Total Impact**:
- [ ] Icon: 🌍 or power plug
- [ ] Number: 393 TWh (animated count-up)
- [ ] Label: "Combined Total"
- [ ] Subtext: "+1730% growth since 2015"

**Animation**:
- [ ] Implement number count-up animation (0 → target over 2 seconds)
- [ ] Use easing function for smooth increment
- [ ] Trigger on page load

**Success Check**: Cards display prominently, numbers animate on load, look beautiful

---

### Task 9: Basic Animations (animations.css)

Add entrance animations for cards and charts:

- [ ] @keyframes fadeInUp:
  ```css
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
  ```
- [ ] Apply fadeInUp to .glass-card with stagger delays:
  - [ ] :nth-child(1) - delay 0.1s
  - [ ] :nth-child(2) - delay 0.2s
  - [ ] :nth-child(3) - delay 0.3s
- [ ] Animation duration: 0.6s
- [ ] Easing: ease-out

**Success Check**: Cards and charts fade in smoothly from bottom when page loads

---

### Task 10: Test & Optimize

**Browser Testing**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

**Performance**:
- [ ] Page load time < 3 seconds
- [ ] Glassmorphism effects render smoothly (60fps)
- [ ] Charts render without lag
- [ ] No console errors

**Responsive**:
- [ ] Test on mobile (375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1440px, 1920px)
- [ ] Cards stack properly on mobile
- [ ] Charts remain readable on small screens

**Accessibility**:
- [ ] Add alt text or aria-labels where needed
- [ ] Ensure text contrast ratio meets WCAG AA (4.5:1 minimum)
- [ ] Test keyboard navigation (tab through interactive elements)

**Success Check**: Dashboard works perfectly across all devices and browsers, fast load time

---

### Task 11: Deploy to GitHub Pages

**Setup**:
- [ ] Create GitHub repository: `bitcoin-ai-power-dashboard`
- [ ] Push code to main branch
- [ ] Verify all files are in root (index.html must be in root!)

**Enable GitHub Pages**:
- [ ] Go to repository Settings
- [ ] Scroll to "Pages" section
- [ ] Source: Deploy from branch `main` / `root`
- [ ] Click Save
- [ ] Wait 2-3 minutes for build

**Test Deployment**:
- [ ] Access URL: https://[username].github.io/bitcoin-ai-power-dashboard/
- [ ] Verify dashboard loads
- [ ] Verify glassmorphism effects work
- [ ] Verify charts render
- [ ] Verify on mobile

**Success Check**: Dashboard is live and accessible via GitHub Pages URL! 🎉

---

## ✅ PHASE 2: ENHANCEMENT (Polish & Complete)

### Task 12: Remaining Visualizations

**Chart 3 - Geographic Distribution (Dual Donuts)**:
- [ ] Chart type: 'donut'
- [ ] Two charts side-by-side (CSS grid 2-column)
- [ ] Left: Bitcoin 2025 regional breakdown
- [ ] Right: AI 2025 regional breakdown
- [ ] Colors: consistent across both charts
- [ ] Center labels: total TWh
- [ ] Interactive hover with percentages

**Chart 4 - Efficiency Comparison**:
- [ ] Chart type: 'line' with dual Y-axes
- [ ] Left axis: Bitcoin kWh/transaction (decreasing)
- [ ] Right axis: AI Wh/inference (decreasing)
- [ ] Show efficiency gains over time
- [ ] Different colored axes

**Chart 5 - Country Equivalents (Custom Cards)**:
- [ ] Create custom HTML/CSS cards (not ApexCharts)
- [ ] Layout: 2 cards side-by-side
- [ ] Bitcoin = 🇵🇱 Poland (flag emoji or SVG)
- [ ] AI = 🇪🇸 Spain
- [ ] Show TWh values
- [ ] Comparison bar showing relative sizes
- [ ] Click to toggle 2025/2030 view

**Chart 6 - Renewable Energy Adoption**:
- [ ] Chart type: 'radialBar' or horizontal 'bar'
- [ ] Show Bitcoin 59%, AI 68%
- [ ] Animated fill on scroll-into-view
- [ ] Color gradient (red → yellow → green)
- [ ] Label: "AI leads by 9 percentage points"

**Chart 7 - Future Projections**:
- [ ] Chart type: animated 'bar'
- [ ] Show 2025 → 2030 growth
- [ ] Bitcoin: +16% (173 → 200 TWh)
- [ ] AI: +264% (220 → 800 TWh)
- [ ] Play button to animate
- [ ] Bars race from start to end values

**Success Check**: All 7 visualizations implemented and look professional

---

### Task 13: Scroll-Triggered Animations

Implement Intersection Observer for charts:
- [ ] Create IntersectionObserver instance
- [ ] Observe all .animate-on-scroll elements
- [ ] When element enters viewport:
  - [ ] Add .animate-in class
  - [ ] Trigger chart animation
  - [ ] Trigger number count-up (if applicable)
- [ ] Stagger animations for multiple elements

**Success Check**: As you scroll, charts and cards smoothly animate into view

---

### Task 14: Dark Mode Toggle (Optional)

Add toggle button in header:
- [ ] Button with moon/sun icon
- [ ] Click to toggle theme
- [ ] Store preference in localStorage
- [ ] CSS custom properties for colors:
  ```css
  :root {
    --bg-color: /* gradient */
    --text-color: #ffffff;
    --card-bg: rgba(255, 255, 255, 0.1);
  }
  
  [data-theme="light"] {
    --bg-color: /* lighter gradient */
    --text-color: #333333;
    --card-bg: rgba(255, 255, 255, 0.6);
  }
  ```
- [ ] Smooth transition between themes (0.3s)

**Success Check**: Toggle switches between dark/light, preference persists on reload

---

### Task 15: Key Insights Section

Add a text section with bullet points:
- [ ] Create .insights-section div after charts
- [ ] Glass card styling
- [ ] Title: "🔍 Key Insights"
- [ ] 5-7 bullet points:
  - [ ] "AI surpasses Bitcoin in 2025 (inflection point)"
  - [ ] "By 2030, AI could consume 4× more power than Bitcoin"
  - [ ] "Renewable adoption: AI leads Bitcoin by 9 percentage points"
  - [ ] "Bitcoin mining = Poland's energy | AI = Spain's energy (2025)"
  - [ ] "1730% Bitcoin growth vs 264% projected AI growth to 2030"
  - [ ] "Data centers now consume 415 TWh/year globally"
  - [ ] "Both technologies driving renewable energy deployment"

**Success Check**: Insights section looks polished, easy to scan, key facts stand out

---

### Task 16: Footer Enhancement

Expand footer with:
- [ ] Data sources:
  - [ ] "Data Sources: Cambridge CBECI, IEA Reports, Digiconomist"
  - [ ] Links to sources
- [ ] Social sharing:
  - [ ] Twitter share button
  - [ ] LinkedIn share button
- [ ] GitHub link: "View code on GitHub"
- [ ] Copyright: "© 2025 Karl Hartley"
- [ ] Disclaimer: "Estimated data for educational purposes"

**Success Check**: Footer is informative and provides attribution

---

### Task 17: Export & Share Features

Add functionality:
- [ ] "Export Chart as PNG" button for each chart
  - [ ] Use ApexCharts .downloadPNG() method
  - [ ] Button positioned top-right of chart
  - [ ] Icon: 📥 download
- [ ] "Share Dashboard" button in header
  - [ ] Copy link to clipboard
  - [ ] Show success toast notification
  - [ ] Open native share dialog on mobile

**Success Check**: Users can download charts and share dashboard link

---

### Task 18: Performance Optimization

- [ ] **Lazy load charts**: Only render charts when they enter viewport
  - [ ] Use Intersection Observer
  - [ ] Initialize ApexChart when visible
- [ ] **Optimize images**: If any added, compress to WebP
- [ ] **Minimize CSS**: Combine into single file if multiple
- [ ] **Defer JavaScript**: Add defer attribute to script tags
- [ ] **Add loading spinner**: Show while charts initialize
- [ ] **Lighthouse audit**: Run and fix issues
  - [ ] Performance score > 90
  - [ ] Accessibility score > 90
  - [ ] Best Practices score > 90

**Success Check**: Lighthouse scores meet targets, dashboard loads fast

---

### Task 19: Accessibility (A11y) Improvements

- [ ] **Semantic HTML**: Ensure proper heading hierarchy (h1 → h2 → h3)
- [ ] **ARIA labels**: Add to interactive elements
  - [ ] aria-label for dark mode toggle
  - [ ] aria-label for chart containers
  - [ ] role="img" for decorative icons
- [ ] **Keyboard navigation**: Test tab order, focus visible
- [ ] **Color contrast**: Verify all text meets WCAG AA
  - [ ] Use WebAIM Contrast Checker
  - [ ] Ensure 4.5:1 for body text, 3:1 for large text
- [ ] **Screen reader testing**: Use NVDA/JAWS/VoiceOver
  - [ ] Charts have descriptive text alternatives
  - [ ] All buttons have clear labels

**Success Check**: Dashboard is usable with keyboard only, screen reader friendly

---

## ✅ PHASE 3: TEMPLATE & DOCUMENTATION

### Task 20: Code Documentation

- [ ] Add comprehensive comments to all files:
  - [ ] HTML: Explain structure, sections
  - [ ] CSS: Group styles by component, explain glassmorphism technique
  - [ ] JavaScript: Document functions, data structures, chart configs
- [ ] Create inline examples:
  - [ ] "How to change colors" comment block
  - [ ] "How to add new chart" guide
  - [ ] "How to modify data" instructions

**Success Check**: Code is self-documenting, easy for others to understand

---

### Task 21: Create TEMPLATE.md Guide

Write a guide for reusing this dashboard template:
- [ ] Section 1: "How to Clone This Project"
- [ ] Section 2: "Customizing Colors & Theme"
- [ ] Section 3: "Replacing Data"
  - [ ] data.js structure explained
  - [ ] Where to update values
  - [ ] How to add new data series
- [ ] Section 4: "Adding New Charts"
  - [ ] Step-by-step: HTML div → chart config → render
  - [ ] ApexCharts config template
- [ ] Section 5: "Common Customizations"
  - [ ] Changing gradient background
  - [ ] Modifying glassmorphism intensity
  - [ ] Adjusting animation speeds

**Success Check**: Someone with basic HTML/CSS/JS knowledge can clone and customize

---

### Task 22: Create Reusable CSS Utility Classes

Extract common patterns into utility classes:
- [ ] .glass-card-light (lighter glass effect)
- [ ] .glass-card-heavy (more blur)
- [ ] .fade-in-up (entrance animation)
- [ ] .fade-in-left / .fade-in-right
- [ ] .stat-number (large number styling)
- [ ] .stat-label (label styling)
- [ ] .grid-2-col, .grid-3-col (responsive grids)
- [ ] Document in CSS with comments

**Success Check**: Utility classes are reusable, well-documented

---

### Task 23: Final Polish

- [ ] Proofread all text for typos
- [ ] Verify all links work (internal and external)
- [ ] Test all interactive features work
- [ ] Ensure consistent spacing throughout
- [ ] Add subtle micro-interactions:
  - [ ] Button hover effects
  - [ ] Card hover lift
  - [ ] Chart tooltip animations
- [ ] Add favicon (⚡ or custom icon)
- [ ] Add social meta tags (Open Graph, Twitter Cards):
  ```html
  <meta property="og:title" content="Bitcoin vs AI Power Dashboard">
  <meta property="og:description" content="Interactive energy consumption analysis">
  <meta property="og:image" content="[screenshot URL]">
  ```

**Success Check**: Dashboard feels polished and professional, attention to detail evident

---

### Task 24: Screenshot & Demo

- [ ] Take high-quality screenshot of dashboard (full page)
- [ ] Create short screen recording (15-30 seconds):
  - [ ] Show page load animation
  - [ ] Scroll through dashboard
  - [ ] Hover over charts
  - [ ] Toggle dark mode (if implemented)
- [ ] Upload screenshot to repository
- [ ] Update README.md with screenshot
- [ ] Create GIF of interaction (use tool like LICEcap or ScreenToGif)

**Success Check**: Visuals showcase dashboard's beauty and interactivity

---

### Task 25: Final Deployment & Testing

- [ ] Push all Phase 2 & 3 changes to GitHub
- [ ] Verify GitHub Pages updated (may take 2-3 minutes)
- [ ] Test live dashboard on multiple devices:
  - [ ] Desktop: Chrome, Firefox, Safari, Edge
  - [ ] Mobile: iOS Safari, Android Chrome
  - [ ] Tablet: iPad Safari, Android tablet
- [ ] Share link with someone for external feedback
- [ ] Fix any issues found in testing
- [ ] Tag release: v1.0.0

**Success Check**: Dashboard is fully complete, tested, and live! 🚀🎉

---

## 🎉 PROJECT COMPLETE!

### Final Checklist
- [ ] All 7 visualizations working
- [ ] Glassmorphism effects look stunning
- [ ] Fully responsive on all devices
- [ ] Performance optimized (fast load, smooth animations)
- [ ] Accessible (WCAG AA compliant)
- [ ] Well-documented code
- [ ] Template guide created for future projects
- [ ] Deployed to GitHub Pages with public URL
- [ ] README and documentation complete

### Share Your Work!
- [ ] Tweet screenshot with hashtags: #DataViz #Glassmorphism #WebDev
- [ ] Post on LinkedIn with project description
- [ ] Submit to design showcases (Dribbble, Behance, CodePen)
- [ ] Add to portfolio

---

## 📝 Notes for Claude Code

**Best Practices**:
- Work through tasks **in order** - don't skip ahead
- **Test frequently** - open browser after each major task
- **Commit often** - small, logical commits with clear messages
- **Use console.log** to debug data/chart issues
- **Read ApexCharts docs** if stuck on chart configuration
- **Keep code clean** - remove commented-out code before final commit

**Common Issues & Solutions**:
1. **Glassmorphism not working**: Check browser support for backdrop-filter (works in Chrome, Firefox, Safari, Edge)
2. **Charts not rendering**: Verify data.js loads before charts.js, check console for errors
3. **Animations janky**: Use CSS transforms (GPU-accelerated) instead of margin/padding
4. **Mobile layout broken**: Test with Chrome DevTools mobile emulator, adjust breakpoints

**Priority Rule**: If time is limited, focus on **Phase 1 (MVP)** to get a shippable product. Phase 2 & 3 are enhancements.

---

**Let's build something beautiful! 🌟**

*Checklist created: November 9, 2025*
