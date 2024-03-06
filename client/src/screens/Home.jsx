import React, { useEffect } from "react";
import SidePanel from "../components/SidePanel";
import MainPanel from "../components/MainPanel";
import Login from "./Login";
import OtpInput from "./Otp";
import useHomeContext from "../context/HomeContext";

function Home() {
  const { userData, userDispatch } = useHomeContext();
  // fetch data from LocalStorage isUserValid
  useEffect(() => {
    console.log("Home Component first useEffect   ");

    const user = JSON.parse(localStorage.getItem("user_auth"));
    console.log(user);
    if (user != null) {
      userDispatch({
        type: "SET_USER_VALIDITY",
        payload: user.isUserValid,
      });
      userDispatch({
        type: "SET_USER_ID",
        payload: user.userID,
      });
    } else {
      // if user is null that means we have to reverify the user
      userDispatch({
        type: "SET_USER_VALIDITY",
        payload: false,
      });
    }
  }, []);

  useEffect(() => {}, [
    userData.isUserValid,
    userData.isOtpValid,
    userData.isEmpIdValid,
  ]);

  if (userData.isUserValid) {
    return (
      <div className="home_container flex h-screen">
        <MainPanel />
        <SidePanel />
      </div>
    );
  } else {
    if (!userData.isEmpIdValid && !userData.isOtpValid) {
      return (
        <div className="home_container flex h-screen">
          <Login />
        </div>
      );
    } else {
      return (
        <div className="home_container flex h-screen">
          <OtpInput />
        </div>
      );
    }
  }
}

export default Home;
