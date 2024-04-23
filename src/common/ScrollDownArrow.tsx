import React, { useState, useEffect } from 'react';

const ScrollDownArrow: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!showArrow) {
    return null;
  }

  return (
    <div className="scroll-down-container" onClick={handleScrollDown}>
      <img 
        src="/assets/arrow_down.png" 
        alt="Scroll Down Arrow" 
        className="scroll-down-arrow" 
      />
      <p className="scroll-down-text">Scroll Down</p>
    </div>
  );
};

export default ScrollDownArrow;
