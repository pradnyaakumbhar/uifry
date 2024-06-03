import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import getstarted from '../assets/getstarted.svg';
const GetStarted = () => {
  return (
    <>
      <div className="w-60 h-60 bg-custom-gradient-red absolute -z-10 left-0 "></div>
      <div className="container mx-auto mt-28">
        <div className="flex flex-col lg:flex-row justify-between items-center bg-black py-2 lg:py-10 mx-0 lg:mx-20 rounded-xl">
          <div className="flex flex-col gap-4 pl-4 lg:pl-20">
            <p className="text-4xl font-bold text-white">
              Ready To Get Started?
            </p>
            <p className="text-white">
              Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
              Vulputate.
            </p>
            <button className="bg-white text-black w-48 border-none flex gap-2 items-center capitalize hover:bg-primary rounded-none p-4">
              Download App
              <AiFillApple className="text-xl" />
            </button>
          </div>
          <img src={getstarted} alt="" />
        </div>
      </div>
    </>
  );
};

export default GetStarted;
