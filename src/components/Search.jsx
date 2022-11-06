import React from "react";

function Search({ searchCity, setSearchCity }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <input type="text" value={searchCity} onChange={handleChange} />
      <button>Search</button>
    </form>
  );
}

export default Search;
