import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes, 
  faWheatAwn,
  faAppleAlt,
  faCookie,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About Us", "Donuts", "Tasting Party"];
  const icons = [faWheatAwn, faAppleAlt, faCookie];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-5 bg-peru text-lotion font-stevie-sans font-light min-h-[8rem] px-5 md:px-0"
        style={{ clipPath: "ellipse(70% 60% at 50% 30%)" }}
      >
        <div className="grid grid-cols-2 items-center h-32 md:grid-cols-12">

          {/* Left spacing */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Logo */}
          <div className="col-span-1 flex justify-start md:col-span-2">
            <img
              src="/MobinDonutLogo.svg"
              alt="Welcome to Mobin Donut!"
              className="w-20 h-auto"
            />
          </div>

          {/* Nav */}
          <nav className="hidden md:col-span-6 md:flex md:justify-center md:space-x-8 md:text-md-h4 lg:text-lg-h4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/#${item}`}
                onClick={closeMenu} 
                className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-lotion after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex md:col-span-2 md:justify-end md:space-x-4 md:text-xl">
            {icons.map((icon, index) => (
              <FontAwesomeIcon key={index} icon={icon} />
            ))}
          </div>

          {/* Right spacing */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Mobile Menu Btn */}
          <div className="col-span-1 flex justify-end md:hidden">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars} 
                className="text-2xl cursor-pointer"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        style={{ clipPath: "ellipse(70% 60% at 50% 30%)" }}
        className={`fixed top-[5rem] left-0 w-full bg-peru text-lotion font-stevie-sans text-sm-h4 font-light text-center py-5 z-10 transition-all duration-200 ease-[cubic-bezier(0.5,1,0.75,1)] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={closeMenu} 
            className="block py-3"
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
