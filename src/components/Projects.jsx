import React, { useState, useEffect } from 'react';
import { openSource, bigProjects, socialMediaLinks } from '../portfolio';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Projects() {
    const [repoData, setRepoData] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        if (openSource.showGithubProfile) {
            fetch('/profile.json')
                .then(result => {
                    if (result.ok) {
                        return result.json();
                    }
                })
                .then(response => {
                    if (response) {
                        setRepoData(response.data.user.pinnedItems.edges);
                    }
                })
                .catch(error => {
                    console.error("Error fetching profile.json", error);
                });
        }
    }, []);

    if (!bigProjects.display && !openSource.display) return null;

    return (
        <section id="projects" className="py-20">
            <motion.h1
                className="text-4xl font-bold mb-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t('sections.projects')}
            </motion.h1>

            {/* Big Projects */}
            {bigProjects.display && (
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-center mb-2">{t('projects.bigProjects.title')}</h2>
                    <p className="text-center text-gray-500 dark:text-gray-400 mb-10">{t('projects.bigProjects.subtitle')}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {bigProjects.projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
                                    <img src={project.image} alt={t(`projects.bigProjects.${project.projectKey}.name`)} className="h-full object-contain" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{t(`projects.bigProjects.${project.projectKey}.name`)}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6">{t(`projects.bigProjects.${project.projectKey}.desc`)}</p>
                                    <div className="flex flex-wrap gap-4">
                                        {project.footerLink.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary text-sm py-2 px-4"
                                            >
                                                {t(`projects.bigProjects.${project.projectKey}.${link.nameKey}`)}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* GitHub Projects */}
            {openSource.display && repoData.length > 0 && (
                <div>
                    <h2 className="text-2xl font-bold text-center mb-2">{t('projects.openSource.title')}</h2>
                    {openSource.subtitle && (
                        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">{t('projects.openSource.subtitle')}</p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repoData.map((repo, index) => {
                            const node = repo.node;
                            return (
                                <motion.a
                                    key={node.id}
                                    href={node.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:-translate-y-1"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate pr-4">{node.name}</h3>
                                        <span className="text-gray-500 text-sm flex items-center">
                                            <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: node.primaryLanguage.color }}></span>
                                            {node.primaryLanguage.name}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm line-clamp-3">
                                        {node.description}
                                    </p>
                                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center space-x-4">
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg>
                                                {node.stargazers.totalCount}
                                            </span>
                                            <span className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                {node.forkCount}
                                            </span>
                                        </div>
                                        <span>{Math.round(node.diskUsage / 1024)} MB</span>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </div>
                    <div className="text-center mt-10">
                        <a
                            href={socialMediaLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            {t('buttons.moreProjects')}
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
