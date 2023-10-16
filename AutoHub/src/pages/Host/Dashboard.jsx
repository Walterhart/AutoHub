import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostCars } from "../../api";
import { requireAuth } from "../../utils/AuthRequired";
import { Suspense } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { BsStarFill } from "react-icons/bs"

export async function loader({ request }) {
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  await requireAuth(request);
  return defer({ cars: getHostCars(userData.user.uid) });
}

function HostCars() {
  const dataPromise = useLoaderData();
  console.log(dataPromise);

  const renderCars = (cars) => {
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
              <span className="capitalize">{car.brand}</span>{" "}
              <span className="capitalize">{car.model}</span>
            </h3>
            <p>${car.price}</p>
          </div>
        </div>
      </Link>
    ));

    return (
      <div className="host-cars-list">
        <section>{hostCarsElement}</section>
      </div>
    );
  };

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section>
        <h1 className="host-dashboard-cars">Your listed cars</h1>
        <Suspense fallback={<LoadingSpinner />}>
          <Await resolve={dataPromise.cars}>{renderCars}</Await>
        </Suspense>
      </section>
    </>
  );
}

export default HostCars;
