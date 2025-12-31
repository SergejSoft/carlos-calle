import { Phone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { IMAGES } from '../constants/images';
import { trackWhatsAppClick } from '../utils/analytics';

interface Props {
  language: Language;
}

export default function Tournaments({ language }: Props) {
  const t = translations[language];

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('tournament-participation');
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">{t.tournamentsPage.title}</h1>
        </div>

        {/* Tournament Image */}
        <div className="mb-12">
          <img
            src={IMAGES.TOURNAMENT_IMAGE}
            alt={t.tournamentsPage.title}
            className="rounded-lg shadow-xl w-full max-w-4xl mx-auto"
          />
        </div>

        {/* Tournament Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">{t.tournamentsPage.location.title}</h2>
            <p className="text-lg text-gray-700">
              {t.tournamentsPage.location.address}
            </p>
          </div>

          {/* Price Section */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">{t.tournamentsPage.price.title}</h2>
            <p className="text-2xl font-semibold text-gray-900 mb-2">
              {t.tournamentsPage.price.amount}
            </p>
            <p className="text-lg text-gray-700">
              {t.tournamentsPage.price.perTournament}
            </p>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">{t.tournamentsPage.schedule.title}</h2>
          <div className="space-y-4">
            <p className="text-xl font-semibold text-gray-900">
              {t.tournamentsPage.schedule.days}
            </p>
            <p className="text-lg text-gray-700 italic">
              {t.tournamentsPage.schedule.note}
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-lg text-gray-800">
                <strong>{t.tournamentsPage.schedule.firstTournament}</strong>
              </p>
              <p className="text-lg text-gray-800">
                <strong>{t.tournamentsPage.schedule.secondTournament}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Format Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">{t.tournamentsPage.format.title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Type:</p>
              <p className="text-lg text-gray-700">{t.tournamentsPage.format.type}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Style:</p>
              <p className="text-lg text-gray-700">{t.tournamentsPage.format.style}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Players:</p>
              <p className="text-lg text-gray-700">{t.tournamentsPage.format.players}</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Courts:</p>
              <p className="text-lg text-gray-700">{t.tournamentsPage.format.courts}</p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/34634774312"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-600 transition-colors shadow-lg"
          >
            <Phone size={28} />
            {t.tournamentsPage.cta}
          </a>
        </div>
      </div>
    </div>
  );
}

