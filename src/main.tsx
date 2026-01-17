import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// #region agent log
console.log('[DEBUG] main.tsx entry point executed', {timestamp:Date.now(),hypothesisId:'B'});
fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:8',message:'main.tsx entry point executed',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
// #endregion

// #region agent log
const rootElement = document.getElementById('root');
console.log('[DEBUG] root element check', {rootExists:!!rootElement,rootId:rootElement?.id||'null',hypothesisId:'A'});
fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:12',message:'root element check',data:{rootExists:!!rootElement,rootId:rootElement?.id||'null'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion

if (!rootElement) {
  // #region agent log
  console.error('[DEBUG] ERROR: root element not found', {hypothesisId:'A'});
  fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:17',message:'ERROR: root element not found',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  throw new Error('Root element not found');
}

try {
  // #region agent log
  console.log('[DEBUG] attempting createRoot', {hypothesisId:'B'});
  fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:23',message:'attempting createRoot',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  const root = createRoot(rootElement);
  
  // #region agent log
  console.log('[DEBUG] createRoot successful, attempting render', {hypothesisId:'B'});
  fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:27',message:'createRoot successful, attempting render',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  
  // #region agent log
  console.log('[DEBUG] render call completed', {hypothesisId:'B'});
  fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:35',message:'render call completed',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
} catch (error) {
  // #region agent log
  console.error('[DEBUG] ERROR during React initialization', {error,errorMessage:error instanceof Error?error.message:String(error),errorStack:error instanceof Error?error.stack:undefined,hypothesisId:'C'});
  fetch('http://127.0.0.1:7244/ingest/e79e18d5-36f9-44f7-8ca2-35b47b4dab97',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:38',message:'ERROR during React initialization',data:{errorMessage:error instanceof Error?error.message:String(error),errorStack:error instanceof Error?error.stack:undefined},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  throw error;
}
