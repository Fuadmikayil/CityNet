"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    title: "Magarsus",
    text: "Türkiyənin ən tanınmış seriallarını CityNet-lə izlə!",
    image: "/wrapper1.webp",
  },
  {
    title: "CityNet korporativ müştərilər üçün tarifləri yenilədi",
    text: "Korporativ tariflərini həm qiymət, həm də sürət baxımından daha sərfəli etdik.",
    image: "/wrapper2.webp",
  },
];

const Carousel = () => {
    return (
      <div className="relative mt-4"> {/* <== Yuxarıdan məsafə verildi */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} inline-block w-[60px] h-[6px] rounded-full mx-1 transition-all bg-gray-300 swiper-pagination-bullet"></span>`,
          }}
          loop={true}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full max-w-[90rem] mx-auto bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch justify-between shadow-md h-auto md:h-[400px] lg:h-[440px] relative">
                {/* Sol tərəf - Yazı və fon */}
                <div className="relative md:w-1/2 w-full flex items-center p-6 md:p-10 bg-[#B72C48] text-white">
                  <div className="absolute inset-0 z-0 [clip-path:ellipse(100%_100%_at_100%_50%)] bg-[#B72C48]" />
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight md:leading-snug">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base">{slide.text}</p>
                  </div>
                </div>
  
                {/* Sağ tərəf - Şəkil */}
                <div className="md:w-1/2 w-full h-[220px] md:h-auto">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* Pagination nöqtələri */}
        <div className="swiper-pagination mt-6 flex justify-center items-center" />
      </div>
    );
  };
  

export default Carousel;
