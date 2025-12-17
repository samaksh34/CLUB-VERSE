import React from 'react';
import { Search } from 'lucide-react';
import Button from '../ui/Button';

const EventFilters = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories }) => {
    return (
        <div className="mb-12">
            {/* Header Title */}
            <h2 className="text-2xl font-bold text-white mb-6">Filter by Category</h2>

            {/* Categories Row */}
            <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
              px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border
              ${selectedCategory === category
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                            }
            `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0F1522] border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
            </div>
        </div>
    );
};

export default EventFilters;
