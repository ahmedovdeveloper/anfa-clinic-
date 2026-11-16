import React from "react";
import { Users } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";

// Массив партнеров
const partnersData = [
  {
    id: 1,
    name: "Micros Pac",
    logo: "/micros.svg",
  },
  {
    id: 2,
    name: "Узбекистон Республикаси Согликни саклаш вазирлиги",
    logo: "/uzb.webp",
  },
  {
    id: 3,
    name: "o'zstandart agentligi",
    logo: "/stz.webp",
  },
  {
    id: 5,
    name: "o'zbekiston savdo sanoat palatasi",
    logo: "/ozdi.webp",
  },
  {
    id: 88,
    name: "oz lidep",
    logo: "/uzb2.webp",
  },
];

const PartnerSlide = ({ partner }) => {
  return (
    <div className="partner-slide group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[280px]">
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-12">
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white text-lg font-bold line-clamp-2">
              {partner.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const Partners = () => {
  const { t } = useTranslation();

  return (
    <>
      <style>{`
      /* ===== SWIPER NAVIGATION (OUR STYLE) ===== */
.partners-swiper .swiper-button-prev,
.partners-swiper .swiper-button-next {
  width: 52px;
  height: 52px;
  background: #ffffff;
  font-size:10px;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  transition: all 0.35s ease;
}

.swiper-button-next svg {
        width:30px;
        height:30px;
}


.swiper-button-prev svg {
        width:30px;
        height:30px;
}
.partners-swiper .swiper-button-prev {
  left: -10px;
}

.partners-swiper .swiper-button-next {
  right: -10px;
}

.partners-swiper .swiper-button-prev::after,
.partners-swiper .swiper-button-next::after {
  font-size: 18px;
  font-weight: 700;
  color: #2563eb; /* medical blue */
}

/* Hover */
.partners-swiper .swiper-button-prev:hover,
.partners-swiper .swiper-button-next:hover {
  background: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 18px 45px rgba(37, 99, 235, 0.35);
}

.partners-swiper .swiper-button-prev:hover::after,
.partners-swiper .swiper-button-next:hover::after {
  color: #ffffff;
}

/* Disabled */
.partners-swiper .swiper-button-disabled {
  opacity: 0.35;
  pointer-events: none;
}
/* ===== PAGINATION ===== */
.partners-swiper .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #cbd5e1;
  opacity: 1;
  transition: all 0.3s ease;
}

.partners-swiper .swiper-pagination-bullet-active {
  width: 28px;
  border-radius: 999px;
  background: #2563eb;
}

      `}</style>

      <section className="partners-section relative py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-6xl mx-auto mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-6">
              <Users size={16} />
              {t("homeSections.partnersBadge")}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">
                {t("homeSections.partnersTitle")}
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("homeSections.partnersSubtitle")}
            </p>
          </div>

          {/* Partners Swiper */}
          <div className="max-w-7xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              className="partners-swiper pb-16"
            >
              {partnersData.map((partner) => (
                <SwiperSlide key={partner.id}>
                  <PartnerSlide partner={partner} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;