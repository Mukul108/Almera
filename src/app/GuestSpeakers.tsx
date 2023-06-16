/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';

const GuestSpeakers = () => {
  const speakers = [
    {
      name: "Hon'ble Governer of Haryana, Bandaru Dattatreya",
      image: '../guest1.jpeg',
    },
    {
      name: "Hon'ble Chief Minister of Haryana, Sh. Manohar Lal",
      image: '../guest2.jpeg',
    },
    {
      name: 'Vice Chancellor of Sports University of Haryana, S.S Deswal',
      image: '../guest3.jpg',
    },
    {
      name: 'Ramesh Kaushik, MP, Sonipat',
      image: '../guest4.jpeg',
    },
    {
      name: 'Mohan Singh Badoli, MLA, Rai',
      image: '../guest5.jpg',
    },
  ];

  const [activeSpeaker, setActiveSpeaker] = useState(0);

  const nextSpeaker = () => {
    setActiveSpeaker((prevIndex) =>
      prevIndex === speakers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSpeaker = () => {
    setActiveSpeaker((prevIndex) =>
      prevIndex === 0 ? speakers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white bg-opacity-20 p-6 sm:p-24 rounded-2xl mt-8 mx-4">
      <h2 className="text-center text-3xl sm:text-6xl font-Forum text-golden">
        Guest Speakers
      </h2>
      <div className="carousel-container">
        <button className="carousel-button" onClick={previousSpeaker}>
          &lt;
        </button>
        <div className="carousel-item">
          <img
            src={`guests/${speakers[activeSpeaker].image}`}
            alt={speakers[activeSpeaker].name}
            className="carousel-image"
          />
          <p className="carousel-caption">{speakers[activeSpeaker].name}</p>
        </div>
        <button className="carousel-button" onClick={nextSpeaker}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default GuestSpeakers;
