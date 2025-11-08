/* ============================================
   Bitcoin vs AI Power Dashboard - Charts
   ApexCharts configurations and initialization
   ============================================ */

/**
 * Chart 1: Multi-Line Time Series
 * Bitcoin vs AI power consumption over time (2015-2025)
 * Priority: 1 (CORE CHART)
 */
function initTimelineChart() {
    const options = {
        series: [
            {
                name: 'Bitcoin Mining',
                data: powerData.bitcoin.actual,
                color: chartColors.bitcoin
            },
            {
                name: 'AI Training',
                data: powerData.ai.training,
                color: chartColors.ai_training
            },
            {
                name: 'AI Inference',
                data: powerData.ai.inference,
                color: chartColors.ai_inference
            },
            {
                name: 'Gold Mining',
                data: powerData.benchmarks.gold_mining,
                color: chartColors.gold
            }
        ],
        chart: {
            type: 'area',
            height: 450,
            fontFamily: 'Inter, sans-serif',
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true
                }
            },
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
            },
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            categories: powerData.years,
            title: {
                text: 'Year',
                style: {
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 600
                }
            },
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '12px'
                }
            },
            axisBorder: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            axisTicks: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        yaxis: {
            title: {
                text: 'Power Consumption (TWh/year)',
                style: {
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 600
                }
            },
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '12px'
                },
                formatter: function (value) {
                    return value.toFixed(0) + ' TWh';
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            labels: {
                colors: '#ffffff'
            },
            markers: {
                width: 12,
                height: 12,
                radius: 3
            }
        },
        tooltip: {
            theme: 'dark',
            shared: true,
            intersect: false,
            x: {
                format: 'yyyy'
            },
            y: {
                formatter: function (value) {
                    return value.toFixed(1) + ' TWh';
                }
            },
            style: {
                fontSize: '13px'
            }
        },
        grid: {
            borderColor: 'rgba(255, 255, 255, 0.1)',
            strokeDashArray: 4
        },
        annotations: {
            points: [
                {
                    x: '2017',
                    y: 30,
                    marker: {
                        size: 6,
                        fillColor: '#fff',
                        strokeColor: chartColors.bitcoin,
                        radius: 2
                    },
                    label: {
                        borderColor: chartColors.bitcoin,
                        offsetY: 0,
                        style: {
                            color: '#fff',
                            background: chartColors.bitcoin
                        },
                        text: 'Bitcoin Price Peak'
                    }
                },
                {
                    x: '2021',
                    y: 120,
                    marker: {
                        size: 6,
                        fillColor: '#fff',
                        strokeColor: chartColors.bitcoin,
                        radius: 2
                    },
                    label: {
                        borderColor: chartColors.bitcoin,
                        offsetY: 0,
                        style: {
                            color: '#fff',
                            background: chartColors.bitcoin
                        },
                        text: 'China Mining Ban'
                    }
                },
                {
                    x: '2022',
                    y: 85,
                    marker: {
                        size: 6,
                        fillColor: '#fff',
                        strokeColor: chartColors.ai_training,
                        radius: 2
                    },
                    label: {
                        borderColor: chartColors.ai_training,
                        offsetY: 0,
                        style: {
                            color: '#fff',
                            background: chartColors.ai_training
                        },
                        text: 'ChatGPT Launch'
                    }
                },
                {
                    x: '2025',
                    y: 173,
                    marker: {
                        size: 8,
                        fillColor: '#fff',
                        strokeColor: '#f0a500',
                        radius: 2
                    },
                    label: {
                        borderColor: '#f0a500',
                        offsetY: 0,
                        style: {
                            color: '#fff',
                            background: '#f0a500',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        },
                        text: 'AI Surpasses Bitcoin'
                    }
                }
            ]
        }
    };

    const chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
    chart.render();

    console.log('✅ Timeline chart initialized');
}

/**
 * Chart 2: Stacked Area Breakdown
 * Data center energy breakdown over time
 * Priority: 2 (SECONDARY CHART)
 */
