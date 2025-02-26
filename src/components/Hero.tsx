import { Language } from '../types';
import { translations } from '../data/translations';
import { IMAGES } from '../constants/images';

interface Props {
  language: Language;
}

export default function Hero({ language }: Props) {
  const t = translations[language];

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with stronger overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.HERO_BG})`
        }}
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