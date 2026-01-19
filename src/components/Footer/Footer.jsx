import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-h-navy text-white pt-20 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-outfit font-extrabold text-h-orange">HANUMAN</span>
                                <span className="text-xl font-outfit font-extrabold text-white">ENTERPRISES</span>
                            </div>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Architecture | Interior | Landscape
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-h-orange hover:-translate-y-1 transition-all"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-h-orange font-outfit font-bold text-lg mb-8 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-h-orange font-outfit font-bold text-lg mb-8 uppercase tracking-wider">Contact Us</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4 group">
                                <Phone className="text-h-orange shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <div className="text-gray-400">
                                    <p>+91 75695 85026</p>
                                    <p>+91 98489 61969</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <Mail className="text-h-orange shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                <p className="text-gray-400">hanuman9687@gmail.com</p>
                            </div>
                            <div className="flex gap-4 group">
                                <MapPin className="text-h-orange shrink-0 group-hover:scale-110 transition-transform" size={24} />
                                <p className="text-gray-400 italic">H.No.9-4-65, Charwadhan Street, Siddipet 502103</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Hanuman Enterprises. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="bg-h-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-h-orange/30 transition-all active:scale-90"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
