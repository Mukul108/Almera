/* eslint-disable @next/next/no-img-element */
"use client";
import React,  { useState } from 'react';
import Image from "next/image";
import Lottie from 'lottie-react';
import backgroundImg from "../../../public/paper.jpeg";
import secondary from '../../styles/secondary.module.css'
import Header from '../header';
import Footer from '../footer';
import Animation from "../../styles/ani.json"
import Animation2 from "../../styles/ani3.json"
import styles from './Write.module.css'; 
import axios from 'axios' 

const Write = () => {

  const underdogApiEndpoint = "https://devnet.underdogprotocol.com";
  const config = {
      headers: { Authorization: `Bearer ${`b08742996a48a9.836e09444ac944f48b0fce2b8f29a6c3`}` }
  };
  
  const [title, setTitle] = useState('');
  const [idea, setIdea] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleIdeaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIdea(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, 'name' and 'email' contain the values of the input fields
    console.log('Name:', title);
    console.log('Email:', idea);
  }

  const options = {
    method: 'POST',
    url: 'https://devnet.underdogprotocol.com/v2/projects/1/nfts',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer b08742996a48a9.836e09444ac944f48b0fce2b8f29a6c3'
    },
    data: {
      name: title,
      symbol: 'UPDG',
      description: idea,
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
    }
  };
    
  axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

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
            onChange={handleTitleChange}
          />
          <textarea
            className={styles.descb}
            placeholder="Tell us about your idea..."
            value={idea}
            onChange={handleIdeaChange}
          ></textarea>
           <button className={styles.btn} type="submit" >Submit</button>
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