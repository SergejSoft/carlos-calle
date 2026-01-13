import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Phone, Star } from 'lucide-react';
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
              {/* SEO-only link - hidden from users but visible to crawlers */}
              <li className="sr-only">
                <a href="https://padel-camp.org/" className="hover:text-blue-400 transition-colors">
                  Padel Camp
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
                  href="https://www.instagram.com/carloscalle_padelclub/"
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

        {/* Google Rating Trust Component */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-700 rounded-lg p-6 max-w-md w-full">
              <div className="text-center">
                <p className="text-sm text-gray-300 mb-2">{t.footer.trust.title}</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-white">{t.footer.trust.rating}</span>
                  <span className="text-gray-400">/ 5.0</span>
                </div>
                <p className="text-sm text-gray-300 mb-3">{t.footer.trust.reviews}</p>
                <a
                  href="https://share.google/GRryXdw7NcxqpyYY0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
                >
                  {t.footer.trust.viewReviews}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </a>
              </div>
            </div>
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

