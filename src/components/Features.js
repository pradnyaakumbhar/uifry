import React from 'react';
import hero2 from '../assets/hero2.svg';
import s1 from '../assets/s1.svg';
import s2 from '../assets/s2.svg';
import s3 from '../assets/s3.svg';
const Features = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-center mx-0 lg:mx-20">
        <div className="w-[100%] mt-8">
          <img src={hero2} alt="" />
        </div>

        <div className="flex flex-col gap-5 items-start mt-0">
          <p className="text-primary font-medium text-lg items-start">
            Features
          </p>
          <p className="text-4xl font-bold items-start">Uifry Premium</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={s1} alt="" />
              <p className="text-2xl font-semibold">Budgeting Intervals</p>
            </div>

            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={s2} alt="" />
              <p className="text-2xl font-semibold">Budgeting Intervals</p>
            </div>

            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <img src={s3} alt="" />
              <p className="text-2xl font-semibold">Budgeting Intervals</p>
            </div>

            <p>
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
