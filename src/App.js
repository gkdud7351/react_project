import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SearchWeather from "./pages/SearchWeather";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/weather" element={<SearchWeather />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
