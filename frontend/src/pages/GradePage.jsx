import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { gradeCategories, getResourcesByGrade } from '../data/mockData';
import { Button } from '../components/ui/button';

const GradePage = () => {
  const { gradeId } = useParams();
  const grade = gradeCategories.find(g => g.id === gradeId);
  const resources = getResourcesByGrade(gradeId);

  if (!grade) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Grade not found</h1>
          <Link to="/" className="text-emerald-500 hover:underline">Go back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all grades</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {grade.title}
          </h1>
          <p className="text-xl text-white/90">
            {grade.subjects}
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Available Resources
            </h2>
            <p className="text-gray-600">
              Click on any resource to view or download from Google Drive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div 
                key={resource.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {resource.subject} • {resource.type}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white"
                        onClick={() => window.open(resource.driveLink, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View on Drive
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {resources.length === 0 && (
            <div className="text-center py-20">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No resources available yet for this grade.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GradePage;