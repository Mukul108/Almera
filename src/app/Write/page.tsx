import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import backgroundImg from "../../../public/paper.jpeg";


const Write = () => {
    return (
        <div className="relative">
             <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="filter brightness-50 "
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white mt-8">
        <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8 container-margin">
            <div className="mb-8 sm:mb-0 sm:mr-8 container-size">
                 Content Publishing Section 
            </div>
            </div>
        </div>
        </div>
    )
}

export default Write;