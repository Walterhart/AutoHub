
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getHostCars } from "../../api";
import { requireAuth } from "../../utils.js/AuthRequired";
import { Suspense } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";


export async function loader({request}){
  const user = localStorage.getItem("user")
  const userData = JSON.parse(user);
  await requireAuth(request)
  return defer({cars: getHostCars(userData.user.uid)}) 
}

function HostCars() {
  const dataPromise = useLoaderData()
  console.log(dataPromise)

  const renderCars = (cars) =>{
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
              <span className="capitalize">{car.brand}</span> <span className="capitalize">{car.model}</span>
            </h3>
            <p>${car.price}</p>
          </div>
        </div>
      </Link>
    ));

    return(
    <div className="host-cars-list">
    <section>{hostCarsElement}</section>
    </div>
    )
  }
 
  return (
    <section>
      <h1 className="host-cars-title">Your listed cars</h1>
      <Suspense fallback={<LoadingSpinner/>}>
      <Await  resolve={dataPromise.cars}>
       {renderCars}
      </Await>
      </Suspense>
    </section>
  );
}

export default HostCars;
