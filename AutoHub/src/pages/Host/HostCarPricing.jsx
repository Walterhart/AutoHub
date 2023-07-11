import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostCarPricing() {
  const {car} = useOutletContext()

  return (
    <h3 className="host-car-price">${car.price}</h3>
  )
}

export default HostCarPricing