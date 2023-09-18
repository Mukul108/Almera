import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import backgroundImg from "../../../public/About/bg.jpg";
import dp from "../../../public/About/da.png"
import dp2 from "../../../public/About/me.png"
import Footer from '../footer';
import Header from "../header";
import '../../styles/secondary.module.css';

const About = () => {
    return (
        <div className="relative justify-center">
         <div className="absolute top-0 left-0 w-full h-full z-0" style={{ filter: 'blur(3px)' }}>
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="filter brightness-100 flex"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center mt-8">
          <Header/>
        <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8 container-margin">
            <h1>Our Team:<br></br>Mukul<br></br>Dagar</h1>
            <Image src={dp} alt='dagar'></Image>
            <Image src={dp2} alt='mukul'></Image>
        </div>
        <Footer />
        </div>
        </div>

         
    )
}

export default About;