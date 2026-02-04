'use client';

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6">About Project</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
          <p className="text-lg leading-relaxed">
            <strong className="text-slate-900">UniversalBible</strong> is designed to connect people with the Word of God in their heart language. 
            We believe that scripture should be accessible to everyone, instantly, without any barriers.
          </p>

          <p className="border-l-4 border-blue-500 pl-4 italic bg-slate-50 py-2 rounded-r-lg">
            "The Word, in your language."
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Our Mission</h2>
          <p>
            Our mission is to provide a clean, distraction-free reading experience for as many Bible translations as possible. 
            Whether you are reading on a mobile device on the go or on a desktop, UniversalBible adapts to your needs.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Data Source</h2>
          <p>
            The Bible texts rendered in this application are sourced from the open-source <a href="https://biblesupersearch.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Bible SuperSearch</a> data repository. 
            We are grateful for their work in digitizing and making these texts available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
