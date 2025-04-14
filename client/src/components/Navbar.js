import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-blue-900 shadow-md border-b-4 border-blue-700 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        {/* Logo ou Nom */}
        <div className="flex-shrink-0 text-white text-2xl font-extrabold tracking-wide">
          <Link to="/">MaymaBlog</Link>
        </div>
        {/* Liens de navigation */}
        <div className="hidden md:flex space-x-8 text-white font-semibold text-lg">
          <Link
            to="/"
            className="hover:text-blue-300 transition duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-300 transition duration-200 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/articles-list"
            className="hover:text-blue-300 transition duration-200 ease-in-out"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-300 transition duration-200 ease-in-out"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
