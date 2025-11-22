import React from 'react';
import { socialMediaLinks } from '../portfolio';
import { FaGithub, FaLinkedin, FaGoogle, FaGitlab, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function SocialMedia() {
    if (!socialMediaLinks.display) return null;

    return (
        <div className="flex space-x-5 mt-5">
            {socialMediaLinks.github && (
                <a href={socialMediaLinks.github} className="icon-button bg-gray-800 hover:bg-gray-700 text-white" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            )}
            {socialMediaLinks.linkedin && (
                <a href={socialMediaLinks.linkedin} className="icon-button bg-[#0077B5] hover:bg-[#006396] text-white" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            )}
            {socialMediaLinks.gmail && (
                <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button bg-[#D14836] hover:bg-[#B03C2D] text-white" target="_blank" rel="noopener noreferrer">
                    <FaGoogle />
                </a>
            )}
            {socialMediaLinks.gitlab && (
                <a href={socialMediaLinks.gitlab} className="icon-button bg-[#FC6D26] hover:bg-[#E24329] text-white" target="_blank" rel="noopener noreferrer">
                    <FaGitlab />
                </a>
            )}
            {socialMediaLinks.facebook && (
                <a href={socialMediaLinks.facebook} className="icon-button bg-[#3b5998] hover:bg-[#2d4373] text-white" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
            )}
            {socialMediaLinks.twitter && (
                <a href={socialMediaLinks.twitter} className="icon-button bg-[#1DA1F2] hover:bg-[#0c85d0] text-white" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
            )}
            {socialMediaLinks.instagram && (
                <a href={socialMediaLinks.instagram} className="icon-button bg-[#E1306C] hover:bg-[#C13584] text-white" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            )}
        </div>
    );
}

export default SocialMedia;
