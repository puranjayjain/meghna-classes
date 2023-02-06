import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider, shouldSkipGeneratingVar as joyShouldSkipGeneratingVar } from '@mui/joy/styles';
import {
  experimental_extendTheme as extendMuiTheme,
  shouldSkipGeneratingVar as muiShouldSkipGeneratingVar,
} from '@mui/material/styles';

import App from './app';

import { mergedTheme } from './theme';

// import font
import '@fontsource/public-sans';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider
      theme={mergedTheme}
      shouldSkipGeneratingVar={(keys) => muiShouldSkipGeneratingVar(keys) || joyShouldSkipGeneratingVar(keys)}
    >
      <App />
    </CssVarsProvider>
  </React.StrictMode>
);
