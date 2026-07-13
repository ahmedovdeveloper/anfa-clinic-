import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import newsData from "../data/newsData";

const NewsCard = ({ news, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  // Получаем первое предложение или первые 150 символов для preview
  const getPreviewText = (text) => {
    const firstSentence = text.split('.')[0];
    if (firstSentence.length > 150) {
      return firstSentence.substring(0, 150) + '...';
    }
    return firstSentence + '.';
  };

  return (
    <div
      className="news-card group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
        {news.img && news.img.length > 0 ? (
          <img
            src={news.img[0]}
            alt={news.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110 rotate-2" : "scale-100"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-cyan-200">
            <Sparkles size={48} className="text-blue-600 opacity-50" />
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
          {t(`newsData.${news.id}.title`)}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
          {getPreviewText(t(`newsData.${news.id}.description`))}
        </p>

        {/* Read More Button */}
        <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
          {t("newsList.readMore")}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const FeaturedNews = ({ news, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  // Получаем первое предложение или первые 200 символов для preview
  const getPreviewText = (text) => {
    const firstSentence = text.split('.')[0];
    if (firstSentence.length > 200) {
      return firstSentence.substring(0, 200) + '...';
    }
    return firstSentence + '.';
  };

  return (
    <div
      className="featured-news relative col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {news.img && news.img.length > 0 ? (
          <>
            <img
              src={news.img[0]}
              alt={news.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-cyan-700/70"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-cyan-700/70"></div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between min-h-[400px]">
        {/* Top Badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold">
            <TrendingUp size={16} />
            {t("newsList.mainNewsBadge")}
          </div>
        </div>

        {/* Bottom Content */}
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            {t(`newsData.${news.id}.title`)}
          </h2>

          <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
            {getPreviewText(t(`newsData.${news.id}.description`))}
          </p>

          <button className="inline-flex items-center gap-3 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:shadow-xl hover:scale-105">
            {t("newsList.moreDetails")}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
    </div>
  );
};

const News = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const { t } = useTranslation();

  // Преобразуем объект newsData в массив и сортируем по ID (новые сверху)
  const newsArray = Object.entries(newsData)
    .map(([id, news]) => ({
      id: parseInt(id),
      ...news,
    }))
    .sort((a, b) => b.id - a.id);

  const displayedNews = showAll ? newsArray : newsArray.slice(0, 5);
  // Первая новость (самая новая) будет featured
  const featuredNews = newsArray[0];

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, .logo-text {
          font-family: 'Sora', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .news-card {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .featured-news {
          animation: slideInLeft 0.8s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        /* Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <section className="news-section relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
                {t("homeSections.newsBadge")}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">
                  {t("homeSections.newsTitle")}
                </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {t("homeSections.newsSubtitle")}
            </p>
          </div>

          {/* News Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Featured News - Takes 2 columns */}
              {featuredNews && (
                <FeaturedNews 
                  news={featuredNews} 
                  onClick={() => handleNewsClick(featuredNews.id)}
                />
              )}

              {/* Regular News Cards */}
              {displayedNews
                .filter((news) => news.id !== featuredNews?.id)
                .slice(0, 4)
                .map((news, index) => (
                  <NewsCard 
                    key={news.id} 
                    news={news} 
                    index={index}
                    onClick={() => handleNewsClick(news.id)}
                  />
                ))}
            </div>

            {/* Additional News When Expanded */}
            {showAll && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {newsArray
                  .filter((news) => news.id !== featuredNews?.id)
                  .slice(4)
                  .map((news, index) => (
                    <NewsCard 
                      key={news.id} 
                      news={news} 
                      index={index + 4}
                      onClick={() => handleNewsClick(news.id)}
                    />
                  ))}
              </div>
            )}

            {/* Show All Button */}
            {newsArray.length > 5 && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Shimmer Effect */}
                  <div className="shimmer-effect absolute inset-0"></div>
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center gap-3">
                    {showAll ? t("newsList.showLess") : t("newsList.showAll")}
                    <ArrowRight
                      size={20}
                      className={`transition-transform duration-300 ${
                        showAll ? "rotate-90" : "group-hover:translate-x-1"
                      }`}
                    />
                  </span>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;