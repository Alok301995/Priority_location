import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";
import { FiUser } from "react-icons/fi";
import useHomeContext from "../context/HomeContext";

function Header() {
  const { userName } = useHomeContext();

  return (
    <div className="flex border-b-[1px] border-b-gray-200 items-center h-full justify-between">
      <div className="flex items-center ">
        <img src={logo} alt="logo" className="ml-2 object-contain h-[45px]" />
        <p className="font-medium text-lg ml-6 text-gray-800">
          Priority Location Planner
        </p>
      </div>
      <div className="flex flex-1 justify-end items-center ">
        <div className="mx-1  ">
          <Searchbar />
        </div>
        <div className="mx-2 cursor-pointer flex items-center">
          <p className=" text-gray-800 text-sm mx-1 ">{userName}</p>
          <FiUser className="text-2xl text-gray-800 ml-1" />
        </div>
      </div>
    </div>
  );
}

export default Header;
