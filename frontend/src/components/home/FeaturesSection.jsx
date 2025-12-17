import React from 'react';
import { Compass, Calendar, BarChart, Bell, ArrowRight } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: Compass,
            title: 'Explore All Clubs',
            description: 'Discover college clubs with detailed descriptions, achievements, and active member communities. Find your perfect fit.',
            color: 'text-cyan-400',
            bg: 'bg-cyan-400/10',
            hoverBorder: 'group-hover:border-cyan-500/50'
        },
        {
            icon: Calendar,
            title: 'Event Management',
            description: 'View upcoming events, register instantly, and get digital QR passes for seamless entry. Never miss out again.',
            color: 'text-blue-400',
            bg: 'bg-blue-400/10',
            hoverBorder: 'group-hover:border-blue-500/50'
        },
        {
            icon: BarChart,
            title: 'Admin Dashboards',
            description: 'Club admins can upload events, manage members, handle updates, and track engagement analytics in real-time.',
            color: 'text-purple-400',
            bg: 'bg-purple-400/10',
            hoverBorder: 'group-hover:border-purple-500/50'
        },
        {
            icon: Bell,
            title: 'Real-Time Updates',
            description: 'Get instant notifications about new events, club announcements, and changes that matter to you. Stay in the loop.',
            color: 'text-pink-400',
            bg: 'bg-pink-400/10',
            hoverBorder: 'group-hover:border-pink-500/50'
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Everything You Need
                    </h2>
                    <p className="text-gray-400 text-lg">
                        ClubVerse brings all the tools together to transform how students connect with campus life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`
                group p-8 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-2
                ${feature.hoverBorder} hover:shadow-2xl hover:bg-[#0f1522]/80
              `}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.bg} transition-transform group-hover:scale-110 duration-300`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                            <div className="flex items-center text-cyan-400 font-medium group-hover:gap-3 gap-2 transition-all cursor-pointer">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
