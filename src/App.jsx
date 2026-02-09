import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Recommendation from './components/Recommendation';
import Slogan from './components/Slogan';
import Footer from './components/Footer';
import ActivationModal from './components/ActivationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <Header onActivate={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <Features />
        <Recommendation />
        <Slogan />
      </main>
      <Footer />
      <ActivationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
