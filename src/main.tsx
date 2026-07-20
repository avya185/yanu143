import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './animation/reveal.css';
import { initScrollReveal } from './animation/reveal.js';
import { CurrencyProvider } from './context/CurrencyContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </StrictMode>,
);

// Start the plain CSS/JS scroll-reveal observer once, at app boot.
// It keeps watching the DOM for new .reveal* elements automatically.
initScrollReveal();