function initBreakdownChart() {
    const options = {
        series: [
            {
                name: 'Traditional Workloads',
                data: powerData.datacenter_breakdown.traditional,
                color: chartColors.traditional
            },
            {
                name: 'Cryptocurrency',
                data: powerData.datacenter_breakdown.cryptocurrency,
                color: chartColors.bitcoin
            },
            {
                name: 'AI Training',
                data: powerData.datacenter_breakdown.ai_training,
                color: chartColors.ai_training
            },
            {
                name: 'AI Inference',
                data: powerData.datacenter_breakdown.ai_inference,
                color: chartColors.ai_inference
            }
        ],
        chart: {
            type: 'area',
            height: 450,
            stacked: true,
            fontFamily: 'Inter, sans-serif',
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    zoom: true,
                    reset: true
                }
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1000,
                animateGradually: {
                    enabled: true,
                    delay: 100
                }
            },
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'solid',
            opacity: 0.85
        },
        xaxis: {
            categories: powerData.datacenter_breakdown.years,
            title: {
                text: 'Year',
                style: {
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 600
                }
            },
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '12px'
                }
            },
            axisBorder: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            axisTicks: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        yaxis: {
            title: {
                text: 'Total Data Center Power (TWh/year)',
                style: {
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 600
                }
            },
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '12px'
                },
                formatter: function (value) {
                    return value.toFixed(0) + ' TWh';
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            labels: {
                colors: '#ffffff'
            },
            markers: {
                width: 12,
                height: 12,
                radius: 3
            }
        },
        tooltip: {
            theme: 'dark',
            shared: true,
            intersect: false,
            x: {
                format: 'yyyy'
            },
            y: {
                formatter: function (value, { seriesIndex, dataPointIndex, w }) {
                    const total = w.globals.stackedSeriesTotals[dataPointIndex];
                    const percentage = ((value / total) * 100).toFixed(1);
                    return value.toFixed(1) + ' TWh (' + percentage + '%)';
                }
            },
            style: {
                fontSize: '13px'
            }
        },
        grid: {
            borderColor: 'rgba(255, 255, 255, 0.1)',
            strokeDashArray: 4
        }
    };

    const chart = new ApexCharts(document.querySelector("#chart-breakdown"), options);
    chart.render();

    console.log('✅ Breakdown chart initialized');
}

/**
 * Chart 3: Geographic Distribution - Dual Donut Charts
 * Regional power consumption comparison (Bitcoin vs AI 2025)
 * Priority: 3
 */
function initGeographicCharts() {
    // Bitcoin Geographic Distribution
    const bitcoinOptions = {
        series: powerData.geographic_distribution.bitcoin_2025.map(d => d.percentage),
        chart: {
            type: 'donut',
            height: 350,
            fontFamily: 'Inter, sans-serif',
            background: 'transparent'
        },
        labels: powerData.geographic_distribution.bitcoin_2025.map(d => d.region),
        colors: [chartColors.bitcoin, '#f57c8c', '#f5a3ac', '#f5c9d2'],
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '14px',
                            color: '#ffffff'
                        },
                        value: {
                            show: true,
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#ffffff',
                            formatter: function(val) {
                                return val + '%';
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            fontSize: '16px',
                            color: '#ffffff',
                            formatter: function() {
                                return '173 TWh';
                            }
                        }
                    }
                }
            }
        },
        legend: {
            position: 'bottom',
            labels: {
                colors: '#ffffff'
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
                colors: ['#ffffff']
            },
            dropShadow: {
                enabled: true,
                color: '#000',
                blur: 3
            }
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function(val, { seriesIndex }) {
                    const twh = powerData.geographic_distribution.bitcoin_2025[seriesIndex].twh;
                    return val + '% (' + twh.toFixed(1) + ' TWh)';
                }
            }
        }
    };

    // AI Geographic Distribution
    const aiOptions = {
        series: powerData.geographic_distribution.ai_2025.map(d => d.percentage),
        chart: {
            type: 'donut',
            height: 350,
            fontFamily: 'Inter, sans-serif',
            background: 'transparent'
        },
        labels: powerData.geographic_distribution.ai_2025.map(d => d.region),
        colors: [chartColors.ai_training, '#7690f0', '#96a8f5', '#b6c0fa'],
        plotOptions: {
            pie: {
                donut: {
                    size: '65%',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '14px',
                            color: '#ffffff'
                        },
                        value: {
                            show: true,
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#ffffff',
                            formatter: function(val) {
                                return val + '%';
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            fontSize: '16px',
                            color: '#ffffff',
                            formatter: function() {
                                return '220 TWh';
                            }
                        }
                    }
                }
            }
        },
        legend: {
            position: 'bottom',
            labels: {
                colors: '#ffffff'
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
                colors: ['#ffffff']
            },
            dropShadow: {
                enabled: true,
                color: '#000',
                blur: 3
            }
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function(val, { seriesIndex }) {
                    const twh = powerData.geographic_distribution.ai_2025[seriesIndex].twh;
                    return val + '% (' + twh.toFixed(1) + ' TWh)';
                }
            }
        }
    };

    const bitcoinChart = new ApexCharts(document.querySelector("#chart-geo-bitcoin"), bitcoinOptions);
    const aiChart = new ApexCharts(document.querySelector("#chart-geo-ai"), aiOptions);

    bitcoinChart.render();
    aiChart.render();

    console.log('✅ Geographic distribution charts initialized');
}

