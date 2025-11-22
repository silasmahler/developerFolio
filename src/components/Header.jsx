import React, { useState } from 'react';
import { greeting } from '../portfolio';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header({ isDark, setIsDark }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <header className={`sticky top-0 z-50 transition-colors duration-300 ${isDark ? 'bg-dark/80' : 'bg-light/80'} backdrop-blur-md border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className={`font-outfit font-bold text-2xl ${isDark ? 'text-white' : 'text-black'}`}>
                            {greeting.username}
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#skills" className={`font-medium hover:text-primary transition-colors ${isDark ? 'text-gray-300' : 'text-black'}`}>{t('navigation.skills')}</a>
                        <a href="#education" className={`font-medium hover:text-primary transition-colors ${isDark ? 'text-gray-300' : 'text-black'}`}>{t('navigation.education')}</a>
                        <a href="#experience" className={`font-medium hover:text-primary transition-colors ${isDark ? 'text-gray-300' : 'text-black'}`}>{t('navigation.experience')}</a>
                        <a href="#projects" className={`font-medium hover:text-primary transition-colors ${isDark ? 'text-gray-300' : 'text-black'}`}>{t('navigation.projects')}</a>
                        <a href="#contact" className={`font-medium hover:text-primary transition-colors ${isDark ? 'text-gray-300' : 'text-black'}`}>{t('navigation.contact')}</a>

                        <div className="flex items-center space-x-3">
                            <LanguageSwitcher />
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
                                aria-label="Toggle Dark Mode"
                            >
                                {isDark ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-2 rounded-full transition-colors ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-black'}`}
                        >
                            {isDark ? '☀️' : '🌙'}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-md ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-black hover:text-black hover:bg-gray-100'}`}
                        >
                            <span className="sr-only">Open menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                        <a href="#skills" className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-black hover:text-black hover:bg-gray-50'}`}>{t('navigation.skills')}</a>
                        <a href="#education" className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-black hover:text-black hover:bg-gray-50'}`}>{t('navigation.education')}</a>
                        <a href="#experience" className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-black hover:text-black hover:bg-gray-50'}`}>{t('navigation.experience')}</a>
                        <a href="#projects" className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-black hover:text-black hover:bg-gray-50'}`}>{t('navigation.projects')}</a>
                        <a href="#contact" className={`block px-3 py-2 rounded-md text-base font-medium ${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-black hover:text-black hover:bg-gray-50'}`}>{t('navigation.contact')}</a>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
