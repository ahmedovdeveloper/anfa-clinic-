import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://media.licdn.com/dms/image/v2/D4D12AQExsi2anQaP3g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732303765788?e=2147483647&v=beta&t=hKZ-rx92iR6maBNJlgk00N3UvoEaHA6-eAr5TSUoPww",
  "https://media.licdn.com/dms/image/v2/D4D12AQExsi2anQaP3g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732303765788?e=2147483647&v=beta&t=hKZ-rx92iR6maBNJlgk00N3UvoEaHA6-eAr5TSUoPww",
  "https://media.licdn.com/dms/image/v2/D4D12AQExsi2anQaP3g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732303765788?e=2147483647&v=beta&t=hKZ-rx92iR6maBNJlgk00N3UvoEaHA6-eAr5TSUoPww",
];

export default function ImageSwiper() {
  return (
    <section>
      {/* mt-16 — компенсация fixed header */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-[70vh]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt="Clinic slide"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
