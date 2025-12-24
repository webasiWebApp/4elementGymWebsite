import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/section/Footer';

const FourElementsGym = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-white font-body">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 md:px-12 lg:px-20 px-20 mx-auto">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-heading">
                        <span className="block text-white">More Than Just Boxing.</span>
                        <span className="block text-zinc-600">A Community Rooted in Discipline.</span>
                    </h1>
                </div>

                <div className="border-t border-white/10 pt-12 grid md:grid-cols-2 gap-16">
                    {/* The Vision */}
                    <div>
                        <div className="flex items-center gap-2 text-[#e2b53e] font-bold text-xs tracking-widest uppercase mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                            The Vision
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            <span className="font-bold text-white">4 Elements</span> combines physical training with mental resilience to create a holistic fitness experience. We believe that true strength comes from mastering the balance between body and mind.
                        </p>
                    </div>

                    {/* The Mission */}
                    <div>
                        <div className="flex items-center gap-2 text-[#e2b53e] font-bold text-xs tracking-widest uppercase mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                <line x1="4" x2="4" y1="22" y2="15" />
                            </svg>
                            The Mission
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To provide a welcoming, structured environment where members can master the art of boxing while strengthening their physical, social, emotional, and mental well-being.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Four Pillars Section */}
            <section className="bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">The Four Pillars</h2>
                        <p className="text-gray-400">Our philosophy rests on four foundational elements of well-being.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Physical */}
                        <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#e2b53e]/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-[#e2b53e]/10 flex items-center justify-center mb-6 text-[#e2b53e] group-hover:bg-[#e2b53e] group-hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6.5 6.5h11" />
                                    <path d="M6.5 17.5h11" />
                                    <path d="M6 20v-2.5" />
                                    <path d="M9 3.5v2.5" />
                                    <path d="M15 3.5v2.5" />
                                    <path d="M18 20v-2.5" />
                                    <path d="M2 13.6L6.5 10l-2-2.3c-.6-.6-1.5-.7-2.1-.2-.6.5-.7 1.4-.2 2L6 13.6z" />
                                    <path d="M22 13.6L17.5 10l2-2.3c.6-.6 1.5-.7 2.1-.2.6.5.7 1.4.2 2L18 13.6z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Physical</h3>
                            <p className="text-[#e2b53e] text-xs font-bold tracking-widest uppercase mb-4">Strength & Conditioning</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Developing power, speed, and endurance through rigorous training.
                            </p>
                        </div>

                        {/* Social */}
                        <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#e2b53e]/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-[#e2b53e]/10 flex items-center justify-center mb-6 text-[#e2b53e] group-hover:bg-[#e2b53e] group-hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Social</h3>
                            <p className="text-[#e2b53e] text-xs font-bold tracking-widest uppercase mb-4">Community Connection</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Building bonds and supporting one another inside and outside the ring.
                            </p>
                        </div>

                        {/* Emotional */}
                        <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#e2b53e]/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-[#e2b53e]/10 flex items-center justify-center mb-6 text-[#e2b53e] group-hover:bg-[#e2b53e] group-hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Emotional</h3>
                            <p className="text-[#e2b53e] text-xs font-bold tracking-widest uppercase mb-4">Resilience & Balance</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Learning to manage stress and find emotional equilibrium under pressure.
                            </p>
                        </div>

                        {/* Mental */}
                        <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#e2b53e]/30 transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-[#e2b53e]/10 flex items-center justify-center mb-6 text-[#e2b53e] group-hover:bg-[#e2b53e] group-hover:text-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
                                    <path d="M12 14a5 5 0 0 0-5 5v2a5 5 0 0 0 10 0v-2a5 5 0 0 0-5-5Z" />
                                    <line x1="12" x2="12" y1="12" y2="14" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Mental</h3>
                            <p className="text-[#e2b53e] text-xs font-bold tracking-widest uppercase mb-4">Focus & Strategy</p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Sharpening focus, discipline, and strategic thinking in every movement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Programs Section */}
            <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-[#333] text-[#e2b53e] text-[10px] font-bold tracking-widest uppercase mb-4">
                                Coming Soon
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Our Programs</h2>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base max-w-md text-right md:text-right">
                            Structured training designed for every age and skill level.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Youth Program */}
                        <div className="group bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-[#e2b53e]/30 transition-all duration-300">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10 opacity-60"></div>
                                <img
                                    src="/op1.png"
                                    alt="Youth Program"
                                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 relative z-20 -mt-10">
                                <h3 className="text-xl font-bold mb-1 text-white pt-10">Youth Program</h3>
                                <p className="text-[#e2b53e] text-xs font-bold tracking-widest uppercase mb-4">Ages 5-12</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Building foundations through discipline, basic technique, and fun physical activity.
                                </p>
                            </div>
                        </div>

                        {/* The Elements */}
                        <div className="group bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-[#e2b53e]/30 transition-all duration-300">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10 opacity-60"></div>
                                <img
                                    src="/op2.png"
                                    alt="The Elements"
                                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 relative z-20 -mt-10">
                                <h3 className="text-xl font-bold mb-1 text-white pt-10">The Elements</h3>
                                <p className="text-[#e2b53e] text-xs font-bold tracking-widest uppercase mb-4">Adult Boxing</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Comprehensive boxing training for all skill levels, from beginners to advanced fighters.
                                </p>
                            </div>
                        </div>

                        {/* Hybrid Elements */}
                        <div className="group bg-[#111] rounded-3xl overflow-hidden border border-white/5 hover:border-[#e2b53e]/30 transition-all duration-300">
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent z-10 opacity-60"></div>
                                <img
                                    src="/op3.png"
                                    alt="Hybrid Elements"
                                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 relative z-20 -mt-10">
                                <h3 className="text-xl font-bold mb-1 text-white pt-10">Hybrid Elements</h3>
                                <p className="text-[#e2b53e] text-xs font-bold tracking-widest uppercase mb-4">Strength + Technique</p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    The ultimate fusion of functional strength training and technical boxing conditioning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default FourElementsGym;
