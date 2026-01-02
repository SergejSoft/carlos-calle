import { Language } from '../types';
import { translations } from '../data/translations';
import { padelClubsData } from '../data/padelClubs';
import { MapPin, ExternalLink, Star } from 'lucide-react';

interface Props {
  language: Language;
}

export default function PadelClubs({ language }: Props) {
  const t = translations[language];
  const clubs = padelClubsData.padel_clubs;

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">{t.padelClubs.title}</h1>
          <p className="text-xl text-gray-600">{t.padelClubs.subtitle}</p>
        </div>

        {/* Clubs by Location */}
        <div className="space-y-12">
          {/* Las Palmas City */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">{clubs.las_palmas_city.location}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.las_palmas_city.clubs.map((club, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
                    {club.coachHere && (
                      <span className="flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded">
                        <Star size={14} fill="currentColor" />
                        {t.padelClubs.coachHere}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="font-semibold">{t.padelClubs.courts}:</span> {club.courts}
                    </p>
                    <p>
                      <span className="font-semibold">{t.padelClubs.price}:</span> {club.price}
                    </p>
                    <a
                      href={club.google_maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mt-3"
                    >
                      {t.padelClubs.viewOnMaps} <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Telde Area */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">{clubs.telde_area.location}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.telde_area.clubs.map((club, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
                    {club.featured && (
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded">
                        {t.padelClubs.featured}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2 text-gray-700">
                    {club.type === 'INDOOR' && (
                      <p className="text-sm text-blue-600 font-semibold">{t.padelClubs.indoor}</p>
                    )}
                    <p className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="font-semibold">{t.padelClubs.courts}:</span> {club.courts}
                    </p>
                    <p>
                      <span className="font-semibold">{t.padelClubs.price}:</span> {club.price}
                    </p>
                    <a
                      href={club.google_maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mt-3"
                    >
                      {t.padelClubs.viewOnMaps} <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* South Tourist Areas */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">{clubs.south_tourist_areas.location}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.south_tourist_areas.clubs.map((club, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{club.name}</h3>
                  {club.city && (
                    <p className="text-sm text-gray-600 mb-3">{club.city}</p>
                  )}
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="font-semibold">{t.padelClubs.courts}:</span> {club.courts}
                    </p>
                    <p>
                      <span className="font-semibold">{t.padelClubs.price}:</span> {club.price}
                    </p>
                    <a
                      href={club.google_maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mt-3"
                    >
                      {t.padelClubs.viewOnMaps} <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Arucas */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">{clubs.arucas.location}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubs.arucas.clubs.map((club, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{club.name}</h3>
                  <div className="space-y-2 text-gray-700">
                    {club.type === 'INDOOR' && (
                      <p className="text-sm text-blue-600 font-semibold">{t.padelClubs.indoor}</p>
                    )}
                    <p className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span className="font-semibold">{t.padelClubs.courts}:</span> {club.courts}
                    </p>
                    <p>
                      <span className="font-semibold">{t.padelClubs.price}:</span> {club.price}
                    </p>
                    <a
                      href={club.google_maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mt-3"
                    >
                      {t.padelClubs.viewOnMaps} <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

