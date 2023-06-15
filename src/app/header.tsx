import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-white bg-opacity-20 p-4 mt-8 rounded-full flex flex-wrap justify-center">
      <Link href="#event-details" passHref>
        <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
          Event Details
        </button>
      </Link>
      <Link href="#highlights" passHref>
        <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
          Highlights
        </button>
      </Link>
      <a href="https://lu.ma/ch5ykyrt" target="_blank" rel="noopener noreferrer">
        <button className="mb-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
          Register
        </button>
      </a>
    </div>
  );
};

export default Header;
