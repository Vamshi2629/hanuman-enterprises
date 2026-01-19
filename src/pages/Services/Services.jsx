import React from 'react';
import { motion } from 'framer-motion';
import { Home as House, Paintbrush, TreePine, PenTool, Layout, Palette, ChevronRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <House />,
            title: "Residential Interior",
            desc: "Transforming homes into elegant living spaces tailored to your comfort.",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600"
        },
        {
            icon: <Paintbrush />,
            title: "Commercial Interior",
            desc: "Designing productive and aesthetic workspaces for modern businesses.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
        },
        {
            icon: <Palette />,
            title: "Furniture Layout",
            desc: "Optimizing your space with functional and stylish furniture arrangements.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600"
        },
        {
            icon: <PenTool />,
            title: "Moduler Kitchen",
            desc: "State-of-the-art modular kitchen solutions with maximum efficiency.",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: <Layout />,
            title: "Lighting Design",
            desc: "Expert lighting consultation to set the perfect mood for your interiors.",
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800"
        },
        {
            icon: <TreePine />,
            title: "Wall Styling",
            desc: "Creative wall treatments, wallpapers, and textures for a premium look.",
            image: "https://images.unsplash.com/photo-1534349762230-e09ca4859e40?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
                    <div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-h-orange font-bold uppercase tracking-[0.3em] text-sm mb-4"
                        >
                            Our Expertise
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl text-h-navy"
                        >
                            Professional Services
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 max-w-sm mt-6 md:mt-0 font-medium"
                    >
                        We offer a wide range of services designed to bring your dream project to life with precision and creativity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl"
                        >
                            <img
                                src={s.image}
                                alt={s.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-h-navy via-h-navy/40 to-transparent"></div>

                            <div className="absolute inset-0 p-10 flex flex-col justify-end items-start">
                                <div className="w-14 h-14 bg-h-orange text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {s.icon}
                                </div>
                                <h3 className="text-2xl text-white mb-4">{s.title}</h3>
                                <p className="text-white/70 overflow-hidden h-0 group-hover:h-20 transition-all duration-500">
                                    {s.desc}
                                </p>
                                <motion.button
                                    whileHover={{ gap: '12px' }}
                                    className="mt-4 text-h-orange font-bold flex items-center gap-2 group-hover:opacity-100 opacity-0 transition-opacity"
                                >
                                    Learn More <ChevronRight size={16} />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
