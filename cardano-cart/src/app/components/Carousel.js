import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';


function Carousel() {
  const slides = [
    {
      url: '/images/image2.png',
    },
    {
      url: '/images/image1.png',
    },
    {
      url: '/images/image3.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); 
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);


  return (
    <div className='w-[55vw]  h-[880px] w-full  m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[86%] -translate-x-0 translate-y-[-50%] left-24 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsArrowLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[86%] -translate-x-0 translate-y-[-50%] right-24 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsArrowRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute bottom-4 left-[50%] translate-x-[-50%] flex justify-center py-2 space-x-2 top-[85%]">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer h-1 w-8 rounded-md ${
              currentIndex === slideIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;