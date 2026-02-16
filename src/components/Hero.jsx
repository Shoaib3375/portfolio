import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ArrowRight, Download } from 'lucide-react';
import { clockCursor } from 'cursor-effects';

const Hero = () => {
    useEffect(() => {
        const cursorEffect = new clockCursor();

        return () => {
            cursorEffect.destroy();
        };
    }, []);

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-blue-600 font-semibold text-lg mb-2">Hello, I'm</h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                            {resumeData.personalInfo.name}
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
                            {resumeData.personalInfo.role}
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            {resumeData.summary.split('. ')[0]}. {resumeData.summary.split('. ')[1]}.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                            >
                                Get in Touch <ArrowRight size={18} />
                            </a>
                            <a
                                href="#"
                                className="px-8 py-3 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm flex items-center justify-center gap-2"
                            >
                                View Resume <Download size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white">
                            <img src="/src/assets/img.png" alt="Profile" className="w-full h-full object-contain" />
                        </div>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-10 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-0 left-10 w-20 h-20 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-20 h-20 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
