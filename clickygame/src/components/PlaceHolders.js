import React from "react";

const PlaceHolders = props => {
  return (
    <div className={"box box1"}
    style={{ minHeight: "80%", float: "left"}}>
      {props.children}
    </div>
  );
};

export default PlaceHolders;
