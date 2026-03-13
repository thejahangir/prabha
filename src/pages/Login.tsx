import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

type ViewState = 'login' | 'signup' | 'forgot-password';

export const Login = () => {
  const [view, setView] = useState<ViewState>('login');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (view === 'forgot-password') {
      setIsSubmitted(true);
      return;
    }

    // Simulate login/signup
    setTimeout(() => {
      navigate('/account');
    }, 1000);
  };

  const handleBackToLogin = () => {
    setView('login');
    setIsSubmitted(false);
  };

  if (isSubmitted && view === 'forgot-password') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-stone-100 text-center"
        >
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
              <CheckCircle2 size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">Check your email</h2>
          <p className="text-stone-500">
            We've sent a password reset link to <span className="font-medium text-stone-900">{email}</span>
          </p>
          <button 
            onClick={handleBackToLogin}
            className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-stone-900 hover:bg-stone-800 transition-colors"
          >
            Back to login
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-sm border border-stone-100"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {view === 'forgot-password' && (
              <button 
                onClick={handleBackToLogin}
                className="flex items-center text-sm text-stone-500 hover:text-stone-900 mb-6 transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to login
              </button>
            )}

            <div>
              <h2 className="text-center text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {view === 'login' ? 'Welcome back' : view === 'signup' ? 'Create an account' : 'Reset password'}
              </h2>
              <p className="mt-2 text-center text-sm text-stone-500">
                {view === 'login' && (
                  <>
                    Don't have an account?{' '}
                    <button 
                      onClick={() => setView('signup')} 
                      className="font-medium text-stone-900 hover:underline underline-offset-4"
                    >
                      Sign up
                    </button>
                  </>
                )}
                {view === 'signup' && (
                  <>
                    Already have an account?{' '}
                    <button 
                      onClick={() => setView('login')} 
                      className="font-medium text-stone-900 hover:underline underline-offset-4"
                    >
                      Log in
                    </button>
                  </>
                )}
                {view === 'forgot-password' && "Enter your email and we'll send you a link to reset your password."}
              </p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                {view === 'signup' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="sr-only">First name</label>
                      <input id="firstName" name="firstName" type="text" required className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-stone-200 placeholder-stone-400 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent sm:text-sm" placeholder="First name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">Last name</label>
                      <input id="lastName" name="lastName" type="text" required className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-stone-200 placeholder-stone-400 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent sm:text-sm" placeholder="Last name" />
                    </div>
                  </div>
                )}
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input 
                    id="email-address" 
                    name="email" 
                    type="email" 
                    autoComplete="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-stone-200 placeholder-stone-400 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent sm:text-sm" 
                    placeholder="Email address" 
                  />
                </div>
                {view !== 'forgot-password' && (
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete={view === 'login' ? "current-password" : "new-password"} required className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-stone-200 placeholder-stone-400 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent sm:text-sm" placeholder="Password" />
                  </div>
                )}
              </div>

              {view === 'login' && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-stone-900 focus:ring-stone-900 border-stone-300 rounded" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-stone-600">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <button 
                      type="button"
                      onClick={() => setView('forgot-password')}
                      className="font-medium text-stone-900 hover:underline underline-offset-4"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </div>
              )}

              <div>
                <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-stone-900 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 transition-colors">
                  {view === 'login' ? 'Sign in' : view === 'signup' ? 'Create account' : 'Send reset link'}
                </button>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
