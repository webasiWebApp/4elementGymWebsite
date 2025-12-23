import React from 'react';
import SecondaryButton from '../SecondaryButton';

const CorporateEvents = () => {
    return (
        <section className="w-full pb-20 px-4 bg-[#050505]">
            <div className="container mx-auto max-w-4xl text-center" data-aos="fade-up">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                    Corporate & Wellness Events
                </h2>

                <p className="text-gray-400 font-body text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                    Bring the discipline and stress-relief of boxing to your team. We offer on-site workshops, team-building sessions, and ongoing wellness programs tailored to your company's needs.
                </p>

                <div className="flex justify-center">
                    <SecondaryButton
                        text="Inquire for Pricing"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-black hover:border-white before:bg-white"
                    />
                </div>

            </div>
        </section>
    );
};

export default CorporateEvents;
