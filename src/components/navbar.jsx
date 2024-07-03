import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import navImage from "/assets/navfix1.png"; // Import the image
import Scroll from "../HelperFunctions/scroll";
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Analytics/firebaseConfig';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (id) => {
    const scrollName = `${id} scroll`;

    // Log an event with Firebase Analytics
    logEvent(analytics, 'scroll_name', {
      scroll_name: scrollName
    });
    console.log(scrollName);

    Scroll.scrollToElementById(id);
    setShowMenu(false); // Close menu after clicking an item
  };

  useEffect(() => {
    var navbar = document.getElementById("navbar");
    navbar.style.backgroundImage = `url(${navImage})`; // Set background image

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false); // Ensure menu is hidden when switching to desktop view
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="navbar" className="navbar">
      <div className="appbar">
        <div className="logo">
          <img src="assets/logo1.png" alt="Logo" />
        </div>
        <div className="titles">
          <button onClick={handleClick.bind(null, "navbar")}>Home</button>
          <button onClick={handleClick.bind(null, "about-us")}>About</button>
          <button onClick={handleClick.bind(null, "services")}>Services</button>
          <button onClick={handleClick.bind(null, "contact-me-container")}>Contact</button>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`bar ${showMenu ? "change" : ""}`}></div>
          <div className={`bar ${showMenu ? "change" : ""}`}></div>
          <div className={`bar ${showMenu ? "change" : ""}`}></div>
        </div>
      </div>
      <div className="title">
        <h1>A-Z SERVICES</h1>
      </div>
      <div className="para">
        <p>
          <strong className="highlighted-text">Gurukrupa AtoZ Services</strong> is your one-stop destination for a diverse array of essential services. Whether you're seeking expert guidance on Insurance, real estate transactions, digital shopping or job placement, our team of professionals is here to assist you. We also extend our support to cover your basic needs, from food supply consultancy to a wide range of social, cultural, and spiritual services, making A-Z Services the ultimate solution for all your needs.
        </p>
      </div>
      <div className="connect-button">
        <button onClick={handleClick.bind(null, "contact-me-container")}>CONNECT</button>
      </div>
      {showMenu && (
        <div className="mobile-menu-items">
          <button onClick={handleClick.bind(null, "navbar")}>Home</button>
          <button onClick={handleClick.bind(null, "about-us")}>About</button>
          <button onClick={handleClick.bind(null, "services")}>Services</button>
          <button onClick={handleClick.bind(null, "contact-me-container")}>Contact</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
