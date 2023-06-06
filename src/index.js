import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
