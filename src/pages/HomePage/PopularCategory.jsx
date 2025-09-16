import React from "react";

const CategoryGrid = () => {
    return (
        <div className="p-10 bg-purple-50">
            <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
                Popular Categories
            </h2>

            <div className="grid grid-cols-8 gap-4">
                {/* Reusable Card */}
                {[
                    {
                        title: "Apparel",
                        img: "https://printo-s3.dietpixels.net/site/T-shirts/App_1753334972.png?quality=70&format=webp&w=640",
                        span: "col-span-3 row-span-2",
                    },
                    {
                        title: "Awards & Trophies",
                        img: "https://printo-s3.dietpixels.net/Awa_1754231245.jpg?quality=70&format=webp&w=940",
                        span: "col-span-2 row-span-2",
                    },
                    {
                        title: "Business Stationery",
                        img: "https://printo-s3.dietpixels.net/Stationeryv_1754033693.jpg?quality=70&format=webp&w=640",
                        span: "col-span-3 row-span-2",
                    },
                    {
                        title: "Corporate Gifts",
                        img: "https://printo-s3.dietpixels.net/Corporate-gifts_1754033787.jpg?quality=70&format=webp&w=640",
                        span: "col-span-2 row-span-2",
                    },
                    {
                        title: "Drinkware",
                        img: "https://printo-s3.dietpixels.net/Drinkware_1754033693.jpg?quality=70&format=webp&w=640",
                        span: "col-span-3 row-span-2",
                    },
                    {
                        title: "Packaging",
                        img: "https://printo-s3.dietpixels.net/1v_1754230303.jpg?quality=70&format=webp&w=640",
                        span: "col-span-3 row-span-2",
                    },
                    {
                        title: "Posters & Banners",
                        img: "https://printo-s3.dietpixels.net/site/T-shirts/Marketing_1753334972.png?quality=70&format=webp&w=640",
                        span: "col-span-5 row-span-2",
                    },
                    {
                        title: "Photo Gifts",
                        img: "https://printo-s3.dietpixels.net/Photo_1754231245.jpg?quality=70&format=webp&w=640",
                        span: "col-span-3 row-span-2",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`${item.span} bg-gray-100 rounded-2xl flex flex-col items-center shadow-md hover:shadow-xl p-4 transition-transform duration-300 hover:-translate-y-2`}
                    >
                        <div className="w-32 h-32 flex items-center justify-center overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="object-contain w-full h-full transform transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                        <h1 className="mt-3 font-medium text-gray-700 text-lg text-center">
                            {item.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryGrid;
