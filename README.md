Warrington Business Insights & Clusters
Overview
The Warrington Business Insights & Clusters project provides a detailed analysis of Warrington's commercial landscape using geospatial analytics, clustering techniques, and interactive visualizations. It identifies patterns, opportunities, and actionable insights for policymakers, investors, and business owners.

Using data collected via the Google Maps API, the project applies advanced clustering algorithms and visualization tools to segment Warrington's business ecosystem into five distinct clusters, each highlighting unique characteristics, challenges, and opportunities for growth.

Key Features
Interactive Business Map

Visualizes Warrington's business clusters with interactive heatmaps and geospatial overlays.
Includes a detailed legend to interpret business density and cluster characteristics.
Clustering Analysis

Uses K-means clustering to group businesses based on geospatial and performance data (ratings, reviews).
Generates five clusters with distinct business diversity and density levels.
Actionable Insights

Identifies underperforming areas with growth potential.
Highlights high-performing clusters to replicate successful business models.
Data-Driven Visualizations

Bar charts, pie charts, and interactive maps provide clear, engaging presentations of key metrics.
Data Sources
Google Maps API

Collected business names, types, locations (latitude/longitude), ratings, and review counts.
Data retrieved on December 22, 2024 to ensure freshness and relevance.
Python Libraries

Tools used: Pandas, Seaborn, Matplotlib, Folium, Scikit-learn.
Supported data cleaning, normalization, and analysis accuracy.
Methodology
1. Data Collection
Retrieved real-time business data within Warrington using the Google Maps API.
Ensured the dataset was comprehensive and validated for consistency.
2. Data Processing & Cleaning
Designed an ETL pipeline to:
Remove duplicates, handle missing values, and normalize data formats.
Filter businesses to focus on Warrington and relevant industries.
3. Clustering Analysis
Applied K-means clustering on features like:
Latitude and Longitude for geospatial grouping.
Ratings and Review Counts for quality and popularity.
Produced five distinct clusters highlighting areas with varying business density and characteristics.
4. Insights Extraction
Analyzed cluster performance based on diversity, ratings, and business types.
Identified high-potential opportunities and key areas for improvement.
Key Insights
Cluster Performance Highlights
Cluster 1 (Leading): Highest business count (132) and diversity (13 business types), including clothing stores and lodging.
Cluster 4 (Underperforming): Lowest average rating (4.18) and low diversity, dominated by car dealers.
Opportunities for Growth
Cluster 4: Introduce cafes, entertainment venues, and premium services to diversify offerings and improve customer engagement.
Cluster 2: Expand family-oriented services to complement the dominant jewelry stores and cafes.
Dominant Business Types
Overall: Clothing stores, shoe stores, lodging, and car dealers dominate Warrington's business landscape.
Cluster-Specific:
Cluster 1: Clothing stores and shoe stores lead.
Cluster 2: Jewelry stores and cafes are prominent.
Cluster 5: Car dealers and electronics stores are key.
Feedback
Clusters with higher diversity and popular business types (e.g., Cluster 1) have better ratings.
Businesses with lower customer engagement or monotonous offerings (e.g., Cluster 4) tend to underperform.
Technology Stack
Programming Language: Python
Data Processing: Pandas, Numpy
Visualization: Seaborn, Matplotlib, Folium
Clustering: Scikit-learn (K-means)
Interactive Features: JavaScript, Chart.js, Bootstrap
How to Use
Clone the repository:
bash
Copy code
git clone https://github.com/your-repo-name/warrington-business-insights.git
Install required dependencies:
bash
Copy code
pip install -r requirements.txt
Run the analysis and visualization scripts:
bash
Copy code
python main.py
Open the Interactive Map by launching the index.html file in your browser.
Acknowledgments
Data sourced from Google Maps API.
Visualizations inspired by data storytelling best practices.
Author
Andre Ramos

LinkedIn
GitHub
© 2024 Andre Ramos. All rights reserved.
