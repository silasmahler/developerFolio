
import React from 'react';
import { greeting, illustration } from '../portfolio';
import SocialMedia from './SocialMedia';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import undrawn2 from "../assets/images/undrawn2.svg";

function Greeting() {
    const { t } = useTranslation();

    if (!greeting.displayGreeting) return null;

    return (
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)]">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-10 text-center lg:text-left">
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-black dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {t('greeting.title')}
                    <span className="wave-emoji inline-block ml-2">👋</span>
                </motion.h1>
                <motion.p
                    className="text-lg sm:text-xl text-black dark:text-gray-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {t('greeting.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center lg:items-start"
                >
                    <SocialMedia />

                    {greeting.resumeLink && (
                        <div className="mt-8">
                            <a
                                href={greeting.resumeLink}
                                className="btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('buttons.seeResume')}
                            </a>
                        </div>
                    )}
                </motion.div>
            </div>

            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                {greeting.profileImage ? (
                    <div className="w-full h-auto max-w-lg mx-auto">
                        <img
                            src={greeting.profileImage}
                            alt={greeting.username}
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                        />
                    </div>
                ) : illustration.animated ? (
                    <div className="w-full h-auto max-w-lg mx-auto">
                        {/* Placeholder for Lottie or SVG animation. Using a simple image or SVG for now if available, or just a placeholder div */}
                        <img src={undrawn2} alt="Man on table" className="w-full h-auto" />
                        {/* Note: In Vite we need to handle SVG imports differently if we want them as components, or just use img tag. 
                 The original code might have used a Lottie animation. 
                 Since I don't have the Lottie file or logic here, I'll try to use the SVG if it exists. 
                 Wait, I need to check if manOnTable.svg exists. */}
                    </div>
                ) : (
                    <div className="w-full h-auto max-w-lg mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
                        <span className="text-black dark:text-gray-500">Illustration</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Greeting;

