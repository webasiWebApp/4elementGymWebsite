import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import PrimaryButton from './PrimaryButton';

const Navigation = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Theme Logic:
    // "Dark Mode" (Default in Redux): Dark Bg, White Text, Light Logo (logo.png).
    // "Light Mode": Light Bg, Black Text, Dark Logo (darkLogo.png).

    const isDarkMode = mode === 'dark';
    const textColor = isDarkMode ? 'text-white' : 'text-black';
    const logoSrc = isDarkMode ? '/logo.png' : '/darkLogo.png';
    const glassBg = scrolled
        ? (isDarkMode ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'backdrop-blur-md bg-white/50 border-b border-black/10')
        : (isDarkMode ? 'backdrop-blur-sm bg-black/30' : 'backdrop-blur-sm bg-white/30');

    const getLinkClass = (path) => {
        const isActive = location.pathname === path;
        return `hover:text-[#e2b53e] transition-colors relative ${isActive ? 'text-[#e2b53e] after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#e2b53e]' : ''}`;
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-2 sm:py-4 ${glassBg}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img src={logoSrc} alt="Logo" className="h-12 object-contain" />
                </div>

                {/* Links Section - Hidden on mobile, Flex on md+ */}
                <div className={`hidden md:flex items-center gap-8 font-body font-medium ${textColor}`}>
                    <Link to="/coming-soon" className={getLinkClass('/coming-soon')}>Home</Link>
                    <Link to="/train-with-justin" className={getLinkClass('/train-with-justin')}>Train With Justin</Link>
                    <Link to="/gym" className={getLinkClass('/gym')}>4 Elements Gym</Link>
                    <Link to="/contact" className={getLinkClass('/contact')}>Contact / Join</Link>
                </div>

                {/* Right Section: Theme Toggle & CTA */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => dispatch(toggleTheme())}
                        className={`${textColor} hover:text-[#e2b53e] transition-colors p-2 rounded-full border border-current opacity-70 hover:opacity-100`}
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? (
                            // Sun Icon (for Dark Mode)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            // Moon Icon (for Light Mode)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>

                    <div className="hidden sm:block">
                        <PrimaryButton color="#e2b53e" text="Book a Session" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
