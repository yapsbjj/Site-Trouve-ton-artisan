import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArtisansPage from './components/ArtisanPage';
import ArtisanProfilePage from './components/ArtisanProfilePage';
import Error404Page from './components/Error404Page';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artisans" element={<ArtisansPage />} />
          <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
          <Route component={Error404Page} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
