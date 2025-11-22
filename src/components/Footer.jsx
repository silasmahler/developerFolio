import React from 'react';
import { greeting } from '../portfolio';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="py-8 text-center">
            <p className="text-black dark:text-gray-400 text-sm">
                {t('footer.madeWith')} <span className="text-red-500">❤️</span> {t('footer.by')} {greeting.username}
            </p>
        </footer>
    );
}

export default Footer;
