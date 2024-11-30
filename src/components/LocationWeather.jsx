import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocationWeather } from "../features/weathers/weathersSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "./css/Slider.css";
import "./css/LocationWeather.css";

const LocationWeather = () => {
  const dispatch = useDispatch();
  const { currentLocationWeather, loading, error } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    // 사용자 위치를 가져오는 함수
    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchLocationWeather({ latitude, longitude }));
        },
        (err) => {
          console.error("Error fetching location:", err);
        }
      );
    };

    fetchLocation();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  const formatDate = (date) => {
    const [today, time] = date.split(" ");
    const [year, month, day] = today.split("-");
    const [hour, minute, second] = time.split(":");
    return `${month}월 ${day}일 ${hour}시`;
  };

  return (
    <div className="locationBanner">
      {currentLocationWeather && (
        <div style={{ zIndex: 1, width: "1000px" }}>
          <h4 style={{ color: "white" }}>
            Your current location<p>{currentLocationWeather.city.name}</p>
          </h4>

          <Swiper
            slidesPerView={5}
            spaceBetween={20}
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
              {currentLocationWeather.list.map((day, index) =>
                index >= 2 ? (
                  <SwiperSlide key={index}>
                    <p className="date">{formatDate(day.dt_txt)}</p>
                    <p className="temperature" style={{ fontWeight: 600 }}>
                      {day.main.temp} °C
                    </p>
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
      )}
    </div>
  );
};

export default LocationWeather;
