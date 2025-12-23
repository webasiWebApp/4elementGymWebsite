import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] text-white pt-20 pb-10 px-4 border-t border-white/5">
            <div className="container mx-auto max-w-7xl">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20" data-aos="fade-up">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-[#e2b53e] rounded-full flex items-center justify-center text-black font-bold">
                                <img src="/logo.png" alt="Logo" className="w-6 h-6 object-contain" />
                            </div>
                            <span className="font-heading font-bold text-xl">4 Elements</span>
                        </div>
                        <div className="text-gray-400 font-body text-sm leading-relaxed">
                            <p>123 Fitness Blvd</p>
                            <p>Boxing City, ST 12345</p>
                            <a href="mailto:hello@4elements.com" className="text-white hover:text-[#e2b53e] transition-colors mt-2 block">
                                hello@4elements.com
                            </a>
                        </div>
                    </div>

                    {/* Programs Column */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Programs</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-body">
                            <li><a href="#" className="hover:text-[#e2b53e] transition-colors">Boxing Fundamentals</a></li>
                            <li><a href="#" className="hover:text-[#e2b53e] transition-colors">Kids & Youth</a></li>
                            <li><a href="#" className="hover:text-[#e2b53e] transition-colors">Strength & Conditioning</a></li>
                            <li><a href="#" className="hover:text-[#e2b53e] transition-colors">Private Coaching</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-body">
                            <li><a href="#" className="hover:text-[#e2b53e] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#e2b53e] transition-colors">Trainers</a></li>
                            <li><a href="#" className="hover:text-[#e2b53e] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[#e2b53e] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Stay Updated Column */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
                        <form className="flex items-center gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-[#1a1a1a] text-white px-4 py-3 rounded-full w-full focus:outline-none focus:ring-1 focus:ring-[#e2b53e] border border-transparent focus:border-[#e2b53e] text-sm"
                            />
                            <button type="button" className="w-10 h-10 rounded-full bg-[#e2b53e] text-black flex items-center justify-center hover:bg-white transition-colors flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-body">
                    <p>&copy; 2024 4 Elements Boxing & Fitness. All rights reserved.</p>

                    <div className="flex items-center gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>

                    <p>
                        Design by <a href="https://webasi.co" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e2b53e] transition-colors">WEBASI</a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
