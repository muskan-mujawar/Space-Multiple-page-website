import React from "react";

export default function Tech4() {
  return (
    <div className="d-flex">
      <div className="align-content-center">
        {" "}
        <h6 className="text-color">The Terminology...</h6>
        <h1 className="fs-1">Space capsule</h1>
        <p className="pe-4 text-color">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </div>
      <img
        src="https://space-tour-alpha.vercel.app/_next/image?url=%2Fassets%2Ftechnology%2Fimage-space-capsule-portrait.jpg&w=640&q=75"
        alt="Victor Glover IMG"
        className="ps-4"
      />
    </div>
  );
}
