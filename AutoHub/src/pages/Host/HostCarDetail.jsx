import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getHostCars } from "../../api";

export function loader({ params }) {
  return getHostCars(params.id);
}

function HostCarDetail() {
  console.log(useLoaderData());
  const car = useLoaderData();

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all cars</span>
      </Link>

      <div className="host-car-detail-layout-container">
        <div className="host-car-detail">
          <img src={car.imageUrl} />
          <div className="host-car-detail-info-text">
            <i className={`car-brand ${car.brand} selected`}>{car.brand}</i>
            <h3>{car.model}</h3>
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
}

export default HostCarDetail;
