import React from 'react';
import PrimaryButton from '../PrimaryButton';

const SemiPrivateTraining = () => {
    return (
        <section className="w-full py-20 px-4 bg-[#050505]">
            <div className="container mx-auto max-w-7xl">

                <div className="bg-[#111111] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12" data-aos="fade-up">

                    {/* Content Left */}
                    <div className="w-full lg:w-1/2">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#e2b53e]/20 px-3 py-1.5 rounded-full mb-6 border border-[#e2b53e]/20">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#e2b53e]" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                            <span className="text-xs font-bold text-[#e2b53e] uppercase tracking-wider font-body">Small Groups</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Semi-Private Training
                        </h2>

                        <p className="text-gray-400 font-body text-lg mb-10 leading-relaxed">
                            Train with friends or join a small group for high-energy sessions that combine the attention of personal training with the motivation of a team. Limit 4 people per session.
                        </p>

                        {/* Pricing Rows */}
                        <div className="space-y-4 mb-10">
                            {/* Row 1 */}
                            <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/5">
                                <span className="font-heading font-bold text-white">Drop-in Group Rate</span>
                                <div className="flex items-end gap-1">
                                    <span className="text-[#e2b53e] font-bold text-xl">$45</span>
                                    <span className="text-gray-500 text-xs mb-1">/ person</span>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/5">
                                <span className="font-heading font-bold text-white">10-Class Pack</span>
                                <div className="flex items-end gap-1">
                                    <span className="text-[#e2b53e] font-bold text-xl">$400</span>
                                    <span className="text-gray-500 text-xs mb-1">/ person</span>
                                </div>
                            </div>
                        </div>

                        <PrimaryButton color="#e2b53e" text="Book Group Session" />
                    </div>

                    {/* Image Right */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden h-[400px] lg:h-[500px]">
                            <img
                                src="/semiPrivate.png"
                                alt="Semi-Private Training Group"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SemiPrivateTraining;
