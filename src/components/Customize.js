import React from 'react';
import customize from '../assets/customize.png';
import s4 from '../assets/s4.svg';
const Customize = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-0 lg:mx-20">
        <div className="w-[100%] ">
          <img src={customize} alt="" />
        </div>

        <div className="flex flex-col items-start w-[100%] ml-24">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <img src={s4} alt="" />
              <p className="text-2xl font-semibold">Fully Customizable</p>
            </div>

            <p>
              Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
