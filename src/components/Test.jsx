import React, { useState, useEffect } from 'react';
const images = [
  "/assets/slide_files/1711624469914",
  "/assets/slide_files/1718207194411",
  "/assets/slide_files/1715439494023",
  "/assets/slide_files/1715439548039",
];

const ImageCarousel = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prevOffset => prevOffset - 1);
    }, 50);

    return () => clearInterval(interval);
  }, [50]);

  return (
    <div className="auto-scroll-container">
      <div className="auto-scroll-wrapper" style={{ transform: `translateX(${offset}px)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} className="auto-scroll-image" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
