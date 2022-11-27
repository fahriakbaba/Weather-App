import './App.css';
import React from 'react';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import Search from "./components/Search/Search";


const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const key = "8ba5cc96c36f96b47b4d8afe09192f27";

function App() {
  const [cityData, setCityData] = React.useState({});
  const [searchCity, setSearchCity] = React.useState("");
  const [weatherIcon, setWeatherIcon] = React.useState(null);

  React.useEffect(() => {
    getWeatherData("izmir");
  } ,[])

  const getWeatherData = async(city) => {
    const url = `${baseURL}?q=${city}&units=metric&appid=${key}&lang=en`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCityData(data);
      setWeatherIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    } catch (error) {
      console.log(error);
    }
  }
 

  return (
    <div className="App">
      <h2>weather </h2>
      <Search searchCity={searchCity} setSearchCity={setSearchCity} getWeatherData={getWeatherData} />
      <WeatherInfo icon={weatherIcon} cityInfo={cityData} />
    </div>
  );
}

export default App;




/*
https://api.openweathermap.org/data/2.5/weather?q=londra&units=metric&appid=8ba5cc96c36f96b47b4d8afe09192f27&lang=tr

 ...
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
    ],
    ...
https://openweathermap.org/img/wn/{10}@2x.png
*/