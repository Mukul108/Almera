import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import Header from "./header";
import Footer from "./footer";



const HomePage = () => {
  return (
    <div className="relative">
      
      
      {/* Adjust padding for top space */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white pt-8">
        <div className="container-size">
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
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
                Whatever coming to your mind just upload here by clicking write  below, or You wanna explore others ideas click on Read!
              </p>
              <div className="box-button">
              <Link href="#Read" passHref>
                <button className="read-button">
                 Read
                </button>
               </Link>
               <Link href="Write" passHref>
                <button className="read-button">
                 Write
                </button>
               </Link>
               </div>
            </div>
          </div>
          <div className='articles'>
            <div className="box-text">
              Articles
              <hr className="w-2/3 sm:w-full border border-golden my-4" />
              <p className="disc">
                Let world know your greatness of writing, click on Write! or you want to explore others wisdom, click on read   
              </p>
              <div className="box-button">
              <Link href="Read" passHref>
                <button className="read-button">
                 Read
                </button>
               </Link>
               <Link href="Write" passHref>
                <button className="read-button">
                 Write
                </button>
               </Link>
               </div>
            </div>
          </div>
          <div className='paper'>
          <div className="box-text">
              Paper
              <hr className="w-2/3 sm:w-full border border-golden my-4" />
              <p className="disc">
                We know you work a lot and forgoted to publish it! just do it Now by clicking on Write or You want to research on others works click on Read.
              </p>
              <div className="box-button">
              <Link href="Read" passHref>
                <button className="read-button">
                 Read
                </button>
               </Link>
               <Link href="Write" passHref>
                <button className="read-button">
                 Write
                </button>
               </Link>
               </div>
          </div>
          </div>  
        </div>
      
      </div>
    </div>
  );
};

export default HomePage;
