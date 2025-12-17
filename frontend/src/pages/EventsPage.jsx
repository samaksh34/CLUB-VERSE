import React, { useState, useMemo } from 'react';
import Layout from '../components/layout/Layout';
import EventCard from '../components/events/EventCard';
import EventFilters from '../components/events/EventFilters';
import Modal from '../components/ui/Modal';
import Button from '../components/ui/Button';
import { events, categories } from '../data/mockData';
import { Calendar, MapPin, Clock, Users, X, Share2, ExternalLink } from 'lucide-react';

const EventsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                event.club.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <Layout>
            <div className="bg-background min-h-screen pt-8 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <EventFilters
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        categories={categories}
                    />

                    {filteredEvents.length > 0 ? (
                        <div className="space-y-6">
                            {filteredEvents.map(event => (
                                <EventCard key={event.id} event={event} onOpen={setSelectedEvent} />
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <div className="w-20 h-20 bg-[#0F1522] rounded-full flex items-center justify-center mb-6 ring-4 ring-white/5">
                                <SearchIcon className="w-10 h-10 text-purple-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">No Events Found</h3>
                            <p className="text-gray-400 max-w-md mx-auto mb-8">
                                We couldn't find any events matching your criteria. Try adjusting your filters or search query.
                            </p>
                            <Button
                                variant="primary"
                                className="bg-gradient-to-r from-pink-500 to-purple-600 border-none"
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            >
                                Reset Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {/* Event Details Modal */}
            <Modal
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
                title={null} // We handle title inside content for full banner effect if needed, but keeping standard for now
            >
                {selectedEvent && (
                    <div className="animate-fade-in">
                        {/* Banner Image */}
                        <div className="relative w-full aspect-video mb-6">
                            <img
                                src={selectedEvent.image}
                                alt={selectedEvent.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-90" />
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white/80 hover:text-white hover:bg-black/70 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Header Content */}
                        <div className="px-6 md:px-8 mb-8">
                            <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-3 inline-block">
                                {selectedEvent.category}
                            </span>
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <span>Hosted by</span>
                                <span className="text-cyan-400 font-semibold">{selectedEvent.club}</span>
                            </div>
                        </div>

                        {/* Grid Stats */}
                        <div className="px-6 md:px-8 grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-[#0F1522] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <Calendar className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Date</div>
                                    <div className="font-medium text-white">{selectedEvent.date}</div>
                                </div>
                            </div>

                            <div className="bg-[#0F1522] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Time</div>
                                    <div className="font-medium text-white">{selectedEvent.time}</div>
                                </div>
                            </div>

                            <div className="bg-[#0F1522] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-pink-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Venue</div>
                                    <div className="font-medium text-white">{selectedEvent.location}</div>
                                </div>
                            </div>

                            <div className="bg-[#0F1522] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                                    <Users className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Registered</div>
                                    <div className="font-medium text-white">{selectedEvent.registeredCount} people</div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="px-6 md:px-8 mb-8">
                            <h3 className="text-lg font-bold text-white mb-3">About this Event</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                {selectedEvent.description}
                            </p>
                        </div>

                        {/* Footer Actions */}
                        <div className="px-6 md:px-8 flex gap-4 pt-6 md:pb-6 border-t border-white/10">
                            <Button className="flex-1 text-base py-3 shadow-lg shadow-cyan-500/20">
                                Register Now <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="secondary" onClick={() => setSelectedEvent(null)} className="px-6 text-base py-3">
                                Close
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>
        </Layout>
    );
};

const SearchIcon = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="9" y1="9" x2="13" y2="13"></line>
        <line x1="13" y1="9" x2="9" y2="13"></line>
    </svg>
)

export default EventsPage;
