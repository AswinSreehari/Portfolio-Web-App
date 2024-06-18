import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.js';

const rootElement = document.getElementById('root');
if (rootElement!== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Element with id "root" not found');
}
