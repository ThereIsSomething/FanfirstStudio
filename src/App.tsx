import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Stats />
      <Testimonials />
      <PricingPlans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;