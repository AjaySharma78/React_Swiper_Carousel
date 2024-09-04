import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";
import {Autoplay, Navigation, Pagination } from "swiper/modules";

function Carousel({ onClose, slides }) {
  const ref = React.useRef(null);
  console.log(slides);

  const swiperParams = {
    width: 1550,
    slidesPerView: 2,
    spaceBetween: 50,
    centeredSlides: true,
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    speed: 1000,
    navigation: true,
    modules: [Pagination, Navigation,Autoplay],
    className: "mySwiper h-4/5 cursor-pointer",
  };

  const closeModel = (e) => {
    if (e.target === ref.current) {
      onClose();
    }
  };

  return (
    <>
      <div
        ref={ref}
        onClick={closeModel}
        className=" fixed inset-0 bg-opacity-30  backdrop-blur-sm flex justify-center items-center"
      >
        <Swiper {...swiperParams}>
          {slides.map((data, index) => (
            <SwiperSlide
              key={index}
              className="relative flex rounded-2xl overflow-hidden"
            >
              <img className="rounded-l-2xl " src={data.img} />
              <div className="text-black h-full px-7 py-10 z-10">
                <div className="w-full text-end">
                  <button
                    onClick={onClose}
                    className=" text-xl text-black px-3 py-1 bg-black/5 hover:bg-black/10 transition-all duration-700 rounded-sm"
                  >
                    x
                  </button>
                </div>
                <h1 className="text-left text-2xl font-bold ">{data.title}</h1>
                <div className="overflow-y-auto h-4/5 custom-scrollbar">
                  <h3 className="text-left text-sm my-2">{data.description}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
