import React from "react";
import { useOutletContext } from "react-router-dom";

function HostCarImages() {
  const { car } = useOutletContext();

  return <img src={car.imageUrl} className="host-car-detail-image" />;
}

export default HostCarImages;
