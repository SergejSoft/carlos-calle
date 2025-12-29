import { Phone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { IMAGES } from '../constants/images';
import { trackWhatsAppClick } from '../utils/analytics';

interface Props {
  language: Language;
}

export default function PrivateTraining({ language }: Props) {
  const t = translations[language];

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('private-training-page');
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img
              src={IMAGES.COACH}
              alt="Carlos Calle - Padel Coach"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">{t.private.title}</h1>
            <p className="text-lg mb-6 text-gray-700">{t.private.description}</p>
            <p className="text-lg mb-6 text-gray-700">{t.private.values}</p>
            <p className="text-xl font-semibold mb-8 text-blue-600">{t.private.motto}</p>
            <a
              href="https://wa.me/34634774312"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <Phone size={24} />
              {t.contact.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}