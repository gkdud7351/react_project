import React from "react";
import "./css/WeatherCard.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./css/Slider.css";

const WeatherCard = ({ weather }) => {
  const formatDate = (date) => {
    const [today, time] = date.split(" ");
    const [year, month, day] = today.split("-");
    const [hour, minute, second] = time.split(":");
    return `${month}월 ${day}일 ${hour}시`;
  };

  return (
    <div className="locationBanner">
      <div style={{ zIndex: 1, width: "1000px" }}>
        <h4 style={{ color: "white" }}>
          Weather for <h1>{weather.city.name}</h1>
        </h4>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          scrollbar={{
            hide: false,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper"
        >
          <ul>
            {weather.list.map((day, index) =>
              index >= 2 ? (
                <SwiperSlide key={index}>
                  <p className="date">{formatDate(day.dt_txt)}</p>
                  <p className="temperature">{day.main.temp} °C</p>
                  <p className="weather">{day.weather[0].description}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="icon"
                  ></img>
                </SwiperSlide>
              ) : null
            )}
          </ul>
        </Swiper>
      </div>
    </div>
  );
};

export default WeatherCard;
