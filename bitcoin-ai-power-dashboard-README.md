# 🔋⚡ Bitcoin vs AI Power Consumption Dashboard

**A Modern, Interactive Data Visualization Dashboard**  
*Energy consumption trends analysis: Bitcoin Mining vs AI Infrastructure (2015-2030)*

---

## 📋 Project Overview

This project creates a **visually stunning, interactive HTML dashboard** that compares and analyzes the power consumption trends of Bitcoin mining and AI infrastructure over a 15-year period. The dashboard features modern glassmorphism design, smooth animations, and professional data visualizations.

### 🎯 Goals
- **Ship a working dashboard** deployable to GitHub Pages
- Use **modern design trends** (glassmorphism, dark mode, smooth animations)
- Implement **static snapshot data** (historical 2015-2025, projections to 2030)
- Create a **reusable template** for future dashboard projects
- Provide **engaging, interactive visualizations** with professional aesthetics

---

## 🎨 Design Vision: "Sexy" Modern Dashboard

### Visual Style Guidelines
- **Glassmorphism Effect**: Frosted glass panels with blur effects and transparency
- **Animated Gradient Background**: Shifting color gradients (purple/blue/pink spectrum)
- **Dark Mode Optimized**: High contrast, eye-friendly for extended viewing
- **Smooth Transitions**: All interactions have fluid animations (300-600ms)
- **Responsive Design**: Mobile-first, works on all devices
- **Typography**: Modern sans-serif (Inter or Poppins font)

### Design Inspiration References
- Apple macOS Big Sur aesthetic
- Microsoft Fluent Design System
- Modern fintech dashboards (Robinhood, Coinbase)
- Glassmorphism examples: Dribbble, Behance 2025 showcase

---

## 🛠️ Technology Stack

### Core Technologies
```
HTML5 - Semantic structure
CSS3 - Modern styling (Grid, Flexbox, backdrop-filter, animations)
JavaScript (ES6+) - Interactivity and chart rendering
```

### Charting Library: **ApexCharts** (RECOMMENDED)
**Why ApexCharts?**
- ✅ Modern, beautiful out-of-the-box design
- ✅ Lightweight and fast (proof-of-concept in <5 minutes)
- ✅ Excellent animation support
- ✅ Free and open-source (MIT license)
- ✅ SVG rendering (crisp on all screens)
- ✅ Extensive customization
- ✅ Built-in tooltips, legends, zoom, export

**Alternative**: Chart.js (simpler but less feature-rich)

### CDN Dependencies (No npm/build required)
```html
<!-- ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Optional: Particles.js for background effects -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
```

---

## 📊 Data Structure

### Static Data Format
All data should be stored in `data.js` as JavaScript objects:

```javascript
const powerData = {
  // Historical data (2015-2025)
  years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  
  bitcoin: {
    actual: [5, 10, 30, 45, 70, 90, 120, 140, 150, 165, 173], // TWh/year
    projected: [173, 180, 185, 190, 195, 200], // 2025-2030
  },
  
  ai: {
    training: [2, 3, 5, 8, 12, 20, 30, 45, 60, 80, 100], // TWh/year
    inference: [1, 2, 3, 5, 8, 15, 25, 40, 60, 85, 120], // TWh/year
    projected_total: [220, 280, 350, 450, 600, 800], // 2025-2030
  },
  
  benchmarks: {
    datacenters_total: [150, 160, 180, 200, 220, 250, 280, 320, 360, 400, 415],
    gold_mining: [132, 135, 138, 135, 138, 140, 145, 145, 148, 150, 150],
    banking_system: [260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310],
  },
  
  country_equivalents: [
    { year: 2025, bitcoin: "Poland", bitcoin_twh: 173, ai: "Spain", ai_twh: 220 },
    { year: 2030, bitcoin: "Pakistan", bitcoin_twh: 200, ai: "Germany", ai_twh: 800 }
  ],
  
  renewable_percentage: {
    bitcoin: [10, 15, 20, 25, 30, 35, 42, 48, 52, 56, 59], // %
    ai: [30, 32, 35, 38, 42, 45, 48, 52, 58, 62, 68] // %
  },
  
  geographic_distribution: {
    bitcoin_2025: [
      { region: "North America", percentage: 38, twh: 65.7 },
      { region: "Asia-Pacific", percentage: 35, twh: 60.5 },
      { region: "Europe", percentage: 18, twh: 31.1 },
      { region: "Other", percentage: 9, twh: 15.7 }
    ],
    ai_2025: [
      { region: "North America", percentage: 55, twh: 121 },
      { region: "Asia-Pacific", percentage: 28, twh: 61.6 },
      { region: "Europe", percentage: 15, twh: 33 },
      { region: "Other", percentage: 2, twh: 4.4 }
    ]
  },
  
  efficiency_metrics: {
    bitcoin_energy_per_transaction: [700, 650, 600, 550, 520, 480, 450, 420, 400, 380, 360], // kWh
    ai_energy_per_inference: [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.8, 1.5, 1.3, 1.1] // Wh
  }
};
```

