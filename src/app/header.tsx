'use client';
import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png'
import Image from "next/legacy/image";
// import ConnectAndSelectWallet from '../../components/connect_wallet_btn'
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { ConnectAndSelectWallet } from '../components/connect_wallet_btn';
import { Wallet } from '../../src/Wallet';

import {WalletModalProvider
    ,WalletDisconnectButton
    ,WalletMultiButton} from '@solana/wallet-adapter-react-ui';

const Header = () => {
  return (
    <div className="container flex gap-5 min-w-full justify-center pt-5  bg-zinc-900">
      <div className='relative '>
        <Link href="/" passHref>
          <Image className="navlogo align-top rounded-fulll hover:bg-white" src={logo} width={70} height={60} alt="logo"/>
        </Link>

        <Link href="About" passHref>
          <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white text-black transition duration-300 ease-in-out">
          About
          </button>
        </Link>
        <Link href="Write" passHref>
          <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white text-black transition duration-300 ease-in-out">
            Write
          </button>
        </Link>
        
        <Link href="Read" passHref>
          <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white text-black transition duration-300 ease-in-out">
            Read
          </button>
        </Link>
        <Link href="#Login" passHref>
          <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white text-black transition duration-300 ease-in-out">
            Login
          </button>
        </Link> 
        <Link href="Contact" passHref>
          <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
            Contact
          </button>
        </Link> 
      </div>
      <Wallet />
      </div>
     

  );
};

export default Header;
