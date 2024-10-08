import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles/globaleStyles.styled.js';
import { theme } from './globalStyles/theme.js';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  // <React.StrictMode>
    <BrowserRouter basename='/JoinToItTestTask'>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


