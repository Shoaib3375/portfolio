import React from 'react';
import { resumeData } from '../data/resume';
import { motion } from 'framer-motion';

const SkillCard = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
    >
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-100">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const { skills } = resumeData;

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                        Technical Skills
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 opacity-30 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and tools I use to build scalable solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCard title="Backend Development" skills={skills.backend} delay={0.1} />
                    <SkillCard title="Frontend Development" skills={skills.frontend} delay={0.2} />
                    <SkillCard title="Databases" skills={skills.databases} delay={0.3} />
                    <SkillCard title="DevOps & Tools" skills={skills.devops} delay={0.4} />
                    <SkillCard title="Machine Learning & AI" skills={skills.ai} delay={0.5} />
                    <SkillCard title="Core Competencies" skills={skills.competencies} delay={0.6} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
