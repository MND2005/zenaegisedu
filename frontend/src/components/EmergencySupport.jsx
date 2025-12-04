import React from 'react';
import { Phone, AlertTriangle, Cloud, Shield, Home, Droplet } from 'lucide-react';

const EmergencySupport = () => {
  const emergencyContacts = [
    {
      icon: Phone,
      title: 'Suwa Seriya / සුව සැරිය',
      number: '1990',
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: AlertTriangle,
      title: 'Disaster Mgmt / ආපදා කළමනාකරණ',
      number: '117 / 0112 136 136',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Cloud,
      title: 'Met Dept / කාලගුණ විද්‍යා',
      number: '0112 694 841',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Police Emergency / පොලිස් හදිසි',
      number: '119',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: Home,
      title: 'NBRO / ගොඩනැගිලි පර්යේෂණ',
      number: '0112 588 946',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Droplet,
      title: 'Irrigation / වාරිමාර්ග',
      number: '0112 488 505',
      color: 'bg-cyan-50 text-cyan-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            EMERGENCY SUPPORT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stay Safe, Sri Lanka 🇱🇰
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We built this platform to support students affected by the recent floods. While education is vital, your life and safety are our top priority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyContacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                      {contact.title}
                    </h4>
                    <a 
                      href={`tel:${contact.number.replace(/\s/g, '')}`}
                      className="text-xl font-bold text-gray-900 hover:text-emerald-500 transition-colors"
                    >
                      {contact.number}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmergencySupport;