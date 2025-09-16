import React, { useState, useEffect } from "react";

const images = [
    "https://printo-s3.dietpixels.net/site/Homepage/Diwali-Desk_1756794212.jpg?quality=70&format=webp&w=1920",
    "https://printo-s3.dietpixels.net/banner_1756878097.jpg?quality=70&format=webp&w=1920",
    "https://printo-s3.dietpixels.net/site/Homepage/Business-cards-Desk_1756794368.jpg?quality=70&format=webp&w=1920",
];

export default function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 4000);
        return () => clearInterval(timer);
    }, [length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-lg mt-5">
            {/* Image Wrapper */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full flex-shrink-0 object-cover 
                       h-[180px] xs:h-[220px] sm:h-[300px] md:h-[450px] lg:h-[550px]"
                    />
                ))}
            </div>

            {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-1 sm:p-2 shadow-md"
            >
                <i className="ri-arrow-left-s-line text-lg sm:text-2xl text-gray-700"></i>
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/60 hover:bg-white rounded-full p-1 sm:p-2 shadow-md"
            >
                <i className="ri-arrow-right-s-line text-lg sm:text-2xl text-gray-700"></i>
            </button>
        </div>
    );
}
