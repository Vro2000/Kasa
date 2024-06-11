// src/components/AppRouter/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Erreur404 from './pages/Erreur404/Erreur404';
import APropos from './pages/APropos/APropos';
import AppLayout from './components/AppLayout/AppLayout';
import LogementDetail from './pages/LogementDetail/LogementDetail';


const AppRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Erreur404 />} />
        <Route path="/about" element={<APropos />} errorElement={<Erreur404 />} />
        <Route path="/logement/:id" element={<LogementDetail />} errorElement={<Erreur404 />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      </AppLayout>
    </Router>
  );
};

export default AppRouter;

