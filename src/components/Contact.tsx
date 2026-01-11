import { Instagram, Phone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { trackWhatsAppClick } from '../utils/analytics';

interface Props {
  language: Language;
}

export default function Contact({ language }: Props) {
  const t = translations[language];

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('contact');
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t.contact.title}</h2>
        <p className="text-xl text-center mb-12">{t.contact.message}</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <a
            href="https://wa.me/34634774312"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            <Phone size={24} />
            {t.contact.whatsapp}
          </a>
          
          <a
            href="https://www.instagram.com/carloscalle_padelclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
          >
            <Instagram size={24} />
            {t.contact.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}