import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from '../components/PrimaryButton'

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-red-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div data-aos="fade-up" className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    COMING SOON
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
                    We're working hard to bring you something amazing. Stay tuned for the future of fitness.
                </p>

                <div className="pt-8">
                    <Link to="/">
                        <PrimaryButton className="px-8 py-3 text-lg">
                            Return Home
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
