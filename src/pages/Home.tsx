import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language } from '../types';
import Hero from '../components/Hero';
import Tournaments from '../components/Tournaments';
import Contact from '../components/Contact';

interface Props {
  language: Language;
}

export default function Home({ language }: Props) {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      // Clean up the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Hero language={language} />
      <Tournaments language={language} />
      <Contact language={language} />
    </>
  );
}