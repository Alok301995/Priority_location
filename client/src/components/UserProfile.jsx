import React, { useState, useEffect, useRef } from "react";
import useHomeContext from "../context/HomeContext";

const UserProfileDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { userData, userDispatch, mapDispatch } = useHomeContext();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Perform logout actions
    // logout();

    // Clear the user data from the context
    // remove the user data from local storage
    userDispatch({
      type: "SET_USER_VALIDITY",
      payload: false,
    });
    userDispatch({
      type: "SET_USER_ID",
      payload: "",
    });

    userDispatch({
      type: "SET_EMP_ID_VALIDITY",
      payload: false,
    });
    userDispatch({
      type: "SET_OTP_VALIDITY",
      payload: false,
    });

    mapDispatch({
      type: "RESET_STATE",
    });

    localStorage.removeItem("user_auth");

    setDropdownOpen(false); // Close the dropdown after logout
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="mr-2">
          {/* <FontAwesomeIcon icon={faUser} className="text-lg" /> */}
        </div>
        <span>{"Alok Dhiman"}</span>
        <div className="ml-2">
          <svg
            className={`w-4 h-4 transition-transform duration-300 transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 w-48 bg-white border rounded-md shadow-lg">
          {/* Additional user information or actions */}
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={handleLogout}
          >
            {/* <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> */}
            Logout
          </button>
          {/* Add more items as needed */}
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
