import React from "react";
import Navbar from "./navbar";
import Tech1 from "./tech1";

export default function Tech() {
  return (
    <div className="bg-tech">
      <Navbar />
      <h2 className="barlow-condensed-regular">SPACE LAUNCH 101</h2>
      <Tech1 />
    </div>
  );
}
