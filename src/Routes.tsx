import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ProductDiscoveryPage from './pages/ProductDiscovery';
import ProductDiscoveryStockPage from './pages/ProductDiscoveryStock';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductDiscoveryPage />} />
        <Route path="/products-stock" element={<ProductDiscoveryStockPage />} />
        <Route path="/" element={<ProductDiscoveryPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;