import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArtisansPage from './components/ArtisanPage';
import ArtisanProfilePage from './components/ArtisanProfilePage';
import Error404Page from './components/Error404Page';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artisans" element={<ArtisansPage />} />
          <Route path="/artisan/:id" element={<ArtisanProfilePage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
