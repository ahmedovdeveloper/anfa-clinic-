import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    name: "CASSI",
    image: "https://www.dropbox.com/scl/fi/9e6c1mpna9ksfl59ue2gx/IMG_1928.JPG?rlkey=vm25x38e24ay9um9olx2eg6gg&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/h7wyverbcvoivfd1fp8e1/CASSI.pdf?rlkey=99938vg68i84ull1sr58sh62l&raw=1",
  },
  {
    id: 2,
    name: "COGNITAZ",
    image: "https://www.dropbox.com/scl/fi/414nqrsttxphlqzpgrkxq/IMG_1929.JPG?rlkey=hygxccpleo6ulus2ngwa7otxp&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/r7f5j75udrfis98z3jrr2/COGNITAZ.pdf?rlkey=ew8u7qodsn1essgow1192ivwv&raw=1",
  },
  {
    id: 3,
    name: "AKTIVAZ",
    image: "https://www.dropbox.com/scl/fi/hplz03sk3qkzd1g3rzr1w/IMG_1930.JPG?rlkey=bbpw7cmijv8dreqhocd61pweg&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/pcnznm2bdvdu5j9m06pr8/AKTIVAZ.pdf?rlkey=ufaoavkzg1yhm2yy8zhg1hwxi&raw=1",
  },
  {
    id: 4,
    name: "HIS GRADOR",
    image: "https://www.dropbox.com/scl/fi/nl6bdh86e9czkolhqbwfd/IMG_1931.PNG?rlkey=yr27hf1v98drwor521smxonnw&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/iesd3ckspgcv5343xk424/GRADOR.pdf?rlkey=stbs6z4oj626fj4rpyytlyi0o&raw=1",
  },
  {
    id: 5,
    name: "HER ELIONA",
    image: "https://www.dropbox.com/scl/fi/gq20r4ww3kxeerc1a6bmt/IMG_1932.PNG?rlkey=m6ji1um55grb8usq68rx5bkh8&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/p20ywwrk2lz19zjobv0y6/HER-ELIONA.pdf?rlkey=y8rrb9s7cp9qzsdvzowqgbmn2&raw=1",
  },
  {
    id: 6,
    name: "KARTAZ",
    image: "https://www.dropbox.com/scl/fi/sto1z2abwno8xx83ca7iv/IMG_1933.PNG?rlkey=3qrtnahbv2td1i18mwvqui8kq&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/8g8lz7co7jltu5j7xkh48/KARTAZ.pdf?rlkey=x0tmta6paex9czq2jzlxpa386&raw=1",
  },
  {
    id: 7,
    name: "NOOTRAZ",
    image: "https://www.dropbox.com/scl/fi/mrkm207aijfbkelkeuuol/IMG_1934.PNG?rlkey=2gbjkhuecb2q0zsjktpyoxwpm&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/kadmc1zktspjibrlbtdnf/NOOTROZ.pdf?rlkey=mfkhhvpnfxuauoe0r9o10nk7v&raw=1",
  },
  {
    id: 8,
    name: "RICH OMEGOS",
    image: "https://www.dropbox.com/scl/fi/iqk0fkodd1m93fphiys2a/IMG_1935.PNG?rlkey=s0ar2x1mfq4qvwofyxtn6hvsa&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/zxmy8f6g4p9j06xlmz1my/RICH-OMEGOS.pdf?rlkey=s3u7obxvycxqrvp1g2iuj5y0e&raw=1",
  },
  {
    id: 9,
    name: "VITAZZA",
    image: "https://www.dropbox.com/scl/fi/4u0lt9c41gqn0vv3yhrcv/IMG_1936.JPG?rlkey=660nbephy1ioyz2houmzma5sl&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/n0ni9q5b5m873n329u3cl/VITAZZA.pdf?rlkey=j1k5yt5sr0h8iquz1wkfye0hh&raw=1",
  },
  {
    id: 10,
    name: "STALAZ",
    image: "https://www.dropbox.com/scl/fi/66nzpvql4n1afavf12o42/IMG_1937.PNG?rlkey=tdrrbcxsb47xmotrhm22b4k40&raw=1",
    description: "Biologik faol qo'shimcha bolalar uchun",
    descriptionRu: "Биологически активная добавка для детей",
    pdf: "https://www.dropbox.com/scl/fi/s0zu2mps91m3exh99dp2n/STALAZ.pdf?rlkey=l92r8xedkn7aur61mao1yfm34&raw=1",
  },
];

export default function ProductsPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleShowAll = () => {
    navigate('/products');
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

        {/* SWIPER CAROUSEL */}
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
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              // Mobile (320px+)
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              // Small mobile (480px+)
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              // Tablet (640px+)
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Medium tablet (768px+)
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              // Large tablet (1024px+)
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              // Desktop (1280px+)
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 
                  group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 
                  transition-all duration-500 rounded-2xl sm:rounded-3xl" />

                  {/* PRODUCT IMAGE */}
                  <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4 sm:mb-5 md:mb-6 overflow-hidden 
                  rounded-xl sm:rounded-2xl bg-slate-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-all duration-500 
                      group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* PRODUCT INFO */}
                  <div className="relative text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 
                      group-hover:text-blue-600 transition-colors duration-300 px-2">
                        {product.name}
                      </h3>
                    </div>
                    
                    {/* DETAIL BUTTON */}
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
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br 
                  from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300" />
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
            transition-all duration-300 shadow-lg hover:shadow-xl hover:gap-3 sm:hover:gap-4
            group"
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

      {/* CUSTOM SWIPER STYLES */}
      <style jsx global>{`
        .products-swiper {
          padding: 20px 0 60px;
        }

        .products-swiper .swiper-slide {
          height: auto;
          display: flex;
        }

        .products-swiper .swiper-slide > div {
          width: 100%;
        }

        /* Navigation Buttons */
        .products-swiper .swiper-button-next,
        .products-swiper .swiper-button-prev {
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .products-swiper .swiper-button-next,
          .products-swiper .swiper-button-prev {
            width: 48px;
            height: 48px;
          }
        }

        .products-swiper .swiper-button-next:hover,
        .products-swiper .swiper-button-prev:hover {
          background: #2563eb;
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
          transform: scale(1.1);
        }

        .products-swiper .swiper-button-next:after,
        .products-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
          color: #1e293b;
        }

        @media (min-width: 640px) {
          .products-swiper .swiper-button-next:after,
          .products-swiper .swiper-button-prev:after {
            font-size: 20px;
          }
        }

        .products-swiper .swiper-button-next:hover:after,
        .products-swiper .swiper-button-prev:hover:after {
          color: white;
        }

        /* Hide navigation on very small screens */
        @media (max-width: 480px) {
          .products-swiper .swiper-button-next,
          .products-swiper .swiper-button-prev {
            display: none;
          }
        }

        /* Pagination */
        .products-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .products-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }

        @media (min-width: 768px) {
          .products-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
          }
        }

        .products-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          width: 24px;
          border-radius: 6px;
        }

        @media (min-width: 640px) {
          .products-swiper .swiper-pagination-bullet-active {
            width: 28px;
          }
        }

        @media (min-width: 768px) {
          .products-swiper .swiper-pagination-bullet-active {
            width: 32px;
          }
        }

        /* Touch-friendly spacing on mobile */
        @media (max-width: 640px) {
          .products-swiper {
            padding: 10px 0 50px;
          }
        }
      `}</style>
    </section>
  );
}