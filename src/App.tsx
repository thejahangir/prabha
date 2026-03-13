/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Category } from './pages/Category';
import { Checkout } from './pages/Checkout';
import { Cart } from './pages/Cart';
import { Login } from './pages/Login';
import { Account } from './pages/Account';
import { Wishlist } from './pages/Wishlist';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Placeholder components for other pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[60vh] flex items-center justify-center bg-stone-50">
    <h1 className="text-3xl font-serif font-bold text-stone-900">{title}</h1>
  </div>
);

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="account" element={<Account />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
          </Route>
        </Routes>
      </Router>
    </StoreProvider>
  );
}
