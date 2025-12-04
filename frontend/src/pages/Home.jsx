import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GradeCards from '../components/GradeCards';
import HowItWorks from '../components/HowItWorks';
import EmergencySupport from '../components/EmergencySupport';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <GradeCards />
      <HowItWorks />
      <EmergencySupport />
      <Footer />
    </div>
  );
};

export default Home;