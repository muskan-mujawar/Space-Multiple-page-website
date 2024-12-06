import React from "react";
import Navbar from "./navbar";
import Dest from "./dest";

export default function Destination() {
  return (
    <div className="bg-dest">
      <Navbar />
      <h2 className="barlow-condensed-regular">PICK YOUR DESTINATION</h2>
      <div className="d-flex">
        <Dest />
      </div>
    </div>
  );
}
