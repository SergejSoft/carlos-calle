import { useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';
import LanguageSwitcher from './LanguageSwitcher';
import { useClickOutside } from '../hooks/useClickOutside';

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navbar({ language, onLanguageChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[language];

  useClickOutside(mobileMenuRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">Carlos Calle</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">{t.nav.home}</Link>
            <Link to="/private" className="text-gray-700 hover:text-blue-600">{t.nav.private}</Link>
            <Link to="/tournaments" className="text-gray-700 hover:text-blue-600">{t.nav.tournaments}</Link>
            <a href="#contact" onClick={handleContactClick} className="text-gray-700 hover:text-blue-600">
              {t.nav.contact}
            </a>
            <LanguageSwitcher currentLang={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div ref={mobileMenuRef} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link 
              to="/private" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.private}
            </Link>
            <Link 
              to="/tournaments" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.tournaments}
            </Link>
            <a 
              href="#contact"
              onClick={handleContactClick}
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              {t.nav.contact}
            </a>
            <div className="px-3 py-2">
              <LanguageSwitcher currentLang={language} onLanguageChange={onLanguageChange} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}