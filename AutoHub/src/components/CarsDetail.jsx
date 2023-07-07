import React from "react"
import { useParams } from "react-router-dom"

export default function CarDetail() {
    const params = useParams()
    const [car, setCar] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/cars/${params.id}`)
            .then(res => res.json())
            .then(data => setCar(data.cars))
    }, [params.id])

    return (
        <div className="car-detail-container">
            {car ? (
                <div className="car-detail">
                    <img src={car.imageUrl} />
                    <i className={`car-brand ${car.brand} selected`}>{car.brand}</i>
                    <h2>{car.model}</h2>
                    <p className="car-price"><span>${car.price}</span></p>
                    <p>{car.description}</p>
                    <button className="link-button">Buy this car</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}