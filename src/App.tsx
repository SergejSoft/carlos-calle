import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivateTraining from './pages/PrivateTraining';
import Tournaments from './pages/Tournaments';
import PadelClubs from './pages/PadelClubs';
import WhyPadel from './pages/WhyPadel';

function App() {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar language={language} onLanguageChange={setLanguage} />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/private" element={<PrivateTraining language={language} />} />
            <Route path="/tournaments" element={<Tournaments language={language} />} />
            <Route path="/padel-clubs" element={<PadelClubs language={language} />} />
            <Route path="/why-padel" element={<WhyPadel language={language} />} />
        </Routes>
        </main>
        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;