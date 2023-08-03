import React from 'react';
import Image from "next/image";
import Link from 'next/link';
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
            <div className="box-text">
              Ideas
              <hr className="w-2/3 sm:w-full border border-golden my-4" />
              <p className="disc">
                Upload ideas on this box
              </p>
              <Link href="#Principals Desk" passHref>
                <button className="read-button">
                 Read
                </button>
               </Link>
               <Link href="#Principals Desk" passHref>
                <button className="read-button">
                 Write
                </button>
               </Link>
            </div>
          </div>
          <div className='articles'>
            <div className="box-text">
              Articles
              <hr className="w-2/3 sm:w-full border border-golden my-4" />
              <p className="disc">
                Upload ideas on this box
              </p>
              <Link href="#Principals Desk" passHref>
                <button className="read-button">
                 Read
                </button>
               </Link>
               <Link href="#Principals Desk" passHref>
                <button className="read-button">
                 Write
                </button>
               </Link>
            </div>
          </div>
          <div className='paper'>
          <div className="box-text">
              Paper
              <hr className="w-2/3 sm:w-full border border-golden my-4" />
              <p className="disc">
                Upload ideas on this box
              </p>
              <Link href="#Principals Desk" passHref>
                <button className="read-button">
                 Read
                </button>
               </Link>
               <Link href="#Principals Desk" passHref>
                <button className="read-button">
                 Write
                </button>
               </Link>
          </div>
          </div>  
        </div>
      
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
