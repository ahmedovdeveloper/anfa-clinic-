import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Заглушка, если файл не найден
const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <text x="50%" y="50%" fill="#94a3b8" font-size="20" font-family="Arial"
        text-anchor="middle" dominant-baseline="middle">Нет фото</text>
    </svg>`
  );

// Файлы должны лежать в: public/assets/
// Имена и регистр должны совпадать ТОЧНО с реальными файлами
import cassi from "../assets/cassi.webp";
import congnitaz from "../assets/congnitaz.webp";
import aktivaz from "../assets/aktivaz.webp";
import hisgrador from "../assets/hisgrador.webp";
import hereliona from "../assets/hereliona.webp";
import kartaz from "../assets/kartaz.webp";
import nootroz from "../assets/nootroz.webp";
import richomegos from "../assets/richomegos.webp";
import vitazza from "../assets/vitazza.webp";
import stallaz from "../assets/stallaz.webp";

const products = [
  { id: 1, name: "CASSI", image: cassi },
  { id: 2, name: "COGNITAZ", image: congnitaz },
  { id: 3, name: "AKTIVAZ", image: aktivaz },
  { id: 4, name: "HIS GRADOR", image: hisgrador },
  { id: 5, name: "HER ELIONA", image: hereliona },
  { id: 6, name: "KARTAZ", image: kartaz },
  { id: 7, name: "NOOTRAZ", image: nootroz },
  { id: 8, name: "RICH OMEGOS", image: richomegos },
  { id: 9, name: "VITAZZA", image: vitazza },
  { id: 10, name: "STALAZ", image: stallaz },
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleProductClick = (productId) => navigate(`/products/${productId}`);
  const handleShowAll = () => navigate("/products");

  const handleImgError = (e) => {
    console.error("Картинка не загрузилась:", e.currentTarget.getAttribute("src"));
    e.currentTarget.onerror = null; // защита от бесконечного цикла
    e.currentTarget.src = PLACEHOLDER;
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITLE */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 mb-2 sm:mb-3">
            {t("homeSections.productsLabel")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 px-4">
            {t("homeSections.productsTitle")}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            {t("homeSections.productsSubtitle")}
          </p>
        </div>

        {/* SWIPER */}
        <div className="relative px-0 sm:px-2 md:px-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="products-swiper pb-12 sm:pb-14 md:pb-16"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  onClick={() => handleProductClick(product.id)}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200
                  p-4 sm:p-5 md:p-6 hover:border-blue-500 hover:shadow-2xl transition-all duration-500
                  cursor-pointer overflow-hidden transform hover:-translate-y-2 h-full flex flex-col"
                >
                  {/* GLOW EFFECT */}
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0
                    group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10
                    transition-all duration-500 rounded-2xl sm:rounded-3xl"
                  />

                  {/* PRODUCT IMAGE */}
                  <div
                    className="relative z-10 w-full h-48 sm:h-56 md:h-64 mb-4 sm:mb-5 md:mb-6 overflow-hidden
                    rounded-xl sm:rounded-2xl bg-slate-50"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={handleImgError}
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="relative z-10 text-center flex-grow flex flex-col justify-between">
                    <h3
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4
                      group-hover:text-blue-600 transition-colors duration-300 px-2"
                    >
                      {product.name}
                    </h3>

                    <button
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r
                      from-blue-600 to-blue-700 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3
                      rounded-full font-semibold text-sm sm:text-base
                      hover:from-blue-700 hover:to-blue-800 hover:gap-3
                      transition-all duration-300 shadow-lg group-hover:shadow-xl w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.id);
                      }}
                    >
                      {t("newsList.moreDetails")}
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* DECORATIVE CORNER */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br
                    from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 pointer-events-none"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SHOW ALL BUTTON */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button
            onClick={handleShowAll}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4
            bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full
            font-bold text-sm sm:text-base hover:from-blue-700 hover:to-blue-800
            transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            {t("products.showAll")}
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .products-swiper { padding: 20px 0 60px; }
        .products-swiper .swiper-slide { height: auto; display: flex; }
        .products-swiper .swiper-slide > div { width: 100%; }

        .products-swiper .swiper-button-next,
        .products-swiper .swiper-button-prev {
          background: white; width: 40px; height: 40px; border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.3s ease;
        }
        @media (min-width: 640px) {
          .products-swiper .swiper-button-next,
          .products-swiper .swiper-button-prev { width: 48px; height: 48px; }
        }
        .products-swiper .swiper-button-next:hover,
        .products-swiper .swiper-button-prev:hover {
          background: #2563eb; box-shadow: 0 8px 20px rgba(37,99,235,0.3); transform: scale(1.1);
        }
        .products-swiper .swiper-button-next:after,
        .products-swiper .swiper-button-prev:after {
          font-size: 16px; font-weight: bold; color: #1e293b;
        }
        @media (min-width: 640px) {
          .products-swiper .swiper-button-next:after,
          .products-swiper .swiper-button-prev:after { font-size: 20px; }
        }
        .products-swiper .swiper-button-next:hover:after,
        .products-swiper .swiper-button-prev:hover:after { color: white; }
        @media (max-width: 480px) {
          .products-swiper .swiper-button-next,
          .products-swiper .swiper-button-prev { display: none; }
        }

        .products-swiper .swiper-pagination-bullet {
          width: 8px; height: 8px; background: #cbd5e1; opacity: 1; transition: all 0.3s ease;
        }
        @media (min-width: 640px) { .products-swiper .swiper-pagination-bullet { width: 10px; height: 10px; } }
        @media (min-width: 768px) { .products-swiper .swiper-pagination-bullet { width: 12px; height: 12px; } }
        .products-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #2563eb, #1d4ed8); width: 24px; border-radius: 6px;
        }
        @media (min-width: 640px) { .products-swiper .swiper-pagination-bullet-active { width: 28px; } }
        @media (min-width: 768px) { .products-swiper .swiper-pagination-bullet-active { width: 32px; } }
        @media (max-width: 640px) { .products-swiper { padding: 10px 0 50px; } }
      `}</style>
    </section>
  );
}