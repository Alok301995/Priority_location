import React, { useState, useEffect } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import useHomeContext from "../context/HomeContext";
import { cityList } from "../services/Constants";

export const DropdownComp = ({ kpi }) => {
  const [show, setShow] = useState(false);
  const { mapData, mapDispatch } = useHomeContext();

  // Dispatch Handler for Customer Density

  return (
    <div className="my-1">
      <div
        className={`group flex justify-between items-center px-4 py-2  rounded-md cursor-pointer transition-all ${
          show ? "bg-[#2596be] " : "bg-slate-200 hover:bg-[#2596be] "
        }`}
        onClick={() => {
          if (kpi === "Customer Density") {
            mapDispatch({
              type: "SET_CUSTOMER_DENSITY",
              payload: !mapData.showCustomerDensity,
            });
          }
          setShow((prev) => !prev);
        }}
      >
        <p
          className={`ml-2 font-medium text-gray-800 transition-colors duration-300 ${
            show ? "     text-white " : "group-hover:text-white"
          }  `}
        >
          {kpi}
        </p>

        {show ? (
          <FiChevronUp className="cursor-pointer mr-2" />
        ) : (
          <FiChevronDown className="cursor-pointer mr-2" />
        )}
      </div>

      {show && (
        <div className="flex flex-col transition-all ">
          <ul className="bg-white border-[1px] border-gray-100 rounded-sm shadow-sm">
            <li className="flex items-center  p-2 hover:bg-gray-100">
              <input type="checkbox" className="" />
              <div className="flex  flex-1 items-center justify-between ">
                <span className="mx-2 text-gray-700 text-md">0% - 25%</span>
                <div className="h-[15px] w-[15px] bg-red-400 mr-2"></div>
              </div>
            </li>
            <li className="flex  p-2 hover:bg-gray-100">
              <input type="checkbox" className="" />
              <div className="flex  flex-1 items-center justify-between ">
                <span className="mx-2 text-gray-700 text-md ">25% - 50%</span>
                <div className="h-[15px] w-[15px] bg-red-400 mr-2"></div>
              </div>
            </li>
            <li className="flex  p-2 hover:bg-gray-100">
              <input type="checkbox" className="" />
              <div className="flex  flex-1 items-center justify-between ">
                <span className="mx-2 text-gray-700 text-md ">50% - 75%</span>
                <div className="h-[15px] w-[15px] bg-red-400 mr-2"></div>
              </div>
            </li>
            <li className="flex  p-2 hover:bg-gray-100">
              <input type="checkbox" className="" />
              <div className="flex  flex-1 items-center justify-between ">
                <span className="mx-2 text-gray-700 text-md ">75% - 100%</span>
                <div className="h-[15px] w-[15px] bg-red-400 mr-2"></div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

function Dropdown() {
  const { mapData, mapDispatch } = useHomeContext();

  useEffect(() => {}, [mapData.cityName]);

  const handleCityChange = (event) => {
    const cityName = event.target.value;
    mapDispatch({ type: "SET_CITY", payload: cityName });
  };

  return (
    <div className="w-full">
      <select
        name="Select City"
        id="city"
        className="border-[1px] outline-none border-gray-300 bg-white h-10 w-full px-5 pr-8 rounded-md text-sm focus:border-blue-500 focus:focus: transition-all duration-300 "
        onChange={handleCityChange}
        value={mapData.cityName}
      >
        <option value="" disabled>
          Select City
        </option>
        {cityList.length > 0 &&
          cityList.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Dropdown;