### Data Sources (for reference in dashboard footer)
```javascript
const dataSources = [
  "Cambridge Bitcoin Electricity Consumption Index (CBECI)",
  "IEA Energy and AI Reports (2024-2025)",
  "Digiconomist Bitcoin Energy Consumption Index",
  "Academic papers on data center efficiency",
  "Bitcoin Mining Council Reports"
];
```

---

## 📐 Project File Structure

```
bitcoin-ai-power-dashboard/
│
├── index.html              # Main dashboard page
├── css/
│   ├── styles.css         # Main stylesheet with glassmorphism
│   └── animations.css     # Animation keyframes and effects
├── js/
│   ├── data.js            # Static power consumption data
│   ├── charts.js          # Chart initialization and configuration
│   └── main.js            # Dashboard interactivity
├── assets/
│   └── README.md          # Placeholder for future images/icons
├── README.md              # This project documentation
└── LICENSE                # MIT License
```

---

## 🎯 Dashboard Layout & Components

### Page Structure (Mobile-First)

```
┌─────────────────────────────────────┐
│          HEADER (sticky)            │
│  Logo | Title | Dark Mode Toggle    │
├─────────────────────────────────────┤
│                                     │
│   EXECUTIVE SUMMARY CARDS (grid)    │
│  ┌──────┐ ┌──────┐ ┌──────┐        │
│  │ BTC  │ │  AI  │ │ Total│        │
│  │ 173  │ │ 220  │ │ 393  │        │
│  │ TWh  │ │ TWh  │ │ TWh  │        │
│  └──────┘ └──────┘ └──────┘        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  VISUALIZATION 1: Multi-Line Chart  │
│  (Bitcoin vs AI over time)          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  VISUALIZATION 2: Stacked Area      │
│  (Data center breakdown)            │
│                                     │
├─────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐          │
│  │  VIZ 3  │  │  VIZ 4  │          │
│  │Geographic│  │Efficiency│         │
│  └─────────┘  └─────────┘          │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  VISUALIZATION 5: Country Compare   │
│  (Interactive flag-based cards)     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  VISUALIZATION 6: Renewable %       │
│  (Dual progress bars with animation)│
│                                     │
├─────────────────────────────────────┤
│                                     │
│  KEY INSIGHTS SECTION               │
│  • Inflection points               │
│  • Future projections              │
│  • Policy implications             │
│                                     │
├─────────────────────────────────────┤
│          FOOTER                     │
│  Data Sources | GitHub | License    │
└─────────────────────────────────────┘
```

---

## 📊 Required Visualizations (7 Total)

### 1. **Multi-Line Time Series Chart** 🏆 PRIORITY 1
**Type**: Line chart with area fill  
**Purpose**: Show 10-year power consumption trends  
**Data**: Bitcoin, AI Training, AI Inference, Benchmarks (Gold, Banking)  
**Features**:
- Logarithmic Y-axis option toggle
- Interactive tooltips with exact values
- Legend with click-to-hide series
- Annotations for key events:
  - 2017: Bitcoin price peak
  - 2021: China mining ban
  - 2022: ChatGPT launch
  - 2025: AI surpasses Bitcoin (projected)
