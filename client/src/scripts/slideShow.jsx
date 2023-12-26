import React, { useState, useEffect } from 'react';
import Slides from '../components/Slides';
import '../resoucers/styles/slideShow.css';
import image1 from '../resoucers/images/capa2.jpg';

const slidesData = [image1];

const SlideShow = ({ref1}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slide-show" ref={ref1}>
      {slidesData.map((slide, index) => (
        <Slides key={index} image={slide} isActive={index === currentSlide} />
      ))}
    </div>
  );
};

export default SlideShow;