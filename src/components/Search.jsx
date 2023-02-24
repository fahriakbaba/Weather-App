import React from "react";
 

function Search({ searchCity, setSearchCity, getWeatherData }) {
  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(searchCity); 
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={searchCity} onChange={handleChange} placeholder="Enter your city!" />
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
} 

export default Search;
