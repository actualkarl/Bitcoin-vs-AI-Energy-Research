/* ============================================
   Bitcoin vs AI Power Dashboard - Data File
   All static power consumption data (2015-2030)
   ============================================ */

/**
 * Main power consumption data object
 * All values in TWh (Terawatt-hours) per year
 * Historical data: 2015-2025
 * Projections: 2025-2030
 */
const powerData = {
    // Years array for X-axis
    years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],

    // Extended years for projections
    yearsProjected: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],

    // Bitcoin Mining Power Consumption
    bitcoin: {
        actual: [5, 10, 30, 45, 70, 90, 120, 140, 150, 165, 173], // TWh/year (2015-2025)
        projected: [173, 180, 185, 190, 195, 200], // TWh/year (2025-2030)
        // Combined for charts
        full: [5, 10, 30, 45, 70, 90, 120, 140, 150, 165, 173, 180, 185, 190, 195, 200]
    },

    // AI Infrastructure Power Consumption
    ai: {
        training: [2, 3, 5, 8, 12, 20, 30, 45, 60, 80, 100], // TWh/year (2015-2025)
        inference: [1, 2, 3, 5, 8, 15, 25, 40, 60, 85, 120], // TWh/year (2015-2025)
        total: [3, 5, 8, 13, 20, 35, 55, 85, 120, 165, 220], // Combined (2015-2025)
        projected_total: [220, 280, 350, 450, 600, 800], // TWh/year (2025-2030)
        // Combined for charts
        training_full: [2, 3, 5, 8, 12, 20, 30, 45, 60, 80, 100, 120, 145, 175, 210, 260],
        inference_full: [1, 2, 3, 5, 8, 15, 25, 40, 60, 85, 120, 160, 205, 275, 390, 540],
        total_full: [3, 5, 8, 13, 20, 35, 55, 85, 120, 165, 220, 280, 350, 450, 600, 800]
    },

    // Benchmark Comparisons
    benchmarks: {
        // Total global data center power consumption
        datacenters_total: [150, 160, 180, 200, 220, 250, 280, 320, 360, 400, 415],

        // Gold mining industry
        gold_mining: [132, 135, 138, 135, 138, 140, 145, 145, 148, 150, 150],

        // Traditional banking system
        banking_system: [260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310]
    },

    // Country Power Equivalents (2025 and 2030)
    country_equivalents: [
        {
            year: 2025,
            bitcoin: "Poland",
            bitcoin_twh: 173,
            bitcoin_flag: "🇵🇱",
            ai: "Spain",
            ai_twh: 220,
            ai_flag: "🇪🇸"
        },
        {
            year: 2030,
            bitcoin: "Pakistan",
            bitcoin_twh: 200,
            bitcoin_flag: "🇵🇰",
            ai: "Germany",
            ai_twh: 800,
            ai_flag: "🇩🇪"
        }
    ],

    // Renewable Energy Adoption Percentage
    renewable_percentage: {
        bitcoin: [10, 15, 20, 25, 30, 35, 42, 48, 52, 56, 59], // % (2015-2025)
        ai: [30, 32, 35, 38, 42, 45, 48, 52, 58, 62, 68], // % (2015-2025)
        // 2025 values
        bitcoin_2025: 59,
        ai_2025: 68
    },

    // Geographic Distribution (2025 snapshot)
    geographic_distribution: {
        bitcoin_2025: [
            { region: "North America", percentage: 38, twh: 65.7 },
            { region: "Asia-Pacific", percentage: 35, twh: 60.5 },
            { region: "Europe", percentage: 18, twh: 31.1 },
            { region: "Other", percentage: 9, twh: 15.7 }
        ],
        ai_2025: [
            { region: "North America", percentage: 55, twh: 121.0 },
            { region: "Asia-Pacific", percentage: 28, twh: 61.6 },
            { region: "Europe", percentage: 15, twh: 33.0 },
            { region: "Other", percentage: 2, twh: 4.4 }
        ]
    },

    // Efficiency Metrics
    efficiency_metrics: {
        // Bitcoin: kWh per transaction
        bitcoin_energy_per_transaction: [700, 650, 600, 550, 520, 480, 450, 420, 400, 380, 360],

        // AI: Watt-hours per inference
        ai_energy_per_inference: [5.0, 4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.8, 1.5, 1.3, 1.1]
    },

    // Data Center Breakdown (for stacked area chart)
    // This shows how total data center power is distributed
    datacenter_breakdown: {
        years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],

        // Traditional workloads (cloud, enterprise, etc.)
        traditional: [142, 145, 142, 142, 130, 125, 105, 95, 90, 70, 62],

        // Cryptocurrency mining (primarily Bitcoin)
        cryptocurrency: [5, 10, 30, 45, 70, 90, 120, 140, 150, 165, 173],

        // AI Training
        ai_training: [2, 3, 5, 8, 12, 20, 30, 45, 60, 80, 100],

        // AI Inference
        ai_inference: [1, 2, 3, 5, 8, 15, 25, 40, 60, 85, 120]
    }
};

