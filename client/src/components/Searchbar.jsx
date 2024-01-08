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
        className="border-[1px] border-gray-300  outline-none  bg-white h-10 px-5 pr-8 rounded-md text-sm  focus:border-blue-500 transition-all duration-300"
      />
    </div>
  );
}

export default Searchbar;
