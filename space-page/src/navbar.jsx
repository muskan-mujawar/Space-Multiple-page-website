import React from "react";
import { Link } from "react-router-dom";
import Destination from "./destination";

export default function Navbar() {
  return (
    <div>
      <div className=" nav-underline nav-hover ">
        <ul className="navbar justify-content-end align-items-center ">
          <div>
            {" "}
            <li className="nav-item ">
              <Link className="nav-link  barlow-condensed-regular" to="/">
                00 HOME
              </Link>
            </li>
          </div>
          <div>
            {" "}
            <li className="nav-item">
              <Link
                to="/destination"
                className="nav-link barlow-condensed-regular"
              >
                01 DESTINATION
              </Link>
            </li>
          </div>
          <div>
            {" "}
            <li className="nav-item">
              <Link className="nav-link barlow-condensed-regular" to="/crew">
                02 CREW
              </Link>
            </li>
          </div>
          <div>
            <li className="nav-item ">
              <Link
                className="nav-link  pe-4 barlow-condensed-regular"
                to="/tech"
              >
                03 TECHNOLOGY
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
