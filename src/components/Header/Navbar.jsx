import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar fixed top-0 z-50  bg-white shadow-md  text-black h-24">
      <div className="navbar-start">
        {/* mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
          <NavLink>Home</NavLink>
          <NavLink>Visa</NavLink>
          <NavLink>Tour</NavLink>
          <NavLink>Flight</NavLink>
          <NavLink>Special Offers</NavLink>
            <li>
              <details>
                <summary>Others</summary>
                <ul className="p-2 bg-white text-black">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* logo + title */}
        <img
          src="vite.svg"
          alt="Logo"
          className="w-36 h-w-36 animate-bounce"
        />
      </div>

      {/* desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-x-8  menu-horizontal font-semibold text-xl text-green-600">
          <NavLink>Home</NavLink>
          <NavLink>Visa</NavLink>
          <NavLink>Tour</NavLink>
          <NavLink>Flight</NavLink>
          <NavLink>Special Offers</NavLink>
          <NavLink className="dropdown">
        <div tabIndex={0} className=" ">Others ▾</div>
        <ul tabIndex={0} className="dropdown-content menu bg-white-100 shadow">
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/careers">Careers</NavLink></li>
        </ul>
        </NavLink>
        </ul>
      </div>

      {/* right side button */}
      <div className="navbar-end">
        <a className="btn btn-primary text-white">Button</a>
      </div>
    </div>
  );
}

export default Navbar;
