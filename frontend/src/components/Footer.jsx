import React from 'react';
import { Heart, AlertCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="feedback" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            COMMUNITY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Powered by You
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            A heartfelt gratitude to the teachers, students, and contributors who provided the past papers and notes. Your generosity is lighting up thousands of futures.
          </p>

          {/* Disclaimer Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-left">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  Disclaimer
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The documents, papers, and short notes available on this website are sent by students and teachers from all over Sri Lanka. We do not claim ownership of any of these materials. All rights belong to their respective owners and authors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2024 EduRelief SL. Made with <Heart className="inline w-4 h-4 text-red-500 fill-current" /> for Sri Lankan Students.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">
                Terms of Service
              </a>
              <a href="#feedback" className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;