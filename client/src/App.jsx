import { useState, useEffect, useReducer } from "react";
import "./App.css";
import Home from "./screens/Home";
import { HomeContextProvider } from "./context/HomeContext";
import { mapReducer, userReducer } from "./reducers/reducer";

function App() {
  const userState = {
    userID: "",
    isEmpIdValid: false,
    isOtpValid: false,
    isUserValid: false,
  };

  const mapState = {
    cityName: "",
    showGrids: false,
    showCustomerDensity: false,
    showRecommendedLocation: false,
  };

  const [mapData, mapDispatch] = useReducer(mapReducer, mapState);
  const [userData, userDispatch] = useReducer(userReducer, userState);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <HomeContextProvider
        value={{
          mapData,
          mapDispatch,
          userData,
          userDispatch,
        }}
      >
        <Home />
      </HomeContextProvider>
    </div>
  );
}

export default App;
