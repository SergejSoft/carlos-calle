import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Language } from './types';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivateTraining from './pages/PrivateTraining';
import Tournaments from './pages/Tournaments';

function App() {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar language={language} onLanguageChange={setLanguage} />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/private" element={<PrivateTraining language={language} />} />
          <Route path="/tournaments" element={<Tournaments language={language} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;