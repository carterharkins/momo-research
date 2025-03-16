// Initialize charts when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createDemographicsChart();  // Create pie chart first
    createTAMChart();  // Create single TAM chart
});

function createTAMChart() {
    // Create container if it doesn't exist
    const chartsContainer = document.getElementById('tamCharts');
    if (!chartsContainer) {
        const container = document.createElement('div');
        container.id = 'tamCharts';
        container.className = 'chart-section';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        
        // Create single chart container
        const wrapper = document.createElement('div');
        wrapper.style.width = '100%';
        wrapper.style.height = '900px'; // Increased height for all 30 items
        const canvas = document.createElement('canvas');
        canvas.id = 'tamChart';
        wrapper.appendChild(canvas);
        container.appendChild(wrapper);
        
        // Replace the old chart container
        const oldChart = document.getElementById('tamChart');
        if (oldChart && oldChart.parentNode && oldChart.parentNode.parentNode) {
            oldChart.parentNode.parentNode.replaceChild(container, oldChart.parentNode);
        }
    }

    // Hard-coded community data
    const communityData = [
        { name: "Gardening Enthusiasts", size: 143 },
        { name: "Home Cooking & Baking", size: 100 },
        { name: "Bird Watching ('Birders')", size: 96 },
        { name: "Book Lovers & Reading Enthusiasts", size: 90 },
        { name: "DIY Woodworking Hobbyists", size: 88.4 },
        { name: "Cat Owners & Cat Lovers", size: 84 },
        { name: "Grandparents", size: 70 },
        { name: "Dog Owners & Dog Lovers", size: 60 },
        { name: "Board & Card Game Enthusiasts", size: 60 },
        { name: "Fishing Enthusiasts", size: 57.7 },
        { name: "Retirees & Seniors (Active Lifestyle 65+)", size: 56 },
        { name: "Photography Enthusiasts", size: 50 },
        { name: "Classic Car Enthusiasts", size: 43 },
        { name: "Wine Enthusiasts", size: 40 },
        { name: "Arts & Crafts Enthusiasts", size: 40 },
        { name: "Genealogy & Family History Buffs", size: 30 },
        { name: "Hunting Enthusiasts", size: 25.8 },
        { name: "RV Camping Enthusiasts", size: 22.4 },
        { name: "Cruise Travelers", size: 18.2 },
        { name: "Military Veterans Community", size: 18 },
        { name: "Animal Rescue Community", size: 10 },
        { name: "Motorcycle Riders (Bikers)", size: 8.8 },
        { name: "Nurses & Medical Professionals", size: 4.2 },
        { name: "History Buffs & Reenactors", size: 4 },
        { name: "Cigar Aficionados", size: 4 },
        { name: "Breast Cancer Community", size: 4 },
        { name: "Teachers & Educators", size: 4 },
        { name: "Antique & Vintage Collectors", size: 3 },
        { name: "Ham Radio Operators", size: 0.7 }
    ].sort((a, b) => b.size - a.size);

    const ctx = document.getElementById('tamChart').getContext('2d');
    
    // Create tooltip element if it doesn't exist
    if (!window.tooltipEl) {
        const tooltipEl = document.createElement('div');
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.padding = '8px';
        tooltipEl.style.background = 'rgba(0,0,0,0.8)';
        tooltipEl.style.color = 'white';
        tooltipEl.style.borderRadius = '4px';
        tooltipEl.style.fontSize = '14px';
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.zIndex = '1000';
        tooltipEl.style.display = 'none';
        document.body.appendChild(tooltipEl);
        window.tooltipEl = tooltipEl;
    }

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: communityData.map(c => c.name),
            datasets: [{
                label: 'Community Size (Millions)',
                data: communityData.map(c => c.size),
                backgroundColor: 'rgba(52, 152, 219, 0.8)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Communities by Size',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        bottom: 20
                    }
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Millions of People',
                        font: {
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + 'M';
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 12
                        }
                    }
                }
            },
            onHover: (event, elements, chart) => {
                const points = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
                
                if (points.length) {
                    const point = points[0];
                    const community = communityData[point.index];
                    
                    window.tooltipEl.innerHTML = `Size: ${community.size}M`;
                    window.tooltipEl.style.display = 'block';
                    window.tooltipEl.style.left = event.native.pageX + 10 + 'px';
                    window.tooltipEl.style.top = event.native.pageY + 10 + 'px';
                } else {
                    window.tooltipEl.style.display = 'none';
                }
            }
        }
    });

    // Clean up tooltip when chart is destroyed
    chart.destroy = function() {
        if (window.tooltipEl) {
            document.body.removeChild(window.tooltipEl);
            window.tooltipEl = null;
        }
        Chart.prototype.destroy.apply(this, arguments);
    };
}

// Create demographics overview chart
function createDemographicsChart() {
    const demographicsContainer = document.getElementById('demographicsChart');
    if (demographicsContainer) {
        // Set the wrapper dimensions
        const wrapper = demographicsContainer.closest('.chart-wrapper');
        if (wrapper) {
            wrapper.style.width = '100%';
        }
    }
    
    const ctx = document.getElementById('demographicsChart').getContext('2d');
    
    // Aggregate demographic data with more accurate categories
    const demographics = {
        'Primarily 55+': 0,
        'Middle-Aged to Senior': 0,
        'All Ages': 0,
        'Age-Diverse': 0
    };

    communities.forEach(community => {
        const demo = community.demographics.toLowerCase();
        
        if (demo.includes('retiree') || 
            (demo.includes('70') || demo.includes('senior')) ||
            (demo.includes('older') && !demo.includes('middle'))) {
            demographics['Primarily 55+']++;
        } else if (demo.includes('middle-age') || 
                   demo.includes('40') ||
                   demo.includes('50') ||
                   (demo.includes('older') && demo.includes('middle'))) {
            demographics['Middle-Aged to Senior']++;
        } else if (demo.includes('all') || 
                   demo.includes('span') || 
                   demo.includes('across')) {
            demographics['All Ages']++;
        } else {
            demographics['Age-Diverse']++;
        }
    });

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(demographics),
            datasets: [{
                data: Object.values(demographics),
                backgroundColor: [
                    '#e74c3c',  // Red for 55+
                    '#f1c40f',  // Yellow for Middle-Aged to Senior
                    '#2ecc71',  // Green for All Ages
                    '#3498db'   // Blue for Age-Diverse
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Age Distribution Across Communities',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: 20
                }
            }
        }
    });
} 