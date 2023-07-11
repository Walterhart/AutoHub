import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostCarInfo() {

  const {car} = useOutletContext()

  return (
     <section className="host-car-detail-info">
            <h4>Brand: <span>{car.brand} </span></h4>
            <h4>Model: <span>{car.model} </span></h4>
            <h4>Category: <span>{car.type} </span></h4>
            <h4>Description: <span>{car.description} </span></h4>
      </section>
  )
}

export default HostCarInfo