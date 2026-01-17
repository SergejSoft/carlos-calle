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
  // #region agent log
  console.log('[DEBUG] App component rendering', {hypothesisId:'C'});
  fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:14',message:'App component rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  
  const [language, setLanguage] = useState<Language>('es');
  
  // #region agent log
  console.log('[DEBUG] App state initialized', {language,hypothesisId:'C'});
  fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:18',message:'App state initialized',data:{language},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion

  try {
    // #region agent log
    console.log('[DEBUG] App returning JSX', {hypothesisId:'C'});
    fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:22',message:'App returning JSX',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
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
  } catch (error) {
    // #region agent log
    console.error('[DEBUG] ERROR in App render', {error,errorMessage:error instanceof Error?error.message:String(error),errorStack:error instanceof Error?error.stack:undefined,hypothesisId:'C'});
    fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.tsx:37',message:'ERROR in App render',data:{errorMessage:error instanceof Error?error.message:String(error),errorStack:error instanceof Error?error.stack:undefined},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    throw error;
  }
}

export default App;