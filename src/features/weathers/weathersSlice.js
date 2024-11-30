// store/weatherSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchWeather } from "../../api/weatherAPI";
import { fetchWeatherByLocation } from "../../api/weatherAPI";

// 날씨 데이터를 가져오는 비동기 Thunk 생성
export const fetchSearchWeather = createAsyncThunk(
  "weather/fetchSearchWeather",
  async (city) => {
    const data = await searchWeather(city);
    return data;
  }
);

// 위치 기반 날씨 데이터를 가져오는 비동기 Thunk 생성
export const fetchLocationWeather = createAsyncThunk(
  "weather/fetchLocationWeather",
  async ({ latitude, longitude }) => {
    return await fetchWeatherByLocation(latitude, longitude); // API 호출
  }
);

// Slice 생성
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    currentLocationWeather: null,
    searchWeather: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.searchWeather = action.payload; // API 데이터 저장
      })
      .addCase(fetchSearchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchLocationWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocationWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.currentLocationWeather = action.payload;
      })
      .addCase(fetchLocationWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
