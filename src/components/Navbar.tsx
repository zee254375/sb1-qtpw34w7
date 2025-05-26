import React, { useState } from 'react';
import { Menu, X, User, LogIn, Globe } from 'lucide-react';

interface NavbarProps {
  onLogin: () => void;
  onRegister: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogin, onRegister }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'th'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  return (
    <nav className="bg-luxury sticky top-0 z-50 shadow-lg py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold mr-2 text-[#c6a355]">So Easy</div>
            <div className="hidden md:block text-sm bg-luxury-purple text-white px-2 py-1 rounded-md">Five Star Success</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-200 hover:text-[#c6a355] transition duration-200">Home</a>
            <a href="#wallets" className="text-gray-200 hover:text-[#c6a355] transition duration-200">5 Wallets</a>
            <a href="#bonuses" className="text-gray-200 hover:text-[#c6a355] transition duration-200">Bonuses</a>
            <a href="#packages" className="text-gray-200 hover:text-[#c6a355] transition duration-200">Packages</a>
            <a href="#ranks" className="text-gray-200 hover:text-[#c6a355] transition duration-200">Ranks</a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-sm bg-luxury-purple-dark hover:bg-luxury-purple px-3 py-1 rounded-full transition duration-200"
            >
              <Globe size={16} className="mr-1" />
              {language === 'en' ? 'EN' : 'TH'}
            </button>
            <button 
              onClick={onLogin}
              className="flex items-center bg-[#c6a355] hover:bg-[#e9d5aa] text-black font-semibold px-4 py-2 rounded-md transition duration-200"
            >
              <LogIn size={18} className="mr-2" />
              Login
            </button>
            <button 
              onClick={onRegister}
              className="flex items-center bg-white hover:bg-gray-100 text-luxury-purple-dark font-semibold px-4 py-2 rounded-md transition duration-200"
            >
              <User size={18} className="mr-2" />
              Register
            </button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-luxury-purple-dark rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-200 hover:text-[#c6a355] transition duration-200 py-2 border-b border-luxury-purple">Home</a>
              <a href="#wallets" className="text-gray-200 hover:text-[#c6a355] transition duration-200 py-2 border-b border-luxury-purple">5 Wallets</a>
              <a href="#bonuses" className="text-gray-200 hover:text-[#c6a355] transition duration-200 py-2 border-b border-luxury-purple">Bonuses</a>
              <a href="#packages" className="text-gray-200 hover:text-[#c6a355] transition duration-200 py-2 border-b border-luxury-purple">Packages</a>
              <a href="#ranks" className="text-gray-200 hover:text-[#c6a355] transition duration-200 py-2 border-b border-luxury-purple">Ranks</a>
              <button 
                onClick={toggleLanguage}
                className="flex items-center text-sm bg-luxury-purple hover:bg-luxury-purple-light py-2 px-3 rounded-full transition duration-200 w-20"
              >
                <Globe size={16} className="mr-1" />
                {language === 'en' ? 'English' : 'Thai'}
              </button>
              <div className="flex space-x-2 pt-2">
                <button 
                  onClick={onLogin}
                  className="flex-1 flex items-center justify-center bg-[#c6a355] hover:bg-[#e9d5aa] text-black font-semibold px-4 py-2 rounded-md transition duration-200"
                >
                  <LogIn size={18} className="mr-2" />
                  Login
                </button>
                <button 
                  onClick={onRegister}
                  className="flex-1 flex items-center justify-center bg-white hover:bg-gray-100 text-luxury-purple-dark font-semibold px-4 py-2 rounded-md transition duration-200"
                >
                  <User size={18} className="mr-2" />
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;