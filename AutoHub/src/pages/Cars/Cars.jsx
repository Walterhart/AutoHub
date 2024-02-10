import React, { Suspense, useEffect, useState } from "react";
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import { getCars } from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";

export function loader() {
  return defer({ cars: getCars() });
}

export default function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();
  const brandFilter = searchParams.get("brand");

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

  function renderCarElements(cars) {
    const displayedCars = brandFilter
      ? cars.filter((car) => car.brand === brandFilter)
      : cars;

    const carElements = displayedCars.map((car) => (
      <div key={car.id} className="car-tile capitalize">
        <Link
          to={car.id}
          state={{
            search: `?${searchParams.toString()}`,
            brand: brandFilter,
          }}
        >
          <img src={car.imageUrl} />
          <div className="car-info">
            <h3>{car.model}</h3>
            <p>${car.price}</p>
          </div>
          <i className={`car-brand ${car.brand} selected `}>{car.brand}</i>
        </Link>
      </div>
    ));
    return (
      <>
        <div className="car-list-filter-buttons">
          <button
            onClick={() => handleFilterChange("brand", "ford")}
            className={`car-brand ford ${
              brandFilter === "ford" ? "selected" : ""
            }`}
          >
            Ford
          </button>
          <button
            onClick={() => handleFilterChange("brand", "tesla")}
            className={`car-brand tesla ${
              brandFilter === "tesla" ? "selected" : ""
            }`}
          >
            Tesla
          </button>
          <button
            onClick={() => handleFilterChange("brand", "toyota")}
            className={`car-brand toyota ${
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
      </>
    );
  }
  return (
    <div className="car-list-container">
      <h1>Explore our cars options</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={dataPromise.cars}>{renderCarElements}</Await>
      </Suspense>
    </div>
  );
}
