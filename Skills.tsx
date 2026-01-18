
import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML5', level: 'Advanced', icon: 'M5 3l1.496 15.504L12 21l5.504-2.496L19 3H5zm2.75 12h-2l-.5-6h11.5l-.5 6h-2l-.5-2.5h-4l-.5 2.5z' },
    { name: 'CSS3', level: 'Advanced', icon: 'M5 3l1.496 15.504L12 21l5.504-2.496L19 3H5zm12 3H7v2h8l-.5 4.5L12 14.5l-2.5-2H7l4 3 4.5-3.5L17 6z' },
    { name: 'Flexbox', level: 'Expert', icon: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v4H8v-4z' },
    { name: 'React', level: 'Advanced', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
    { name: 'Tailwind CSS', level: 'Intermediate', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: 'JavaScript', level: 'Expert', icon: 'M3 3h18v18H3V3zm12 12h2v-2h-2v2zm-2-2h2v-2h-2v2zm2-2h2V9h-2v2z' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">My Skills</h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          I specialize in building responsive, interactive, and accessible web applications using the latest industry standards.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="w-full sm:w-64 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={skill.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.name}</h3>
            <p className="text-slate-500 font-medium">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
