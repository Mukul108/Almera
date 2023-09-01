import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import backgroundImg from "../../../public/About/bg.jpg";
import Footer from '../Components/footer';
import Header from '../Components/header';


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
          <Header />
        </div>
         
    )
}

export default About;