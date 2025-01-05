import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserDetailsProvider } from './contexts/UserDetailsContext.jsx';
import { PaginationProvider } from './contexts/PaginationContext.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <UserDetailsProvider>
      <PaginationProvider>
        <App />
      </PaginationProvider>
    </UserDetailsProvider>
  </>
);
