# ⚡ Bitcoin vs AI Power Dashboard

**Interactive Energy Consumption Analysis Dashboard (2015-2030)**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-green)](https://actualkarl.github.io/Bitcoin-vs-AI-Energy-Research/)

A modern, interactive dashboard comparing Bitcoin mining and AI infrastructure power consumption trends. Features beautiful glassmorphism design, smooth animations, and comprehensive data visualizations.

---

## 🌟 Features

- **Beautiful Glassmorphism Design** - Modern frosted glass UI with animated gradient backgrounds
- **Interactive Visualizations** - 7 ApexCharts visualizations showing power consumption trends
- **Responsive Layout** - Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations** - Entrance animations, scroll-triggered effects, and number count-ups
- **Performance Optimized** - Fast loading, lazy loading, and efficient rendering
- **Accessible** - WCAG AA compliant with keyboard navigation and ARIA labels

---

## 📊 Visualizations

1. **Multi-Line Time Series** - Bitcoin vs AI power consumption over time (2015-2025)
2. **Stacked Area Breakdown** - Data center energy distribution evolution
3. **Geographic Distribution** - Regional power consumption comparison (2025)
4. **Efficiency Trends** - Energy per transaction/inference improvements
5. **Country Equivalents** - National power consumption comparisons
6. **Renewable Energy** - Adoption percentage comparison
7. **Future Projections** - Growth trajectory forecasts (2025-2030)

---

## 🚀 Live Demo

**[View Dashboard →](https://actualkarl.github.io/Bitcoin-vs-AI-Energy-Research/)**

---

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Modern styling (Flexbox, Grid, backdrop-filter)
- **JavaScript (ES6+)** - Interactive features
- **[ApexCharts](https://apexcharts.com/)** - Data visualization library
- **Google Fonts (Inter)** - Typography
- **GitHub Pages** - Free hosting

---

## 📁 Project Structure

```
Bitcoin-vs-AI-Energy-Research/
├── index.html              # Main dashboard page
├── css/
│   ├── styles.css         # Glassmorphism styles
│   └── animations.css     # Animation effects
├── js/
│   ├── data.js            # Power consumption datasets
│   ├── charts.js          # ApexCharts configurations
│   └── main.js            # Interactive features
├── assets/                # Images and icons (if needed)
├── CLAUDE_CODE_CHECKLIST.md    # Implementation tasks
├── PROJECT_OVERVIEW.md          # Complete specification
├── QUICK_START.md               # Setup guide
└── README.md                    # This file
```

---

## 💻 Local Development

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/actualkarl/Bitcoin-vs-AI-Energy-Research.git
   cd Bitcoin-vs-AI-Energy-Research
   ```

2. **Open locally**
   - Simply open `index.html` in your browser, or
   - Use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js
   npx serve
   ```

3. **View dashboard**
   - Navigate to `http://localhost:8000`

### No Build Process Required

This project uses vanilla HTML/CSS/JS with CDN dependencies. No npm, webpack, or build tools needed!

---

## 📈 Key Insights

The dashboard reveals several important trends:

- **AI Surpasses Bitcoin (2025)** - AI infrastructure power consumption overtakes Bitcoin mining for the first time
- **4× Faster Growth** - By 2030, AI could consume 4× more power than Bitcoin (800 vs 200 TWh)
- **Renewable Leadership** - AI leads Bitcoin by 9 percentage points in renewable energy adoption (68% vs 59%)
- **National Scale** - Bitcoin = Poland's energy (173 TWh), AI = Spain's energy (220 TWh) in 2025
- **Efficiency Gains** - Both technologies show significant per-transaction/inference improvements
- **Data Center Shift** - AI workloads now represent 53% of data center power, up from 2% in 2015

---

## 📚 Data Sources

All data compiled from publicly available sources:

- [Cambridge Bitcoin Electricity Consumption Index (CBECI)](https://ccaf.io/cbeci/index)
- [International Energy Agency (IEA) Reports](https://www.iea.org/)
- [Digiconomist Bitcoin Energy Consumption Index](https://digiconomist.net/bitcoin-energy-consumption)
- Academic research papers on cryptocurrency and AI power consumption
- [Bitcoin Mining Council Reports](https://bitcoinminingcouncil.com/)

**Disclaimer**: This dashboard presents estimated historical data and projections for educational and analytical purposes. Actual power consumption figures may vary based on methodology and data sources.

---

## 🎨 Design Philosophy

### Glassmorphism Aesthetic

The dashboard implements modern glassmorphism design principles:
- Frosted glass cards with backdrop blur
- Animated gradient backgrounds
- Smooth hover transitions
- Light, airy feel with transparency

### Color Palette

- **Bitcoin**: `#f5576c` (Red/Orange)
- **AI Training**: `#667eea` (Blue)
- **AI Inference**: `#764ba2` (Purple)
- **Accent**: Gradient from purple → pink → blue

---

## 🔧 Customization

### Changing Colors

Edit color variables in `css/styles.css`:

```css
:root {
    --color-bitcoin: #f5576c;
    --color-ai-training: #667eea;
    --color-ai-inference: #764ba2;
}
```

### Updating Data

Modify the `powerData` object in `js/data.js`:

```javascript
const powerData = {
    years: [2015, 2016, ...],
    bitcoin: { actual: [...] },
    ai: { training: [...], inference: [...] }
};
```

### Adding New Charts

1. Create a new chart function in `js/charts.js`
2. Add a container div in `index.html`
3. Call the function from `initAllCharts()`

---

## 🤝 Contributing

This is a personal research project, but contributions are welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Karl Hartley**

- Research Project: Bitcoin vs AI Energy Consumption Analysis
- Dashboard: Modern data visualization showcase
- Built with: Pure HTML/CSS/JS + ApexCharts

---

## 🙏 Acknowledgments

- **ApexCharts** - Beautiful charting library
- **Glassmorphism Community** - Design inspiration
- **Open Source Data Providers** - CBECI, IEA, Digiconomist
- **Anthropic Claude** - AI assistance for project planning

---

## 📞 Support

For questions or issues:
- Open an [Issue](https://github.com/actualkarl/Bitcoin-vs-AI-Energy-Research/issues)
- Check the [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) for technical details
- Review [CLAUDE_CODE_CHECKLIST.md](CLAUDE_CODE_CHECKLIST.md) for implementation steps

---

**⚡ Built with passion for data visualization and clean energy research**

*Last updated: November 2025*