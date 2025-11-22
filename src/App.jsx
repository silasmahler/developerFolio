import React, { useState, useEffect } from 'react';
import { greeting } from './portfolio';
import './index.css';
import './i18n'; // Initialize i18n

// Components (to be implemented)
import Greeting from './components/Greeting';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import BackgroundDecorations from './components/BackgroundDecorations';

function App() {
    // Initialize dark mode from localStorage, default to true if not set
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });

    // Update document class and localStorage when isDark changes
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <div className="min-h-screen">
            <BackgroundDecorations />
            <Header isDark={isDark} setIsDark={setIsDark} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
                <Greeting />
                <Skills />
                <Education />
                <Certifications />
                <WorkExperience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
