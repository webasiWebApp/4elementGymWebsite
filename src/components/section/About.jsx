import React from 'react';

const About = () => {
    return (
        <section className="w-full py-20 px-4" style={{ backgroundColor: '#1a1a1a' }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-6xl">

                {/* Left Content */}
                <div className="w-full md:w-1/2 text-left" data-aos="fade-right">
                    {/* Label with Glowing Dot */}
                    <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full mb-6 border border-white/10">
                        <span className="w-2 h-2 rounded-full bg-[#e2b53e] shadow-[0_0_8px_2px_rgba(226,181,62,0.6)] animate-pulse"></span>
                        <span className="text-xs font-bold text-white tracking-widest uppercase font-body">Who We Are</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        More than just a gym.
                    </h2>

                    <p className="text-gray-300 font-body text-lg leading-relaxed mb-8">
                        Welcome to 4 Elements Boxing & Fitness—an upcoming studio dedicated to adults and youth, built on four core pillars: Physical, Social, Emotional, and Mental development.
                        As we gear up for our permanent location, we're already building community through personal training, semi-private sessions, and weekly pop-up boxing classes.

                    </p>

                    <ul className="space-y-4">
                        {[
                            "Inclusive environment for all ages and levels",
                            "Structured, intentional coaching",
                            "Personal growth for youth and adults",
                            "Community-driven culture"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-white font-heading font-medium text-lg">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#e2b53e] flex items-center justify-center text-[#e2b53e]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2" data-aos="fade-left">
                    <div className="relative rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl">
                        <img
                            src="/aboutImg.png"
                            alt="A welcoming gym community"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
