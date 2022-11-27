import React from "react";

function WeatherInfo(props) {
  const { icon, cityInfo } = props;

  console.log("icon: ", icon);
  console.log("city infos: ", cityInfo);

  return (
    <div>
      <h3>{cityInfo.name}</h3>
      <img src={icon} alt="weather-icon" />
    </div>
  );
}

export default React.memo(WeatherInfo);
