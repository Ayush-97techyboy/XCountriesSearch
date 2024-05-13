import React, { useState, useEffect } from "react";
import styles from "./XCountriesS.module.css";

const Country = ({ flagUrl, name, altFlag }) => {
  return (
    <div className={styles.imgT}>
      <img
        src={flagUrl}
        alt={altFlag}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default function XCountriesSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  console.log({ countries });

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  return (
    <div className={styles.countryCard}>
      {/* <div> */}
      <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.countryCard}
        />
      {/* </div> */}
      <div className={styles.AppHead}>
        {/* <h1>Country Search by Initials</h1> */}
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      <div className={styles.countryCard}>
        {filteredCountries.map((country) => (
          <Country
            key={country.cca3}
            flagUrl={country.flags.png}
            name={country.name.common}
            altFlag={country.flags.alt}
          />
        ))}
      </div>
    </div>
  );
}
