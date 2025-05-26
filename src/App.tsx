import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WalletSection from './components/WalletSection';
import BonusSection from './components/BonusSection';
import PackageSection from './components/PackageSection';
import RankSection from './components/RankSection';
import CalculatorSection from './components/CalculatorSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { Toaster } from 'react-hot-toast';
import { isSupabaseConfigured } from './lib/supabase';
import toast from 'react-hot-toast';

function App() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'login'
  });

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      toast.error('Please connect to Supabase to enable authentication features');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onLogin={() => setAuthModal({ isOpen: true, mode: 'login' })}
        onRegister={() => setAuthModal({ isOpen: true, mode: 'register' })}
      />
      <main className="flex-grow">
        <HeroSection />
        <WalletSection />
        <BonusSection />
        <PackageSection />
        <RankSection />
        <CalculatorSection />
      </main>
      <Footer />
      <AuthModal 
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;