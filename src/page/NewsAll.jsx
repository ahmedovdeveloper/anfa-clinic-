import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, Search, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import newsData from "../data/newsData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NewsCard = ({ news, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className="news-card group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
      style={{
        animationDelay: `${index * 50}ms`,
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
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          {t(`newsData.${news.id}.description`)}
        </p>

        {/* Read More Button */}
        <button className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
          Читать далее
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

const NewsAllPages = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { t } = useTranslation();

  // Преобразуем объект newsData в массив
  const newsArray = Object.entries(newsData).map(([id, news]) => ({
    id,
    ...news,
  }));

  // Фильтрация новостей по поисковому запросу
  const filteredNews = newsArray.filter((news) => {
    const searchLower = searchQuery.toLowerCase();
    const title = t(`newsData.${news.id}.title`).toLowerCase();
    const description = t(`newsData.${news.id}.description`).toLowerCase();
    return title.includes(searchLower) || description.includes(searchLower);
  });

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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .news-card {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .search-bar {
          animation: slideDown 0.3s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

    <>
        <Header/>
          <section className="news-all-pages relative min-h-screen py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="max-w-6xl mx-auto mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">
                {t("newsAll.title")}
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
              {t("newsAll.subtitle")}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              {!showSearch ? (
                <button
                  onClick={() => setShowSearch(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 font-semibold"
                >
                  <Search size={20} />
                  {t("newsAll.searchButton")}
                </button>
              ) : (
                <div className="search-bar relative">
                  <input
                    type="text"
                    placeholder={t("newsAll.searchPlaceholder")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pr-24 bg-white rounded-2xl shadow-lg text-lg outline-none focus:ring-4 focus:ring-blue-200 transition-all"
                    autoFocus
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                      >
                        <X size={20} className="text-slate-400" />
                      </button>
                    )}
                    <button
                      onClick={() => setShowSearch(false)}
                      className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      <Search size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Search Results Counter */}
            {searchQuery && (
              <p className="mt-4 text-slate-600">
                {t("newsAll.foundCount")}:{" "}
                <span className="font-bold text-blue-600">
                  {filteredNews.length}
                </span>
              </p>
            )}
          </div>

          {/* News Grid */}
          <div className="max-w-7xl mx-auto">
            {filteredNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((news, index) => (
                  <NewsCard
                    key={news.id}
                    news={news}
                    index={index}
                    onClick={() => handleNewsClick(news.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-100 rounded-full mb-6">
                  <Search size={48} className="text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-700 mb-3">
                  {t("newsAll.emptyTitle")}
                </h3>
                <p className="text-slate-500 mb-6">
                  {t("newsAll.emptySubtitle")}
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t("newsAll.resetSearch")}
                </button>
              </div>
            )}
          </div>

          {/* Back to Home Button */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => navigate("/")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-3">
                <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                {t("newsAll.backHome")}
              </span>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
    </>
  );
};

export default NewsAllPages;