// WSJ News Fetcher Script
// 注意：由于跨域限制，这个脚本需要在服务器端运行

class WSJNewsFetcher {
    constructor() {
        this.baseUrl = 'https://www.wsj.com/news/latest-headlines';
        this.targetClass = 'css-bdm6mo';
    }

    // 模拟获取新闻数据的函数
    async fetchLatestNews() {
        try {
            // 在实际应用中，你需要使用服务器端代理或API
            // 这里提供一个模拟的数据结构示例
            
            const mockNewsData = [
                {
                    title: "Federal Reserve Signals Potential Rate Cut as Inflation Shows Signs of Cooling",
                    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    summary: "Recent economic data suggests the Federal Reserve may consider cutting interest rates in the coming months as inflation continues to moderate from recent highs...",
                    source: "WSJ",
                    timestamp: "2 hours ago",
                    url: "https://www.wsj.com/articles/federal-reserve-signals-rate-cut",
                    category: "Economics"
                },
                {
                    title: "Tech Stocks Rally as AI Investment Continues to Drive Market Growth",
                    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    summary: "Major technology companies saw significant gains today as investors remain optimistic about artificial intelligence investments and their potential returns...",
                    source: "CNBC",
                    timestamp: "4 hours ago",
                    url: "https://www.cnbc.com/tech-stocks-rally",
                    category: "Technology"
                },
                {
                    title: "Cryptocurrency Market Experiences Surge Following Regulatory Clarity",
                    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    summary: "Bitcoin and other major cryptocurrencies posted significant gains after regulatory agencies provided clearer guidelines for digital asset trading...",
                    source: "Bloomberg",
                    timestamp: "6 hours ago",
                    url: "https://www.bloomberg.com/crypto-surge",
                    category: "Cryptocurrency"
                },
                {
                    title: "Global Banking Sector Shows Resilience Amid Economic Uncertainty",
                    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    summary: "Major international banks report stronger-than-expected quarterly results, demonstrating stability in the face of ongoing economic challenges...",
                    source: "Financial Times",
                    timestamp: "8 hours ago",
                    url: "https://www.ft.com/banking-resilience",
                    category: "Banking"
                },
                {
                    title: "Energy Markets Stabilize as Supply Chain Concerns Ease",
                    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    summary: "Oil and gas prices show signs of stabilization following improved supply chain logistics and diplomatic progress in key producing regions...",
                    source: "Reuters",
                    timestamp: "10 hours ago",
                    url: "https://www.reuters.com/energy-markets",
                    category: "Energy"
                }
            ];

            return mockNewsData;
        } catch (error) {
            console.error('Error fetching news:', error);
            return [];
        }
    }

    // 实际的WSJ抓取函数（需要服务器端实现）
    async fetchFromWSJ() {
        // 这个函数需要在Node.js服务器上运行
        // 使用cheerio和axios来抓取数据
        
        /* 
        示例服务器端代码：
        
        const axios = require('axios');
        const cheerio = require('cheerio');

        async function scrapeWSJ() {
            try {
                const response = await axios.get('https://www.wsj.com/news/latest-headlines?mod=nav_top_section');
                const $ = cheerio.load(response.data);
                
                const articles = [];
                $('.css-bdm6mo').each((index, element) => {
                    const title = $(element).find('h3').text().trim();
                    const summary = $(element).find('p').text().trim();
                    const imageUrl = $(element).find('img').attr('src');
                    const articleUrl = $(element).find('a').attr('href');
                    
                    if (title && summary) {
                        articles.push({
                            title,
                            summary,
                            image: imageUrl,
                            url: articleUrl,
                            source: 'WSJ',
                            timestamp: 'Just now'
                        });
                    }
                });
                
                return articles.slice(0, 5); // 只返回前5条
            } catch (error) {
                console.error('Scraping error:', error);
                return [];
            }
        }
        */
        
        throw new Error('This function requires server-side implementation');
    }

    // 更新网页上的新闻轮播
    updateNewsCarousel(newsData) {
        const carousel = document.getElementById('newsCarousel');
        if (!carousel || !newsData.length) return;

        // 生成颜色主题
        const themes = [
            'from-blue-50 to-indigo-50',
            'from-green-50 to-emerald-50', 
            'from-yellow-50 to-orange-50',
            'from-purple-50 to-pink-50',
            'from-red-50 to-pink-50'
        ];

        const colors = [
            'text-apple-blue',
            'text-green-600',
            'text-orange-600', 
            'text-purple-600',
            'text-red-600'
        ];

        carousel.innerHTML = '';

        newsData.forEach((news, index) => {
            const newsItem = document.createElement('div');
            newsItem.className = `min-w-full flex bg-gradient-to-r ${themes[index]} rounded-2xl news-carousel-item`;
            
            newsItem.innerHTML = `
                <div class="w-1/2 p-8 flex flex-col justify-center news-carousel-content">
                    <span class="text-sm ${colors[index]} font-medium mb-2">${news.source} • ${news.timestamp}</span>
                    <h3 class="text-2xl font-bold text-apple-gray mb-4 leading-tight">${news.title}</h3>
                    <p class="text-apple-dark-gray mb-4 line-clamp-3">${news.summary}</p>
                    <a href="${news.url}" target="_blank" class="inline-flex items-center ${colors[index]} hover:${colors[index].replace('600', '700')} font-medium">
                        Read Full Story
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div class="w-1/2 relative">
                    <img src="${news.image}" 
                         alt="${news.title}" 
                         class="w-full h-full object-cover rounded-r-2xl"
                         onerror="this.src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-r-2xl"></div>
                </div>
            `;
            
            carousel.appendChild(newsItem);
        });
    }

    // 初始化新闻获取
    async init() {
        try {
            const newsData = await this.fetchLatestNews();
            this.updateNewsCarousel(newsData);
            
            // 每5分钟刷新一次新闻
            setInterval(async () => {
                const updatedNews = await this.fetchLatestNews();
                this.updateNewsCarousel(updatedNews);
            }, 5 * 60 * 1000);
            
        } catch (error) {
            console.error('Failed to initialize news fetcher:', error);
        }
    }
}

// 使用示例
document.addEventListener('DOMContentLoaded', function() {
    const newsFetcher = new WSJNewsFetcher();
    newsFetcher.init();
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WSJNewsFetcher;
} 