import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Phone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface Props {
  language: Language;
}

export default function Footer({ language }: Props) {
  const t = translations[language];
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToContact: true } });
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/padel-clubs" className="hover:text-blue-400 transition-colors">
                  {t.footer.padelClubs}
                </Link>
              </li>
              <li>
                <Link to="/why-padel" className="hover:text-blue-400 transition-colors">
                  {t.footer.whyPadel}
                </Link>
              </li>
              <li>
                <a href="#contact" onClick={handleContactClick} className="hover:text-blue-400 transition-colors">
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/34634774312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Phone size={20} />
                  +34 634 774 312
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/carloscallerodriguez76/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Instagram size={20} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-300">
              Las Palmas de Gran Canaria<br />
              Gran Canaria, Spain
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

