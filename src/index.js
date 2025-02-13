import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App'; // Your root component
import './index.css'; // Optional: Global styles

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);