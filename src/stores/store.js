import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weathers/weathersSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer, // weather slice 리듀서를 등록
  },
});

export default store;
