import React from "react";
import VideoItem from "./VideoItem";

const ResultArea = () => {
  return (
    <div className=" w-9/12 px-4 max-h-96 overflow-y-scroll bg-gray-200">
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
};

export default ResultArea;
