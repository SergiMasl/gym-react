import React from "react";
import "./_smal-header.sass";

export default function SmallNav({ isBurgerOn }) {
  return <div className={`sm-header ${isBurgerOn ? "visble" : ""}`}>dd</div>;
}
