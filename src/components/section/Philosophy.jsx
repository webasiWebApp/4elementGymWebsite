import React from 'react';

const Philosophy = () => {
    return (
        <section className="w-full py-20 px-4 bg-[#111111]">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full mb-6 border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-[#e2b53e] shadow-[0_0_8px_2px_rgba(226,181,62,0.6)] animate-pulse"></span>
                        <span className="text-xs font-bold text-white tracking-widest uppercase font-body">Our Philosophy</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight uppercase">
                        <span className="block mb-2">Discipline Over</span>
                        <span className="text-[#e2b53e]">Motivation.</span>
                    </h2>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

                    {/* Card 1 */}
                    <div className="text-left" data-aos="fade-up" data-aos-delay="200">
                        <div className="text-[#e2b53e] mb-6">
                            {/* Community Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-3">Community First</h3>
                        <p className="text-gray-400 font-body leading-relaxed">
                            We rise by lifting others. Our strength is measured by the support we give to our team.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="text-left" data-aos="fade-up" data-aos-delay="400">
                        <div className="text-[#e2b53e] mb-6">
                            {/* Mindset Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-3">Mindset Mastery</h3>
                        <p className="text-gray-400 font-body leading-relaxed">
                            Training the mind to endure is just as critical as training the body to perform.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="text-left" data-aos="fade-up" data-aos-delay="600">
                        <div className="text-[#e2b53e] mb-6">
                            {/* Family Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-3">Family Focused</h3>
                        <p className="text-gray-400 font-body leading-relaxed">
                            Programs designed to bring families together through movement and shared goals.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Philosophy;
