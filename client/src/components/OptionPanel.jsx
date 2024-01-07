import React, { useState } from "react";
import { DropdownComp } from "./Dropdown";
// Custom Imports
import { KPIs } from "../services/Constants";

function OptionPanel() {
  return (
    <div>
      <div className="kpi_container p-2 border-b-[1px] border-b-gray-200 ">
        <p className="text-sm text-gray-600 mb-2">KPI's</p>
        <div className="flex flex-col my-1">
          {KPIs.map((kpi) => (
            <DropdownComp kpi={kpi} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OptionPanel;
