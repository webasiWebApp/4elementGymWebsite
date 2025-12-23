import React from 'react';
import SecondaryButton from '../SecondaryButton';

const PunchInThePark = () => {
    return (
        <section className="w-full pb-20 px-4 bg-[#050505]">
            <div className="container mx-auto max-w-7xl">

                <div
                    className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 shadow-2xl"
                    data-aos="fade-up"
                >

                    {/* Left Content */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex items-center gap-3 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e2b53e]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                <path d="M17 12h2L12 5 5 12h2v7h10z" opacity=".3" />
                                {/* Alternative Tree-like shape if needed, but using Home/Building logic or similar. 
                            Let's use a Tree icon specifically if possible, or a generic nature one. 
                            Replacing with a proper SVG tree path.
                        */}
                                <path d="M12 2L2 22h20L12 2zm0 4.8l5.6 11.2H6.4L12 6.8z" fill="none" /> {/* Clear prev */}
                            </svg>
                            {/* Re-doing SVG for a Pine Tree look as per "Park" context */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e2b53e]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L6 10h4v8l-4 2 2 2h12l2-2-4-2v-8h4L12 2z" />
                            </svg>

                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
                                Punch in the Park
                            </h2>
                        </div>

                        <p className="text-gray-400 font-body text-lg mb-8 leading-relaxed max-w-2xl">
                            Join us every week for an outdoor community class. Fresh air, functional movement, and boxing drills. Open to all levels.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e2b53e]" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <span className="text-[#e2b53e] font-bold font-heading">Sundays at 10:00 AM</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#e2b53e]" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-[#e2b53e] font-bold font-heading">City Park, North Lawn</span>
                            </div>
                        </div>
                    </div>

                    {/* Right CTAs */}
                    <div className="w-full lg:w-auto flex flex-col gap-4 items-center lg:items-end">
                        <span className="bg-[#e2b53e] text-black font-bold text-sm px-6 py-2 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(226,181,62,0.4)]">
                            First Class Free!
                        </span>

                        <button className="bg-white text-black font-bold font-body text-lg px-8 py-3 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">
                            Reserve Spot
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PunchInThePark;
