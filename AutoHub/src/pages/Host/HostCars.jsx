
import { Link, useLoaderData } from "react-router-dom";
import { getHostCars } from "../../api";
import { requireAuth } from "../../utils.js/AuthRequired";


export async function loader(){
  await requireAuth()
  return getHostCars()
}

function HostCars() {
  const cars = useLoaderData()

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

          <section>{hostCarsElement}</section>
      </div>
    </section>
  );
}

export default HostCars;
