import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { PrismicProvider } from '@prismicio/react';
import { client } from './services/prismic.ts';
import { GlobalProvider } from './components/GlobalProviderMenuIsOpen/MenuIsOpen.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrismicProvider client={client}>
        <GlobalProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </GlobalProvider>
      </PrismicProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
