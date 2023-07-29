import React from 'react';
import Image from "next/image";
import backgroundImg from "../../public/background.jpg";
import Header from "./header";
import Footer from "./footer";

const HomePage = () => {
  return (
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
        <div className="bg-white bg-opacity-40 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8 container-margin w-full sm:max-w-screen-lg">
          <div className="container-size">
            <h1 className="text-center text-4xl sm:text-6xl lg:text-9xl font-Forum text-black">
              Almera
            </h1>
            <h2 className="text-center text-4xl sm:text-6xl lg:text-8xl font-Forum text-black">
              A Decentralized Platform for 
            </h2>
            <h3 className="text-center text-4xl sm:text-6xl lg:text-8xl font-Forum text-black">
              publishing your work
            </h3>
            
            <div className='ideas'>
              ideas
            </div>
            <div className='ideas'>
              Articles
            </div>
            <div className='ideas'>
              Research Paper
            </div>  
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
