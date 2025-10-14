import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-white text-black shadow-sm">
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
            <li><a>Home</a></li>
            <li><a>Visa</a></li>
            <li><a>Tour</a></li>
            <li><a>Flight</a></li>
            <li><a>Special Offers</a></li>
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
        <a className="btn btn-ghost normal-case text-xl">BanglaBari</a>
        <img
          src="vite.svg"
          alt="Logo"
          className="w-10 h-10 object-contain ml-2"
        />
      </div>

      {/* desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black">
          <li><a>Home</a></li>
          <li><a>Visa</a></li>
          <li><a>Tour</a></li>
          <li><a>Flight</a></li>
          <li><a>Special Offers</a></li>
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

      {/* right side button */}
      <div className="navbar-end">
        <a className="btn btn-primary text-white">Button</a>
      </div>
    </div>
  );
}

export default Navbar;
