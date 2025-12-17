import React, { useEffect, useState, useRef } from 'react';

const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                startCount();
                observer.disconnect(); // Count only once
            }
        });

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const startCount = () => {
        let start = 0;
        const increment = end / (duration / 16); // 60fps
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);
    };

    return { count, countRef };
};

const StatCard = ({ value, label, suffix = '+' }) => {
    const numericValue = parseInt(value); // simple parsing
    const displaySuffix = isNaN(numericValue) ? value : suffix; // handle non-numeric cases roughly
    const { count, countRef } = useCountUp(isNaN(numericValue) ? 0 : numericValue);

    return (
        <div
            ref={countRef}
            className="p-8 rounded-2xl bg-[#0f1522]/50 backdrop-blur-sm border border-white/5 text-center group hover:border-cyan-500/30 hover:bg-[#0f1522] transition-all duration-500 shadow-lg hover:shadow-cyan-500/10"
        >
            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                {isNaN(numericValue) ? value : count}{displaySuffix}
            </div>
            <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
                {label}
            </div>
        </div>
    );
};

const StatsSection = () => {
    const stats = [
        { value: '25', label: 'Active Clubs', suffix: '+' },
        { value: '200', label: 'Events Hosted', suffix: '+' },
        { value: '10000', label: 'Registrations', suffix: '+' }, // normalized for countup
    ];

    return (
        <section className="py-12 border-b border-white/5 bg-white/[0.02] relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} value={stat.value} label={stat.label} suffix={stat.suffix} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
