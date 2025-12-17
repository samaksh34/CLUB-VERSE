import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import EventCard from '../components/events/EventCard';
import Modal from '../components/ui/Modal';
import { clubs, events } from '../data/mockData';
import { Users, Calendar, Clock, CheckCircle, Mail, Instagram, User, ArrowLeft, MapPin } from 'lucide-react';

const ClubDetailsPage = () => {
    const { id } = useParams();
    const [selectedEvent, setSelectedEvent] = useState(null);

    const club = useMemo(() => clubs.find(c => c.id === parseInt(id)), [id]);

    const clubEvents = useMemo(() => {
        return club ? events.filter(e => e.club === club.name) : [];
    }, [club]);

    if (!club) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center text-white">
                    Club not found
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="bg-background min-h-screen pb-20">

                {/* HERO SECTION */}
                <div className="relative h-[400px] md:h-[500px]">
                    {/* Banner Image */}
                    <img
                        src={club.banner}
                        alt={club.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040B1C] via-[#040B1C]/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-10 z-10">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-8">
                            {/* Logo Overlay */}
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl p-1 bg-[#040B1C] border border-white/20 shadow-2xl shrink-0 -mb-10 md:mb-0 relative z-20">
                                <img
                                    src={club.logo}
                                    alt={club.name}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 mb-4 md:mb-2">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full backdrop-blur-md">
                                        {club.domain}
                                    </span>
                                    {club.active && (
                                        <span className="px-3 py-1 text-xs font-bold text-green-400 bg-green-400/10 border border-green-400/20 rounded-full backdrop-blur-md flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" /> Active
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{club.name}</h1>
                                <p className="text-xl text-gray-300 font-medium">{club.vision}</p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mb-4 md:mb-2">
                                <Button className="shadow-lg shadow-blue-500/20 min-w-[140px]">Join Club</Button>
                                <Button variant="secondary" className="bg-white/10 hover:bg-white/20 border-transparent text-white min-w-[120px]">Follow</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
                    <Link to="/clubs" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Clubs
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* LEFT COLUMN: About, Stats, Contact */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* About Section */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    About the Club
                                    <div className="h-px bg-white/10 flex-grow" />
                                </h2>
                                <div className="bg-[#0F1522] border border-white/5 p-8 rounded-2xl glass-card">
                                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                        {club.description}
                                    </p>
                                    <h3 className="text-lg font-bold text-white mb-2">Our Vision</h3>
                                    <p className="text-gray-400 italic">"{club.vision}"</p>
                                </div>
                            </section>

                            {/* Stats Section */}
                            <section>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <StatCard label="Founded" value={club.founded} icon={Calendar} color="text-purple-400" />
                                    <StatCard label="Members" value={club.members} icon={Users} color="text-blue-400" />
                                    <StatCard label="Events" value={club.eventsHosted} icon={Clock} color="text-pink-400" />
                                    <StatCard label="Status" value={club.active ? 'Active' : 'Inactive'} icon={CheckCircle} color="text-green-400" />
                                </div>
                            </section>

                            {/* Upcoming Events Section */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    Events Organized
                                    <div className="h-px bg-white/10 flex-grow" />
                                </h2>
                                {clubEvents.length > 0 ? (
                                    <div className="space-y-6">
                                        {clubEvents.map(event => (
                                            <EventCard key={event.id} event={event} onOpen={setSelectedEvent} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-8 text-center border border-white/5 rounded-2xl bg-white/[0.02]">
                                        <p className="text-gray-400">No upcoming events listed at the moment.</p>
                                    </div>
                                )}
                            </section>

                        </div>

                        {/* RIGHT COLUMN: Team, Sidebar Info */}
                        <div className="space-y-12">

                            {/* Core Team */}
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6">Core Team</h2>
                                <div className="space-y-4">
                                    {club.team.map((member, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-[#0F1522] border border-white/5 hover:border-white/10 transition-colors">
                                            <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10" />
                                            <div>
                                                <h4 className="text-white font-bold">{member.name}</h4>
                                                <p className="text-sm text-cyan-400">{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Contact & Socials */}
                            <section className="bg-gradient-to-br from-[#0F1522] to-[#1e293b] p-6 rounded-2xl border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-6">Connect with us</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-gray-400" />
                                        </div>
                                        {club.email}
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                            <Instagram className="w-5 h-5 text-pink-400" />
                                        </div>
                                        {club.instagram}
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-300">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                            <User className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">Coordinator</div>
                                            <div>{club.coordinator}</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reusing Modal for Event Details */}
            <Modal
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
                title={null}
            >
                {selectedEvent && (
                    <div className="animate-fade-in">
                        <div className="relative w-full aspect-video mb-6">
                            <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-90" />
                        </div>

                        <div className="px-6 md:px-8 mb-8">
                            <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-3 inline-block">
                                {selectedEvent.category}
                            </span>
                            <h2 className="text-3xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                            <p className="text-gray-300 mb-6">{selectedEvent.description}</p>
                            <div className="flex gap-4 pb-6">
                                <Button className="flex-1">Register Now</Button>
                                <Button variant="secondary" onClick={() => setSelectedEvent(null)}>Close</Button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

        </Layout>
    );
};

const StatCard = ({ label, value, icon: Icon, color }) => (
    <div className="bg-[#0F1522] border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors group">
        <Icon className={`w-6 h-6 ${color} mb-2 group-hover:scale-110 transition-transform`} />
        <div className="text-xl font-bold text-white">{value}</div>
        <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
);

export default ClubDetailsPage;
