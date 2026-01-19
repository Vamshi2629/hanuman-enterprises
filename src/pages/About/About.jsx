import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Target size={32} />,
            title: "Our Mission",
            desc: "To deliver exceptional architectural and interior solutions that exceed expectations through innovation and craftsmanship.",
            color: "bg-h-orange"
        },
        {
            icon: <Eye size={32} />,
            title: "Our Vision",
            desc: "To be the leading design firm recognized for transforming landscapes and creating timeless lifestyle experiences.",
            color: "bg-h-navy"
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Why Choose Us",
            desc: "With decades of expertise, we prioritize precision, quality, and your unique vision in every project we undertake.",
            color: "bg-h-mint"
        }
    ];

    return (
        <section className="py-24 bg-off-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-h-orange font-bold uppercase tracking-[0.3em] text-sm mb-4"
                    >
                        Since 1996
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl text-h-navy"
                    >
                        About Our Company
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="w-full aspect-square bg-h-navy/10 rounded-[60px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                                alt="Office Space"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-2/3 aspect-video bg-h-orange rounded-3xl p-8 flex flex-col justify-end text-white shadow-2xl">
                            <p className="text-lg font-bold leading-tight">"Design is not just what it looks like and feels like. Design is how it works."</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl text-h-navy normal-case">We shape our buildings; thereafter they shape us.</h3>
                        <p className="text-gray-500 text-lg">
                            Hanuman Enterprises has been a pioneer in the architecture and interior design industry for over 10 years. Based in Siddipet, we have successfully delivered numerous projects ranging from residential villas to commercial landscapes.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-h-orange rounded-full"></div>
                                <span className="font-bold text-h-navy uppercase tracking-wider">Professional Architecture</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-h-mint rounded-full"></div>
                                <span className="font-bold text-h-navy uppercase tracking-wider">Exquisite Interiors</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-h-navy rounded-full"></div>
                                <span className="font-bold text-h-navy uppercase tracking-wider">Creative Landscaping</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
                    {features.map((f, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-50 text-center group"
                        >
                            <div className={`w-20 h-20 ${f.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:rotate-12`}>
                                {f.icon}
                            </div>
                            <h4 className="text-xl mb-4 text-h-navy">{f.title}</h4>
                            <p className="text-gray-500">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
