import React from "react";
import Header from "../components/Header";
import MapView from "../components/MapView";

function MainPanel() {
  return (
    <div className="section_1 flex flex-col w-[80%]">
      {/* Header */}
      <div className="h-[8%]">
        <Header />
      </div>
      <div className="flex-1 h-full">
        <MapView />
      </div>
    </div>
  );
}

export default MainPanel;
