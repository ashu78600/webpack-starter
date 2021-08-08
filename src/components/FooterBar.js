import React from "react";

const FooterBar = () => {
  return (
    <div className="w-9/12  py-2 px-6 flex justify-between bg-gray-200">
     
      <div>
        <span>Save to: </span>
        <input type="text" className="border border-green-400 focus:outline-none ml-2 px-2" />
        <button className="ml-4 bg-green-400 text-gray-200 px-2 py-0 text-center rounded">
          Browse
        </button>
      </div>
       <div>
        <button className="bg-green-400 rounded px-2 py-1 text-white">
          Download All
        </button>
      </div>
    </div>
  );
};

export default FooterBar;
