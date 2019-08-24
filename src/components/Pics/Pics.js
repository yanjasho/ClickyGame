import React from "react";
import {Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9} from "./arrayShuffle"

function Pics() {
  return (
    <div>
        <div className="row">
          <Pic1 />
          <Pic2 />
          <Pic3 />
        </div>
        <br />
        <div className="row">
          <Pic4 />
          <Pic5 />
          <Pic6 />
        </div>
        <br />
        <div className="row">
          <Pic7 />
          <Pic8 />
          <Pic9 />
        </div>  
    </div>
  );
}

export default Pics;