import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Correct for React 18 & 19
import App from './App';
import { DogProvider } from './context/DogContext';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DogProvider>
      <App />
    </DogProvider>
  </React.StrictMode>
);