- Smooth gradient fills under lines
- Crosshair with year/value display

**ApexCharts Config Hints**:
```javascript
{
  chart: { type: 'area', stacked: false, animations: { enabled: true } },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 3 },
  fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.1 } },
  annotations: { points: [/* key events */] }
}
```

---

### 2. **Stacked Area Chart** 🏆 PRIORITY 2
**Type**: Stacked area chart  
**Purpose**: Show data center energy breakdown over time  
**Data Layers** (bottom to top):
1. Traditional workloads (blue)
2. Cryptocurrency mining (orange)
3. AI training (red)
4. AI inference (purple)

**Features**:
- Smooth color transitions
- Percentage or absolute value toggle
- Hover to see exact breakdown
- Animation on load (fills from bottom up)

---

### 3. **Geographic Distribution - Pie/Donut Charts** 🏆 PRIORITY 3
**Type**: Two side-by-side donut charts  
**Purpose**: Compare regional distribution (Bitcoin 2025 vs AI 2025)  
**Regions**: North America, Asia-Pacific, Europe, Other  
**Features**:
- Interactive hover with percentage + TWh
- Color-coded regions (consistent across both charts)
- 3D tilt effect (optional for "sexy" factor)
- Center label showing total TWh

---

### 4. **Efficiency Comparison - Dual Axis Line Chart** 🏆 PRIORITY 3
**Type**: Line chart with two Y-axes  
**Purpose**: Show efficiency improvements over time  
**Left Y-axis**: Bitcoin kWh/transaction (decreasing trend)  
**Right Y-axis**: AI Wh/inference (decreasing trend)  
**Features**:
- Inverse scales (both decreasing = improvement)
- Different colored lines/axes
- Tooltips showing % improvement from baseline
- Trend line projections

---

### 5. **Country Equivalents - Interactive Card Comparison** 🏆 PRIORITY 4
**Type**: Custom animated cards with flag icons  
**Purpose**: Show "Bitcoin uses as much power as [Country]"  
**Layout**: 
```
Bitcoin = 🇵🇱 Poland (173 TWh)
AI = 🇪🇸 Spain (220 TWh)
[Comparison bar showing relative sizes]
```
**Features**:
- Country flags (emoji or SVG)
- Animated number count-up on scroll
- Interactive: Click to see 2030 projections
- Glassmorphic card design with hover effects

---

### 6. **Renewable Energy Adoption - Radial Bar/Progress** 🏆 PRIORITY 2
**Type**: Radial progress bars or horizontal bars  
**Purpose**: Compare renewable energy % adoption  
**Data**: Bitcoin 59%, AI 68% (2025)  
**Features**:
- Animated fill on page load
- Color gradient (red→yellow→green)
- Percentage label inside bar
- Comparison text: "AI leads by 9 percentage points"

---

### 7. **Future Projections - Bar Race or Animated Bars** 🏆 PRIORITY 4
**Type**: Animated bar chart showing 2025→2030 growth  
**Purpose**: Visualize projected growth trajectory  
**Data**: Bitcoin +16%, AI +264%  
**Features**:
- Play button to animate growth
- Bars race from 2025 values to 2030
- Color changes as values increase
- Voiceover text: "By 2030, AI could consume 4× more than Bitcoin"

---

## 🎨 Glassmorphism CSS Implementation

### Core Glassmorphism Styles
```css
/* Gradient background with animation */
body {
  background: linear-gradient(135deg, 
    #667eea 0%, 
    #764ba2 25%, 
    #f093fb 50%, 
    #f5576c 75%, 
    #4facfe 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Glassmorphic card */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: 2rem;
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.5);
  border-color: rgba(255, 255, 255, 0.4);
}

/* Text styling for glass */
.glass-text {
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Frosted header */
header {
  backdrop-filter: blur(30px);
  background: rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
}
```

