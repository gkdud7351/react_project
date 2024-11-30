import LocationWeather from "../components/LocationWeather";
import Banner from "../components/Banner";
import { Wrap, Main } from "../styles/StyleComponent";
import "../styles/common.css";

function Home() {
  return (
    <Wrap>
      <Main>
        <Banner></Banner>
        <LocationWeather />
      </Main>
    </Wrap>
  );
}

export default Home;
