import React from "react";
import Navbar from "./navbar";
import Tech1 from "./tech1";

export default function Tech() {
  return (
    <div className="bg-tech p-4">
      <Navbar />
      <h3 className="barlow-condensed-regular center mt-4 pt-4 ">
        <span className="zero pe-2">03</span> SPACE LAUNCH 101
      </h3>
      <Tech1 />
    </div>
  );
}
