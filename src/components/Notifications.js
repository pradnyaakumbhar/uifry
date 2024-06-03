import React from 'react';
import notifications from '../assets/notifications.png';
import bell from '../assets/bell.svg';
const Notifications = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-0 lg:mx-20">
        <div className="flex flex-col items-start w-[100%]">
          <p className="text-primary font-medium text-lg items-start">
            Advantage
          </p>
          <p className="text-4xl font-bold items-start">Why Choose Uifry?</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={bell} alt="" />
              <p className="text-2xl font-semibold">Clever Notifications</p>
            </div>

            <p>
              Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis{' '}
              <br />
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis <br />
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget <br />
              Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
          </div>
        </div>
        <div className="w-[100%]">
          <img src={notifications} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
