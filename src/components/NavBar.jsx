import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="navbar bg-gray-800 p-4">
      <div className="navbar-start  ml-10 ">
        <Link to="/" className="text-white text-xl">
          My Market
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-10">
        <Link to="/cart" className="text-white hover:text-gray-400">
          <FaShoppingBasket className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
