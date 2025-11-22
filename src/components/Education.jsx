import React from 'react';
import { educationInfo } from '../portfolio';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();

    if (!educationInfo.display) return null;

    return (
        <section id="education" className="py-20">
            <motion.h1
                className="text-4xl font-bold mb-10 text-center text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t('sections.education')}
            </motion.h1>

            <div className="space-y-8">
                {educationInfo.schools.map((school, index) => (
                    <motion.div
                        key={index}
                        className="card p-6 hover:-translate-y-1"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="flex-shrink-0 bg-white p-2 rounded-lg">
                                <img src={school.logo} alt={school.schoolName} className="w-20 h-20 object-contain" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{school.schoolName}</h3>
                                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{school.duration}</span>
                                </div>
                                <h4 className="text-xl font-semibold text-black dark:text-gray-300 mb-2">{school.subHeader}</h4>
                                <p className="text-black dark:text-gray-300 mb-4">{school.desc}</p>
                                {school.descBullets && (
                                    <ul className="list-disc list-inside space-y-1 text-black dark:text-gray-300 text-sm">
                                        {school.descBullets.map((bullet, i) => (
                                            <li key={i}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Education;
