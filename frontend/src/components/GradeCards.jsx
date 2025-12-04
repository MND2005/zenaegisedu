import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { initializeGradeCategoriesIfNeeded, getGradeCategories } from '../services/firestore';
import { gradeCategories as mockGradeCategories } from '../data/mockData';

const GradeCards = () => {
  const [gradeCategories, setGradeCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGradeCategories = async () => {
      try {
        // Initialize grade categories if needed
        const initResult = await initializeGradeCategoriesIfNeeded();
        if (!initResult.success) {
          throw new Error(initResult.error);
        }
        
        // Fetch grade categories
        const result = await getGradeCategories();
        if (result.success) {
          setGradeCategories(result.data);
        } else {
          throw new Error(result.error);
        }
      } catch (err) {
        console.error('Error fetching grade categories:', err);
        setError(err.message);
        // Fallback to mock data if Firestore fetch fails
        setGradeCategories(mockGradeCategories);
      } finally {
        setLoading(false);
      }
    };

    fetchGradeCategories();
  }, []);

  if (loading) {
    return (
      <section id="grades" className="py-20 bg-gray-50 dark:bg-gray-900">
        {/* Blurred edge transition from previous section */}
        <div className="h-16 -mt-16 bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Loading grades...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.warn('Using mock data due to error:', error);
  }

  return (
    <section id="grades" className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* Blurred edge transition from previous section */}
      <div className="h-16 -mt-16 bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Select your grade
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Access <span className="text-emerald-500 font-semibold">1100+ resources</span> organized by grade and subject for quick access.
          </p>
          {error && (
            <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
              Using demo data. Firestore error: {error}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gradeCategories.map((category) => (
            <Link
              key={category.id}
              to={`/grade/${category.id}`}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {category.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.subjects}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradeCards;