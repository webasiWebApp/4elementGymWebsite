import React from 'react';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/hero.webm"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-20">
                <h1
                    className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 uppercase leading-tight"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <span className="text-white block">Train Bodies.</span>
                    <span className="text-[#e2b53e] block">Strengthen Minds.</span>
                </h1>

                <p
                    className="font-body text-white/90 text-lg md:text-xl max-w-2xl mb-10"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    Boxing & fitness built to develop the whole human — for adults, kids, and families.
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                >
                    <PrimaryButton color="#e2b53e" text="Book a Session" />

                    {/* Secondary Button Customization for Transparency */}
                    <div className="custom-secondary-btn-wrapper">
                        <SecondaryButton
                            text="Join the Community"
                            className="bg-transparent border-white/30 text-white hover:bg-white/10 before:bg-white/20 !border-white/30"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
