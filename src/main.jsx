import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './pages/ThemeContext.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
