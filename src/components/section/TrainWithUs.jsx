import React from 'react';
import SecondaryButton from '../SecondaryButton';

const TrainWithUs = () => {
    const cards = [
        {
            id: 1,
            image: '/t1.png',
            title: 'Personal Training',
            desc: 'Focus on technique with strict 1-on-1 coaching designed for rapid improvement.',
            btnText: 'Book Private Session'
        },
        {
            id: 2,
            image: '/t2.png',
            title: 'Semi-Private Training',
            desc: 'Small group sessions (3-5 people) allowing for personalized attention with the energy of a team.',
            btnText: 'Join Small Group'
        },
        {
            id: 3,
            image: '/t3.png',
            title: 'Punch in the Park',
            desc: 'Outdoor community classes for all levels. Fresh air, functional movement, and great vibes.',
            btnText: 'See Locations'
        }
    ];

    return (
        <section className="w-full py-20 px-4 bg-[#1a1a1a]">
            <div className="container mx-auto max-w-6xl">

                {/* Header content */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" data-aos="fade-up">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Train With Us</h2>
                        <p className="text-gray-400 font-body text-lg">
                            Choose the path that fits your goals. From private coaching to energetic group sessions.
                        </p>
                    </div>

                    <a href="#" className="flex items-center gap-2 text-white font-bold hover:text-[#e2b53e] transition-colors group">
                        View Full Schedule
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className="bg-[#111111] rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#e2b53e]/10 transition-shadow duration-300 flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Image Container */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-heading font-bold text-white mb-3">{card.title}</h3>
                                <p className="text-gray-400 font-body mb-8 flex-grow">{card.desc}</p>

                                {/* Button Wrapper */}
                                <div className="mt-auto">
                                    <SecondaryButton
                                        text={card.btnText}
                                         className="w-[90%] bg-transparent border-white/30 text-white hover:bg-white/10 before:bg-white/20 !border-white/30"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrainWithUs;
