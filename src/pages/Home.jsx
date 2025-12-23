import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/section/Hero';
import About from '../components/section/About';
import Philosophy from '../components/section/Philosophy';
import TrainWithUs from '../components/section/TrainWithUs';
import CTA from '../components/section/CTA';
import Footer from '../components/section/Footer';
import AOS from 'aos';

const Home = () => {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <>
            <Navigation />
            <Hero />
            <About />
            <Philosophy />
            <TrainWithUs />
            <CTA />
            <Footer />
        </>
    );
};

export default Home;
