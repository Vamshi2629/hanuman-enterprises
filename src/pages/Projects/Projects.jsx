import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PlayCircle, Image as ImageIcon } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const gallery = [
        { type: 'Image', title: 'Modern Kitchen', category: 'Interior', url: 'https://images.unsplash.com/photo-1556911223-e452028e96ad?auto=format&fit=crop&q=80&w=800' },
        { type: 'Image', title: 'Luxury Villa', category: 'Architecture', url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800' },
        { type: 'Video', title: 'Landscape Walkthrough', category: 'Landscape', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
        { type: 'Image', title: 'Office Space', category: 'Interior', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800' },
        { type: 'Video', title: 'Interior Teaser', category: 'Interior', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800' },
    ];

    const filteredItems = filter === 'All' ? gallery : gallery.filter(item => item.type === filter);

    return (
        <section className="py-24 bg-h-navy text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-h-orange font-bold uppercase tracking-[0.3em] text-sm mb-4"
                    >
                        Portfolio
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl text-white underline decoration-h-orange decoration-4 underline-offset-8"
                    >
                        Our Previous Projects
                    </motion.h2>
                </div>

                <div className="flex justify-center gap-4 mb-12">
                    {['All', 'Image', 'Video'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${filter === f ? 'bg-h-orange text-white shadow-lg shadow-h-orange/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-square rounded-[30px] overflow-hidden"
                            >
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-h-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-8 backdrop-blur-sm">
                                    <div className="w-16 h-16 bg-h-orange rounded-full flex items-center justify-center mb-6">
                                        {item.type === 'Video' ? <PlayCircle size={32} /> : <ImageIcon size={32} />}
                                    </div>
                                    <p className="text-h-orange font-bold mb-2 tracking-widest text-sm">{item.category}</p>
                                    <h3 className="text-2xl text-white">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
