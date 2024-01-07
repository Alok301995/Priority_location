import React, { useState, useEffect } from "react";
import OptionPanel from "../components/OptionPanel";
import gridIcon from "../assets/grid.png";
import useHomeContext from "../context/HomeContext";
import Dropdown from "./Dropdown";

function ServiceLocationsButton() {
  return (
    <div className="group p-2 my-1 border-b-[1px] border-b-gray-200 cursor-pointer transition-all ">
      <div className="bg-slate-100   hover:bg-blue-200 p-2 rounded-md transition-all">
        <p className="font-medium text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
          Recommended Locations
        </p>
      </div>
    </div>
  );
}

function Header({ icon }) {
  // const { mapData, mapDispatch } = useHomeContext();
  // useEffect(() => {}, [mapData.showGrids]);
  return (
    <div className="flex w-full mx-2 ">
      <Dropdown />
    </div>
  );
}

function SidePanel() {
  const { mapData } = useHomeContext();

  useEffect(() => {}, [mapData.showCustomerDensity]);

  return (
    <div className="section_2 flex flex-col w-[20%] border-l-[1px] border-l-gray-200 ">
      <div className="flex items-center border-b-[1px] border-b-gray-200 h-[8%]">
        <Header icon={gridIcon} />
      </div>
      <div className="Kpis_panel overflow-auto">
        <OptionPanel />
        <ServiceLocationsButton />
      </div>

      <p>{mapData.showCustomerDensity ? "Yes" : "No"}</p>
    </div>
  );
}

export default SidePanel;
