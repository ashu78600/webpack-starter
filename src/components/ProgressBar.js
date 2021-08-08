import React from "react";

const ProgressBar = ({done}) => {
    return ( <div className="progress ">
    <div className="progress-done bg-gradient-to-r from-green-400 to-blue-500 " style={{opacity: 1, width: `${done}%`}}>
         {done}%
    </div>
    
    </div> );
}

export default ProgressBar;