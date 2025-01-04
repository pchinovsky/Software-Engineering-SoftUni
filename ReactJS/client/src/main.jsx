import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserDetailsProvider } from './UserDetailsContext.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <UserDetailsProvider>
      <App />
    </UserDetailsProvider>
  </>
);
