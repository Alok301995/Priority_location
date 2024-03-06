import React, { useState } from "react";
import Map from "./Map";
import useHomeContext from "../context/HomeContext";

function MapView() {
  const { userData } = useHomeContext();

  return (
    <div className="h-full bg-gray-100">
      <Map />
    </div>
  );
}

export default MapView;