---

## 🎬 Animation Guidelines

### Entrance Animations (Stagger Effect)
```css
/* Cards fade in from bottom, staggered */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glass-card {
  animation: fadeInUp 0.6s ease-out;
}

.glass-card:nth-child(1) { animation-delay: 0.1s; }
.glass-card:nth-child(2) { animation-delay: 0.2s; }
.glass-card:nth-child(3) { animation-delay: 0.3s; }
```

### Scroll-Triggered Animations
Use Intersection Observer API to trigger animations when elements enter viewport:
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```

### Chart Animations
ApexCharts has built-in animations. Configure for maximum impact:
```javascript
animations: {
  enabled: true,
  easing: 'easeinout',
  speed: 1200,
  animateGradually: {
    enabled: true,
    delay: 150
  },
  dynamicAnimation: {
    enabled: true,
    speed: 450
  }
}
```

---

## 📱 Responsive Design Breakpoints

```css
/* Mobile first approach */
.container {
  max-width: 100%;
  padding: 1rem;
}

/* Tablet: 768px */
@media (min-width: 768px) {
  .container { padding: 2rem; }
  .grid-2-col { 
    display: grid; 
    grid-template-columns: repeat(2, 1fr); 
    gap: 2rem; 
  }
}

/* Desktop: 1024px */
@media (min-width: 1024px) {
  .container { 
    max-width: 1400px; 
    margin: 0 auto; 
  }
  .grid-3-col { 
    grid-template-columns: repeat(3, 1fr); 
  }
}

/* Large desktop: 1440px */
@media (min-width: 1440px) {
  .container { padding: 3rem; }
  /* Charts can be larger */
}
```

---

## 🚀 Development Workflow

### Phase 1: Foundation (Shippable MVP)
**Goal**: Get a working dashboard deployed to GitHub Pages

1. ✅ **Setup HTML structure** with semantic tags
2. ✅ **Implement glassmorphism CSS** (background, cards, header)
3. ✅ **Add static data file** (data.js with all datasets)
4. ✅ **Create Visualization 1** (Multi-line time series) - CORE CHART
5. ✅ **Create Visualization 2** (Stacked area) - SECONDARY CHART
6. ✅ **Add responsive layout** (mobile, tablet, desktop)
7. ✅ **Deploy to GitHub Pages**

**Success Criteria**: Dashboard loads, looks beautiful, shows 2 working charts, responsive

---

### Phase 2: Polish & Enhancements
**Goal**: Add remaining visualizations and interactivity

8. ✅ Create remaining 5 visualizations
9. ✅ Add scroll-triggered animations
10. ✅ Implement dark mode toggle (if time permits)
11. ✅ Add footer with data sources and links
12. ✅ Performance optimization (lazy load charts)
13. ✅ Accessibility improvements (ARIA labels, keyboard navigation)

---

### Phase 3: Template Reusability
**Goal**: Document patterns for future dashboards

14. ✅ Create reusable CSS utility classes
15. ✅ Document chart configuration patterns
16. ✅ Add comments explaining glassmorphism techniques
17. ✅ Create `TEMPLATE.md` guide for future projects

---

## 🌐 GitHub Pages Deployment

### Setup Instructions
1. **Push code to GitHub repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from branch `main` / `root`
   - Save
3. **Access dashboard**: `https://[username].github.io/[repo-name]/`

### Repository Structure for GitHub Pages
```
repo-root/
├── index.html        ← Must be in root
├── css/
├── js/
├── assets/
└── README.md
```

### Custom Domain (Optional)
Add a `CNAME` file in root:
```
your-custom-domain.com
```

---

## 🎯 Success Metrics

### Must-Have (MVP)
- ✅ Dashboard loads in <3 seconds
- ✅ Glassmorphism effects render correctly in Chrome, Firefox, Safari
- ✅ At least 2 interactive charts working perfectly
- ✅ Mobile responsive (iPhone, Android)
- ✅ Deployed to GitHub Pages with public URL

