import React, { useEffect } from 'react';
import "./Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {

  // navbar icon change
  const [clicktwo, setClicktwo] = useState(false);
  const handleClicktwo = () => setClicktwo(!clicktwo);


  // navbar color change
  const [navbarColor, setNavbarColor] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  }
  window.addEventListener("scroll", changeNavbar);


  // change theme
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [theme, setTheme] = useState("light-theme");

  const changeTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  return (
    <header className={navbarColor ? "site-header header-scrolled fixed-top" : "site-header fixed-top"}>
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke">
          <h1>
            <a className="navbar-brand" href="/">
              <span>Be</span>Idea</a>
          </h1>

          <div className={clicktwo ? "mobile-navbar fixed-top " : "collapse navbar-collapse justify-content-end"} id="navbarNav">
            <ul className="navbar-nav ml-lg-auto mobile-navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="cont-ser-position mt-lg-2">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" for="checkbox">
                  <div className="mode-container fixed" onClick={() => changeTheme()}>
                    <div  onClick={handleClick}>
                      {click ? <BsSun className="icon" /> : <BsMoon className="icon" />}
                    </div>
                  </div>
                </label>
              </div>
            </nav>
          </div>

          <div className="responsive-menu" onClick={handleClicktwo}>
            {clicktwo ? <FaTimes className="icon expand" /> : <FaBars className="icon-close" />}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar