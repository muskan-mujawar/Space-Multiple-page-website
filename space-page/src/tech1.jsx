import React, { useState } from "react";
import Tech2 from "./tech2";
import Tech3 from "./tech3";
import Tech4 from "./tech4";

export default function Tech1() {
  const [toggle, setToggle] = useState(1);

  function handleToggle(id) {
    setToggle(id);
  }
  return (
    <div className="d-flex align-items-center">
      <div class>
        <ul className="d-flex flex-column ">
          <li
            onClick={() => handleToggle(1)}
            className="bellefair-regular num padding"
          >
            <div className="round hover-num">1</div>
          </li>

          <li
            onClick={() => handleToggle(2)}
            className="bellefair-regular num padding"
          >
            <div className="round hover-num">2</div>
          </li>

          <li
            onClick={() => handleToggle(3)}
            className="bellefair-regular num padding "
          >
            <div className="round hover-num">3</div>
          </li>
        </ul>
      </div>
      <div className="center">
        {toggle === 1 && <Tech2 />}
        {toggle === 2 && <Tech3 />}
        {toggle === 3 && <Tech4 />}
      </div>
    </div>
  );
}
