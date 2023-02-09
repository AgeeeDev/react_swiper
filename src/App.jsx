import { useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const images = [
    {
      id: 1,
      name: "Dog 1",
      url: "/images/dog1.jpg",
    },
    {
      id: 2,
      name: "Dog 2",
      url: "/images/dog2.jpg",
    },
    {
      id: 3,
      name: "Dog 3",
      url: "/images/dog3.jpg",
    },
    {
      id: 4,
      name: "Dog 4",
      url: "/images/dog4.jpg",
    },
    {
      id: 5,
      name: "Dog 5",
      url: "/images/dog5.jpg",
    },
  ];

  return (
    <div className='App'>
      <div className='container'>
        <Swiper
          className='mySwiper'
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {images.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img src={item.url} alt={item.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
