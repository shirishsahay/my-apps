import React, { useEffect, useState } from "react";

const WeatherApp = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  return (
    <div className="App">
      {lat}
      <br />
      {long}
    </div>
  );
};

export default WeatherApp;
