import React from "react";

function ForeCast(props) {
  const { forecast } = props;

  console.log("forecast: ", forecast);

  const dailyOfForecast = forecast.list.map((item, index) => {
    const history =
      item.dt_txt.split(" ")[0].split("-").reverse()[0] +
      "." +
      item.dt_txt.split(" ")[0].split("-").reverse()[1];
    const hour = item.dt_txt.split(" ")[1].split(":")[0] + ":" + item.dt_txt.split(" ")[1].split(":")[1];
    return (
      <div className="weather-box" key={index}>
        <p>{history}</p>
        <p>{hour}</p>
        <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" />
        <p>{Math.round(item.main.temp)}{"\u2103"}</p>
      </div>
    );
  });

  return (
    <section className="forecast">
      <h5>forecaast </h5>
      <div>{dailyOfForecast}</div>
    </section>
  );
}

export default React.memo(ForeCast);
