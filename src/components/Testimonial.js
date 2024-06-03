import React from 'react';
import testimonial from '../assets/testimonial.png';
import people from '../assets/people.svg';

const Testimonial = () => {
  return (
    <div className="container mx-auto">
      <p className="text-xl font-medium text-center py-2">Testimonials</p>
      <p className="text-center font-bold text-4xl">
        What Our Users <br /> Say About Us?
      </p>
      <div className="flex flex-col lg:flex-row justify-between items-center mx-0 lg:mx-20">
        <div className="w-[100%]">
          <img src={testimonial} alt="" />
        </div>

        <div className="flex flex-col items-start w-[75%]">
          <p className="text-3xl font-semibold">
            The Best Financial Accounting <br /> App Ever!
          </p>
          <p className="text-base text-gray-600">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <p className="text">Rownok Mahbub</p>
          <img className="h-10" src={people} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
