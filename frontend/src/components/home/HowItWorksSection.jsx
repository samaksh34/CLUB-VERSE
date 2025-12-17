import React from 'react';
import { Search, UserCheck, Zap, Trophy } from 'lucide-react';

const HowItWorksSection = () => {
    const steps = [
        {
            id: '01',
            title: 'Browse Clubs',
            description: 'Explore clubs with detailed profiles, member counts, and activity summaries. Filter by interests and find communities that match your passions.',
            icon: Search,
            align: 'left'
        },
        {
            id: '02',
            title: 'Join or Engage',
            description: 'Follow clubs, save events, or join directly. Connect with club leaders and stay updated on everything happening.',
            icon: UserCheck,
            align: 'right'
        },
        {
            id: '03',
            title: 'Discover Events',
            description: 'Browse upcoming events, see details, register with one click, and get digital QR passes for entry.',
            icon: Zap,
            align: 'left'
        },
        {
            id: '04',
            title: 'Grow Your Experience',
            description: 'Build your campus network, gain experiences, and unlock opportunities. Track your involvement journey.',
            icon: Trophy,
            align: 'right'
        }
    ];

    return (
        <section className="py-24 bg-[#0a0f1c] relative overflow-hidden">
            {/* Dashed Connecting Line (Desktop) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/5 hidden md:block -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        How ClubVerse Works
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Get started in four simple steps and unlock your full college experience.
                    </p>
                </div>

                <div className="space-y-20 relative">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 group ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>

                            {/* Text Side */}
                            <div className="flex-1 space-y-4 relative">
                                <div className="hidden md:block absolute top-8 -right-[3.25rem] w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0a0f1c] z-10 
                  group-hover:scale-150 group-hover:bg-purple-500 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                                    style={{ right: step.align === 'right' ? 'auto' : '-3.25rem', left: step.align === 'right' ? '-3.25rem' : 'auto' }}
                                />

                                <div className="text-6xl md:text-8xl font-black text-white/5 absolute -top-10 -left-6 -z-10 select-none transition-transform group-hover:translate-x-2">
                                    {step.id}
                                </div>
                                <h3 className="text-3xl font-bold relative pl-2 group-hover:text-cyan-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Icon/Card Side */}
                            <div className="flex-1 flex justify-center perspective-1000">
                                <div className="relative w-64 h-64 flex items-center justify-center p-8 bg-[#0f1522] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.1)] 
                  transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_80px_rgba(6,182,212,0.3)]">
                                    <step.icon className="w-24 h-24 text-cyan-400 stroke-[1.5] group-hover:text-white transition-colors" />

                                    {/* Floating effect elements */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full animate-ping" />
                                    <div className="absolute bottom-6 left-6 w-3 h-3 bg-cyan-500/20 rounded-full animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
