import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { CssVarsProvider } from '@mui/joy/styles';

// import font
import '@fontsource/public-sans';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider>
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
