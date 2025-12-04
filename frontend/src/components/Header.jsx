import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { BookOpen, LogIn, LogOut, Settings, Sun, Moon, Menu, X, UserPlus } from 'lucide-react';

const Header = () => {
  const { currentUser, isAdmin, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <header className="bg-gray-800/30 backdrop-blur-lg border-b border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            
            <span className="text-xl font-semibold text-white">ZenAegis Edu</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-700/40"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              type="button"
              className="ml-2 p-2 rounded-md text-gray-300 hover:bg-gray-700/40"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
              Home
            </Link>
            <a href="#grades" className="text-gray-300 font-medium hover:text-white transition-colors">
              Grades
            </a>
            <a href="#feedback" className="text-gray-300 font-medium hover:text-white transition-colors">
              Feedback
            </a>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-700/40"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {currentUser ? (
              <div className="flex items-center gap-4">
                {isAdmin && (
                  <Link to="/admin" className="text-gray-300 font-medium hover:text-emerald-400 transition-colors flex items-center gap-1">
                    <Settings className="w-4 h-4" />
                    <span className="hidden lg:inline">Admin</span>
                  </Link>
                )}
                <button 
                  onClick={handleLogout}
                  className="text-gray-300 font-medium hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/signup" className="border border-gray-600 text-gray-300 font-medium hover:text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-1 px-3 py-1 rounded-md">
                  <UserPlus className="w-4 h-4" />
                  Signup
                </Link>
                <Link to="/login" className="border border-gray-600 text-gray-300 font-medium hover:text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-1 px-3 py-1 rounded-md">
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>
              </div>
            )}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/50">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#grades" 
                className="text-gray-300 font-medium hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Grades
              </a>
              <a 
                href="#feedback" 
                className="text-gray-300 font-medium hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Feedback
              </a>
              
              {currentUser ? (
                <>
                  {isAdmin && (
                    <Link 
                      to="/admin" 
                      className="text-gray-300 font-medium hover:text-emerald-400 transition-colors flex items-center gap-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      Admin
                    </Link>
                  )}
                  <button 
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="text-gray-300 font-medium hover:text-emerald-400 transition-colors flex items-center gap-1"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link 
                    to="/signup" 
                    className="border border-gray-600 text-gray-300 font-medium hover:text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-1 px-3 py-1 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <UserPlus className="w-4 h-4" />
                    Signup
                  </Link>
                  <Link 
                    to="/login" 
                    className="border border-gray-600 text-gray-300 font-medium hover:text-emerald-400 hover:border-emerald-400 transition-colors flex items-center gap-1 px-3 py-1 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <LogIn className="w-4 h-4" />
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;