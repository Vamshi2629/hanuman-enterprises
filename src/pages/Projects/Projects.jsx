import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PlayCircle, Image as ImageIcon, X, ChevronDown, Filter } from 'lucide-react';
import video16 from '../../assets/images/videos/16.mp4';
import video17 from '../../assets/images/videos/17.mp4';
import video18 from '../../assets/images/videos/18.mp4';
import image1 from '../../assets/images/1.jpeg';
import image2 from '../../assets/images/2.jpeg';
import image3 from '../../assets/images/3.jpeg';
import image4 from '../../assets/images/4.jpeg';
import image5 from '../../assets/images/5.jpeg';
import image6 from '../../assets/images/6.jpeg';
import image7 from '../../assets/images/7.jpeg';
import image8 from '../../assets/images/8.jpeg';
import image9 from '../../assets/images/9.jpeg';
import image10 from '../../assets/images/10.jpeg';
import image11 from '../../assets/images/11.jpeg';
import image12 from '../../assets/images/12.jpeg';
import image13 from '../../assets/images/13.jpeg';
import image14 from '../../assets/images/14.jpeg';
import image15 from '../../assets/images/15.jpeg';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(6);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const gallery = [

        { type: 'Video', title: 'Modern Kitchen', category: 'Kitchen', url: video16 },
        { type: 'Video', title: 'Interior Teaser', category: 'Commercial', url: video17 },
        { type: 'Video', title: 'Modern Kitchen', category: 'Kitchen', url: video18 },
        { type: 'Image', title: 'Contemporary Living', category: 'Living', url: image1 },
        { type: 'Image', title: 'Interior Teaser', category: 'Commercial', url: image2 },
        { type: 'Image', title: 'Bespoke Office', category: 'Office', url: image3 },
        { type: 'Image', title: 'Feature Wall', category: 'Living', url: image4 },
        { type: 'Image', title: 'Kid\'s Room', category: 'Bedroom', url: image5 },
        { type: 'Image', title: 'Elite Lounge', category: 'Commercial', url: image6 },
        { type: 'Image', title: 'Minimalist Dining', category: 'Kitchen', url: image7 },
        { type: 'Image', title: 'Master Bedroom', category: 'Kitchen', url: image8 },
        { type: 'Image', title: 'Office Cabin', category: 'Office', url: image9 },
        { type: 'Image', title: 'Classic Living', category: 'Living', url: image10 },
        { type: 'Image', title: 'Kid\'s Room', category: 'Bedroom', url: image11 },
        { type: 'Image', title: 'Interior Teaser', category: 'Commercial', url: image12 },
        { type: 'Image', title: 'Conference Room', category: 'Office', url: image13 },
        { type: 'Image', title: 'Interior Teaser', category: 'Living', url: image14 },
        { type: 'Image', title: 'Classic Living', category: 'Living', url: image15 },
    ];

    const interiorCategories = ['All', 'Commercial', 'Kitchen', 'Living', 'Bedroom', 'Office'];

    const filteredItems = filter === 'All' ? gallery : gallery.filter(item => item.category === filter);
    const visibleItems = filteredItems.slice(0, visibleCount);

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

                <div className="flex justify-center mb-12 relative z-[100]">
                    <div className="relative w-full max-w-xs">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full px-8 py-4 bg-white/5 border border-white/10 rounded-[20px] font-bold text-white flex items-center justify-between hover:bg-white/10 transition-all backdrop-blur-sm shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <Filter size={18} className="text-h-orange" />
                                <span>{filter === 'All' ? 'Filter Categories' : filter}</span>
                            </div>
                            <motion.div
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={20} className="text-gray-400" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-full left-0 w-full mt-3 bg-h-navy border border-white/10 rounded-[20px] overflow-hidden shadow-2xl backdrop-blur-xl z-[110]"
                                >
                                    {interiorCategories.map((f) => (
                                        <button
                                            key={f}
                                            onClick={() => {
                                                setFilter(f);
                                                setIsDropdownOpen(false);
                                                setVisibleCount(6); // Reset count on filter change
                                            }}
                                            className={`w-full px-8 py-4 text-left font-bold transition-all ${filter === f ? 'bg-h-orange text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((item, idx) => (
                            <motion.div
                                key={`${item.title}-${idx}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative aspect-square rounded-[30px] overflow-hidden"
                            >
                                {item.type === 'Video' ? (
                                    <video
                                        src={item.url}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:rotate-3 group-hover:scale-110 transition-transform duration-700"
                                    />
                                )}
                                <div className="absolute inset-0 bg-h-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-8 backdrop-blur-sm">
                                    <div
                                        className="w-16 h-16 bg-h-orange rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform"
                                        onClick={() => setSelectedProject(item)}
                                    >
                                        {item.type === 'Video' ? <PlayCircle size={32} /> : <ImageIcon size={32} />}
                                    </div>
                                    <p className="text-h-orange font-bold mb-2 tracking-widest text-sm">{item.category}</p>
                                    <h3 className="text-2xl text-white">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {visibleCount < filteredItems.length && (
                    <div className="flex justify-center mt-16">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setVisibleCount(filteredItems.length)}
                            className="bg-h-orange text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-h-orange/30 transition-all"
                        >
                            See More Projects
                        </motion.button>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] bg-h-navy/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-10 right-10 text-white hover:text-h-orange transition-colors z-[2100]"
                            onClick={() => setSelectedProject(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full aspect-video rounded-[40px] overflow-hidden shadow-2xl bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedProject.type === 'Video' ? (
                                <video
                                    src={selectedProject.url}
                                    className="w-full h-full object-contain"
                                    autoPlay
                                    controls
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={selectedProject.url}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-contain"
                                />
                            )}

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <p className="text-h-orange font-bold mb-2 tracking-widest text-sm uppercase">{selectedProject.category}</p>
                                <h3 className="text-3xl font-outfit font-bold">{selectedProject.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
