import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#212121',
    white: '#ffffff',
    accent: 'orangered',
    error: '#ff0000',
  },
  radii: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
