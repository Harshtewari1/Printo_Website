import React from "react";

const ShopByBusinessNeeds = () => {
    const categories = [
        {
            title: "For Startups",
            img: "https://printo-s3.dietpixels.net/site/Awards/Startups_1753853634.jpg?quality=70&format=webp&w=640",
            link: "#",
        },
        {
            title: "Events & Promotions",
            img: "https://printo-s3.dietpixels.net/site/Awards/Event_1753853634.jpg?quality=70&format=webp&w=640",
            link: "#",
        },
        {
            title: "Cafe And Restaurant Essentials",
            img: "https://printo-s3.dietpixels.net/site/Awards/Cafe_1753853634.jpg?quality=70&format=webp&w=640",
            link: "#",
        },
        {
            title: "Employee Engagement",
            img: "https://printo-s3.dietpixels.net/site/Awards/Employee_1753853634.jpg?quality=70&format=webp&w=640",
            link: "#",
        },
    ];

    return (
        <div className="py-12 bg-purple-50">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                Shop By Business Needs
            </h2>

            <div
                className="
          max-w-4xl mx-auto 
          grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-2 
          gap-6 
          px-4 sm:px-6
        "
            >
                {categories.map((cat, index) => (
                    <a
                        key={index}
                        href={cat.link}
                        className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={cat.img}
                                alt={cat.title}
                                className="
                  w-full 
                  h-40 sm:h-48 md:h-56 
                  object-cover 
                  rounded-t-2xl 
                  group-hover:scale-105 
                  transition duration-500
                "
                            />
                        </div>
                        <div className="py-4 text-center">
                            <h3 className="text-base sm:text-lg font-semibold text-purple-700 group-hover:underline">
                                {cat.title} &gt;
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ShopByBusinessNeeds;
