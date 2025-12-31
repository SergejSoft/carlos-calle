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
    trackWhatsAppClick('private-training-section');
  };

  return (
    <section id="private" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={IMAGES.COACH}
              alt="Carlos Calle - Entrenador de Pádel Las Palmas"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">{t.private.title}</h2>
            <p className="text-lg mb-6 text-gray-700">{t.private.description}</p>
            <p className="text-lg mb-8 text-gray-700">{t.private.values}</p>
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
    </section>
  );
}