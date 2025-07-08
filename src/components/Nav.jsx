import logo from "../assets/logo.png";
import Button from "../components/Button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import useScreenSize from "../hooks/UseScreenSize";
import { Link } from "react-router-dom";
import { navLinks } from "../data";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  useScreenSize(setNavOpen);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-customBlue shadow-md">
      <div className="flex h-16 w-full items-center px-6 justify-between">
        {/* Left - Logo */}
        <div className="flex items-center w-[10%]">
          <img src={logo} alt="logo" className="w-[9%] min-w-[60px]" />
        </div>

        {/* Center - Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-8">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="text-base text-black hover:text-customBlue"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right - Buttons & Mobile Icon */}
        <div className="flex items-center space-x-2">
          <Button
            title="Book Service"
            className="hidden md:block !bg-customRed"
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
      {navOpen && (
        <div className="absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white z-50 flex flex-col items-center justify-center space-y-6 text-2xl">
          {navLinks.map(({ label, path }) => (
            <Link key={path} to={path} onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
