import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/section/Footer';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import PersonalTrainingPricing from '../components/section/PersonalTrainingPricing';
import SemiPrivateTraining from '../components/section/SemiPrivateTraining';
import PunchInThePark from '../components/section/PunchInThePark';
import CorporateEvents from '../components/section/CorporateEvents';
import AOS from 'aos';

const TrainWithJustin = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className="bg-[#050505] min-h-screen text-white">
            <Navigation />

            <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center">
                <div className="container mx-auto px-20 flex flex-col md:flex-row items-center gap-12">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 pt-10" data-aos="fade-right">
                        <span className="text-[#e2b53e] font-bold tracking-widest uppercase text-sm mb-4 block">
                            Train With Justin
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                            Unlock Your Potential with Discipline & Focus
                        </h1>

                        <p className="text-gray-400 font-body text-lg mb-8 max-w-xl">
                            Beginner-friendly, expert-led training designed to build strength, confidence, and community.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <PrimaryButton color="#e2b53e" text="View Training Options" />
                            <SecondaryButton
                                text="Learn More About Justin"
                                className="bg-transparent border-[#333] text-white hover:bg-[#333]  before:bg-white/20 !px-6"
                            />
                        </div>

                        <div className="flex items-center gap-2 text-[#e2b53e] font-body text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Certified Personal Trainer & Boxing Coach
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-1/2" data-aos="fade-left">
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/trainWithJustinHero.png"
                                alt="Justin Training"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>

            <PersonalTrainingPricing />
            <SemiPrivateTraining />
            <PunchInThePark />
            <CorporateEvents />

            <Footer />
        </div>
    );
};

export default TrainWithJustin;
