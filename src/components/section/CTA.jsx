import React from 'react';
import PrimaryButton from '../PrimaryButton';

const CTA = () => {
    return (
        <section className="w-full py-24 px-4 bg-black">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

                {/* Left Content */}
                <div className="max-w-2xl text-left" data-aos="fade-right">
                    {/* Label */}
                    <span className="inline-block bg-[#3d3324] text-[#e2b53e] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
                        Coming Soon
                    </span>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                        Building the Future of Fitness.
                    </h2>

                    <p className="text-gray-400 font-body text-lg md:text-xl leading-relaxed max-w-xl">
                        We are expanding our facilities to include a dedicated youth center and recovery lounge. Be the first to know when we launch.
                    </p>
                </div>

                {/* Right Button */}
                <div data-aos="fade-left">
                    <PrimaryButton color="#e2b53e" text="Explore 4 Elements" />
                </div>

            </div>
        </section>
    );
};

export default CTA;
