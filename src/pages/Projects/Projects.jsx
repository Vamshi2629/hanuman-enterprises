import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PlayCircle, Image as ImageIcon } from 'lucide-react';
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

    const gallery = [

        { type: 'Video', title: 'Interior Teaser', category: 'Interior', url: video16 },
        { type: 'Video', title: 'Interior Teaser', category: 'Interior', url: video17 },
        { type: 'Video', title: 'Modern Kitchen', category: 'Interior', url: video18 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image1 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image2 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image3 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image4 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image5 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image6 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image7 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image8 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image9 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image10 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image11 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image12 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image13 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image14 },
        { type: 'Image', title: 'Contemporary Home', category: 'Architecture', url: image15 },

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
