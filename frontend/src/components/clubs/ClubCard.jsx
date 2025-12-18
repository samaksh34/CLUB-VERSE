import React from 'react';
import { Users, Calendar, ArrowRight, Star } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const ClubCard = ({ club }) => {
    return (
        <div className="group relative bg-[#0F1522] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col h-full">
            {/* Top Banner Gradient Overlay */}
            <div className="h-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 relative">
                <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full backdrop-blur-md">
                        {club.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="px-6 pb-6 mt-[-3rem] flex flex-col flex-grow relative z-10">
                {/* Logo */}
                <div className="w-20 h-20 rounded-2xl p-1 bg-[#0F1522] border border-white/10 mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <img
                        src={club.logo}
                        alt={club.name}
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                {/* Text Content */}
                <div className="mb-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {club.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {club.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 rounded-lg p-2.5 flex items-center gap-2.5">
                            <Users className="w-4 h-4 text-blue-400" />
                            <div>
                                <div className="text-xs text-gray-400 font-medium">Members</div>
                                <div className="text-sm font-bold text-white">{club.membersCount}</div>
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2.5 flex items-center gap-2.5">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            <div>
                                <div className="text-xs text-gray-400 font-medium">Events</div>
                                <div className="text-sm font-bold text-white">{club.eventsCount}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                    <Link to={`/clubs/${club.id}`} className="flex-1">
                        <Button className="w-full text-sm py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-none shadow-lg shadow-cyan-500/20">
                            View Club
                        </Button>
                    </Link>
                    <Button variant="secondary" className="px-3 bg-[#1e293b] border-transparent hover:bg-[#334155] text-gray-300 hover:text-white">
                        <Star className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ClubCard;
