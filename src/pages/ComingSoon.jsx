import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../components/PrimaryButton'

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-red text-white">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-[#e2b53e]/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-[#e2b53e]/10 rounded-full blur-[100px]"></div>
            </div>

            <div data-aos="fade-up" className="max-w-3xl mx-auto space-y-8 flex flex-col items-center">
                <img src="/logo.png" alt="Logo" className="w-32 md:w-40 mb-4" />

                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                    COMING <span style={{ color: '#e2b53e' }}>SOON</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                    We're working hard to bring you something amazing. Stay tuned for the future of fitness.
                </p>

                <div className="pt-8">
                    <Link to="/">
                        <PrimaryButton className="px-8 py-3 text-lg !bg-[#e2b53e] hover:!bg-[#cda438] text-black font-bold border-none">
                            Return Home
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
