import React from 'react';

const Header = () => {
  return (
    <div className="bg-white bg-opacity-20 p-4 mt-8 rounded-full flex flex-wrap justify-center">
      <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
        Event Details
      </button>
      <button className="mb-2 mr-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
        Highlights
      </button>
      <button className="mb-2 px-4 py-2 bg-golden text-darkgolden text-sm sm:text-lg rounded-full hover:bg-white transition duration-300 ease-in-out">
        Register
      </button>
    </div>
  );
};

export default Header;
