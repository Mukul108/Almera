import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import backgroundImg from "../../../public/About/bg.jpg";
import Footer from '../footer';
import Header from "../header";


const About = () => {
    return (
        <div className="relative">
         <div className="absolute top-0 left-0 w-full h-full z-0" style={{ filter: 'blur(3px)' }}>
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="filter brightness-100"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center mt-8">
        <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8 container-margin">
       hello
        </div>
        </div>
        </div>

         
    )
}

export default About;