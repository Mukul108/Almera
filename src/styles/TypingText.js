'use client'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Gona make scientific research more Accessible, Transparent and Inclusive!','And accelerate the pace of discovery and innovation'],
      typeSpeed: 50,
      backSpeed: 30, 
      loop: true, 
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);
      
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span className='disc' ref={typedRef}></span>;
};

export default TypingText;
