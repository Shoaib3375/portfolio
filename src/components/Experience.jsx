import React from 'react';
import { resumeData } from '../data/resume';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 inline-block relative">
                        Professional Experience
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 opacity-30 rounded-full"></span>
                    </h2>
                </div>

                <div className="space-y-12">
                    {resumeData.experience.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 relative overflow-hidden transition-all hover:shadow-md"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
                                    <div className="flex items-center text-blue-600 font-medium mt-1">
                                        <Briefcase size={18} className="mr-2" />
                                        {job.company}
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end text-gray-500 text-sm">
                                    <div className="flex items-center mb-1">
                                        <Calendar size={16} className="mr-2" />
                                        {job.period}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin size={16} className="mr-2" />
                                        {job.location}
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {job.description.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                                        <span className="mr-3 text-blue-500 mt-1.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
