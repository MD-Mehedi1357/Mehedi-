
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Section - Sticky Header */}
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Two-column flexbox */}
        <section id="home">
          <Hero />
        </section>

        {/* About Me Section - Detailed background */}
        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        {/* Skills Section - Flex-wrap grid of stylized cards */}
        <section id="skills" className="py-20 bg-slate-50">
          <Skills />
        </section>

        {/* Contact Section - Centered form and socials */}
        <section id="contact" className="py-20 bg-slate-900 text-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
