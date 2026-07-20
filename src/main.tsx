import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
<<<<<<< HEAD
import './animation/reveal.css';
import { initScrollReveal } from './animation/reveal.js';
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
import { CurrencyProvider } from './context/CurrencyContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </StrictMode>,
);

<<<<<<< HEAD
// Start the plain CSS/JS scroll-reveal observer once, at app boot.
// It keeps watching the DOM for new .reveal* elements automatically.
initScrollReveal();

=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
