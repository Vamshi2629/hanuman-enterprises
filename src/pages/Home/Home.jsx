import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ChevronRight, Play } from 'lucide-react';

const Home = () => {
    return (
        <div className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden">
            {/* Background Parallax Simulation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-h-navy/5 rounded-l-[200px] -translate-y-10 rotate-3"></div>
                <div className="absolute bottom-0 left-10 w-64 h-64 bg-h-orange/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-12 h-[2px] bg-h-orange"></span>
                        <span className="text-h-orange font-bold uppercase tracking-widest text-sm">Building Your Vision</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl mb-8 leading-[1.1]">
                        <span className="text-h-navy">HANUMAN</span><br />
                        <span className="gradient-text">ENTERPRISES</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-lg font-medium">
                        Redefining spaces through innovative Architecture, sophisticated Interiors, and breathtaking Landscapes.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-h-navy text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl shadow-h-navy/20"
                        >
                            Learn More
                            <ChevronRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-h-navy/10 text-h-navy px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-h-navy/5 transition-all"
                        >
                            <div className="w-8 h-8 bg-h-orange rounded-full flex items-center justify-center text-white">
                                <Play size={16} fill="white" />
                            </div>
                            View Portfolio
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Main Visual Image Placeholder */}
                    <div className="w-full aspect-[4/5] bg-h-navy/10 rounded-[40px] overflow-hidden relative group">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                            alt="Premium Architecture"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-h-navy/80 to-transparent flex items-end p-10">
                            <div className="text-white">
                                <p className="text-h-orange font-bold mb-2">LATEST PROJECT</p>
                                <h3 className="text-2xl font-outfit uppercase">Siddipet Luxury Villa</h3>
                            </div>
                        </div>
                    </div>

                    {/* Animated Stats Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl space-y-4 border border-gray-100 hidden md:block"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-outfit font-extrabold text-h-orange">150+</span>
                            <span className="text-sm font-bold text-gray-500 uppercase leading-tight">Projects<br />Completed</span>
                        </div>
                        <div className="w-full h-[2px] bg-gray-100"></div>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-outfit font-extrabold text-h-navy">10+</span>
                            <span className="text-sm font-bold text-gray-500 uppercase leading-tight">Years Of<br />Experience</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Hero Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-h-navy opacity-30"
            >
                <MousePointer2 size={32} />
            </motion.div>
        </div>
    );
};

export default Home;
