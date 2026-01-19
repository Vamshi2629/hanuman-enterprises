import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="App">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Navbar />
            <main>
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="services"><Services /></section>
                <section id="projects"><Projects /></section>
                <section id="contact"><Contact /></section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
