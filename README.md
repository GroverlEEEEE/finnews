# Global Financial Directory 🌍💰

A modern, comprehensive directory of the world's leading financial websites, helping users quickly discover authoritative financial resources.

![Project Preview](https://img.shields.io/badge/Status-Active-green) ![License](https://img.shields.io/badge/License-MIT-blue) ![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)

## 🎯 Key Features

### 💻 Modern Design
- **Apple-inspired Interface**: Clean, elegant design using Apple's signature color palette
- **Responsive Layout**: Perfectly optimized for desktop, tablet, and mobile devices
- **Tailwind CSS**: Built with the latest atomic CSS framework
- **Inter Typography**: Modern, clean sans-serif font system

### 📊 Rich Content
- **35+ Premier Financial Sites**: Carefully curated collection of the world's most trusted financial platforms
- **5 Major Categories**: Financial News, Investment Platforms, Cryptocurrency, Banking Services, Financial Data
- **Detailed Descriptions**: Professional introductions and positioning for each platform
- **Direct Access**: One-click navigation to target websites

### 🔧 Technical Excellence
- **SEO Optimized**: Complete meta tags and structured data
- **Performance Optimized**: CDN delivery for lightning-fast response
- **Accessibility Compliant**: Meets web accessibility standards
- **Smooth Interactions**: Modern animations and seamless transitions
- **Live News Carousel**: Real-time financial news display with auto-rotation and manual controls

## 🚀 Quick Start

### Local Preview
1. Clone or download the project files
```bash
git clone https://github.com/GroverlEEEEE/finnews.git
cd finnews
```

2. Open the index.html file directly
```bash
# Open with default browser
open index.html

# Or use Python simple server
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📰 WSJ News Scraper Integration

### Overview
This project includes a sophisticated WSJ news scraping system that automatically updates the carousel with the latest financial news.

### Core Components
- **`wsj_news_scraper.py`**: Main scraper targeting WSJ latest headlines
- **`update_carousel.py`**: Updates carousel data with fresh news
- **`auto_update_news.py`**: Automated scheduling and refresh system
- **`news-updater.js`**: Frontend integration for dynamic content

### Features
- **Real-time Updates**: Fetches latest news from WSJ
- **Smart Categorization**: Automatically categorizes news by topic
- **Image Processing**: Extracts and optimizes news images
- **Link Validation**: Ensures all URLs are accessible and valid
- **Fallback System**: Uses mock data when scraping is unavailable

### Usage Commands

#### Manual News Update
```bash
# Navigate to scraper directory
cd AI-Cursor-Scraping-Assistant

# Run the scraper manually
python wsj_news_scraper.py

# Update carousel with new data
python update_carousel.py
```

#### Automated Updates
```bash
# Start automated news refresh service
python auto_update_news.py

# Or use the batch file (Windows)
start_news_service.bat
```

### Dependencies Installation
```bash
# Install required Python packages
pip install requests lxml beautifulsoup4

# Or install from requirements file
pip install -r requirements.txt
```

## 📊 Featured Financial Website Categories

### 📰 Financial News (6 sites)
- Bloomberg - Global financial data leader
- Financial Times - Authoritative financial media
- Wall Street Journal - Professional market analysis
- CNBC - Real-time financial broadcasting
- Reuters - International news agency
- Yahoo Finance - Financial portal

### 💰 Investment & Trading (9 sites)
- Investopedia - Financial education platform
- Morningstar - Investment research institution
- Fidelity - Asset management company
- Charles Schwab - Investment services
- Interactive Brokers - Electronic trading platform
- Robinhood - Commission-free trading
- E*TRADE - Online trading platform
- TD Ameritrade - Investment services
- Vanguard - Low-cost investment funds

### 💎 Cryptocurrency (5 sites)
- Coinbase - Leading US exchange
- Binance - World's largest exchange
- Kraken - Security-focused platform
- CoinMarketCap - Data platform
- CoinGecko - Analytics platform

### 🏦 Banking Services (5 sites)
- JPMorgan Chase - Global banking giant
- Bank of America - Major US bank
- Wells Fargo - Financial services
- HSBC - International banking network
- PayPal - Online payment services

### 📊 Financial Data (4 sites)
- TradingView - Chart analysis platform
- S&P Global - Financial information services
- Moody's - Credit rating agency
- XE Currency - Exchange rate conversion tool

## 🔧 Technology Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Atomic CSS framework
- **Vanilla JavaScript**: Lightweight interactions
- **Python**: Backend scraping system
- **Inter Font**: Modern typography
- **CDN**: Fast resource delivery

## 🤝 Contributing

We welcome issues and improvement suggestions!

### How to Contribute
1. Fork this project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Types
- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- 🌐 Multi-language support
- 📊 New website additions

## 📄 License

This project is open source under the MIT License.

## 📞 Contact

For questions or suggestions, please contact us through:

- 📧 Email: groverlee224.1@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/GroverlEEEEE/finnews/issues)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) - Excellent CSS framework
- [Inter Font](https://rsms.me/inter/) - Modern font design
- [Heroicons](https://heroicons.com) - Clean icon library
- [Unsplash](https://unsplash.com) - High-quality stock photos
- All financial websites for providing quality services

---

⭐ If this project helps you, please give it a star!

**Made with ❤️ for the global financial community**

**Last Updated**: December 2024 