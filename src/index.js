import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
