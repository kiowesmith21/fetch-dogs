import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import MatchPage from './pages/MatchPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/match" element={<MatchPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
