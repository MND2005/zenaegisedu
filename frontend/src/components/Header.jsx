import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">EduRelief SL</span>
          </Link>
          
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-emerald-500 font-medium hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <a href="#grades" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
              Grades
            </a>
            <a href="#feedback" className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
              Feedback
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;