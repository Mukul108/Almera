import React from 'react';
import Image from "next/image";
import backgroundImg from "../../public/background.jpg";
import Header from "./header";
import Footer from "./footer";

const HomePage = () => {
  return (
    <div className="relative">
      {/* Move the absolute positioning to the parent container */}
      <div className="absolute top-0 left-0 w-full h-full z-0" style={{ filter: 'blur(3px)' }}>
        <Image
          src={backgroundImg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="filter brightness-100"
        />
      </div>
      
      {/* Adjust padding for top space */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white pt-8">
        <Header />
        <div className="container-size">
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
          <h1 className="head1">
            Almera
          </h1>
          <h2 className="head2">
            A Decentralized Platform 
          </h2>
          <h3 className="head2">
            for publishing your work
          </h3>
          
          <div className='ideas'>
            ideas
          </div>
          <div className='articles'>
            Articles
          </div>
          <div className='paper'>
            Research Paper
          </div>  
        </div>
      
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
