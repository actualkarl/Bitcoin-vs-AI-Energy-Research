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
        console.log('✅ All Phase 1 charts initialized successfully');
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
