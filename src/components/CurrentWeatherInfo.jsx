import React from "react";
import moment from "moment";

function CurrentWeatherInfo(props) {
  const { currentWeather } = props;
  const date = moment().format("MMM Do YY");
  const sunrise = moment
    .utc(currentWeather.sys.sunrise, "X")
    .add(3600, "seconds")
    .format("HH:mm a");
  const sunset = moment
    .utc(currentWeather.sys.sunset, "X")
    .add(3600, "seconds")
    .format("HH:mm a");

  return (
    <main className="currentWeather">
      <section className="currentWeather-left">
        <h3>
          {currentWeather.name}, {currentWeather?.sys?.country}
        </h3>
        <p>{date}</p>
        {currentWeather.weather && (
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="weather_image"
            />
            <div className="weather-degree">
              <h4>{Math.round(Number(currentWeather.main.feels_like))}</h4>
              <p>{currentWeather.weather[0].description}</p>
            </div>
          </div>
        )}
      </section>
      <section className="currentWeather-right">
        <div className="temp">
          <div>
            <p>{currentWeather.main.temp_max}</p>
            <span>High</span>
          </div>
          <div>
            <p>{currentWeather.main.temp_min}</p>
            <span>Low</span>
          </div>
        </div>
        <div className="wind-humidity">
          <div className="wind">
            <p>
              {currentWeather.wind.speed}
              <span>mph</span>
            </p> 
            <p>Wind</p>
          </div>
          <div className="humidity">
            <p>
              {currentWeather.main.humidity}
              <span>%</span>
            </p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="sunrise-sunset">
          <div>
            <span>{sunrise}</span>
            <p>sunrise </p>
          </div>
          <div>
            <span>{sunset}</span>
            <p>sunset</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default React.memo(CurrentWeatherInfo);

// `https://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`
