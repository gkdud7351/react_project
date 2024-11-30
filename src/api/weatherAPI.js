import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

const API_KEY = "5a2d0d6ee27b2707e7530e417fd5e430";

const weatherAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 검색한 도시의 날씨정보 가져오는 함수
export const searchWeather = async (city) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric", // 섭씨 온도 사용
      cnt: 30, // 5일치 데이터 요청
    },
  });
  return response.data;
};

// 현재 위치 날씨정보 가져오는 함수
export const fetchWeatherByLocation = async (latitude, longitude) => {
  const response = await axios.get(BASE_URL, {
    params: {
      lat: latitude,
      lon: longitude,
      appid: API_KEY,
      cnt: 30,
      units: "metric",
    },
  });
  return response.data;
};

export default weatherAPI;
