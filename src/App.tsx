import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedListings from './components/FeaturedListings';
import DailyDeals from './components/DailyDeals';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Hero />
          <Categories />
          <FeaturedListings />
          <DailyDeals />
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;