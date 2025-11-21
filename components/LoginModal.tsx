import React, { useState } from 'react';
import { X, Loader2, AlertCircle } from 'lucide-react';
import { api, User } from '../services/api';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      let response;
      if (activeTab === 'login') {
        response = await api.login({ 
          email: formData.email, 
          password: formData.password 
        });
      } else {
        response = await api.register(formData);
      }

      localStorage.setItem('auth_token', response.token);
      onClose();

    } catch (err) {
      const message = err instanceof Error ? err.message : 'Authentication failed. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    api.initiateGoogleLogin();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden relative animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
            {activeTab === 'login' ? 'Welcome Back' : 'Join the Community'}
          </h2>

          {/* Tabs */}
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg mb-6">
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'login' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              onClick={() => { setActiveTab('login'); setError(null); }}
            >
              Login
            </button>
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'signup' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              onClick={() => { setActiveTab('signup'); setError(null); }}
            >
              Sign Up
            </button>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button 
              onClick={handleGoogleLogin}
              className="w-full py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-medium"
            >
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTD6-hPWsG00Svnclw13KoLh4rwwHfkkVIjouEM4HNE5F-rZAg5rHepX5GYPnvIOps4ApxmnK-vjb0lSxbwPDRw5oaPaZBsAYrstc1RtBSYvL4dzJcSHitLkaAbwKWvs5MWdwsTYPXe2xQnGfzOgbyKSd0gem3dAFc4kvzLz4rp9TWkicfEb5kz5zdLgqRCDh6PdsmNRPnu9q5YqE18y7sFQb-wD1arCB7_J8ZlA4m8-2MP8OlwNyCUF4y163oXOOoOv2qCRY344c" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">or use your email</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2 text-red-600 dark:text-red-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            {activeTab === 'signup' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                  <input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    type="text" 
                    required
                    placeholder="John" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                  <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    type="text" 
                    required
                    placeholder="Doe" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-slate-900 dark:text-white"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email" 
                required
                placeholder="you@example.com" 
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <input 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password" 
                required
                placeholder="Enter your password" 
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-slate-900 dark:text-white"
              />
            </div>
            
            {activeTab === 'login' && (
              <div className="flex justify-end">
                <a href="#" className="text-sm font-medium text-primary hover:underline">Forgot Password?</a>
              </div>
            )}

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                activeTab === 'login' ? 'Login' : 'Create Account'
              )}
            </button>
          </form>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-4 border-t border-slate-100 dark:border-slate-800 text-center text-sm">
          <p className="text-slate-600 dark:text-slate-400">
            {activeTab === 'login' ? "Don't have an account?" : "Already have an account?"} {' '}
            <button 
              className="font-bold text-primary hover:underline"
              onClick={() => {
                setActiveTab(activeTab === 'login' ? 'signup' : 'login');
                setError(null);
              }}
            >
              {activeTab === 'login' ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
