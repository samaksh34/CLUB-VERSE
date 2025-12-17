import React from 'react';
import { Calendar, Clock, MapPin, Users, TrendingUp, Zap } from 'lucide-react';
import Button from '../ui/Button';

const EventCard = ({ event, onOpen }) => {
    return (
        <div className="bg-[#0F1522] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col md:flex-row group h-full">
            {/* Image Section */}
            <div className="relative w-full md:w-80 h-48 md:h-auto shrink-0 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {event.badges?.includes('Featured') && (
                        <span className="px-3 py-1 text-xs font-bold bg-cyan-500 text-white rounded-full shadow-lg shadow-cyan-500/20 flex items-center gap-1">
                            <Zap className="w-3 h-3 fill-current" /> Featured
                        </span>
                    )}
                    {event.badges?.includes('Trending') && (
                        <span className="px-3 py-1 text-xs font-bold bg-orange-500 text-white rounded-full shadow-lg shadow-orange-500/20 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> Trending
                        </span>
                    )}
                </div>

                <div className="absolute bottom-4 left-4 md:hidden">
                    <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md rounded-lg text-white border border-white/10 uppercase tracking-wider">
                        {event.category}
                    </span>
                </div>

                {/* Category Badge for Desktop */}
                <div className="absolute bottom-4 left-4 hidden md:block">
                    <span className="px-3 py-1 text-xs font-bold bg-[#0F1522]/80 backdrop-blur-md text-gray-300 rounded-md border border-white/10">
                        {event.category}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow w-full">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                            {event.title}
                        </h3>
                        <p className="text-cyan-400/90 text-sm font-medium mb-3">
                            {event.club}
                        </p>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-5 line-clamp-2 md:line-clamp-none flex-grow">
                    {event.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-cyan-500/70" />
                        {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-500/70" />
                        {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-500/70" />
                        {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-cyan-500/70" />
                        {event.registeredCount} registered
                    </div>
                </div>

                <div className="flex gap-4 mt-auto">
                    <Button
                        variant="secondary"
                        className="flex-1 text-sm py-2.5 bg-[#1E293B] border-transparent hover:bg-[#283549]"
                        onClick={() => onOpen(event)}
                    >
                        View Details
                    </Button>
                    <Button className="flex-1 text-sm py-2.5 shadow-lg shadow-cyan-500/20">
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
