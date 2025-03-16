import { useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

function Navbar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null); // Reference for the menu

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Navbar */} <hr />
      <nav className=" border-b relative w-full flex items-center sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-2">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} className="w-40" alt="Logo" />
        </Link>

        {/* Center - Desktop Menu */}
        <ul className="hidden md:flex gap-6 flex-1 justify-center">
          {["HOME", "COLLECTIONS", "CONTACT"].map((category) => (
            <li key={category}>
              <NavLink
                to={category === "HOME" ? "/" : `/${category.toLowerCase()}`}
                className="border-b-2 border-transparent hover:border-red-500 transition duration-300"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  textDecoration: "none",
                })}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right - Login/Signup/Cart */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => navigate("/login")}
            className="px-4 border-transparent hover:border-red-500 transition duration-300"
          >
            LOG IN
          </button>
          <span className="text-gray-500 pr-4">|</span>
          <Link to="/cart">
            <FaShoppingCart size={28} />
          </Link>
          {cart.length > 0 && (
            <div className="relative bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cart.length}
            </div>
          )}
        </div>

        {/* Mobile Menu Button (Hamburger / X) */}
        <button
          className="md:hidden text-2xl ml-auto z-50 px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="text-red-600" /> : <FaBars />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className={`absolute top-0 right-0 w-40 bg-white shadow-lg py-6 flex flex-col items-center space-y-6 md:hidden z-50 `}
        >
          {/* Close Button at the Top Right */}
          <button
            className="absolute top-5 right-5 text-3xl text-gray-700 "
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>

          {/* Mobile Menu Links */}
          {["HOME", "COLLECTIONS", "CONTACT"].map((category) => (
            <NavLink
              key={category}
              to={category === "HOME" ? "/" : `/${category.toLowerCase()}`}
              className="text-lg hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </NavLink>
          ))}

          <button onClick={() => navigate("/login")} className="text-lg">
            LOG IN
          </button>
          {/* <button onClick={() => navigate("/signup")} className="text-lg">
            Get Started
          </button> */}
          <Link to="/cart">
            <FaShoppingCart className="text-2xl hover:text-red-600" />
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
