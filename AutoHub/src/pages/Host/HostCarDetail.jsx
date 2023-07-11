import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams , NavLink} from 'react-router-dom'

function HostCarDetail() {
  const [car,setCar] = useState(null)
  const params = useParams()
  useEffect(()=>{
    fetch(`/api/host/cars/${params.id}`)
        .then(res=> res.json())
        .then(data=> setCar(data.cars))}
    ,[])

    if (!car) {
      return <h1>Loading...</h1>
    }

  return (
    <section>
    <Link
        to=".."
        relative='path'
        className="back-button"
    >&larr; <span>Back to all cars</span></Link>

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
      <NavLink to="." end className={({isActive})=>isActive? "active-link" : null }>Details</NavLink>
      <NavLink to="pricing" className={({isActive})=>isActive? "active-link" : null }>Price</NavLink>
      <NavLink to="images" className={({isActive})=>isActive? "active-link" : null }>Images</NavLink>
    </nav>
    <Outlet context={{car}}/>
    </div>
</section>
  )
}

export default HostCarDetail