import React from 'react';
import { skillsSection, techStack } from '../portfolio';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import skill from "../assets/images/skill.svg";

function Skills() {
    const { t } = useTranslation();

    if (!skillsSection.display) return null;

    return (
        <section id="skills" className="py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                    <motion.img
                        src={skill}
                        alt="Skills"
                        className="w-full h-auto max-w-lg mx-auto"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-10">
                    <motion.h1
                        className="text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {t('skills.title')}
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-500 dark:text-gray-400 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {t('skills.subtitle')}
                    </motion.p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                        {skillsSection.softwareSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="text-4xl text-gray-500 hover:text-primary transition-colors duration-300 cursor-pointer"
                                title={skill.skillName}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <i className={skill.fontAwesomeClassname}></i>
                            </motion.div>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <motion.p
                            className="text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                        >
                            {t('skills.skill1')}
                        </motion.p>
                        <motion.p
                            className="text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {t('skills.skill2')}
                        </motion.p>
                        <motion.p
                            className="text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {t('skills.skill3')}
                        </motion.p>
                    </div>

                    {techStack.viewSkillBars && (
                        <div className="mt-10 space-y-6">
                            {techStack.experience.map((exp, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{exp.Stack}</span>
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{exp.progressPercentage}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <motion.div
                                            className="bg-primary h-2.5 rounded-full"
                                            style={{ width: exp.progressPercentage }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: exp.progressPercentage }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Skills;
