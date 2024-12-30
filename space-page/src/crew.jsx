import React from "react";
import Navbar from "./navbar";
import Crew1 from "./crew1";

export default function Crew() {
  return (
    <div className="bg-crew">
      <Navbar />
      <h3 className="barlow-condensed-regular space mt-4 pt-4">
        <span className="zero pe-2">02</span>
        MEET YOUR CREW
      </h3>
      <Crew1 />
    </div>
  );
}
