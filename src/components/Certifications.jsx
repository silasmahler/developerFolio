import React from 'react';
import { certifications } from '../portfolio';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Certifications() {
    const { t } = useTranslation();

    if (!certifications.display) return null;

    return (
        <section id="certifications" className="py-20">
            <motion.h1
                className="text-4xl font-bold mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t('sections.certifications')}
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">{cert.date}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;
