import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050914] border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Sparkles className="w-6 h-6 text-cyan-400" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                ClubVerse
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Connecting students to campus life through exciting events and meaningful experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Clubs', 'Events', 'About'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                <li key={item}>
                                    <Link to="/" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                        <div className="flex gap-4 mb-6">
                            {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <a href="mailto:contact@clubverse.edu" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 text-sm">
                            <Mail className="w-4 h-4" />
                            contact@clubverse.edu
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} ClubVerse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
