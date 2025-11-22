import React from 'react';
import { motion } from 'framer-motion';

function BackgroundDecorations() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {/* Floating geometric shapes */}
            
            {/* Large circle - top right */}
            <motion.div
                className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 dark:opacity-20"
                style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Medium circle - bottom left */}
            <motion.div
                className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-20 dark:opacity-20"
                style={{
                    background: 'linear-gradient(225deg, #3b82f6 0%, #a855f7 100%)',
                    filter: 'blur(50px)',
                }}
                animate={{
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Small accent circle - middle */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-15 dark:opacity-15"
                style={{
                    background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
                    filter: 'blur(30px)',
                }}
                animate={{
                    y: [0, 50, 0],
                    x: [0, -30, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                }}
            />

            {/* Rotating hexagon shapes */}
            <motion.div
                className="absolute top-1/4 left-1/3 w-32 h-32 opacity-12 dark:opacity-10"
                style={{
                    background: 'linear-gradient(60deg, #6366f1 0%, #3b82f6 100%)',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Triangle shape - bottom right */}
            <motion.div
                className="absolute bottom-1/4 right-1/2 w-48 h-48 opacity-12 dark:opacity-12"
                style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    filter: 'blur(20px)',
                }}
                animate={{
                    rotate: [0, 180, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            />

            {/* Diamond shape - top center */}
            <motion.div
                className="absolute top-1/3 left-1/2 w-40 h-40 opacity-10 dark:opacity-10"
                style={{
                    background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
                animate={{
                    rotate: [0, -360],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            />

            {/* Decorative dots pattern */}
            <div className="absolute top-1/2 left-1/4 grid grid-cols-3 gap-4 opacity-30 dark:opacity-30">
                {[...Array(9)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Decorative dots pattern - bottom */}
            <div className="absolute bottom-1/3 right-1/4 grid grid-cols-4 gap-3 opacity-30 dark:opacity-30">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                            background: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#ec4899' : '#3b82f6'
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            {/* Gradient orbs for depth */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-10 dark:opacity-10"
                style={{
                    background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    transform: 'translate(-50%, -50%)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}

export default BackgroundDecorations;
