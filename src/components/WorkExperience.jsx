import React from 'react';
import { workExperiences } from '../portfolio';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function WorkExperience() {
    const { t } = useTranslation();

    if (!workExperiences.display) return null;

    return (
        <section id="experience" className="py-20">
            <motion.h1
                className="text-4xl font-bold mb-10 text-center text-black dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t('sections.workExperience')}
            </motion.h1>

            <div className="space-y-8">
                {workExperiences.experience.map((exp, index) => (
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
                                <img src={exp.companylogo} alt={exp.company} className="w-20 h-20 object-contain" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.date}</span>
                                </div>
                                <h4 className="text-xl font-semibold text-black dark:text-gray-300 mb-2">{t(`workExperience.${exp.companyKey}.role`)}</h4>
                                <p className="text-black dark:text-gray-300 mb-4">{t(`workExperience.${exp.companyKey}.desc`)}</p>
                                <ul className="list-disc list-inside space-y-1 text-black dark:text-gray-300 text-sm">
                                    {exp.companyKey === 'capgemini' && (
                                        <>
                                            <li className="font-semibold">{t(`workExperience.${exp.companyKey}.bullets.header`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.mercedes`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.aws`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.modernization`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.iac`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.security`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.migration`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.coordination`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.devops`)}</li>
                                        </>
                                    )}
                                    {exp.companyKey === 'kreinn' && (
                                        <>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet1`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet2`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet3`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet4`)}</li>
                                        </>
                                    )}
                                    {exp.companyKey === 'appsAssociates' && (
                                        <>
                                            <li className="font-semibold">{t(`workExperience.${exp.companyKey}.bullets.header`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.ifs`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.university`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.football`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.carRental`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.energy`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.payment`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.consulting`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.ims`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.terraform`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullets.training`)}</li>
                                        </>
                                    )}
                                    {exp.companyKey === 'adesso' && (
                                        <>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet1`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet2`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet3`)}</li>
                                        </>
                                    )}
                                    {exp.companyKey === 'fhdo' && (
                                        <>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet1`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet2`)}</li>
                                            <li>{t(`workExperience.${exp.companyKey}.bullet3`)}</li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default WorkExperience;
