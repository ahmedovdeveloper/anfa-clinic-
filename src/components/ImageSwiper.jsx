import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import IMG1 from "../assets/s1.webp";
import IMG2 from "../assets/s2.webp";
import IMG3 from "../assets/s3.webp";
import "swiper/css";
import "swiper/css/pagination";
const images = [
  IMG1,
  IMG2,
  IMG3
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
