"use client";
import React from "react";
import { useState } from "react";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative w-full h-95 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transform transition-transform duration-500 ${
            index === currentImageIndex ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
