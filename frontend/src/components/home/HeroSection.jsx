import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Slow Zoom */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                    alt="College Campus Life"
                    className="w-full h-full object-cover animate-slow-zoom opacity-20"
                />
                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#040B1C]/80 via-[#040B1C]/70 to-[#040B1C]" />

                {/* Subtle Accent Glows */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">

                {/* Animated Badge */}
                <div className="opacity-0 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                        <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400 animate-pulse" />
                        <span className="text-sm font-medium text-gray-200 tracking-wide">Welcome to ClubVerse</span>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] drop-shadow-2xl">
                    Your College <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 saturate-150">Clubs</span>
                    <br className="hidden md:block" />
                    <span className="block mt-2">Events & Experiences</span>
                </h1>

                {/* Subtitle / Description */}
                <p className="opacity-0 animate-fade-in-up animation-delay-400 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light text-shadow-sm">
                    Connect with vibrant student communities, discover amazing events, and unlock your full college experience.
                    <span className="block mt-2 font-medium text-white/90">Your campus has never been this accessible.</span>
                </p>

                {/* CTA Buttons */}
                <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Button className="w-full sm:w-auto px-8 py-4 text-base shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-shadow">
                        <span className="flex items-center">
                            Explore Clubs
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </span>
                    </Button>
                    <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base bg-white/10 border-white/10 hover:bg-white/20 backdrop-blur-md text-white">
                        View Events
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
