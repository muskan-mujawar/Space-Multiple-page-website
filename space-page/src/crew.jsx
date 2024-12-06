import React from "react";
import Navbar from "./navbar";
import Crew1 from "./crew1";

export default function Crew() {
  return (
    <div className="bg-crew">
      <Navbar />
      <h2 className="barlow-condensed-regular"> MEET YOUR CREW</h2>
      <Crew1 />
    </div>
  );
}
