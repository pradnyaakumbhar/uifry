import React from 'react';
import logo from '../assets/logo.svg';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
const Footer = () => {
  return (
    <div className="bg-[#fdfdfd] container mx-auto mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 py-10 mx-0 lg:mx-20">
        <div className="flex flex-col gap-4 items-start">
          <img className="h-10" src={logo} alt="" />
          <div className="flex gap-2 items-start">
            <img src={email} alt="" />
            <p className="text-lg font-medium">help@rownok.com</p>
          </div>
          <div className="flex gap-2 items-start">
            <img src={phone} alt="" />
            <p className="text-lg font-medium">+88018763646353</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-4xl font-semibold">Links</p>
          <p className="text-xl font-medium">Home</p>
          <p className="text-xl font-medium">About</p>
          <p className="text-xl font-medium">Booking</p>
          <p className="text-xl font-medium">Blog</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-4xl font-semibold">Legal</p>
          <p className="text-xl font-medium">Terms Of Use</p>
          <p className="text-xl font-medium">Privacy Policy</p>
          <p className="text-xl font-medium">Cookie Policy</p>
          <p className="text-xl font-medium">Blog</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-4xl font-semibold">Product</p>
          <p className="text-xl font-medium">Take Tour</p>
          <p className="text-xl font-medium">Live Chat </p>
          <p className="text-xl font-medium">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-4xl font-semibold font-clash">Newsletter</p>
          <p className="text-xl font-medium">Stay Up To Date</p>
          <div className="flex items-start flex-col gap-2">
            <input
              type="text"
              className="px-3 py-3 bg-white"
              placeholder="Your email"
            />
            <button className="bg-black text-white w-48 border-none flex gap-2 items-center capitalize hover:bg-primary rounded-none p-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-center m-10">
        <hr className="w-[70%] h-5" />
        <p className="">Copyright 2022 uifry.com all rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
