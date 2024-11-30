// 검색결과
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchWeather } from "../features/weathers/weathersSlice";
import WeatherCard from "../components/WeatherCard";
import { Wrap, Main } from "../styles/StyleComponent";
import Banner from "../components/Banner";

function SearchWeather() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");

  const dispatch = useDispatch();
  const { searchWeather, loading, error } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    if (city) {
      dispatch(fetchSearchWeather(city));
    }
  }, [city, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  return (
    <Wrap>
      <Main>
        <Banner></Banner>
        <div>{searchWeather && <WeatherCard weather={searchWeather} />}</div>
      </Main>
    </Wrap>
  );
}

export default SearchWeather;