### Nice-to-Have (Phase 2)
- ✅ All 7 visualizations implemented
- ✅ Smooth scroll animations
- ✅ Dark mode toggle
- ✅ Export chart as PNG functionality
- ✅ Share buttons (Twitter, LinkedIn)

### Stretch Goals (Future)
- 🔄 Dynamic data updates (fetch from API)
- 🔄 User-customizable date ranges
- 🔄 Multiple dashboard themes
- 🔄 Comparison mode (add custom data series)

---

## 🔧 Code Quality Guidelines

### HTML Best Practices
- Use semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<article>`)
- Include meta tags for SEO and social sharing
- Add alt text for images
- Use ARIA labels for accessibility

### CSS Best Practices
- Use CSS custom properties (variables) for colors and spacing
- Follow BEM naming convention (Block-Element-Modifier)
- Group related styles with comments
- Minimize use of `!important`
- Use transforms for animations (GPU-accelerated)

### JavaScript Best Practices
- Use ES6+ features (const/let, arrow functions, template literals)
- Keep functions small and focused (single responsibility)
- Add comments for complex logic
- Handle errors gracefully (try/catch for data loading)
- Avoid global variables (use modules or IIFE)

---

## 📚 Learning Resources

### Glassmorphism Tutorials
- [Glassmorphism UI Trend - CSS-Tricks](https://css-tricks.com/glassmorphism/)
- [CodePen Glassmorphism Examples](https://codepen.io/search/pens?q=glassmorphism)
- [Figma Glassmorphism Plugin](https://www.figma.com/community/plugin/953695989693588662)

### ApexCharts Documentation
- [Official Docs](https://apexcharts.com/docs/)
- [Interactive Demos](https://apexcharts.com/javascript-chart-demos/)
- [React/Vue Integration](https://apexcharts.com/docs/integrations/)

### Accessibility Resources
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

## 📝 Data Attribution

All power consumption data is estimated from publicly available sources:
- Cambridge Bitcoin Electricity Consumption Index (CBECI)
- International Energy Agency (IEA) Reports
- Digiconomist estimates
- Academic research papers

**Disclaimer**: This dashboard presents estimated historical data and projections for educational and analytical purposes. Actual power consumption figures may vary based on methodology and data sources.

---

## 🤝 Contributing

This is a personal project but open for forks and adaptations!

### How to Use This Template for Your Own Dashboards
1. Fork this repository
2. Replace `data.js` with your own dataset
3. Modify chart configurations in `charts.js`
4. Update colors/theme in `styles.css`
5. Deploy to your own GitHub Pages

---

## 📄 License

MIT License - Feel free to use, modify, and distribute

---

## 🎉 Acknowledgments

- **Anthropic Claude** - AI assistant for project planning
- **ApexCharts** - Beautiful charting library
- **Glassmorphism Community** - Design inspiration
- **Open Source Data Providers** - CBECI, IEA, Digiconomist

---

## 🚦 Quick Start for Claude Code

### Command to Run
```bash
# Clone or create project directory
mkdir bitcoin-ai-power-dashboard
cd bitcoin-ai-power-dashboard

# Create files as per structure above
# Start with index.html, then data.js, then charts.js

# Test locally (simple HTTP server)
python -m http.server 8000
# OR
npx serve

# Open browser: http://localhost:8000
```

### Priority Order for Implementation
1. **index.html** - HTML structure with placeholder chart divs
2. **data.js** - All static data arrays
3. **styles.css** - Glassmorphism base styles
4. **charts.js** - ApexCharts configuration (start with Viz 1 and 2)
5. **main.js** - Interactivity and animations
6. **Test and deploy** to GitHub Pages

---

## 📞 Contact & Feedback

**Created by**: Karl Hartley  
**Project Purpose**: Research visualization + Modern dashboard template  
**Tech Stack**: Pure HTML/CSS/JS + ApexCharts  
**Hosted**: GitHub Pages  

---

**Ready to build? Let's make this dashboard shine! 🌟**

*Last updated: November 9, 2025*
