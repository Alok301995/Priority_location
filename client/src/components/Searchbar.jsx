import React, { useEffect, useState } from "react";

function Searchbar() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search City"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="border-[1px] border-gray-300 bg-white h-10 px-5 pr-8 rounded-md text-sm focus:outline-none"
      />
    </div>
  );
}

export default Searchbar;
