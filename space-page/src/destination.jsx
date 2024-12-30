import React from "react";
import Navbar from "./navbar";
import Dest from "./dest";

export default function Destination() {
  return (
    <div className="bg-dest">
      <Navbar />
      <div>
        <div className="d-flex flex-nowrap">
          <h3 className="barlow-condensed-regular center mt-4 pt-4">
            <span className="zero pe-2">01</span> PICK YOUR DESTINATION
          </h3>
        </div>

        <Dest />
      </div>
    </div>
  );
}
