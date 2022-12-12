import React from "react"
// import logo from "../images/airbnb-logo.png";

import "../style.css"

export default function Navbar() {
  return (
    <nav>
      {/*<img src={logo} className="nav-logo" alt="airbnb logo"/>*/}
      <img src={"./images/airbnb-logo.png"} className="nav-logo" />
    </nav>
  )
}
