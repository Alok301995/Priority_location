import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";
import { FiUser } from "react-icons/fi";
import useHomeContext from "../context/HomeContext";

function Header() {
  return (
    <div className="flex border-b-[1px] border-b-gray-200 items-center h-full justify-between shadow-md ">
      <div className="flex items-center ">
        <img src={logo} alt="logo" className="ml-2 object-contain h-[45px]" />
        <p className="font-medium text-lg ml-6 text-gray-800">
          Priority Location Planner
        </p>
      </div>
      <div className="flex flex-1 justify-end items-center ">
        <div className="mx-1 ">
          <Searchbar />
        </div>
        <div className="mx-2 cursor-pointer flex items-center border-[1px] border-gray-300 py-2 px-3 rounded-md ">
          <FiUser className="text-gray-800 mx-1" />
          <p className=" text-gray-800 text-sm font-medium mx-1 ">User</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
