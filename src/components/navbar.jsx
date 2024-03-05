import { useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Scroll from "../HelperFunctions/scroll";

function Navbar() {
  const navRef = useRef();

  const handleContactClick = (id) => {
    Scroll.scrollToElementById(id);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // Handle header show/hide animation depending on the scroll direction
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    // Handle scroll events
    const handleScroll = () => {
      const currScrollPos = window.scrollY;
      const currHeaderElement = headerRef.current;

      if (!currHeaderElement) return;

      if (prevScrollPos > currScrollPos)
        currHeaderElement.style.transform = "translateY(0)";
      else currHeaderElement.style.transform = "translateY(-200px)";

      prevScrollPos = currScrollPos;
    };

    // Set up listeners for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove listeners for the scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="navbar">
      {/* <h3>LOGO</h3> */}
      <img src="assets/logo1.png" alt="logo" />
      <nav ref={navRef}>
        <a onClick={() => handleContactClick("home")} href="/#">
          Home
        </a>
        <a href="#about" onClick={() => handleContactClick("about-us")}>
          About
        </a>
        <a href="/#services" onClick={() => handleContactClick("our-services")}>
          Services
        </a>
        <a href="/#contact" onClick={() => handleContactClick("contact-me-container")}>
          Contact
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
