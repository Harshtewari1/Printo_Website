import React from "react";

const NewLaunches = () => {
    const images = [
        {
            src: "https://printo-s3.dietpixels.net/2222_1757444411.jpg?quality=70&format=webp&w=640",
            title: "Dry-Fit Round Neck"
        },
        {
            src: "https://printo-s3.dietpixels.net/yellow-1_1757444411.jpg?quality=70&format=webp&w=640",
            title: "Dry Fit Polos"
        },
        {
            src: "https://printo-s3.dietpixels.net/1440_1754641764.jpg?quality=70&format=webp&w=640",
            title: "Crownstar"
        },
        {
            src: "https://printo-s3.dietpixels.net/Viva-Crest-_1754595335.jpg?quality=70&format=webp&w=640",
            title: "Viva Crest"
        },
        {
            src: "https://printo-s3.dietpixels.net/Elan-Wood_1754595440.jpg?quality=70&format=webp&w=640",
            title: "Elan Wood"
        },
        {
            src: "https://printo-s3.dietpixels.net/Red_1754596859.jpg?quality=70&format=webp&w=640",
            title: "Redwood Honor Plaque"
        },
        {
            src: "https://printo-s3.dietpixels.net/11_1754714535.jpg?quality=70&format=webp&w=640",
            title: "Eco Classic Polo"
        },
        {
            src: "https://printo-s3.dietpixels.net/2_1754714535.jpg?quality=70&format=webp&w=640",
            title: "Custom Students NoteBook"
        }
    ];

    return (
        <div className="w-full overflow-hidden bg-purple-50 py-6">
            <div>
                <h1 className="text-4xl flex justify-center  font-bold">
                    New Launches
                </h1>
                <h1 className="text-xl flex justify-center pb-5 font-bold">
                    Explore What's New At Printo.
                </h1>
            </div>
            <div className="flex text-blue-500 justify-end pr-6 hover:cursor-pointer hover:text-black">
                <h1 className="pb-2">View All</h1>
                <i className="ri-arrow-right-line"></i>
            </div>

            {/* Slider */}
            <div className="flex animate-scroll">
                {[...images, ...images].map((item, i) => (
                    <div
                        key={i}
                        className="w-64 mx-2 flex-shrink-0 text-center"
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-64 h-40 rounded-xl object-cover shadow-md"
                        />
                        <p className="mt-2 text-sm font-medium text-gray-700">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* Animation style */}
            <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default NewLaunches;
