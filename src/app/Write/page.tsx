/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import React from 'react';
import Image from "next/image";
import Lottie from 'lottie-react';
import Link from 'next/link';
import backgroundImg from "../../../public/paper.jpeg";
import secondary from '../../styles/secondary.module.css'
import Header from '../header';
import Footer from '../footer';
import Animation from "../../styles/ani.json"
import Animation2 from "../../styles/ani3.json"
import styles from './Write.module.css'; 


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
        <div id="ideas" className="bg-white bg-opacity-20 sm:p-24 flex flex-col sm:flex-row rounded-2xl w-full min-h-fit ml-10 mr-10">
         <form onSubmit={handleSubmit} className='w-full'>
          <input
            className={styles.title}
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            className={styles.descb}
            placeholder="Description of your Idea"
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
          ></textarea>
           <button className={styles.btn} type="submit">Submit</button>
           <Lottie animationData={Animation} />
          </form>
        </div>
        <div id="article" className="bg-white mt-10 bg-opacity-20 sm:p-24 flex flex-col sm:flex-row rounded-2xl w-full min-h-fit ml-10 mr-10">
          <div className={styles.articles}>
             This section will Availabe Soon ......
          </div>
          <Lottie animationData={Animation2} />
        </div>
        <Footer/>
        </div>
      </div>

        
    )
}

export default Write;