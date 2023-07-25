import React, { Suspense} from "react";
import { Link, useLocation, useLoaderData, Await, defer } from "react-router-dom";
import { getCar } from "../../api";
import LoadingSpinner from "../../components/LoadingSpinner";

export function loader({ params }) {
  return defer({car: getCar(params.id)}) ;
}

export default function CarDetail() {
  const location = useLocation();
  const dataPromise = useLoaderData();

  const search = location.state?.search || "";
  const brand = location.state?.brand || "all";
  const renderCar = (car) =>{

    return (
      <div className="car-detail-container">
          <div className="car-detail">
            <Link to={`..${search}`} relative="path" className="back-button">
              &larr;
              <span>
                Back to <span className="capitalize">{brand}</span> vehicles
              </span>
            </Link>
            <img src={car.imageUrl} />
            <i className={`car-brand ${car.brand} selected capitalize `}>{car.brand}</i>
            <h2 className="capitalize">{car.model}</h2>
            <p className="car-price">
              <span>${car.price}</span>
            </p>
            <p>{car.description}</p>
            <button className="link-button">Buy this car</button>
          </div> 
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner/>}>
    <Await resolve={dataPromise.car}>
      {renderCar}
    </Await>
    </Suspense>
  );
}
