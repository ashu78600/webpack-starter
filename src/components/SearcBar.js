import React from "react";

const SearchBar = () => {
  return (
    <div className=" w-9/12 px-4 py-4 flex justify-center bg-gray-200 border-dashed border-b-2">
      <input
        type="text"
        className="w-5/6 h-8 px-3 py-2 rounded border-2 border-green-400 focus:outline-none"
        placeholder="Paste youtube video or playlist link"
      />
      <button className="focus:outline-none px-4  py-2h-8 ml-2 rounded text-white bg-green-400">
        Go
      </button>
    </div>
  );
};

export default SearchBar;
