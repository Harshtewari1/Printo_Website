import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
    const initialReviews = [
        { id: 1, name: "Asha Sharma", role: "Designer", text: "Amazing product! High quality and fast delivery.", rating: 5 },
        { id: 2, name: "Rahul Verma", role: "Developer", text: "Good value for money. Support was helpful.", rating: 4 },
        { id: 3, name: "Priya Singh", role: "Student", text: "Loved it. Will buy again.", rating: 5 },

        { id: 4, name: "Karan Patel", role: "Entrepreneur", text: "Solid build and looks premium.", rating: 4 },
        { id: 5, name: "Neha Gupta", role: "Blogger", text: "Nice design, could improve packaging.", rating: 4 },
        { id: 6, name: "Vikram Rao", role: "Manager", text: "Exactly as described. Happy with purchase.", rating: 5 },

        { id: 7, name: "Sana Khan", role: "Photographer", text: "Great colours and finish.", rating: 5 },
        { id: 8, name: "Amit Joshi", role: "Teacher", text: "Comfortable and durable.", rating: 4 },
        { id: 9, name: "Ritu Mehra", role: "Freelancer", text: "Stylish and practical.", rating: 5 },
    ];

    const [reviews, setReviews] = useState(initialReviews);
    const [page, setPage] = useState(0);
    const pageSize = 3;

    const totalPages = Math.ceil(reviews.length / pageSize);

    const visible = reviews.slice(page * pageSize, page * pageSize + pageSize);

    function nextPage() {
        setPage((p) => (p + 1) % totalPages);
    }
    function prevPage() {
        setPage((p) => (p - 1 + totalPages) % totalPages);
    }

    // Add a new set of 3 sample reviews
    function addNewSlide() {
        const nextId = reviews.length ? Math.max(...reviews.map((r) => r.id)) + 1 : 1;
        const newSlide = [
            { id: nextId, name: "New User 1", role: "Customer", text: "Just received, looks great!", rating: 5 },
            { id: nextId + 1, name: "New User 2", role: "Customer", text: "Good experience.", rating: 4 },
            { id: nextId + 2, name: "New User 3", role: "Customer", text: "Recommend it.", rating: 5 },
        ];
        setReviews((r) => [...r, ...newSlide]);
        setPage(totalPages);
    }

    return (
        <div className="max-w-6xl mx-auto p-6 relative">
            <h2 className="text-2xl font-semibold mb-6 text-center">Customer Reviews</h2>

            {/* Left Arrow */}
            <button
                onClick={prevPage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md p-2 rounded-full hover:scale-105 transition"
            >
                <FaChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextPage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md p-2 rounded-full hover:scale-105 transition"
            >
                <FaChevronRight size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
                {visible.map((rev) => (
                    <div key={rev.id} className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-lg transition relative">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-medium">
                                {rev.name.split(" ")[0].charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold">{rev.name}</div>
                                <div className="text-sm text-gray-500">{rev.role}</div>
                            </div>
                            <div className="ml-auto text-yellow-500 font-semibold">{Array.from({ length: rev.rating }).map((_, i) => "★").join("")}</div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-200 mb-4">{rev.text}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Review;
