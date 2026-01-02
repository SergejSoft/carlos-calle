import { Link } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/translations';

interface Props {
  language: Language;
}

export default function WhyPadel({ language }: Props) {
  const t = translations[language];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">{t.whyPadel.title}</h1>
          <p className="text-xl text-gray-600">{t.whyPadel.subtitle}</p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">{t.whyPadel.introduction}</p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {/* Low Impact Section */}
          <section className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">{t.whyPadel.lowImpact.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.whyPadel.lowImpact.content}</p>
          </section>

          {/* Cardiovascular Section */}
          <section className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-green-600">{t.whyPadel.cardiovascular.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.whyPadel.cardiovascular.content}</p>
          </section>

          {/* Social Section */}
          <section className="bg-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">{t.whyPadel.social.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.whyPadel.social.content}</p>
          </section>

          {/* Mental Health Section */}
          <section className="bg-yellow-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-yellow-600">{t.whyPadel.mental.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.whyPadel.mental.content}</p>
          </section>

          {/* Accessibility Section */}
          <section className="bg-pink-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-pink-600">{t.whyPadel.accessibility.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t.whyPadel.accessibility.content}</p>
          </section>

          {/* Statistics Section */}
          <section className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t.whyPadel.statistics.title}</h2>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>{t.whyPadel.statistics.fastestGrowing}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>{t.whyPadel.statistics.ageRange}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>{t.whyPadel.statistics.injuryRate}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>{t.whyPadel.statistics.calories}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>{t.whyPadel.statistics.cardiovascular}</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span>{t.whyPadel.statistics.social}</span>
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">{t.whyPadel.conclusion}</p>
          </section>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link
              to="/#contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              {t.whyPadel.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

