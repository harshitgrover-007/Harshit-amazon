import React from 'react'
import "./Navbar.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Navbar = () => {
  return (
    <div className="topNav">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="logo"
      />
      <div>
        <LocationOnIcon className="loc" style={{ color: "white" }} />
        <p className="deliver">Deliver to Harshit</p>
      </div>
    </div>
  );
}

export default Navbar