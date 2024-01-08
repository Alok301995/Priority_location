import React, { useState, useEffect } from "react";
import OptionPanel from "../components/OptionPanel";
import gridIcon from "../assets/grid.png";
import useHomeContext from "../context/HomeContext";
import Dropdown from "./Dropdown";
import Table from "./Table";

function ServiceLocationsButton() {
  return (
    <div className="group p-2  border-b-[1px] border-b-gray-200 cursor-pointer transition-all ">
      <div className="bg-slate-200  hover:bg-[#2596be] p-2 rounded-md transition-all">
        <p className="font-medium text-gray-800 text-center transition-colors duration-300 group-hover:text-white">
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

  const tableHeaders = ["KPI Name", "Value"];
  const tableData = [
    ["Customer Density", "100"],
    ["Infra Score", "75"],
    ["Serice Score", "75"],
    ["CAGR", "75"],
    ["Similarity Score", "75"],
    ["Proximity Score", "75"],

    // Add more rows as needed
  ];

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
      <div className="flex flex-1 justify-center overflow-scroll">
        {/* show all KPIs data in table  */}

        <Table headers={tableHeaders} data={tableData} />
      </div>
    </div>
  );
}

export default SidePanel;
