// 新闻数据更新脚本
let newsData = null;

// 从JSON文件加载新闻数据
async function loadNewsData() {
    try {
        console.log('DEBUG: 正在从carousel_news_data.json加载数据...');
        const response = await fetch('./carousel_news_data.json');
        if (!response.ok) {
            throw new Error('Failed to load news data');
        }
        newsData = await response.json();
        console.log('DEBUG: 成功加载新闻数据:', newsData);
        // 将数据暴露到全局对象以便调试
        window.newsData = newsData;
        return newsData;
    } catch (error) {
        console.error('Error loading news data:', error);
        // 使用备用数据
        newsData = {
            "news_items": [
                {
                    "id": 1,
                    "title": "Global Markets Show Resilience Amid Economic Uncertainty",
                    "image_url": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "image_alt": "Stock Market Analysis",
                    "article_url": "https://www.wsj.com/markets",
                    "timestamp": "2025-06-12T23:22:35.360068",
                    "source": "WSJ"
                },
                {
                    "id": 2,
                    "title": "Federal Reserve Signals Potential Policy Shift",
                    "image_url": "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "image_alt": "Federal Reserve",
                    "article_url": "https://www.wsj.com/economy",
                    "timestamp": "2025-06-12T23:22:35.360215",
                    "source": "WSJ"
                },
                {
                    "id": 3,
                    "title": "Technology Sector Leads Market Recovery",
                    "image_url": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "image_alt": "Technology Stocks",
                    "article_url": "https://www.wsj.com/tech",
                    "timestamp": "2025-06-12T23:22:35.360342",
                    "source": "WSJ"
                },
                {
                    "id": 4,
                    "title": "Energy Prices Stabilize After Volatile Week",
                    "image_url": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "image_alt": "Energy Markets",
                    "article_url": "https://www.wsj.com/business/energy-oil",
                    "timestamp": "2025-06-12T23:22:35.360422",
                    "source": "WSJ"
                },
                {
                    "id": 5,
                    "title": "Digital Assets Gain Institutional Acceptance",
                    "image_url": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "image_alt": "Cryptocurrency",
                    "article_url": "https://www.wsj.com/finance/currencies",
                    "timestamp": "2025-06-12T23:22:35.360496",
                    "source": "WSJ"
                }
            ],
            "last_updated": "2025-06-12T23:22:35.361016",
            "source": "WSJ Latest Headlines",
            "source_url": "https://www.wsj.com/news/latest-headlines?mod=nav_top_section"
        };
        // 将备用数据暴露到全局对象以便调试
        window.newsData = newsData;
        return newsData;
    }
}

// 动态更新轮播图
async function updateCarouselWithNewsData() {
    console.log('DEBUG: news-updater.js 开始更新轮播图数据');
    const carousel = document.getElementById('newsCarousel');
    if (!carousel) {
        console.log('DEBUG: 未找到newsCarousel元素');
        return;
    }
    
    // 确保数据已加载
    if (!newsData) {
        await loadNewsData();
    }
    
    const newsItems = newsData.news_items;
    let slidesHTML = '';
    
    newsItems.forEach((item, index) => {
        const timestamp = new Date(item.timestamp).toLocaleDateString('zh-CN', {
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const displayClass = index === 0 ? 'block' : 'hidden';
        
        slidesHTML += `
            <div class="carousel-slide ${displayClass}">
                <div class="flex">
                    <div class="w-1/2 p-6 flex flex-col justify-center bg-gray-50">
                        <h4 class="text-lg font-semibold text-apple-gray mb-2">
                            <a href="${item.article_url || 'https://www.wsj.com/news/latest-headlines'}" target="_blank" rel="noopener noreferrer" 
                               class="hover:text-blue-600 transition-colors cursor-pointer"
                               title="Click to read more news on WSJ">
                                ${item.title}
                            </a>
                        </h4>
                        <div class="text-xs text-apple-dark-gray mb-3">
                            <span class="bg-red-100 text-red-600 px-2 py-1 rounded">${item.source}</span>
                            <span class="ml-2">${timestamp}</span>
                        </div>
                        <p class="text-sm text-apple-dark-gray mb-4">Breaking news from Wall Street Journal covering the latest developments in global financial markets.</p>
                    </div>
                    <div class="w-1/2 relative">
                        <img src="${item.image_url}" 
                             alt="${item.image_alt}" 
                             class="w-full h-64 object-cover rounded-r-xl">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-r-xl"></div>
                    </div>
                </div>
            </div>
        `;
    });
    
    carousel.querySelector('.carousel-container').innerHTML = slidesHTML;
    console.log('DEBUG: news-updater.js 已更新HTML内容');
    
    // 重置当前slide为0，让主页面的轮播图控制器接管
    setTimeout(() => {
        if (typeof window.resetCarouselToFirst === 'function') {
            console.log('DEBUG: 调用resetCarouselToFirst');
            window.resetCarouselToFirst();
        } else {
            console.log('DEBUG: resetCarouselToFirst函数不存在');
        }
    }, 100);
}

// 页面加载完成后更新数据
document.addEventListener('DOMContentLoaded', async function() {
    // 延迟执行，确保主页面的轮播图已初始化
    console.log('DEBUG: news-updater.js 准备更新轮播图数据');
    setTimeout(async () => {
        await updateCarouselWithNewsData();
    }, 500);
});

// 定期更新新闻数据（每30分钟）
setInterval(() => {
    console.log('正在刷新新闻数据...');
    // 这里可以添加重新获取数据的逻辑
}, 30 * 60 * 1000);
