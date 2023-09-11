import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import backgroundImg from "../../../public/About/bg.jpg";
import Footer from '../Components/footer';
import Header from "../Components/header";


const About = () => {
    return (
        <div className="relative">
          <div className="relative z-10 flex flex-col items-center justify-center text-white pt-8">
           <Header />  
          </div>
        </div>
         
    )
}

export default About;