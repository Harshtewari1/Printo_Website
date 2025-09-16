import React from "react";

const CategoryGrid = () => {
    return (
        <div className=" bg-gray-100 p-10">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Popular Categories
            </h2>

            {/* Grid Container */}
            <div className="grid grid-cols-8 grid-rows-7 gap-3">

                {/* Left Top Big Pink Card */}
                <div className="col-span-3 row-span-2 bg-gray-100 rounded-5xl flex flex-col  items-center justify-center shadow-lg hover:cursor-pointer hover:border-2">
                    <img
                        src="https://printo-s3.dietpixels.net/site/T-shirts/App_1753334972.png?quality=70&format=webp&w=640"
                        alt="Phone"
                        className="object-fit rounded-[14%]"
                    />
                    <h1 className="mt-3 font-medium text-gray-700 text-center text-2xl pb-3 ">Appreal</h1>
                </div>

                {/* Top Right Small Blue Card */}
                <div className="col-span-2 row-span-2 bg-gray-100 rounded-2xl flex flex-col  shadow-lg hover:cursor-pointer hover:border-2">
                    <img
                        src="https://printo-s3.dietpixels.net/Awa_1754231245.jpg?quality=70&format=webp&w=940"
                        alt="Awards & Trophies"
                        className="object-fit h-[100%] rounded-[14%]"
                    />
                    <h1 className="mt-3 font-medium text-gray-700 text-center text-2xl pb-3 ">Awards & Trophies</h1>
                </div>

                {/* Top Right Purple Card */}
                <div className="col-span-3 row-span-3 bg-gray-100 rounded-2xl flex flex-col  items-center justify-center shadow-lg hover:cursor-pointer hover:border-2">
                    <img
                        src="https://printo-s3.dietpixels.net/Stationeryv_1754033693.jpg?quality=70&format=webp&w=640"
                        alt="Accessories"
                        className="object-fit h-[100%] rounded-[14%]"
                    />
                    <h1 className="mt-3 font-medium text-gray-700 text-center text-2xl pb-3 ">Business Stationery</h1>
                </div>

                {/* Middle Left Pink Headphones */}
                <div className="col-span-2 row-span-2 bg-gray-100  rounded-2xl flex flex-col  items-center justify-center shadow-lg hover:cursor-pointer hover:border-2">
                    <img
                        src="https://printo-s3.dietpixels.net/Corporate-gifts_1754033787.jpg?quality=70&format=webp&w=640"
                        alt="Headphones"
                        className="object-fit h-[100%] rounded-[14%]"
                    />
                    <h1 className="mt-3 font-medium text-gray-700 text-center text-2xl pb-3 ">Corporate Gifts</h1>
                </div>

                {/* Middle Center Phone */}
                <div className="col-span-3 row-span-2 bg-gray-100  rounded-2xl flex flex-col  items-center justify-center shadow-lg hover:cursor-pointer hover:border-2">
                    <img
                        src="https://printo-s3.dietpixels.net/Drinkware_1754033693.jpg?quality=70&format=webp&w=640"
                        alt="Phone"
                        className="object-fit h-[100%] rounded-[14%]"
                    />
                    <h1 className="mt-3 font-medium text-gray-700 text-center text-2xl pb-3 ">Drinkware</h1>
                </div>

                {/* Middle Right Offers (Wide) */}
                <div className="col-span-3 row-span-4 bg-gray-100  rounded-2xl flex flex-col  items-center justify-center shadow-lg hover:cursor-pointer hover:border-2">
                    <div className="p-6 text-center">
                        <img
                            src="https://printo-s3.dietpixels.net/1v_1754230303.jpg?quality=70&format=webp&w=840"
                            alt="Gamepad"
                            className="object-fit h-[100%] rounded-[14%]"
                        />
                    </div>
                    <h1 className="mt-3 font-medium text-gray-700 text-center text-2xl pb-3 ">Food Packaging</h1>
                </div>
                

                {/* Bottom Right Big Yellow Card */}
                <div className="col-span-5 row-span-3 bg-gray-100  rounded-2xl flex flex-col  items-center justify-center shadow-lg hover:cursor-pointer hover:border-2">
                    <img
                        src="https://printo-s3.dietpixels.net/site/T-shirts/Marketing_1753334972.png?quality=70&format=webp&w=640"
                        alt="Gamepad"
                        className="object-fit h-[100%] rounded-[14%]"
                    />
                     <h1 className="mt-3 font-medium text-gray-700 text-center text-2xl pb-3 ">Posters & Banners</h1>
                
                </div>
            </div>
        </div>
    );
};

export default CategoryGrid;

