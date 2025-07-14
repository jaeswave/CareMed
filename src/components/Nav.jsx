import logo from "../assets/logo.png";
import Button from "../components/Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useScreenSize from "../hooks/UseScreenSize";
import { Link } from "react-router-dom";
import { navLinks } from "../data";
import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ openContact }) => {
  const [navOpen, setNavOpen] = useState(false);
  useScreenSize(setNavOpen);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-lg">
      <div className="flex h-16 w-full items-center px-6 justify-between">
        {/* Left - Logo */}
        <div className="flex items-center w-[10%]">
          <img src={logo} alt="logo" className="w-[9%] min-w-[60px]" />
          <span className="text-1xl text-customBlue font-semibold">
            CareMed.
          </span>
        </div>

        {/* Center - Nav Links */}
        <div className="hidden lg:flex justify-center gap-10">
          {navLinks.map(({ label, path, isPopup }) =>
            isPopup ? (
              <button
                key={label}
                onClick={openContact}
                className="text-lg text-black hover:text-customBlue cursor-pointer bg-transparent border-none"
              >
                {label}
              </button>
            ) : (
              <Link
                key={label}
                to={path}
                className="text-lg text-black hover:text-customBlue"
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Right - Buttons & Mobile Icon */}
        <div className="flex items-center space-x-2">
          <Button
            title="Book Service"
            className="hidden md:block !bg-customBlue !text-white"
          />
          <span
            className="text-3xl cursor-pointer lg:hidden"
            onClick={toggleNav}
          >
            {navOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      

    </nav>
  );
};

export default Nav;

