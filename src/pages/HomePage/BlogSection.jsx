import React from "react";
import { motion } from "framer-motion";

const blogs = [
    {
        id: 1,
        image: "https://printo-s3.dietpixels.net/Blog_1754559566.jpg?quality=70&format=webp&w=640",
        title:
            "When it comes to acknowledging the hard work and dedication of your team, Finding the perfect way to celebrate their achievements is essential.",
        link: "#",
    },
    {
        id: 2,
        image: "https://printo-s3.dietpixels.net/2_1754024184.jpg?quality=70&format=webp&w=640",
        title:
            "Whether you’re organizing a huge event, launching your brand, or preparing for a marketing campaign bulk printing is your best partner.",
        link: "#",
    },
];

const BlogSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-14">
            {/* Heading and intro */}
            <div className="mb-10 max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
                    From the blog.
                </h2>
                <p className="text-gray-700 mb-2">
                    Explore ideas, tips, and everything print. From choosing the right finish to creating
                    standout branding, our blog is your go-to guide for all things print. Whether you're
                    building your brand or growing your business, we’ve got insights to inspire every step.
                </p>
                <a href="#" className="text-purple-700 font-medium underline">
                    Readmore
                </a>
            </div>

            {/* Blog cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                    <motion.div
                        key={blog.id}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100"
                    >
                        <img
                            src={blog.image}
                            alt="blog"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-5">
                            <p className="text-gray-800 font-medium text-sm leading-relaxed mb-4">
                                {blog.title}
                            </p>
                            <a
                                href={blog.link}
                                className="text-purple-700 font-medium hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;