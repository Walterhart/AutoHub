import {
  Link,
  Outlet,
  NavLink,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getCar, getHostCars } from "../../api";
import { requireAuth } from "../../utils/AuthRequired";
import { Suspense } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

export async function loader({ params, request }) {
  await requireAuth({ request });
  return defer({ car: getCar(params.id) });
}
function HostCarDetail() {
  const dataPromise = useLoaderData();

  const renderCar = (car) => {
    return (
      <section>
        <div className="host-car-detail-layout-container">
          <div className="host-car-detail">
            <img src={car.imageUrl} />
            <div className="host-car-detail-info-text">
              <i className={`car-brand ${car.brand} selected capitalize`}>
                {car.brand}
              </i>
              <h3 className="capitalize">{car.model}</h3>
              <h4>${car.price}</h4>
            </div>
          </div>

          <nav className="host-car-detail-nav">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Price
            </NavLink>
            <NavLink
              to="images"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Images
            </NavLink>
          </nav>
          <Outlet context={{ car }} />
        </div>
      </section>
    );
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all cars</span>
      </Link>
      <Suspense fallback={<LoadingSpinner />}>
        <Await resolve={dataPromise.car}>{renderCar}</Await>
      </Suspense>
    </section>
  );
}

export default HostCarDetail;
