import React from "react";
import styles from "./Search.module.css";

function Search({ searchCity, setSearchCity, getWeatherData }) {
  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(searchCity); 
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.text} type="text" value={searchCity} onChange={handleChange} placeholder="Enter your city!" />
      <button className={styles.btn} onClick={handleSubmit}>Search</button>
    </form>
  );
}

export default Search;
