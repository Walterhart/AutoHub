import React, { useEffect } from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getCars } from "../../api";

export function loader({ params }) {
  return getCars(params.id);
}

export default function CarDetail() {
  const location = useLocation();
  const car = useLoaderData();

  const search = location.state?.search || "";
  const brand = location.state?.brand || "all";
  return (
    <div className="car-detail-container">
      {car ? (
        <div className="car-detail">
          <Link to={`..${search}`} relative="path" className="back-button">
            &larr;{" "}
            <span>
              Back to <span className="capitalize">{brand}</span> vehicles
            </span>
          </Link>
          <img src={car.imageUrl} />
          <i className={`car-brand ${car.brand} selected`}>{car.brand}</i>
          <h2>{car.model}</h2>
          <p className="car-price">
            <span>${car.price}</span>
          </p>
          <p>{car.description}</p>
          <button className="link-button">Buy this car</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
