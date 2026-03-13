import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Heart, User, Search, Menu, X, ArrowRight, ArrowUp } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'motion/react';

export const Layout = () => {
  const { cartCount, isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = React.useState(true);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showGoTop, setShowGoTop] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu and search on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location]);

  // Derived filtered products for search
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 5); // Limit to top 5 results
  }, [searchQuery]);

  // Stop body scroll when search or cart is open
  React.useEffect(() => {
    if (isSearchOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSearchOpen, isCartOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* Announcement Bar */}
      <AnimatePresence>
        {isAnnouncementVisible && (
          <motion.div 
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple text-white text-xs font-bold py-2.5 text-center tracking-widest uppercase shadow-sm relative overflow-hidden"
          >
            FREE SHIPPING ON ALL ORDERS OVER $50
            <button 
              onClick={() => setIsAnnouncementVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              aria-label="Close announcement"
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="sticky top-0 z-40 w-full h-0">
        <header className="absolute top-4 left-0 right-0 px-4 sm:px-6 lg:px-8 pointer-events-none">
          <div className="max-w-7xl mx-auto relative">
            <div className="glass-panel rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 pointer-events-auto shadow-lg">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-brand-pink focus:outline-none transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center lg:justify-start flex-1 lg:flex-none">
              <Link to="/" className="text-2xl font-serif font-black tracking-tighter text-stone-900">
                PRABHA<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">.</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
              <Link to="/shop" className="text-sm font-bold text-stone-600 hover:text-brand-pink transition-colors">Shop All</Link>
              <Link to="/category/skincare" className="text-sm font-bold text-stone-600 hover:text-brand-pink transition-colors">Skincare</Link>
              <Link to="/category/makeup" className="text-sm font-bold text-stone-600 hover:text-brand-pink transition-colors">Makeup</Link>
              <Link to="/about" className="text-sm font-bold text-stone-600 hover:text-brand-pink transition-colors">About</Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <button 
                className="text-stone-600 hover:text-brand-pink hidden sm:block transition-colors focus:outline-none"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <Search size={20} />
              </button>
              <Link to="/login" className="text-stone-600 hover:text-brand-pink hidden sm:block transition-colors">
                <User size={20} />
              </Link>
              <Link to="/wishlist" className="text-stone-600 hover:text-brand-pink hidden sm:block transition-colors">
                <Heart size={20} />
              </Link>
              <button 
                className="text-stone-600 hover:text-brand-pink relative transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-pink text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl border border-white/40 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] pointer-events-auto"
            >
              <div className="px-6 pt-4 pb-8 space-y-2">
                <Link to="/shop" className="block px-4 py-3 text-base font-bold text-stone-900 hover:text-brand-pink hover:bg-stone-50 rounded-xl transition-colors">Shop All</Link>
                <Link to="/category/skincare" className="block px-4 py-3 text-base font-bold text-stone-900 hover:text-brand-pink hover:bg-stone-50 rounded-xl transition-colors">Skincare</Link>
                <Link to="/category/makeup" className="block px-4 py-3 text-base font-bold text-stone-900 hover:text-brand-pink hover:bg-stone-50 rounded-xl transition-colors">Makeup</Link>
                <Link to="/about" className="block px-4 py-3 text-base font-bold text-stone-900 hover:text-brand-pink hover:bg-stone-50 rounded-xl transition-colors">About</Link>
                <div className="flex space-x-8 px-4 py-6 mt-4 border-t border-stone-100 justify-center">
                  <Link to="/login" className="flex flex-col items-center text-stone-500 hover:text-brand-pink transition-colors">
                    <User size={24} />
                    <span className="text-xs mt-2 font-bold">Account</span>
                  </Link>
                  <Link to="/wishlist" className="flex flex-col items-center text-stone-500 hover:text-brand-pink transition-colors">
                    <Heart size={24} />
                    <span className="text-xs mt-2 font-bold">Wishlist</span>
                  </Link>
                  <button 
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsSearchOpen(true);
                    }}
                    className="flex flex-col items-center text-stone-500 hover:text-brand-pink transition-colors focus:outline-none"
                  >
                    <Search size={24} />
                    <span className="text-xs mt-2 font-bold">Search</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
          </div>
        </header>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-stone-900/20 backdrop-blur-sm"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] border border-stone-100"
            >
              <div className="flex items-center p-3 border-b border-stone-100/80 bg-stone-50/50">
                <Search size={20} className="text-stone-400 ml-3" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search products, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-stone-900 px-4 py-3 text-base md:text-lg focus:outline-none placeholder:text-stone-400 font-medium"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="p-1.5 mr-2 text-stone-400 hover:text-stone-900 hover:bg-stone-200/50 rounded-full transition-colors focus:outline-none"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
                <div className="h-6 w-px bg-stone-200 mx-2" />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 mr-2 text-stone-400 hover:text-stone-900 bg-white hover:bg-stone-100 rounded-full transition-colors focus:outline-none shadow-sm border border-stone-100"
                  aria-label="Close search modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="overflow-y-auto p-4 md:p-6 pb-8">
                {searchQuery.trim() === '' ? (
                  <div>
                    <p className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4 px-2">Popular Searches</p>
                    <div className="flex flex-wrap gap-2">
                      {['Lipstick', 'Serum', 'Cleanser', 'SPF', 'Mask', 'Rose'].map((term, i) => (
                        <button 
                          key={i}
                          onClick={() => setSearchQuery(term)}
                          className="px-5 py-2 bg-stone-50 rounded-full text-sm font-medium text-stone-600 hover:text-brand-pink hover:bg-brand-pink/5 border border-stone-100 hover:border-brand-pink/20 transition-all duration-300 shadow-sm"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4 px-2">Products ({searchResults.length})</p>
                    {searchResults.map((product) => (
                      <Link 
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-center p-3 bg-white hover:bg-stone-50 rounded-2xl border border-transparent hover:border-stone-200 transition-all duration-300 group shadow-sm hover:shadow-md"
                      >
                        <div className="w-14 h-16 bg-stone-100 rounded-xl overflow-hidden shrink-0 border border-stone-100">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="ml-4 flex-1">
                           <p className="text-[10px] font-bold uppercase tracking-widest text-brand-pink mb-0.5">{product.category}</p>
                           <h4 className="text-sm font-bold text-stone-900 group-hover:text-brand-purple transition-colors">{product.name}</h4>
                        </div>
                        <div className="text-sm font-bold text-stone-500 mr-4 tabular-nums">${product.price}</div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-stone-100 group-hover:bg-brand-pink/10 group-hover:border-brand-pink/20 transition-colors">
                          <ArrowRight size={14} className="text-stone-300 group-hover:text-brand-pink group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-stone-100">
                      <Search size={24} className="text-stone-300" />
                    </div>
                    <p className="text-stone-500 text-base font-medium">No results found for <span className="text-stone-900 font-bold">"{searchQuery}"</span></p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`flex-grow ${location.pathname === '/' ? '' : 'pt-24'}`}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0510] text-stone-300 py-12 lg:py-16 border-t-4 border-brand-purple relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-purple/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[100px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="text-2xl font-serif font-bold tracking-tighter text-white mb-4 block">
                PRABHA<span className="text-brand-yellow">.</span>
              </Link>
              <p className="text-sm text-stone-400 mb-6">
                Clean, modern beauty essentials designed to enhance your natural radiance.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Shop</h3>
              <ul className="space-y-3">
                <li><Link to="/shop" className="text-sm hover:text-white transition-colors">All Products</Link></li>
                <li><Link to="/category/skincare" className="text-sm hover:text-white transition-colors">Skincare</Link></li>
                <li><Link to="/category/makeup" className="text-sm hover:text-white transition-colors">Makeup</Link></li>
                <li><Link to="/category/bestsellers" className="text-sm hover:text-white transition-colors">Bestsellers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">About</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/blog" className="text-sm hover:text-white transition-colors">Beauty Blog</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Newsletter</h3>
              <p className="text-sm text-stone-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-stone-800 border border-stone-700 text-white px-4 py-2 w-full focus:outline-none focus:border-stone-500 text-sm"
                />
                <button type="submit" className="bg-white text-stone-900 px-4 py-2 text-sm font-medium hover:bg-stone-200 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-stone-500">© 2026 Prabha Pure. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-stone-500 hover:text-white transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-stone-500 hover:text-white transition-colors text-xs">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-stone-100">
                <h2 className="text-lg font-medium">Your Cart ({cartCount})</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-stone-500 space-y-4">
                    <ShoppingBag size={48} className="text-stone-300" />
                    <p>Your cart is empty.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-2 bg-stone-900 text-white text-sm font-medium rounded-full hover:bg-stone-800 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.cartItemId} className="flex space-x-4">
                        <div className="w-20 h-24 bg-stone-100 rounded-md overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-sm font-medium text-stone-900">{item.name}</h3>
                              {item.selectedVariant && (
                                <p className="text-xs text-stone-500 mt-1">Variant: {item.selectedVariant.name}</p>
                              )}
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.cartItemId)}
                              className="text-stone-400 hover:text-stone-600"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <p className="text-sm text-stone-500 mt-1">${item.price}</p>
                          
                          <div className="mt-auto flex items-center border border-stone-200 rounded-full w-24 h-8">
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                              className="flex-1 flex justify-center items-center text-stone-500 hover:text-stone-900"
                            >
                              -
                            </button>
                            <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                              className="flex-1 flex justify-center items-center text-stone-500 hover:text-stone-900"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-4 border-t border-stone-100 bg-stone-50">
                  <div className="flex justify-between text-base font-medium text-stone-900 mb-4">
                    <p>Subtotal</p>
                    <p>${cartTotal.toFixed(2)}</p>
                  </div>
                  <p className="text-xs text-stone-500 mb-4">Shipping and taxes calculated at checkout.</p>
                  <Link 
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-md text-base font-bold text-white bg-gradient-to-r from-brand-pink to-brand-purple hover:from-brand-purple hover:to-brand-blue transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Checkout
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Go Top Button */}
      <AnimatePresence>
        {showGoTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-40 p-3 bg-stone-900 text-white rounded-full shadow-xl border border-stone-800 hover:bg-brand-pink hover:border-brand-pink transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-pink group"
            aria-label="Go to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
