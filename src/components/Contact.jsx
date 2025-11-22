
import React from 'react';
import { contactInfo, socialMediaLinks } from '../portfolio';
import SocialMedia from './SocialMedia';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import contactMail from "../assets/images/contactMail.webp";

function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="w-full lg:w-1/2">
                    <motion.h1
                        className="text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {t('contact.title')}
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-500 dark:text-gray-400 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {t('contact.subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <SocialMedia />

                        <div className="mt-8">
                            <a
                                href={`mailto:${contactInfo.email_address} `}
                                className="btn-primary"
                            >
                                {t('buttons.sayHello')}
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <motion.div
                        className="w-full max-w-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={contactMail}
                            alt="Contact"
                            className="w-full h-auto rounded-full shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

