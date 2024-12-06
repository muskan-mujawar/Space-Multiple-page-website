import React, { useState } from "react";

export default function Dest() {
  const [toggle, setToggle] = useState(1);

  function handleToggle(id) {
    setToggle(id);
  }
  return (
    <div>
      <div className="p-4">
        <div>
          <ul className="d-flex justify-content-center">
            <li
              onClick={() => handleToggle(1)}
              className="pe-3 ps-2 barlow-condensed-regular "
            >
              Moon
            </li>
            <li
              onClick={() => handleToggle(2)}
              className="pe-3 barlow-condensed-regular"
            >
              Mars
            </li>
            <li
              onClick={() => handleToggle(3)}
              className="pe-3 barlow-condensed-regular "
            >
              Europa
            </li>
          </ul>
        </div>
        <div className={toggle === 1 ? "show-content" : "content"}>
          <img
            src="https://space-tour-alpha.vercel.app/_next/image?url=%2Fassets%2Fdestination%2Fimage-moon.webp&w=640&q=75"
            alt="moon"
          />{" "}
          <div>
            <h1 className="bellefair-regular">Moon</h1>
            <p className="barlow-regular">
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
          </div>
        </div>

        <div className={toggle === 2 ? "show-content" : "content"}>
          <img
            src="https://space-tour-alpha.vercel.app/_next/image?url=%2Fassets%2Fdestination%2Fimage-mars.webp&w=640&q=75"
            alt="mars"
          />
          <div>
            <h1 className="bellefair-regular">Mars</h1>
            <p className="barlow-regular">
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
          </div>
        </div>

        <div className={toggle === 3 ? "show-content" : "content"}>
          <img
            src="https://space-tour-alpha.vercel.app/_next/image?url=%2Fassets%2Fdestination%2Fimage-europa.webp&w=640&q=75"
            alt="europa"
          />
          <div>
            {" "}
            <h1 className="bellefair-regular">Europa</h1>
            <p className="barlow-regular">
              The smallest of the four Galilean moons orbiting Jupiter, Europa
              is a winter lover’s dream. With an icy surface, it’s perfect for a
              bit of ice skating, curling, hockey, or simple relaxation in your
              snug wintery cabin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}