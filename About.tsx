
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mb-6"></div>
          <p className="text-slate-600 italic">"Justice through Law, Innovation through Tech."</p>
        </div>
        <div className="md:w-2/3 space-y-4">
          <p className="text-slate-700 text-lg leading-relaxed">
            I am currently pursuing my studies in the <strong>Law Discipline</strong> at <strong>Khulna University</strong>. My academic focus is on understanding the legal frameworks that govern our society, while my personal curiosity leads me into the world of web technologies.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
            <p className="text-slate-800 font-medium">
              Studying at <span className="text-blue-700 font-bold">Khulna University</span> is a matter of pride for me. This institution has a legacy of being a pioneer in Bangladesh's education system, notably making history by launching the <span className="underline decoration-blue-500 decoration-2">first-ever BBA program</span> in the country in <span className="text-blue-700 font-bold">1991</span>.
            </p>
          </div>
          <p className="text-slate-700 text-lg leading-relaxed">
            As a student of Law, I bring a unique analytical perspective to my technical projects, ensuring that every interface I build is not just functional but also follows logical structure and ethical design principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
