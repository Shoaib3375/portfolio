import React from 'react';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 inline-block relative">
                        Get In Touch
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 opacity-30 rounded-full"></span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</h4>
                                    <a href={`mailto:${resumeData.personalInfo.email}`} className="text-lg text-gray-900 hover:text-blue-600 transition-colors">
                                        {resumeData.personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone</h4>
                                    <p className="text-lg text-gray-900">
                                        {resumeData.personalInfo.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Location</h4>
                                    <p className="text-lg text-gray-900">
                                        {resumeData.personalInfo.location}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">LinkedIn</h4>
                                    <a href={resumeData.personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-900 hover:text-blue-600 transition-colors">
                                        {resumeData.personalInfo.linkedin}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100" onSubmit={(e) => e.preventDefault()}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
