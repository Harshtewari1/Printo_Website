import React from "react";
import { motion } from "framer-motion";



const companies = [
    { id: 1, name: "Flipkart", logo: "https://imgs.search.brave.com/w1rL7suD9DkRVviznjutoLm8R7pixvLvK6MtxA8P8KQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/ZmxpcGthcnQuc3Zn" },
    { id: 2, name: "Wipro", logo: "https://imgs.search.brave.com/nSe7yrg37Wor0M7HAzRHz9yLcqi5WMtgi-jTkBAvGSI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDEvV2lwcm8tTG9n/by01MDB4MjgxLmpw/Zw" },
    { id: 3, name: "Freshworks", logo: "https://imgs.search.brave.com/9JdqtjEoe2RWxhGtBOQZoyHLyiAusqv4w0QRP9Ch7l0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2ZyZXNo/d29ya3M0NzY0Lmpw/Zw" },
    { id: 4, name: "PhonePe", logo: "https://imgs.search.brave.com/lHXmopD_Sfbtml6-KdOfEcfwbSybWsdR32YnnGIBlg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzEvcGhvbmVw/ZS1sb2dvLXBuZ19z/ZWVrbG9nby0zMzk4/NjcucG5n" },
    { id: 5, name: "Google", logo: "https://imgs.search.brave.com/g7yD4QHJyhWPluZTH3ngrpEVeTZr1vd-1JynkXowNLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly80a3dh/bGxwYXBlcnMuY29t/L2ltYWdlcy93YWxs/cy90aHVtYnNfMnQv/MTEyOTgucG5n" },
    { id: 6, name: "TCS", logo: "https://imgs.search.brave.com/ll08WyeisibDICyh5c8roZl0CeUXPDVVHaKqLuFWbhM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3Rjcy10/YXRhLWNvbnN1bHRh/bmN5LXNlcnZpY2Vz/Mjc5Mi5sb2dvd2lr/LmNvbS53ZWJw" },
];

const CorporateTrust = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 text-center">
            <h2 className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
                Trusted by over <span className="font-bold">350 Large Enterprises</span> for
                Printing, Signage and Gifting needs.
            </h2>

            {/* Carousel container */}
            <div className="overflow-hidden relative w-full">
                <motion.div
                    className="flex gap-12"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 12,
                        ease: "linear",
                    }}
                >
                    {[...companies, ...companies].map((c, i) => (
                        <div key={i} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                            <img
                                src={c.logo}
                                alt={c.name}
                                className="max-h-24 object-contain  transition duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mt-10">
                <p className="text-gray-700 mb-4">Need a Corporate Account?</p>
                <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg shadow hover:bg-orange-600 transition">
                    Get in Touch
                </button>
            </div>
        </section>
    );
};

export default CorporateTrust;