import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // State variable to track the active link
  const [toggle, setToggle] = useState(false); // State variable to toggle the mobile menu
  const [scrolled, setScrolled] = useState(false); // State variable to track if the page has been scrolled

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true); // If page is scrolled more than 100px, set scrolled to true
      } else {
        setScrolled(false); // Otherwise, set scrolled to false
      }
    };

    // Add scroll event listener and call handleScroll function
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // Reset active link on click
            window.scrollTo(0, 0); // Scroll to top of the page
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Julian &nbsp; <span className="sm:block hidden">| Sanz</span>
          </p>
        </Link>

        {/* Desktop menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)} // Set active link on click
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} // Toggle the mobile menu on click
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle); // Close the mobile menu on link click
                    setActive(Link.title); // Set active link on click
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};



export default Navbar;
