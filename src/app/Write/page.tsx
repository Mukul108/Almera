/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Lottie from 'lottie-react';
import Animation from "../../styles/ani.json"
import backgroundImg from "../../../public/paper.jpeg";
import secondary from '../../styles/secondary.module.css'
import Header from '../header';
import Footer from '../footer';


const Write = () => {
  
  const [title, setTitle] = useState('');
  
  const [idea, setIdea] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitle('');
    setIdea('');

  };

    return (
        <div className="relative justify-center">
          <div className="absolute top-0 left-0 w-full h-full z-0" style={{ filter: 'blur(3px)' }}>
          <Image
            src={backgroundImg}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="filter brightness-100"
          />
          </div>

        <div className="relative z-10 flex flex-col items-center justify-center pt-8">
          <Header/>
          <div className="text-center text-black text-4xl sm:text-5xl ">
            Your Writing Section ...
          </div>
          <hr className="w-full sm:w-full border border-black my-4" />

        <div className="bg-white bg-opacity-20 sm:p-24 flex flex-col sm:flex-row rounded-2xl w-full min-h-fit">
         <form onSubmit={handleSubmit} className='w-full'>
          <p className={secondary.txt}>Title</p>
          <input
            className="relative flex rounded-2xl text-xl bg-slate-500 items-center justify-center p-4 w-10/12 "
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <p className='font-bold text-xl mt-8'>
            Your Idea
          </p>
          <textarea
            className="bg-slate-500 flex py-10 px-5 flex-col sm:flex-row w-10/12 overflow-hidden text-lg rounded-2xl "
            placeholder="Description of your Idea"
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
          ></textarea>
           <button className="mb-2 mr-2 px-4 py-2  bg-golden text-black text-sm sm:text-lg rounded-full hover:bg-slate-500 transition duration-300 ease-in-out mt-8 hover:text-stone-800" type="submit">Submit</button>
          </form>
          <Lottie animationData={Animation} />
        </div>
        <Footer/>
        </div>
      </div>

        
    )
}

export default Write;