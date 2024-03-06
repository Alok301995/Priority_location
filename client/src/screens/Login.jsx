import React, { useState } from "react";
import useHomeContext from "../context/HomeContext";
import logo from "../assets/logo.png";

const Login = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [invalidEmployeeId, setInvalidEmployeeId] = useState(false);
  const { userData, userDispatch } = useHomeContext();

  const handleLogin = async () => {
    // Implement your login logic here

    // fetch call the server using await
    const response = await fetch(`http://localhost:8000/auth/${employeeId}`);
    const data = await response.json();

    // check for validation
    // if the user is valid then move forward to check otp screen
    // if not prompt user to enter correct otp

    if (data !== undefined) {
      const isEmpIdValid = data["valid"];
      const userID = data["employee_id"];

      if (isEmpIdValid) {
        userDispatch({
          type: "SET_USER_ID",
          payload: userID,
        });
        userDispatch({
          type: "SET_EMP_ID_VALIDITY",
          payload: isEmpIdValid,
        });
        setInvalidEmployeeId(false);
      } else {
        setEmployeeId("");
        setInvalidEmployeeId(true);
      }
    } else {
      console.log("There is some error in the backend");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <div className="mb-4 flex flex-col items-center justify-center">
          <div className="flex items-center justify-between w-full mb-4">
            <img src={logo} alt="logo" className="object-contain h-[45px]" />
            <p className="font-medium text-lg ml-6 text-gray-800">
              Priority Location Planner
            </p>
          </div>
          <h2 className="text-2xl font-semibold w-full">Login</h2>
        </div>
        {invalidEmployeeId && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
            Invalid Employee ID. Please enter a valid Employee ID.
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="employeeId"
          >
            Employee ID
          </label>
          <input
            type="text"
            id="employeeId"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <button
          className={`w-full p-2 bg-blue-500 text-white rounded-md ${
            employeeId.trim() === ""
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-blue-600"
          }`}
          onClick={handleLogin}
          disabled={employeeId.trim() === ""}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
