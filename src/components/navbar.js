import "../stylesheet/navbar.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className={color ? "header header-bg" : "header"} onClick={handleClick}>
        <Link to="/">
            <h1 className="logo">SUMIT</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{color: "white"}}/>
          ) : (
            <FaBars size={20} style={{color: "white"}}/>
          )}
        </div>
    </div>
  );
}

export default Navbar;
