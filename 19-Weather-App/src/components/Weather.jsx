import { useEffect, useState } from "react";

function Weather({ city }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState("");

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=918a1088506f543dc3766145f4261eac`;

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetch(api)
        .then((res) => res.json()) // Corrected here
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false); // Ensure loading is set to false on error
        });
    }
  }, [city]);

  if (loading)
    return (
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  if (!weather) return null;

  return (
    <>
      <div className="text-center" style={{ backgroundColor: "yellow" }}>
        <h2>Weather in {city}</h2>
        <p> {weather.weather[0].description}</p>
        <p> {weather.weather[0].icon}</p>
        <p> {weather.coord.lon}</p>
        <p>{weather.coord.lat}</p>
        <p>{Math.floor(weather.main.temp - 273.15)}°C</p>
        <p>{weather.main.feels_like}</p>
        <p>{weather.main.pressure}</p>
        <p>{weather.main.humidity}</p>
        <p>{weather.wind.speed}</p>
        <p>{weather.sys.country}</p>
        <p>{weather.sys.sunrise}</p>
        <p>{weather.timezone}</p>
        <p>{weather.sys.sunset}</p>
      </div>
    </>
  );
}

export default Weather;
