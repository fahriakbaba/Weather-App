import './App.css';
import React from 'react';
import CurrentWeatherInfo from './components/CurrentWeatherInfo';
import Search from "./components/Search";
import Loading from './components/Loading';
import ForeCast from "./components/ForeCast"
 



function App() {
  const [currentWeather, setCurrentWeather] = React.useState({});
  const [forecast, setForecast] = React.useState([]);
  const [isVisible, setIsvisible] = React.useState(true);
  const [searchCity, setSearchCity] = React.useState("");

  React.useEffect(() => {
    getWeatherData("london");
  }, [])

  const getWeatherData = async (city) => {
    setIsvisible(true);
    const urlArrays = [fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=8ba5cc96c36f96b47b4d8afe09192f27&lang=en&q=${city}`), fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=8ba5cc96c36f96b47b4d8afe09192f27&cnt=40&units=metric&q=${city}`)];

    Promise.all(urlArrays.map(url => url.then(res => res.json()))).then(async(data) => {
      const currentWeatherAPI = await data[0];
      const forecastAPI = await data[1];
      if (data[0].cod === 200) {
        setCurrentWeather(currentWeatherAPI);
      }
      if (data[1].list.length > 0) {
        setForecast(forecastAPI);
      }
    });
    setTimeout(() => {
      setIsvisible(false);
    }, 2000);
    
  }

  if(isVisible) {
    return <Loading />
  }

  return (
    <div className="App">
      <div className="container">
        <h2>weather app</h2>
        <Search searchCity={searchCity} setSearchCity={setSearchCity} getWeatherData={getWeatherData} />
        <CurrentWeatherInfo currentWeather={currentWeather} />
        <ForeCast forecast={forecast} />
      </div>
    </div>
  );
}

export default App;


// `https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`

