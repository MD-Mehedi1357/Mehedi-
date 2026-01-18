
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out, Mehedi will get back to you soon!');
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-400">
            Whether it's a legal inquiry or a collaboration on a web project, my door is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Connect with me</h3>
              <div className="flex space-x-4">
                {['Twitter', 'GitHub', 'LinkedIn', 'Facebook'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    title={social}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-slate-300 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="flex items-center space-x-3 text-slate-300">
                <span className="w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center">✉</span>
                <span>mehedi.law@ku.ac.bd</span>
              </p>
              <p className="flex items-center space-x-3 text-slate-300">
                <span className="w-5 h-5 bg-slate-700 rounded-full flex items-center justify-center">📍</span>
                <span>Khulna University, Khulna, Bangladesh</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-500"
                placeholder="Message for Mehedi..."
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all transform active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
