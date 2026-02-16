import React from 'react';
import { resumeData } from '../data/resume';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 inline-block relative">
                        Featured Projects
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 opacity-30 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A selection of projects demonstrating my skills in full-stack development and system architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="h-48 bg-gray-100 relative overflow-hidden group-hover:bg-blue-50 transition-colors flex items-center justify-center">
                                {/* Placeholder for project image */}
                                <FolderGit2 size={48} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    {/* Placeholder links since resume didn't have specific URLs */}
                                    <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-900" title="View Code">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-900" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {/* Inferring tech stack tags based on description for visual flair */}
                                    {project.description.includes('Laravel') && <span className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded">Laravel</span>}
                                    {project.description.includes('React') || project.description.includes('Next.js') && <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">React/Next</span>}
                                    {project.description.includes('Spring Boot') && <span className="text-xs px-2 py-1 bg-green-50 text-green-600 rounded">Spring Boot</span>}
                                    {project.description.includes('AI') || project.description.includes('NLP') && <span className="text-xs px-2 py-1 bg-purple-50 text-purple-600 rounded">AI/ML</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
