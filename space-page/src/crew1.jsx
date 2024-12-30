import React, { useState } from "react";

export default function Crew1() {
  const [toggle, setToggle] = useState(1);

  function handleToggle(id) {
    setToggle(id);
  }

  return (
    <div>
      {" "}
      <div className="center">
        <div className={toggle === 1 ? "show-content" : "content"}>
          <div className="pe-4">
            <h4 className="bellefair-regular">COMMANDER</h4>
            <h2 className="bellefair-regular fs-1">Douglas Hurley</h2>
            <p className="barlow-regular pb-4 mb-4">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
            <div>
              <ul className="d-flex pt-4  mt-4">
                <li onClick={() => handleToggle(1)} className="pe-3 ps-2">
                  <div className="dot"></div>
                </li>
                <li onClick={() => handleToggle(2)} className="pe-3">
                  <div className="dot"></div>
                </li>
                <li onClick={() => handleToggle(3)} className="pe-3">
                  <div className="dot"></div>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="https://space-tour-alpha.vercel.app/_next/image?url=%2Fassets%2Fcrew%2Fimage-douglas-hurley.png&w=1920&q=75"
            alt="Douglas Hurley IMG"
            className="photo ps-4"
          />
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <div className="pe-4">
            <h4 className="bellefair-regular">Mission Specialist</h4>
            <h2 className="bellefair-regular fs-1">Mark Shuttleworth</h2>
            <p className="barlow-regular pb-4 mb-4">
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
            <div>
              <ul className="d-flex pt-4  mt-4">
                <li onClick={() => handleToggle(1)} className="pe-3 ps-2">
                  <div className="dot"></div>
                </li>
                <li onClick={() => handleToggle(2)} className="pe-3">
                  <div className="dot"></div>
                </li>
                <li onClick={() => handleToggle(3)} className="pe-3">
                  <div className="dot"></div>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="https://space-tour-alpha.vercel.app/_next/image?url=%2Fassets%2Fcrew%2Fimage-mark-shuttleworth.png&w=1920&q=75"
            alt="Mark Shuttleworth IMG"
            className="photo ps-4"
          />
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <div className="pe-4">
            {" "}
            <h4 className="bellefair-regular">Pilot</h4>
            <h2 className="bellefair-regular fs-1">Victor Glover</h2>
            <p className="barlow-regular pb-4 mb-4">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
            <div>
              <ul className="d-flex pt-4  mt-4">
                <li onClick={() => handleToggle(1)} className="pe-3 ps-2">
                  <div className="dot"></div>
                </li>
                <li onClick={() => handleToggle(2)} className="pe-3">
                  <div className="dot"></div>
                </li>
                <li onClick={() => handleToggle(3)} className="pe-3">
                  <div className="dot"></div>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="https://space-tour-alpha.vercel.app/_next/image?url=%2Fassets%2Fcrew%2Fimage-victor-glover.png&w=1920&q=75"
            alt="Victor Glover IMG"
            className="photo ps-4"
          />
        </div>
      </div>
    </div>
  );
}
