import { Language } from '../types';
import { translations } from '../data/translations';

interface Props {
  language: Language;
}

export default function Tournaments({ language }: Props) {
  const t = translations[language];

  return (
    <section id="tournaments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.tournaments.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.tournaments.subtitle}</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t.tournaments.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t.tournaments.organize.title}</h3>
            <p className="text-gray-700 mb-6">
              {t.tournaments.organize.description}
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t.tournaments.prepare.title}</h3>
            <p className="text-gray-700 mb-6">
              {t.tournaments.prepare.description}
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t.tournaments.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

