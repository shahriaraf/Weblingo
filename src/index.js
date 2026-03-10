import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register service worker for PWA capabilities
serviceWorkerRegistration.register({
  onSuccess: () => console.log('TagWise: Cached for offline use!'),
  onUpdate: () => console.log('TagWise: New version available!'),
});
