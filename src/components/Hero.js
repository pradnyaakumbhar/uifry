import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { MdSlowMotionVideo } from 'react-icons/md';
import heroStrip from '../assets/herostrip.svg';
import hero from '../assets/hero.svg';
const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-0 lg:mx-20">
        <div className="flex flex-col gap-0 mt-14 ">
          <div className="rounded-full bg-custom-gradient-yellow w-60 h-60 absolute -z-10 left-[15%] top-[15%]"></div>
          <div className="z-1">
            <p className="font-bold text-5xl">
              Make The Best Financial Decisions
            </p>
            <p className="mt-6">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquot
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Port-titor.
            </p>
            <div className="flex items-center gap-5 mt-6">
              <button className="btn rounded-none bg-black text-white hover:bg-primary border-none flex items-center p-4">
                Get Started
                <BsArrowRight className="text-3xl" />
              </button>
              <div className="flex gap-3 cursor-pointer items-center">
                <MdSlowMotionVideo className="text-3xl" />
                <p className="text-xl font-medium">Watch</p>
              </div>
            </div>
            <img className="w-full" src={heroStrip} alt="" />
          </div>
        </div>
        <div className="w-[100%] mt-0">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
