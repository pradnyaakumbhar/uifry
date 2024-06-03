import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../App.css';
const Navbar = () => {
  return (
    <div className="container mx-auto m-4 ">
      <div className="flex flex-row lg:justify-between items-center mx-0 lg:mx-20">
        <div className="flex flex-row gap-10">
          <img src={logo} alt="logo" />
          <div className="flex items-center gap-2">
            <Link to="/" className="text-primary font-semibold text-lg">
              Home
            </Link>
            <Link href="/" className="text-gray-800 font-semibold text-lg">
              About Us
            </Link>
            <Link href="/" className="text-gray-800 font-semibold text-lg">
              Pricing
            </Link>
            <Link href="/" className="text-gray-800 font-semibold text-lg">
              Features
            </Link>
          </div>
        </div>

        <button className="rounded-none bg-black text-white hover:bg-primary border-none p-4">
          Download Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
