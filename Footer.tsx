
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center">
      <p className="text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} MD. Mehedi Hassan. All rights reserved.
      </p>
      <p className="text-slate-600 text-xs mt-2">
        Proud Student of Law Discipline, Khulna University.
      </p>
    </footer>
  );
};

export default Footer;
