import React from "react";
import ProgressBar from './ProgressBar';
import IconText from './IconText';

import {HiOutlineDownload} from 'react-icons/hi';
import {MdCancel} from 'react-icons/md';
import {ImClock} from 'react-icons/im';
import {ImFilePlay} from 'react-icons/im';
import {VscFiles} from 'react-icons/vsc';

const VideoItem = (props) => {
  return (
    <div className="flex w-full mt-2 rounded  shadow-md bg-gray-300">
      <div className="mr-2">
        <img
          className="h-20 w-22 rounded-tl-lg rounded-bl-lg"
          src="https://www.gihosoft.com/wp-content/uploads/2020/01/best-youtube-downloader-windows-10.jpg"
        />
      </div>
      <div className="flex flex-col w-full">
        
        <div className="flex justify-between m-2">
          <div className=" w-full mr-4 ">
            <div className="mb-2">The most beautiful love stories in the world | DW Documentary</div>
          <ProgressBar done="30"/>
          </div>
          <div>
          
           <MdCancel />
        
           <HiOutlineDownload className="mt-2"/> 
         
        
            
          </div>
        </div>
        <div className="flex justify-between text-xs ml-2">
          <div className="flex">
            
            <IconText text="3:20"><ImClock /></IconText>
              <IconText text="933"><VscFiles /></IconText>
                <IconText text="mp4"><ImFilePlay /></IconText>
            </div>
          <div className="flex">
            <div className="mr-2">Speed: 4mbps</div>
            <div className="mr-2">ETS: 14s</div>
            <div className="mr-2">Completed: 48%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
