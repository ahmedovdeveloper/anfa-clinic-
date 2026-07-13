import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";
import newsData from "../data/newsData";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Image Grid */}
      <div className="mb-12">
        {images.length === 1 ? (
          // Single Image
          <div 
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setSelectedImage(0)}
          >
            <img
              src={images[0]}
              alt="Изображение новости"
              className="w-full h-auto max-h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-white/90 rounded-full">
                <ZoomIn size={24} className="text-slate-700" />
              </div>
            </div>
          </div>
        ) : images.length === 2 ? (
          // Two Images - Side by Side
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group aspect-[4/3]"
              >
                <img
                  src={img}
                  alt={`Изображение ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-white/90 rounded-full">
                    <ZoomIn size={24} className="text-slate-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : images.length === 3 ? (
          // Three Images - 1 Large + 2 Small
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              onClick={() => setSelectedImage(0)}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group md:row-span-2 aspect-[4/3] md:aspect-auto"
            >
              <img
                src={images[0]}
                alt="Изображение 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-white/90 rounded-full">
                  <ZoomIn size={24} className="text-slate-700" />
                </div>
              </div>
            </div>
            {images.slice(1, 3).map((img, index) => (
              <div
                key={index + 1}
                onClick={() => setSelectedImage(index + 1)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group aspect-[4/3]"
              >
                <img
                  src={img}
                  alt={`Изображение ${index + 2}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-white/90 rounded-full">
                    <ZoomIn size={24} className="text-slate-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // 4+ Images - Grid Layout
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.slice(0, 6).map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group aspect-[4/3]"
              >
                <img
                  src={img}
                  alt={`Изображение ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-white/90 rounded-full">
                    <ZoomIn size={24} className="text-slate-700" />
                  </div>
                </div>
                {index === 5 && images.length > 6 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      +{images.length - 6}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all z-10"
          >
            <X size={24} />
          </button>

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full text-white text-sm font-semibold">
              {selectedImage + 1} / {images.length}
            </div>
          )}

          {/* Main Image */}
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage]}
              alt={`Изображение ${selectedImage + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-full overflow-x-auto">
              <div className="flex gap-2 px-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(index);
                    }}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === selectedImage
                        ? "border-blue-500 scale-110"
                        : "border-white/30 opacity-60 hover:opacity-100 hover:border-white/60"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Миниатюра ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const NewsView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const news = newsData[id];

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-4">
            {t("newsView.notFoundTitle", "Новость не найдена")}
          </h2>
          <button
            onClick={() => navigate("/news")}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {t("newsView.backToList", "Вернуться к новостям")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .fade-in-up-delay-1 {
          animation: fadeInUp 0.6s ease-out 0.1s forwards;
          opacity: 0;
        }

        .fade-in-up-delay-2 {
          animation: fadeInUp 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .fade-in-up-delay-3 {
          animation: fadeInUp 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Header Section */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => navigate("/news")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all font-medium group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="hidden sm:inline">
                {t("newsView.backToList", "Вернуться к новостям")}
              </span>
              <span className="sm:hidden">
                {t("common.backShort", "Назад")}
              </span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="mb-8 sm:mb-12 fade-in-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              {t(`newsData.${id}.title`)}
            </h1>
              {news.date && (
                <p className="text-slate-500 text-sm sm:text-base font-medium">
                  {news.date}
                </p>
              )}
            </div>

            {/* Image Gallery */}
            {news.img && news.img.length > 0 && (
              <div className="fade-in-up-delay-1">
                <ImageGallery images={news.img} />
              </div>
            )}

            {/* Content */}
            <div className="fade-in-up-delay-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 lg:p-12">
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg whitespace-pre-line">
                    {t(`newsData.${id}.description`)}
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 sm:mt-12 text-center fade-in-up-delay-3">
              <button
                onClick={() => navigate("/news")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all hover:scale-105"
              >
                <ArrowLeft size={20} />
                {t("newsView.allNews", "Все новости")}
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NewsView;