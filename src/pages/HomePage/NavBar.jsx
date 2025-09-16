
import React, { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);


    return (
        <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 pb-2 sm:px-6 lg:px-2">
                <div className="flex justify-between h-16 items-center">

                    
                    <div className="flex items-center gap-3">
                        <a href="#" className="flex items-center gap-2">
                            <img src='https://printo-s3.dietpixels.net/site/Printo-logo/printo-logo_1710143759.png?quality=70&format=webp&w=320' />
                        </a>
                    </div>
                    

                 
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Home</a>
                        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">All Products</a>
                        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Help Center </a>
                        <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">Contact Us </a>
                    </nav>

                    
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-10 pr-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                                <i className="ri-search-line absolute left-3 top-2.5 text-gray-500"></i>
                            </div>

                            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <i className="ri-shopping-cart-2-fill text-xl text-gray-700 dark:text-gray-200"></i>
                            </button>

                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                                <img src="https://i.pravatar.cc/40" alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                                <span className="hidden sm:inline text-sm text-gray-700 dark:text-gray-200">Harsh</span>
                                <i className="ri-arrow-down-s-line text-gray-500"></i>
                            </button>
                        </div>

                        
                        <button
                            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => setOpen(prev => !prev)}
                            aria-label="Toggle menu"
                        >
                            {open ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-line text-2xl"></i>}
                        </button>
                    </div>
                </div>
            </div>

           
            {open && (
                <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <div className="px-4 py-4 space-y-3">
                        <a href="#" className="block text-gray-700 dark:text-gray-200">Home</a>
                        <a href="#" className="block text-gray-700 dark:text-gray-200">Projects</a>
                        <a href="#" className="block text-gray-700 dark:text-gray-200">Blog</a>
                        <a href="#" className="block text-gray-700 dark:text-gray-200">Contact</a>

                        <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                            <a href="#" className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-200">
                                <i className="ri-search-line"></i>
                                <span>Search</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-200">
                                <i className="ri-notification-3-line"></i>
                                <span>Notifications</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 py-2 text-gray-700 dark:text-gray-200">
                                <i className="ri-user-line"></i>
                                <span>Profile</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
