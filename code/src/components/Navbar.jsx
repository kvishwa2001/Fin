import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><a href="https://api.whatsapp.com/send/?phone=917550114224&text&type=phone_number&app_absent=0">WhatsApp</a></li>
            <li><a href="#" className="btn btn-primary btn-sm mt-2">Apply Now</a></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">FinLoan</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active text-primary' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active text-primary' : ''}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active text-primary' : ''}>Contact</NavLink></li>
          <li><a href="https://api.whatsapp.com/send/?phone=917550114224&text&type=phone_number&app_absent=0">WhatsApp Chat</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#" className="btn btn-primary btn-sm">Apply Now</a>
      </div>
    </div>
  );
};

export default Navbar