import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Use for Swiper v10+
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      id: 1,
          image: "https://i.ibb.co.com/fGRSfFC/young-travelers-with-backpacks-smiling-giving-highfive-walking-canyon.jpg",
      
      title: "Mountain Trek",
      description: "Explore breathtaking mountain trails.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/hFjXLtC/vertical-shot-male-swimming-underwater-with-sky-background.jpg",
      title: "Ocean Dive",
      description: "Discover vibrant underwater worlds.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/6Bh26W2/backpacker-excursion.jpg",
      title: "Forest Expedition",
      description: "Immerse yourself in lush green forests.",
    },
  ];

  return (
      <div className="py-6">
           <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-[300px] sm:h-[500px] lg:h-[450px] object-contain"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="w-full h-full bg-cover bg-center "
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="text-white bg-black/50 h-full flex items-center justify-center">
              <h2 className="text-xl text-yellow-400 font-bold sm:text-3xl lg:text-5xl">{slide.title}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
   </div>
  );
};

export default Banner;
