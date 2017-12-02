import React from "react";

const GuessSatatus = props =>
  // <div className={`container${props.fluid ? "-fluid" : ""}`}>
  //   {props.children}
  // </div>;

  <div className={`guess_satatus}`}>
    you guessed {props.children}
  </div>;

export default GuessSatatus;