/**
 * Data sources and attribution
 */
const dataSources = [
    {
        name: "Cambridge Bitcoin Electricity Consumption Index (CBECI)",
        url: "https://ccaf.io/cbeci/index",
        description: "Real-time estimates of Bitcoin network power consumption"
    },
    {
        name: "International Energy Agency (IEA)",
        url: "https://www.iea.org/",
        description: "Data center energy consumption reports and AI infrastructure analysis"
    },
    {
        name: "Digiconomist Bitcoin Energy Consumption Index",
        url: "https://digiconomist.net/bitcoin-energy-consumption",
        description: "Alternative Bitcoin energy consumption estimates"
    },
    {
        name: "Academic Research Papers",
        url: "#",
        description: "Various peer-reviewed studies on cryptocurrency and AI power consumption"
    },
    {
        name: "Bitcoin Mining Council Reports",
        url: "https://bitcoinminingcouncil.com/",
        description: "Renewable energy adoption data for Bitcoin mining"
    }
];

/**
 * Key insights and findings
 */
const keyInsights = [
    {
        title: "AI Surpasses Bitcoin in 2025",
        description: "AI infrastructure power consumption overtakes Bitcoin mining for the first time, marking a significant inflection point.",
        icon: "📈"
    },
    {
        title: "4× Faster Growth Projected",
        description: "By 2030, AI could consume 4× more power than Bitcoin (800 vs 200 TWh), with AI growing 264% vs Bitcoin's 16%.",
        icon: "⚡"
    },
    {
        title: "AI Leads in Renewable Energy",
        description: "AI infrastructure leads Bitcoin by 9 percentage points in renewable energy adoption (68% vs 59% in 2025).",
        icon: "♻️"
    },
    {
        title: "National Scale Comparison",
        description: "Bitcoin mining equals Poland's energy consumption (173 TWh), while AI infrastructure equals Spain's (220 TWh) in 2025.",
        icon: "🌍"
    },
    {
        title: "Efficiency Gains Continue",
        description: "Both technologies show significant efficiency improvements: Bitcoin down 48% per transaction, AI down 78% per inference since 2015.",
        icon: "📊"
    },
    {
        title: "Data Center Transformation",
        description: "AI workloads now represent 53% of data center power (220/415 TWh), up from just 2% in 2015.",
        icon: "🏢"
    },
    {
        title: "Geographic Concentration",
        description: "North America dominates AI infrastructure (55%), while Bitcoin mining is more globally distributed (38% NA, 35% APAC).",
        icon: "🗺️"
    }
];

/**
 * Chart color scheme (matching CSS variables)
 */
const chartColors = {
    bitcoin: '#f5576c',
    ai_training: '#667eea',
    ai_inference: '#764ba2',
    traditional: '#4facfe',
    gold: '#f0a500',
    banking: '#48bb78',
    renewable: '#48bb78',
    non_renewable: '#f56565'
};

// Export data for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = { powerData, dataSources, keyInsights, chartColors };
}

// Log data loaded confirmation
console.log('✅ Power consumption data loaded successfully');
console.log('📊 Years covered:', powerData.years[0], '-', powerData.yearsProjected[powerData.yearsProjected.length - 1]);
console.log('⚡ Bitcoin 2025:', powerData.bitcoin.actual[powerData.bitcoin.actual.length - 1], 'TWh');
console.log('🤖 AI 2025:', powerData.ai.total[powerData.ai.total.length - 1], 'TWh');
