import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/logo.png"
import About from "../app/About/page";
import Write from "../app/Write/page";
import Read from "../app/Read/page";


const Header = () => {
  return (
    <div className="header">
      <Link href="About" passHref>
        <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
          About
        </button>
      </Link>
      <Link href="Write" passHref>
        <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
          Write
        </button>
      </Link>
      
      <Link href="Read" passHref>
        <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
          Read
        </button>
      </Link> 
      <Link href="#Login" passHref>
        <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
          Login
        </button>
      </Link> 
      <Link href="Contact" passHref>
        <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
          Contact
        </button>
      </Link> 
     
    </div>
  );
};

export default Header;
