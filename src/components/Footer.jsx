import React from 'react';
import { resumeData } from '../data/resume';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold">
                            {resumeData.personalInfo.name.split(' ')[0]}<span className="text-blue-500">.</span>
                        </span>
                        <p className="text-gray-400 mt-2 text-sm">{resumeData.personalInfo.role}</p>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href={resumeData.personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm flex items-center justify-center">
                    <p>© {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
