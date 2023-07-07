import React from "react"
import { Link } from "react-router-dom"

export default function Cars() {
    const [cars, setCars] = React.useState([])
    React.useEffect(() => {
        fetch("/api/cars")
            .then(res => res.json())
            .then(data => setCars(data.cars))
    }, [])
    console.log(cars)

    const carsElements = cars.map(cars => (
        <div key={cars.id} className="car-tile">
            <Link to={`/cars/${cars.id}`}>
                <img src={cars.imageUrl} />
                <div className="car-info">
                    <h3>{cars.model}</h3>
                    <p>${cars.price}</p>
                </div>
                <i className={`car-brand ${cars.brand} selected`}>{cars.brand}</i>
            </Link>
        </div>
    ))

    return (
        <div className="car-list-container">
            <h1>Explore our cars options</h1>
            <div className="car-list">
                {carsElements}
            </div>
        </div>
    )
}