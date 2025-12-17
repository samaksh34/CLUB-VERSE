import React, { useState, useMemo } from 'react';
import Layout from '../components/layout/Layout';
import ClubCard from '../components/clubs/ClubCard';
import ClubFilters from '../components/clubs/ClubFilters';
import Button from '../components/ui/Button';
import { clubs, categories } from '../data/mockData';
import { Search } from 'lucide-react';

const ClubsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredClubs = useMemo(() => {
        return clubs.filter(club => {
            const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                club.domain.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || club.domain === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <Layout>
            <div className="bg-background min-h-screen pt-28 pb-20 relative">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <ClubFilters
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        categories={categories}
                    />

                    {filteredClubs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up md:gap-y-10">
                            {filteredClubs.map(club => (
                                <ClubCard key={club.id} club={club} />
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in-up">
                            <div className="w-24 h-24 bg-[#0F1522] rounded-full flex items-center justify-center mb-6 ring-4 ring-white/5 shadow-2xl">
                                <Search className="w-10 h-10 text-gray-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No Clubs Found</h3>
                            <p className="text-gray-400 max-w-md mx-auto mb-8">
                                We couldn't find any clubs matching "{searchQuery}" in {selectedCategory}. Try adjusting your search or filters.
                            </p>
                            <Button
                                variant="primary"
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                className="shadow-lg shadow-cyan-500/20"
                            >
                                Reset Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default ClubsPage;
