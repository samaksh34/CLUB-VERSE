import React from 'react';
import { Search } from 'lucide-react';

const ClubFilters = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories }) => {
    return (
        <div className="mb-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                    Explore College Clubs
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Discover communities that match your interests and passions. Join, connect, and grow.
                </p>
            </div>

            {/* Categories Row */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
              px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
              ${selectedCategory === category
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                            }
            `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Search Bar - Centered */}
            <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                <input
                    type="text"
                    placeholder="Search clubs by name or domain..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0F1522]/80 backdrop-blur-md border border-white/10 rounded-full py-4 pl-14 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-lg"
                />
            </div>
        </div>
    );
};

export default ClubFilters;
