import React, { useState, useEffect, useRef } from "react";
import useHomeContext from "../context/HomeContext";
import logo from "../assets/logo.png";

const OtpInput = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([...Array(6)].map(() => React.createRef()));
  const { userData, userDispatch } = useHomeContext();
  const [isOtpVerificationFailed, setIsOtpVerificationFailed] = useState(false);

  useEffect(() => {
    inputRefs.current[0].current.focus();
  }, []);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < otp.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index) => {
    if (index > 0) {
      inputRefs.current[index - 1].current.focus();
    }

    const newOTP = [...otp];
    newOTP[index] = "";
    setOtp(newOTP);

    setIsOtpVerificationFailed(false);
  };

  const handleVerify = async () => {
    // Implement your OTP verification logic here
    const response = await fetch(
      `http://localhost:8000/auth/otp/${otp.join("")}`
    );
    const data = await response.json();

    if (data !== undefined || data !== null) {
      const isOtpVerified = data["valid"];
      if (isOtpVerified) {
        userDispatch({
          type: "SET_USER_VALIDITY",
          payload: true,
        });
        localStorage.setItem(
          "user_auth",
          JSON.stringify({
            userID: userData.userID,
            isUserValid: true,
          })
        );
      } else {
        setIsOtpVerificationFailed(true);
        console.log("Otp not valid");
      }
    } else {
      console.log("There is some error in the backend");
    }
  };

  const isVerifyButtonEnabled = otp.every((digit) => digit !== "");

  return (
    <div className="flex w-full items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <div className="flex items-center justify-between w-full mb-4">
          <img src={logo} alt="logo" className="object-contain h-[45px]" />
          <p className="font-medium text-lg ml-6 text-gray-800">
            Priority Location Planner
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-6">Enter OTP</h2>
        {isOtpVerificationFailed && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mb-4">
            Invalid OTP. Please enter a valid OTP.
          </div>
        )}
        <div className="flex justify-center space-x-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-input-${index}`}
              className="w-12 h-12 text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  handleKeyDown(index);
                }
              }}
              ref={inputRefs.current[index]}
            />
          ))}
        </div>
        <button
          className={`w-full mt-6 p-3 bg-blue-500 text-white rounded-md
          ${
            !isVerifyButtonEnabled
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-blue-600"
          }`}
          onClick={handleVerify}
          disabled={!isVerifyButtonEnabled}
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default OtpInput;
