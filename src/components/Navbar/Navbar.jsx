import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import businessCard from '../../assets/images/card.jpeg';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = businessCard;
        link.download = 'Hanuman_Enterprises_Business_Card.jpeg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'py-3 bg-white/85 backdrop-blur-md border-b border-white/20 shadow-lg' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                    <div className="flex flex-row items-center gap-2 leading-none">
                        <span className="text-lg font-outfit font-extrabold text-h-orange">HANUMAN</span>
                        <span className="text-lg font-outfit font-extrabold text-h-navy">ENTERPRISES</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-h-navy hover:text-h-orange transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-h-orange transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <button
                        onClick={handleDownload}
                        className="bg-h-navy text-white px-6 py-2.5 rounded-full flex items-center gap-2 font-semibold hover:bg-h-orange hover:shadow-lg hover:shadow-h-orange/20 transition-all active:scale-95"
                    >
                        <Download size={18} />
                        <span>Card</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-h-navy" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 bg-white flex flex-col justify-center items-center gap-8 z-[999] overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-bold text-h-navy hover:text-h-orange transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={handleDownload}
                            className="bg-h-orange text-white px-8 py-4 rounded-full flex items-center gap-3 font-bold text-lg shadow-lg shadow-h-orange/30 transition-transform active:scale-95"
                        >
                            <Download size={20} />
                            <span>Download Business Card</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
