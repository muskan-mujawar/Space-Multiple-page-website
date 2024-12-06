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
    <div>
      <div>
        <ul className="d-flex">
          <li
            onClick={() => handleToggle(1)}
            className="bellefair-regular pe-3 ps-2 rounded-circle border border-white m-2 num"
          >
            1
          </li>

          <li
            onClick={() => handleToggle(2)}
            className="bellefair-regular pe-3 rounded-circle border border-white m-2 num"
          >
            2
          </li>

          <li
            onClick={() => handleToggle(3)}
            className="bellefair-regular pe-3 rounded-circle border border-white m-2 num"
          >
            3
          </li>
        </ul>
      </div>
      <div>
        {toggle === 1 && <Tech2 />}
        {toggle === 2 && <Tech3 />}
        {toggle === 3 && <Tech4 />}
      </div>
    </div>
  );
}
