// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle functionality
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Add the Folium map to the designated container
    const foliumMapContainer = document.getElementById("folium-map");
    foliumMapContainer.innerHTML = `
        <iframe src="final_updated_warrington_map.html"
                width="100%"
                height="600px"
                style="border: none;"
                allowfullscreen>
        </iframe>
    `;

    const resetMapBtn = document.getElementById('resetMapBtn');
    const mapIframe = document.querySelector('#folium-map iframe');

    const reloadMap = () => {
        mapIframe.src = mapIframe.src;
    };

    // Reload map automatically on page load with a delay
    setTimeout(reloadMap, 1);

    resetMapBtn.addEventListener('click', reloadMap);

    mapIframe.addEventListener('load', () => {
        // Ensure clusters are visible on initial load
        mapIframe.contentWindow.postMessage('showClusters', '*');
    });

    // Initialize animation observer for process and insight cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    // Apply animations to cards
    document.querySelectorAll(".process-card, .insight-card").forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(card);
    });

    // Chart Data and Configuration
    const businessDistributionData = {
        labels: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"],
        datasets: [{
            label: "Business Count",
            data: [132, 25, 27, 20, 33],
            backgroundColor: "#3498DB",
        }]
    };

    const averageRatingData = {
        labels: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"],
        datasets: [{
            label: "Average Rating",
            data: [4.27, 4.38, 4.38, 4.18, 4.34],
            backgroundColor: ["#3498DB", "#2ECC71", "#9B59B6", "#F1C40F", "#E74C3C"],
        }]
    };

    const topBusinessTypesData = {
    labels: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"], // Clusters on the X-axis
    datasets: [
        {
            label: "Retail",
            data: [40, 25, 20, 15, 30], // Counts for each cluster
            backgroundColor: "#3498DB",
        },
        {
            label: "Food",
            data: [30, 35, 25, 20, 20], // Counts for each cluster
            backgroundColor: "#2ECC71",
        },
        {
            label: "Services",
            data: [20, 30, 35, 25, 25], // Counts for each cluster
            backgroundColor: "#9B59B6",
        },
        {
            label: "Entertainment",
            data: [10, 10, 20, 40, 25], // Counts for each cluster
            backgroundColor: "#F1C40F",
        }
    ]
};


    const barConfig = {
        type: "bar",
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    };

    const stackedBarConfig = {
        type: "bar",
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                },
            },
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                },
            },
        },
    };

    // Create Charts
    new Chart(document.getElementById("businessDistributionChart"), {
        ...barConfig,
        data: businessDistributionData,
    });

    new Chart(document.getElementById("averageRatingChart"), {
        ...barConfig,
        data: averageRatingData,
    });

    new Chart(document.getElementById("topBusinessTypesChart"), {
        ...stackedBarConfig,
        data: topBusinessTypesData,
    });

    // Force the Folium map to redraw after a small delay
    const mapObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const iframe = foliumMapContainer.querySelector("iframe");
                if (iframe) {
                    iframe.src = iframe.src; // Reload the iframe to redraw the map
                }
            }
        });
    });

    mapObserver.observe(foliumMapContainer);
});

// Add this code to the main DOMContentLoaded event listener at the top
    const triggerTabList = document.querySelectorAll('#analysisTab .nav-link');
    triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl);
        triggerEl.addEventListener('click', event => {
            event.preventDefault();
            tabTrigger.show();
        });
    });

// Add before existing chart initialization code
const diversityData = {
    labels: ["Cluster 0", "Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4"],
    datasets: [{
        label: "Business Diversity",
        data: [13, 10, 9, 8, 13],
        backgroundColor: ["#3498DB", "#2ECC71", "#9B59B6", "#F1C40F", "#E74C3C"],
    }]
};

new Chart(document.getElementById("diversityChart"), {
    type: "bar",
    data: diversityData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const mapTab = document.getElementById('map-tab');
    const foliumMap = document.getElementById('folium-map');
    let mapInitialized = false;

    mapTab.addEventListener('click', function() {
        if (!mapInitialized) {
            // Initialize map when tab is clicked
            foliumMap.innerHTML = `
                <iframe 
                    src="final_updated_warrington_map.html"
                    width="100%"
                    height="600px"
                    style="border: none;"
                    allowfullscreen>
                </iframe>
            `;
            
            const mapIframe = foliumMap.querySelector('iframe');
            const resetMapBtn = document.getElementById('resetMapBtn');

            resetMapBtn.addEventListener('click', () => {
                mapIframe.src = mapIframe.src;
            });

            mapInitialized = true;
        }
    });
});


const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom"
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const ratingData = {
    labels: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"],
    datasets: [{
        label: "Rating Distribution",
        data: [4.5, 4.2, 4.3, 4.1, 4.4],
        backgroundColor: "#3498DB",
    }]
};

const businessCountData = {
    labels: ["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"],
    datasets: [{
        label: "Business Count",
        data: [45, 32, 28, 35, 40],
        backgroundColor: "#2ECC71",
    }]
};



document.getElementById('themeToggle').addEventListener('click', function() {
    if (this.textContent === 'Dark Mode') {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }
});