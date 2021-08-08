import React from "react";

const IconText = (props) => {
    return ( <div className="flex items-center justify-center ml-2">
            <div className="mr-1">{props.children} </div>
            <div>{props.text}</div>
    </div> );
}
 
export default IconText;