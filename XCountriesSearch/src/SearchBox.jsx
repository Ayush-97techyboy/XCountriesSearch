import React from "react";
export default function SearchBox() {
  //. Property and Its handler

  const handleSearch = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error searching countries:', error));
  };

  return (
    <>
      <div>
        <h1>Country Search</h1>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
}
