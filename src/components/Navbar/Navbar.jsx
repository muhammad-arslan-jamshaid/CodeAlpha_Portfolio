import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import MobMenu from "../../assets/burgerMenu.jpeg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Reference to track the mobile menu wrapper container

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and the clicked element is NOT part of the menu container or hamburger image icon, turn it off
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains("mobMenu")
      ) {
        setShowMenu(false);
      }
    };

    // Attach click event to document body window
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up memory space on component removal
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      <nav className="navbar">
        <Link
          to="intro"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="brandName"
        >
          <b>Portfolio.</b>
        </Link>
        <div className="desktopMenu">
          <Link
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            to="projectTitle"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-1}
            duration={500}
            className="desktopMenuListItem"
          >
            Projects
          </Link>
          <Link
            to="aboutTitle"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            to="servicesTitle"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="desktopMenuListItem"
          >
            Services
          </Link>
        </div>
        <Link
          to="contactTitle"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenubtn"
        >
          Contact
        </Link>

        <img
          src={MobMenu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          ref={menuRef}
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-140} /* ↕️ Increased offset for more spacing */
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to="projectTitle"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-140} /* ↕️ Increased offset for more spacing */
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            to="aboutTitle"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-140} /* ↕️ Increased offset for more spacing */
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            to="servicesTitle"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-140} /* ↕️ Increased offset for more spacing */
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            Services
          </Link>
          <Link
            to="contactTitle"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-140} /* ↕️ Increased offset for more spacing */
            duration={500}
            className="ListItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
