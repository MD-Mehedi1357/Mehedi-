
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateAIAvatar = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const prompt = "A high-quality, hyper-realistic professional studio portrait of a young South Asian man with short neat black hair, a clean-shaven face, and a confident expression. He is wearing a sharp, formal navy blue suit with a white shirt and a blue tie. The lighting is soft and professional, with a modern, slightly blurred corporate background. 8k resolution, photorealistic, elegant.";
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: [{ parts: [{ text: prompt }] }],
        });

        // Iterate through response parts to find the image
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const base64Data = part.inlineData.data;
              setAvatarUrl(`data:image/png;base64,${base64Data}`);
              setIsLoading(false);
              return;
            }
          }
        }
      } catch (error) {
        console.error("Error generating AI avatar:", error);
        // Fallback to a professional placeholder if generation fails
        setAvatarUrl("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop");
        setIsLoading(false);
      }
    };

    generateAIAvatar();
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-[90vh] flex items-center pt-20 overflow-hidden relative">
      {/* Background Glows for "AI" aesthetic */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Side: Headline & Bio */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide animate-pulse">
            Available for Legal Consulting & Web Development
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              MD. Mehedi Hassan
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            A dedicated <span className="text-white font-medium">Law student</span> at Khulna University. Bridging the gap between legal precision and digital innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1"
            >
              Get In Touch
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-white rounded-xl font-semibold transition-all hover:bg-slate-800"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: AI-Generated Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Multi-layered animated glows */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Profile Frame */}
            <div className="relative w-72 h-72 md:w-96 md:h-[500px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
               {isLoading ? (
                 <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                   <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                   <p className="text-blue-400 text-sm font-medium">Generating AI Persona...</p>
                 </div>
               ) : (
                 <img 
                  src={avatarUrl || ""} 
                  alt="MD. Mehedi Hassan AI Persona" 
                  className="w-full h-full object-cover object-top transition-opacity duration-1000"
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  style={{ opacity: 0 }}
                />
               )}
              
              {/* Overlay for AI feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              
              {/* Name Tag Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
                <p className="text-white font-bold text-lg">MD. Mehedi Hassan</p>
                <p className="text-blue-400 text-xs uppercase tracking-widest font-semibold">Law & Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
