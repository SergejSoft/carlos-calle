import { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { IMAGES } from '../constants/images';

interface Props {
  language: Language;
}

export default function Hero({ language }: Props) {
  const t = translations[language];
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = IMAGES.HERO_BG;
    img.onload = () => setImageLoaded(true);
    
    // If image is already cached, set as loaded immediately
    if (img.complete) setImageLoaded(true);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background color shown while image loads */}
      <div className="absolute inset-0 bg-blue-900 transition-opacity duration-500"></div>
      
      {/* Background image with stronger overlay */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url(${IMAGES.HERO_BG})`,
          willChange: 'opacity'
        }}
        aria-label="Padel training court background"
        role="img"
      />
      
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Text content with enhanced visibility */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
          {t.hero.subtitle}
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors transform hover:scale-105 duration-200"
        >
          {t.hero.cta}
        </a>
      </div>
    </div>
  );
}