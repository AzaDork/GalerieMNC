import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ArtistsPage from './pages/Artists';
import ArtistDetailPage from './pages/ArtistDetailPage';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Page d’accueil */}
        <Route path="/" element={<App />} />

        {/* Liste des artistes */}
        <Route path="/artists" element={<ArtistsPage />} />

        {/* Page individuelle artiste : /artistes/anne-goujaud */}
        <Route path="/artistes/:slug" element={<ArtistDetailPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
