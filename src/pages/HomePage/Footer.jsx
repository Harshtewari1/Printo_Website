import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest, FaXTwitter } from "react-icons/fa6";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* About Section */}
                <div className="text-center mb-12">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                        Printo - For You, Making Your Print Experience Hassle-Free
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto mb-4">
                        At Printo, we turn your ideas into real-world print magic. From custom business cards to employee joining kits,
                        branded signage, corporate gifting and everything in between - we've been India's go-to print-on-demand platform since 2006.
                    </p>
                    <p className="text-gray-600 max-w-4xl mx-auto">
                        Headquartered in Bangalore, we operate a state-of-the-art 50,000+ sq. ft production facility and 28+ retail stores
                        across 6 major cities. Whether you're a startup founder looking to print just 5 T-shirts or an enterprise rolling out
                        5,000 onboarding kits -- we've got you. <a href="#" className="text-purple-700 underline">...read more</a>
                    </p>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700 mb-12">
                    <div>
                        <h4 className="font-semibold mb-3">Find Stores</h4>
                        <ul className="space-y-1">
                            <li>Bangalore</li>
                            <li>Gurgoan</li>
                            <li>New Delhi</li>
                            <li>Chennai</li>
                            <li>Hyderabad</li>
                            <li>Pune</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Our Company</h4>
                        <ul className="space-y-1">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Support</h4>
                        <ul className="space-y-1">
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Business Solutions</a></li>
                            <li><a href="#">Find Stores</a></li>
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Track Order</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Important Links</h4>
                        <ul className="space-y-1">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Delivery & Return Policy</a></li>
                            <li><a href="#">Terms & conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Contact + Social */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-gray-200 pt-8">
                    <div className="text-gray-700 text-sm space-y-2">
                        <p>📞 +91 951 373 4374</p>
                        <p>✉️ care@printo.in</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Follow us</h4>
                        <div className="flex gap-4 text-xl text-gray-600">
                            <FaInstagram className="hover:text-purple-600 cursor-pointer" />
                            <FaFacebook className="hover:text-purple-600 cursor-pointer" />
                            <FaXTwitter className="hover:text-purple-600 cursor-pointer" />
                            <FaLinkedin className="hover:text-purple-600 cursor-pointer" />
                            <FaPinterest className="hover:text-purple-600 cursor-pointer" />
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button className="flex items-center gap-2 border px-3 py-2 rounded-lg text-sm hover:bg-gray-50">
                                <FaGooglePlay /> Get on Google Play
                            </button>
                            <button className="flex items-center gap-2 border px-3 py-2 rounded-lg text-sm hover:bg-gray-50">
                                <FaApple /> Download on App Store
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center gap-3 text-gray-500 text-xs">
                    <div className="flex gap-4 items-center">
                        <img src="https://imgs.search.brave.com/K1p3L4304pSp3ncDhhVdZ_IjRrhOpI2I-kHIHzS9U50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi92aXNh/LWxvZ28tcHJpbnRl/ZC1wYXBlci1jaGlz/aW5hdS1tb2xkb3Zh/LXNlcHRlbWJlci12/aXNhLWxvZ28tcHJp/bnRlZC1wYXBlci1w/bGFjZWQtd2hpdGUt/YmFja2dyb3VuZC12/aXNhLTEyODM3MzQ4/OC5qcGc" alt="Visa" className="h-5" />
                        <img src="https://imgs.search.brave.com/bVy7HpLDSKrvn__w8cnTg0gJUiP9SrMNNEq25BwItpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jbG9z/ZS11cC1tYXN0ZXJj/YXJkLWNyZWRpdC1j/YXJkLWlzb2xhdGVk/LXdoaXRlLWJhY2tn/cm91bmQtb25lLWJp/Z2dlc3QtY29tcGFu/aWVzLXdvcmxkLXVr/cmFpbmUta3JlbWVu/Y2h1Zy1mZWJydWFy/eS0xMzk5Mzc0MDQu/anBn" alt="Mastercard" className="h-5" />
                        <img src="https://imgs.search.brave.com/YuCh4fypH1_f5O4D1pBG-1EEicmQkiAZjyNozkDtMqE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ0L2Ji/LzExLzQ0YmIxMWUz/OTJiY2M0ZGNmNDI5/MWI1OTVjZDNkNWJl/LmpwZw" alt="UPI" className="h-5" />
                    </div>
                    <p>© 2025 Printo Document Services Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;