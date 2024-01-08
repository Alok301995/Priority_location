import React from "react";

const Table = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto flex flex-1 p-2">
      <table className="table-auto w-full bg-white border border-gray-200">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-1 border-b-2 border-gray-200 text-left text-sm text-white leading-4 tracking-wider bg-[#2596be]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-1 whitespace-no-wrap border-b text-sm  border-gray-200"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
