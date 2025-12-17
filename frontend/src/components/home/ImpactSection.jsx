import React from 'react';
import { BarChart, Calendar, Users, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';

const ImpactSection = () => {
    const stats = [
        { value: '25+', label: 'Active Clubs', icon: BarChart, description: 'Diverse communities across all interests' },
        { value: '200+', label: 'Events Hosted', icon: Calendar, description: 'Engaging activities every semester' },
        { value: '10K+', label: 'Student Registrations', icon: Users, description: 'Thriving community participation' },
        { value: '99%', label: 'Satisfaction Rate', icon: TrendingUp, description: 'Students love connecting on ClubVerse' },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Making Real Impact
                    </h2>
                    <p className="text-gray-400 text-lg">
                        ClubVerse connects thousands of students with opportunities to grow, learn, and thrive together
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <Card key={index} className="text-center group overflow-hidden relative">
                            <div className="flex justify-center mb-4">
                                <stat.icon className="w-8 h-8 text-cyan-400 opacity-80 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="text-4xl font-bold text-cyan-400 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-white font-semibold mb-2">
                                {stat.label}
                            </div>
                            <p className="text-gray-500 text-sm">
                                {stat.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
