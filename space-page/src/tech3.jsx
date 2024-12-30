import React from "react";

export default function Tech3() {
  return (
    <div className="d-flex">
      <div className="align-content-center">
        {" "}
        <h6 className="text-color">The Terminology...</h6>
        <h1 className="fs-1">Spaceport</h1>
        <p className="pe-4 text-color">
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </div>
      <img
        src="https://space-tour-alpha.vercel.app/_next/image?url=%2Fassets%2Ftechnology%2Fimage-spaceport-portrait.jpg&w=640&q=75"
        alt="Mark Shuttleworth IMG"
        className="ps-4"
      />
    </div>
  );
}
