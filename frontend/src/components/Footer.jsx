import React from 'react';
import { Heart, AlertCircle } from 'lucide-react';

const Footer = ({ isAdmin = false }) => {
  return (
    <footer className="bg-gray-800/30 backdrop-blur-lg border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          {!isAdmin && (
            <>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                Powered by <img src="/logo.png" alt="ZenAegis Logo" className="h-16" />
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                
              </p>

              {/* Disclaimer Box */}
              <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-6 text-left backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                      Disclaimer
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      The documents, papers, and short notes available on this website are sent by students and teachers from all over Sri Lanka. We do not claim ownership of any of these materials. All rights belong to their respective owners and authors.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Heartfelt Thanks */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-5 h-5 text-red-400" /> for the students of Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;