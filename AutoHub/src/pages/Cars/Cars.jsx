import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);

  const brandFilter = searchParams.get("brand");

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data.cars));
  }, []);

  const displayCars = brandFilter
    ? cars.filter((car) => car.brand === brandFilter)
    : cars;

  const carElements = displayCars.map((car) => (
    <div key={car.id} className="car-tile capitalize">
      <Link to={car.id}>
        <img src={car.imageUrl} />
        <div className="car-info">
          <h3>{car.model}</h3>
          <p>${car.price}</p>
        </div>
        <i className={`car-brand ${car.brand} selected `}>{car.brand}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="car-list-container">
      <h1>Explore our cars options</h1>
      <div className="car-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("brand", "ford")}
          className={`car-brand Ford ${
            brandFilter === "ford" ? "selected" : ""
          }`}
        >
          Ford
        </button>
        <button
          onClick={() => handleFilterChange("brand", "tesla")}
          className={`car-brand Tesla ${
            brandFilter === "tesla" ? "selected" : ""
          }`}
        >
          Tesla
        </button>
        <button
          onClick={() => handleFilterChange("brand", "toyota")}
          className={`car-brand Toyota ${
            brandFilter === "toyota" ? "selected" : ""
          }`}
        >
          Toyota
        </button>
        {brandFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className="car-brand clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="car-list">{carElements}</div>
    </div>
  );
}
