/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import backgroundImg from "../../../public/paper.jpeg";




const Write = () => {
  const [title, setTitle] = useState('');
  const [idea, setIdea] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle('');
    setIdea('');
  };

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
          <div className="className=text-center text-black text-4xl sm:text-5xl">
            Writing Section ...
          </div>
          <hr className="w-2/3 sm:w-full border border-black my-4" />
        <div className="bg-white bg-opacity-20 p-6 sm:p-24 flex flex-col sm:flex-row items-center justify-center rounded-2xl mt-8">
         <form onSubmit={handleSubmit}>
          <input
            className="relative flex rounded-2xl bg-slate-500 flex-col items-center justify-center p-6 mt-4"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
  
          <textarea
            className="relative bg-slate-500 flex rounded-2xlp-6 sm:p-24 flex-col sm:flex-row items-center justify-center rounded-2xl mt-8"
            placeholder="Your Idea"
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
          ></textarea>
           <button className="mb-2 mr-2 px-4 py-2 p-6 bg-golden text-black text-sm sm:text-lg rounded-full hover:bg-slate-500 text-black transition duration-300 ease-in-out" type="submit">Submit</button>
          </form>
        </div>
        </div>
      </div>

        
    )
}

export default Write;