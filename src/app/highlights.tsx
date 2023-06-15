import React from 'react';

const Highlights = () => {
  return (
    <div className="bg-white bg-opacity-20 p-6 sm:p-24 rounded-2xl mt-8 mx-4">
      <h1 className="text-center text-4xl sm:text-8xl font-Forum text-golden">
        Highlights
      </h1>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Guest Speakers:</h2>
        <ul className="list-disc list-inside mt-4">
          <li>John Doe</li>
          <li>Jane Smith</li>
          <li>Michael Johnson</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Special Performances:</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Dance by ABC Dance Crew</li>
          <li>Singing performance by XYZ Band</li>
          <li>Magic show by David Copperfield</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Acknowledgments:</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Volunteers</li>
          <li>Staff and faculty</li>
          <li>Event sponsors</li>
        </ul>
      </div>
    </div>
  );
};

export default Highlights;