/**
 * Chart 4: Efficiency Comparison - Dual Y-Axis
 * Shows efficiency improvements over time
 * Priority: 3
 */
function initEfficiencyChart() {
    const options = {
        series: [
            {
                name: 'Bitcoin (kWh/transaction)',
                type: 'line',
                data: powerData.efficiency_metrics.bitcoin_energy_per_transaction
            },
            {
                name: 'AI (Wh/inference)',
                type: 'line',
                data: powerData.efficiency_metrics.ai_energy_per_inference
            }
        ],
        chart: {
            type: 'line',
            height: 400,
            fontFamily: 'Inter, sans-serif',
            background: 'transparent',
            toolbar: {
                show: true
            }
        },
        colors: [chartColors.bitcoin, chartColors.ai_training],
        stroke: {
            curve: 'smooth',
            width: [3, 3]
        },
        xaxis: {
            categories: powerData.years,
            labels: {
                style: {
                    colors: '#ffffff'
                }
            },
            axisBorder: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        yaxis: [
            {
                title: {
                    text: 'Bitcoin kWh per Transaction',
                    style: {
                        color: chartColors.bitcoin,
                        fontSize: '14px',
                        fontWeight: 600
                    }
                },
                labels: {
                    style: {
                        colors: chartColors.bitcoin
                    },
                    formatter: function(val) {
                        return val.toFixed(0) + ' kWh';
                    }
                },
                min: 0,
                max: 750
            },
            {
                opposite: true,
                title: {
                    text: 'AI Wh per Inference',
                    style: {
                        color: chartColors.ai_training,
                        fontSize: '14px',
                        fontWeight: 600
                    }
                },
                labels: {
                    style: {
                        colors: chartColors.ai_training
                    },
                    formatter: function(val) {
                        return val.toFixed(1) + ' Wh';
                    }
                },
                min: 0,
                max: 6
            }
        ],
        legend: {
            position: 'top',
            labels: {
                colors: '#ffffff'
            }
        },
        tooltip: {
            theme: 'dark',
            shared: false
        },
        grid: {
            borderColor: 'rgba(255, 255, 255, 0.1)'
        }
    };

    const chart = new ApexCharts(document.querySelector("#chart-efficiency"), options);
    chart.render();

    console.log('✅ Efficiency chart initialized');
}

/**
 * Chart 5: Country Equivalents
 * Custom HTML/CSS implementation (not ApexCharts)
 * This will be rendered via main.js
 * Priority: 4
 */
function initCountryEquivalents() {
    const container = document.querySelector("#chart-countries");
    if (!container) return;

    const data2025 = powerData.country_equivalents[0];

    const html = `
        <div class="country-comparison">
            <div class="country-card" style="background: linear-gradient(135deg, rgba(245, 87, 108, 0.2), rgba(245, 87, 108, 0.05));">
                <div class="country-flag">${data2025.bitcoin_flag}</div>
                <div class="country-name">${data2025.bitcoin}</div>
                <div class="country-value">${data2025.bitcoin_twh} TWh</div>
                <div class="country-label">Bitcoin Mining 2025</div>
                <div class="comparison-bar">
                    <div class="bar-fill" style="width: ${(data2025.bitcoin_twh / data2025.ai_twh * 100).toFixed(0)}%; background: ${chartColors.bitcoin};"></div>
                </div>
            </div>

            <div class="country-card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(102, 126, 234, 0.05));">
                <div class="country-flag">${data2025.ai_flag}</div>
                <div class="country-name">${data2025.ai}</div>
                <div class="country-value">${data2025.ai_twh} TWh</div>
                <div class="country-label">AI Infrastructure 2025</div>
                <div class="comparison-bar">
                    <div class="bar-fill" style="width: 100%; background: ${chartColors.ai_training};"></div>
                </div>
            </div>
        </div>

        <div class="country-insight" style="text-align: center; margin-top: 2rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 10px;">
            <p style="font-size: 1.1rem; margin: 0;">
                <strong>AI infrastructure consumes ${((data2025.ai_twh / data2025.bitcoin_twh - 1) * 100).toFixed(0)}% more power than Bitcoin mining in 2025</strong>
            </p>
        </div>
    `;

    container.innerHTML = html;
    console.log('✅ Country equivalents chart initialized');
}

/**
 * Chart 6: Renewable Energy Adoption - Radial Bars
 * Shows renewable % for Bitcoin vs AI
 * Priority: 2
 */
function initRenewableChart() {
    const options = {
        series: [
            powerData.renewable_percentage.bitcoin_2025,
            powerData.renewable_percentage.ai_2025
        ],
        chart: {
            type: 'radialBar',
            height: 350,
            fontFamily: 'Inter, sans-serif',
            background: 'transparent'
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%'
                },
                track: {
                    background: 'rgba(255, 255, 255, 0.1)',
                    strokeWidth: '100%'
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '16px',
                        color: '#ffffff',
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        offsetY: 5,
                        formatter: function(val) {
                            return val + '%';
                        }
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#48bb78'],
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Bitcoin Mining', 'AI Infrastructure'],
        colors: [chartColors.bitcoin, chartColors.ai_training],
        legend: {
            show: true,
            position: 'bottom',
            labels: {
                colors: '#ffffff'
            }
        }
    };

    const chart = new ApexCharts(document.querySelector("#chart-renewable"), options);
    chart.render();

    console.log('✅ Renewable energy chart initialized');
}

/**
 * Chart 7: Future Projections - Horizontal Bar
 * Shows 2025 vs 2030 growth
 * Priority: 4
 */
function initProjectionsChart() {
    const options = {
        series: [
            {
                name: '2025',
                data: [173, 220]
            },
            {
                name: '2030',
                data: [200, 800]
            }
        ],
        chart: {
            type: 'bar',
            height: 350,
            fontFamily: 'Inter, sans-serif',
            background: 'transparent',
            toolbar: {
                show: false
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1500,
                animateGradually: {
                    enabled: true,
                    delay: 300
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '70%',
                dataLabels: {
                    position: 'top'
                }
            }
        },
        colors: [chartColors.traditional, chartColors.bitcoin],
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#ffffff'],
                fontSize: '14px',
                fontWeight: 'bold'
            },
            formatter: function(val) {
                return val + ' TWh';
            },
            offsetX: 40
        },
        xaxis: {
            categories: ['Bitcoin Mining', 'AI Infrastructure'],
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '14px'
                }
            },
            axisBorder: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            title: {
                text: 'Power Consumption (TWh)',
                style: {
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 600
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#ffffff',
                    fontSize: '14px'
                }
            }
        },
        legend: {
            position: 'top',
            labels: {
                colors: '#ffffff'
            }
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function(val, { seriesIndex, dataPointIndex }) {
                    const labels = ['Bitcoin', 'AI'];
                    const years = ['2025', '2030'];
                    const label = labels[dataPointIndex];
                    const year = years[seriesIndex];

                    // Calculate growth
                    let growth = '';
                    if (seriesIndex === 1) {
                        const prev = dataPointIndex === 0 ? 173 : 220;
                        const growthPct = ((val - prev) / prev * 100).toFixed(0);
                        growth = ` (+${growthPct}% from 2025)`;
                    }

                    return val + ' TWh' + growth;
                }
            }
        },
        grid: {
            borderColor: 'rgba(255, 255, 255, 0.1)'
        }
    };

    const chart = new ApexCharts(document.querySelector("#chart-projections"), options);
    chart.render();

    console.log('✅ Future projections chart initialized');
}

/**
 * Initialize all charts when DOM is ready
 */
function initAllCharts() {
    // Check if data is loaded
    if (typeof powerData === 'undefined') {
        console.error('❌ Power data not loaded. Make sure data.js is included before charts.js');
        return;
    }

    // Initialize Phase 1 charts (MVP)
    try {
        initTimelineChart();
        initBreakdownChart();
        console.log('✅ Phase 1 charts initialized');

        // Initialize Phase 2 charts (if containers exist and are visible)
        if (document.querySelector("#chart-geo-bitcoin")) {
            initGeographicCharts();
        }
        if (document.querySelector("#chart-efficiency")) {
            initEfficiencyChart();
        }
        if (document.querySelector("#chart-countries")) {
            initCountryEquivalents();
        }
        if (document.querySelector("#chart-renewable")) {
            initRenewableChart();
        }
        if (document.querySelector("#chart-projections")) {
            initProjectionsChart();
        }

        console.log('✅ All charts initialized successfully');
    } catch (error) {
        console.error('❌ Error initializing charts:', error);
    }
}

// Wait for DOM to be fully loaded before initializing charts
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllCharts);
} else {
    // DOM is already loaded
    initAllCharts();
}
