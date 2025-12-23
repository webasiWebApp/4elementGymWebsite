import React from 'react';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

const PersonalTrainingPricing = () => {
    const plans = [
        {
            id: 1,
            title: 'Single Session',
            price: '$120',
            unit: '',
            desc: 'Perfect for technique check-ins or trying it out.',
            features: [
                '60 min session',
                '1-on-1 focus'
            ],
            isPopular: false
        },
        {
            id: 2,
            title: '2x / Week',
            price: '$115',
            unit: '/ session',
            desc: 'Consistent training to build fundamental skills.',
            features: [
                '8 sessions / month',
                'Personalized plan'
            ],
            isPopular: true
        },
        {
            id: 3,
            title: '3x / Week',
            price: '$110',
            unit: '/ session',
            desc: 'Accelerated progress for dedicated students.',
            features: [
                '12 sessions / month',
                'Nutrition guidance'
            ],
            isPopular: false
        },
        {
            id: 4,
            title: '4+ / Week',
            price: '$100',
            unit: '/ session',
            desc: 'Elite level commitment for maximum results.',
            features: [
                '16+ sessions / month',
                'Full program support'
            ],
            isPopular: false
        }
    ];

    return (
        <section className="w-full py-20 px-4 bg-[#050505]">
            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Personal Training</h2>
                    <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto leading-relaxed">
                        One-on-one coaching tailored to your specific goals. Master technique, build endurance, and find your rhythm with a schedule that fits your lifestyle.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`relative bg-[#111111] rounded-2xl p-8 flex flex-col transition-transform hover:-translate-y-2 duration-300 ${plan.isPopular ? 'border border-[#e2b53e] shadow-[0_0_20px_rgba(226,181,62,0.1)]' : 'border border-white/5'}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Popular Badge */}
                            {plan.isPopular && (
                                <span className="absolute top-4 right-4 bg-[#e2b53e] text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                                    Popular
                                </span>
                            )}

                            {/* Title */}
                            <h3 className="text-xl font-heading font-bold text-white mb-2">{plan.title}</h3>

                            {/* Price */}
                            <div className="flex items-end gap-1 mb-4">
                                <span className="text-[#e2b53e] text-4xl font-bold font-heading">{plan.price}</span>
                                <span className="text-gray-500 text-sm mb-1">{plan.unit}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm font-body mb-8 h-10">
                                {plan.desc}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="text-gray-300 text-sm font-body flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#e2b53e] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <div className="mt-auto">
                                {plan.isPopular ? (
                                    <div className="w-full">
                                        <PrimaryButton color="#e2b53e" text="Select Plan" className="!w-full !justify-center" />
                                    </div>
                                ) : (
                                    <SecondaryButton
                                        text="Select Plan"
                                        className="w-full bg-transparent border-white/20 text-white  before:bg-white/10"
                                    />
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonalTrainingPricing;
