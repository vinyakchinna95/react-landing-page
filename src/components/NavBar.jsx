import React from "react";
import './NavBar.css';
const NavBar =() =>{
    return(
      <nav className="nav-container">
        <div className="logo">
          <img src="brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li herf="#">MENU</li>
          <li herf="#">LOCATION</li>
          <li herf="#">ABOUT</li>
          <li herf="#">CONTACT</li>
        </ul>
        <button className="Btn">Login</button>
      </nav>
    )
}
export default NavBar;