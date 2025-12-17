import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CTASection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

            {/* Dynamic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    Start Exploring <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-[gradient-xy_5s_infinite] bg-[length:200%_auto]">
                        ClubVerse Today
                    </span>
                </h2>

                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Discover clubs, attend events, and build lifelong connections. Your college experience is waiting.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className="w-full sm:w-auto px-8 py-4 text-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
                        Explore Clubs <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg hover:bg-white/10 backdrop-blur-md">
                        Browse Events
                    </Button>
                </div>

                <p className="mt-8 text-sm text-gray-500 animate-bounce">
                    Join thousands of students already discovering their campus community
                </p>
            </div>
        </section>
    );
};

export default CTASection;
