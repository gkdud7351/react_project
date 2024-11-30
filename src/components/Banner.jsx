import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./css/Banner.css";

function Banner() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== "") {
      navigate(`/weather?city=${city}`);
    }
  };

  return (
    <div className="banner">
      <TextField
        sx={{ width: 600, backgroundColor: "white" }}
        id="outlined-basic"
        label="City"
        variant="outlined"
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        sx={{ height: 54, marginLeft: 1 }}
        variant="contained"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}

export default Banner;
