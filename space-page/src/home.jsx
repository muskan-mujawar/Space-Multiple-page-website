import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function FirstPage() {
  return (
    <div className="bg-home">
      <Navbar />
      <div className="partition">
        <div className="left justify-content-center">
          <h5 className="barlow-condensed-regular">
            {" "}
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="text bellefair-regular">SPACE</h1>
          <p className="barlow-regular">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right">
          <h4 className="circle bellefair-regular">EXPLORE</h4>
        </div>
      </div>
    </div>
  );
}
