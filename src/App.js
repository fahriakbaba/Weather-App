import './App.css';
import React from 'react';


const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const key = "8ba5cc96c36f96b47b4d8afe09192f27";

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

function App() {

  React.useEffect(() => {
    getWeatherData("sao paulo");
  } ,[])

  const getWeatherData = async(city) => {
    const url = `${baseURL}?q=${city}&units=metric&appid=${key}&lang=en`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h2>weather api</h2>
    </div>
  );
}

export default App;
