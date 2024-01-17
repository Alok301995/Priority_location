import { useState, useEffect, useReducer } from "react";
import "./App.css";
import Home from "./screens/Home";
import { HomeContextProvider } from "./context/HomeContext";
import { mapReducer, userReducer } from "./reducers/reducer";

function App() {
  const userState = {
    userName: "",
    userID: "",
  };

  const mapState = {
    cityName: "",
    showGrids: false,
    showCustomerDensity: false,
    showRecommendedLocation: false,
  };

  const [mapData, mapDispatch] = useReducer(mapReducer, mapState);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <HomeContextProvider
        value={{
          mapData,
          mapDispatch,
        }}
      >
        <Home />
      </HomeContextProvider>
    </div>
  );
}

export default App;
