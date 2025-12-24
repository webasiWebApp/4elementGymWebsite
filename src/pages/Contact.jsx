import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/section/Footer';
import PrimaryButton from '../components/PrimaryButton';

const Contact = () => {
    return (
        <div className="bg-[#050505] min-h-screen text-white font-body flex flex-col w-full">
            <Navigation />

            {/* Header Section */}
            <section className="pt-32 pb-12 px-6 md:px-12  text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
                    Contact Us
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Get in touch with us to start your journey. We are here to answer any questions you may have.
                </p>
            </section>

            {/* Main Content */}
            <section className="px-6 md:px-12 lg:px-20 pb-20 flex-grow">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Contact Info & Map */}
                    <div className="space-y-12">
                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-[#e2b53e]/10 flex items-center justify-center text-[#e2b53e] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2">Phone</h3>
                                <p className="text-gray-400 text-sm hover:text-[#e2b53e] transition-colors">
                                    <a href="tel:+16787909898">+1 678-790-9898</a>
                                </p>
                            </div>

                            <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-[#e2b53e]/10 flex items-center justify-center text-[#e2b53e] mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2">Email</h3>
                                <p className="text-gray-400 text-sm hover:text-[#e2b53e] transition-colors">
                                    <a href="mailto:hello@4elements.com">hello@4elements.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-[#e2b53e]/10 flex items-center justify-center text-[#e2b53e] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Address</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                1271 Gin House Lane, Lawrenceville, GA, United States
                            </p>

                            {/* Google Map */}
                            <div className="w-full h-64 rounded-xl overflow-hidden grayscale invert-[.9] hover:grayscale-0 hover:invert-0 transition-all duration-500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.647754388166!2d-83.99173802353363!3d33.92446757320531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5beac83492311%3A0x633187c3e2182745!2s1271%20Gin%20House%20Ln%2C%20Lawrenceville%2C%20GA%2030045%2C%20USA!5e0!3m2!1sen!2sca!4v1703000000000!5m2!1sen!2sca"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5 mx-auto w-full">
                        <h2 className="text-2xl font-bold font-heading mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e2b53e] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e2b53e] transition-colors"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e2b53e] transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e2b53e] transition-colors resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <PrimaryButton text="Send Message" color="#e2b53e" />
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
