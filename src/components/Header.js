import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="logo"></div>
        <nav>
          {/* <ul>
            <li>
              <Link to="/under-construction">Order Online</Link>
            </li>
            <li>
              <Link to="/under-construction">About Us</Link>
            </li>
            <li>
              <Link to="/under-construction">Reservations</Link>
            </li>
            <li>
              <Link to="/under-construction">Contact</Link>
            </li>
          </ul> */}
        </nav>
      </header>
    </>
  );
}

export default Header;
