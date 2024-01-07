import React from "react";
import SidePanel from "../components/SidePanel";
import MainPanel from "../components/MainPanel";

function Home() {
  return (
    <div className="home_container flex h-screen">
      <MainPanel />
      <SidePanel />
    </div>
  );
}

export default Home;
