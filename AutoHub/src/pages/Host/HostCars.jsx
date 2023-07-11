import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HostCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/api/host/cars")
      .then((res) => res.json())
      .then((data) => setCars(data.cars));
  }, []);

  const hostCarsElement = cars.map((car) => (
    <Link
      to={`/host/cars/${car.id}`}
      key={car.id}
      className="host-car-link-wrapper"
    >
      <div className="host-car-single" key={car.id}>
        <img src={car.imageUrl} alt={`Photo of ${car.model}`} />
        <div className="host-car-info">
          <h3>
            {car.brand} {car.model}
          </h3>
          <p>${car.price}</p>
        </div>
      </div>
    </Link>
  ));
  
  return (
    <section>
      <h1 className="host-cars-title">Your listed cars</h1>
      <div className="host-cars-list">
        {cars.length > 0 ? (
          <section>{hostCarsElement}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}

export default HostCars;
