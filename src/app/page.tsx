/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from "next/image";
import backgroundImg from "../../public/background.jpg";
import schoolLogo from "../../public/logo.png";
import Header from "./header";
import Highlights from "./highlights";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="filter brightness-100 "
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white mt-8">
          <Header />
          <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8 container-margin">
            <div className="container-size">
              <h1 className="text-center text-4xl sm:text-9xl font-Forum text-black">
                Almera
              </h1>
              <h2 className="text-center text-4xl sm:text-9xl font-Forum text-black">
                A Decentralized Platform for 
              </h2>
              <h3 className="text-center text-4xl sm:text-9xl font-Forum text-black">
              publishing your work
              </h3>
             
              
              
            </div>
          </div>
        </div>
       
       

     
       
      </div>
    </div>
  );
};

export default HomePage;
