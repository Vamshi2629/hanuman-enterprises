import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
    };

    const openWhatsApp = () => {
        window.open('https://wa.me/917569585026', '_blank');
    };

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-h-orange font-bold uppercase tracking-[0.3em] text-sm mb-4">Contact Us</p>
                        <h2 className="text-5xl text-h-navy mb-8">Get In Touch</h2>
                        <p className="text-gray-500 text-lg mb-12 max-w-md">
                            Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4 items-center p-6 bg-off-white rounded-3xl group border border-transparent hover:border-h-orange/20 transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center text-h-orange group-hover:bg-h-orange group-hover:text-white transition-all">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">Call Us Now</p>
                                    <p className="text-h-navy font-bold text-md">+91 75695 85026</p>
                                    <p className="text-h-navy font-bold text-md">+91 98489 61969</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center p-6 bg-off-white rounded-3xl group border border-transparent hover:border-h-orange/20 transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center text-h-orange group-hover:bg-h-orange group-hover:text-white transition-all">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="text-h-navy font-bold text-md">hanuman9687@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center p-6 bg-off-white rounded-3xl group border border-transparent hover:border-h-orange/20 transition-all">
                                <div className="w-16 h-16 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center text-h-orange group-hover:bg-h-orange group-hover:text-white transition-all">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">Our Location</p>
                                    <p className="text-h-navy font-bold text-md leading-tight">H.No.9-4-65, Charwadhan Street, Siddipet 502103</p>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={openWhatsApp}
                            className="mt-12 w-full bg-[#25D366] text-white py-6 rounded-3xl font-bold flex items-center justify-center gap-4 shadow-xl shadow-[#25D366]/20 transition-all"
                        >
                            <MessageSquare size={24} />
                            CHAT ON WHATSAPP
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-off-white p-12 rounded-[50px] shadow-2xl relative border border-white"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-h-navy/50 uppercase tracking-widest ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 focus:border-h-orange outline-none transition-all placeholder:text-gray-300 font-semibold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-h-navy/50 uppercase tracking-widest ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 focus:border-h-orange outline-none transition-all placeholder:text-gray-300 font-semibold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-h-navy/50 uppercase tracking-widest ml-1">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 focus:border-h-orange outline-none transition-all placeholder:text-gray-300 font-semibold"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-h-navy/50 uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 focus:border-h-orange outline-none transition-all placeholder:text-gray-300 font-semibold resize-none"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-h-navy text-white py-6 rounded-3xl font-extrabold flex items-center justify-center gap-3 shadow-xl shadow-h-navy/30 transition-all hover:bg-h-orange"
                            >
                                <Send size={20} />
                                SEND MESSAGE
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
