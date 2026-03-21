import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import {
  LayoutDashboard, Package, ShoppingCart, CreditCard, Tag,
  LogOut, Menu, X, ChevronRight, ExternalLink
} from 'lucide-react';

const navItems = [
  { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/admin/products', label: 'Products', icon: Package },
  { path: '/admin/orders', label: 'Orders', icon: ShoppingCart },
  { path: '/admin/payments', label: 'Payments', icon: CreditCard },
  { path: '/admin/discounts', label: 'Discounts', icon: Tag },
];

export const AdminLayout: React.FC = () => {
  const { isAdmin, adminLogout } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAdmin) {
    navigate('/admin/login');
    return null;
  }

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      adminLogout();
      navigate('/admin/login');
    }
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setSidebarOpen(false)}>
          <span className="text-xl font-serif font-black tracking-tighter text-white">
            PRABHA<span className="text-yellow-400">.</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 bg-white/5 px-2 py-0.5 rounded-full">
            Admin
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ path, label, icon: Icon }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                active
                  ? 'bg-gradient-to-r from-purple-600/80 to-pink-600/60 text-white shadow-lg shadow-purple-500/20'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={18} className={active ? 'text-white' : 'text-white/40 group-hover:text-white/70'} />
              {label}
              {active && <ChevronRight size={14} className="ml-auto opacity-60" />}
            </Link>
          );
        })}
      </nav>

      {/* Footer actions */}
      <div className="px-3 py-4 border-t border-white/5 space-y-1">
        <Link
          to="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-white/30 hover:text-white/60 hover:bg-white/5 transition-all"
        >
          <ExternalLink size={15} />
          View Store
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={15} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d0d14] text-white flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0a0a12] border-r border-white/5 fixed inset-y-0 left-0 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 w-72 bg-[#0a0a12] border-r border-white/5 z-50 lg:hidden flex flex-col">
            <SidebarContent />
          </aside>
        </>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col lg:ml-64 min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-[#0d0d14]/80 backdrop-blur-md border-b border-white/5 px-4 lg:px-8 h-16 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white/50 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-sm font-bold text-white/60 capitalize">
              {navItems.find(n => n.path === location.pathname)?.label ?? 'Admin'}
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-white/30 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-500/10"
          >
            <LogOut size={14} />
            Logout
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
