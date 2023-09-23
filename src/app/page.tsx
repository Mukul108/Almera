'use client'
import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import Header from "./header";
import backgroundImg from "../../public/background.jpg";
import Footer from "./footer";
import TypingText from "../styles/TypingText"
import Lottie from 'lottie-react';
import Animation from "../styles/ani4.json"
import { PublicKey, Transaction } from "@solana/web3.js";
import {useWallet} from "@solana/wallet-adapter-react"


const HomePage = () => {
  // const { publicKey, signTransaction, connected } = useWallet();
  return (  
    <div className="relative ">
      {/* Move the absolute positioning to the parent container */}
      <div className="absolute top-0 left-0 w-full h-full z-0" style={{ filter: 'blur(3px)' }}>
        <Image
          src={backgroundImg}
          alt="Background Image"
          layout="fill"
          objectFit='cover'
          className="filter brightness-100 flex"
        />
      </div>
      
      {/* Adjust padding for top space */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white pt-8 ">
        <Header></Header>
        <div className="container-size">
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet"></link>
          <h1 className="head1">
            Almera
          </h1>
         <div className="content">
            <h3 className='head2'>
              Promoting DeSci 
            </h3>
            <hr className="w-2/3 sm:w-full border border-black my-4" />
            <TypingText />
            <h4 className="disc2">
            Decentralized science refers to a paradigm shift in the way scientific research is conducted, moving away from traditional centralized institutions and towards a more distributed and collaborative approach.<br></br>

Peer-to-Peer Collaboration: Scientists from around the world can collaborate directly with each other, sharing data, expertise, and resources without the need for intermediaries or centralized organizations.<br></br>

Open Access: Research findings, data, and methodologies are often made freely accessible to the public, promoting transparency and the democratization of knowledge.<br></br>

Blockchain Technology: Decentralized science often leverages blockchain technology to ensure the integrity of research data and to establish trust in the scientific process.<br></br>

Citizen Science: It encourages the involvement of non-professional scientists or the general public in scientific research, broadening the scope and diversity of data collection and analysis.<br></br>

Tokenization and Incentives: Some decentralized science projects use tokens or cryptocurrencies to incentivize researchers and contributors, creating a more decentralized economy around scientific endeavors.<br></br>

Decentralized Funding: Funding for research projects may come from decentralized sources, such as crowdfunding or decentralized autonomous organizations DAOs, reducing dependence on traditional grant institutions.<br></br>

Overall, decentralized science aims to make scientific research more accessible, transparent, and inclusive, potentially accelerating the pace of discovery and innovation.<br></br>
            </h4>
          </div>
          <div className='content'>
            <div className="head2">
              Content
              </div>
              <hr className="w-2/3 sm:w-full border border-black my-4" />
              <div className="disc">
              Behold, a groundbreaking avenue to unveil your brilliance! With just a simple touch of these buttons below, you shall embark upon an extraordinary journey into the realms of knowledge, where you can pen your thoughts and traverse the uncharted vistas of scientific wonder
              </div>
              <Link href="Read" passHref>
                <button className="button">
                 Read
                </button>
               </Link>
               <Link href="Write" passHref>
                <button className="button">
                 Write
                </button>
               </Link>
          </div>  
        </div>
        <Lottie className="ani" animationData={Animation} />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
