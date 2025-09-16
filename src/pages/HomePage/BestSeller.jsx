import React from "react";

const BestSeller = () => {
    const products = [
        {
            title: "Business Cards",
            img: "https://printo-s3.dietpixels.net/Business-cards_1754428367.jpg?quality=70&format=webp&w=640"
        },
        {
            title: "Posters",
            img: "https://printo-s3.dietpixels.net/Posters_1754428367.jpg?quality=70&format=webp&w=640"
        },
        {
            title: "Booklets",
            img: "https://printo-s3.dietpixels.net/Booklets_1754428367.jpg?quality=70&format=webp&w=640"
        },
        {
            title: "Flyers",
            img: "https://printo-s3.dietpixels.net/Flyers_1754428367.jpg?quality=70&format=webp&w=640"
        },
        {
            title: "Acrylic Prints",
            img: "https://printo-s3.dietpixels.net/Best-seller_1754559089.jpg?quality=70&format=webp&w=640"
        },
        {
            title: "Cards",
            img: "https://printo-s3.dietpixels.net/Cards_1754428367.jpg?quality=70&format=webp&w=640"
        },
        {
            title: "Stickers",
            img: "https://printo-s3.dietpixels.net/Stickes_1754555857.jpg?quality=70&format=webp&w=640"
        },
        {
            title: "Hoodies",
            img: "https://printo-s3.dietpixels.net/Shop-hoodie_1754554956.jpg?quality=70&format=webp&w=640"
        }
    ];

    return (
        <div className="w-full bg-purple-50 py-10">
            
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
                 Best Sellers
            </h1>

            
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                {products.map((item, i) => (
                    <div
                        key={i}
                        className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 hover:opacity-100 transition duration-500 flex items-end justify-center">
                            <p className="text-white font-semibold text-lg mb-4">
                                Shop {item.title} →
                            </p>
                        </div>
                       
                        <p className="text-center py-3 font-medium text-gray-700 group-hover:text-blue-600 transition">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl mt-14">
                <img className="px-20 rounded-[6%] " src="https://printo-s3.dietpixels.net/2_1754130942.jpg?quality=70&format=webp&w=1920" alt="" srcset="" />

            </div>
        </div>
    );
};

export default BestSeller;
