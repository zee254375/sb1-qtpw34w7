import React, { useState } from 'react';
import { wallets } from '../data/wallets';
import { Wallet, CreditCard, ShoppingBag, BarChart4, DollarSign } from 'lucide-react';

const WalletSection: React.FC = () => {
  const [activeWallet, setActiveWallet] = useState(wallets[0].id);
  
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'Wallet':
        return <Wallet size={size} />;
      case 'CreditCard':
        return <CreditCard size={size} />;
      case 'ShoppingBag':
        return <ShoppingBag size={size} />;
      case 'BarChart4':
        return <BarChart4 size={size} />;
      case 'DollarSign':
        return <DollarSign size={size} />;
      default:
        return <Wallet size={size} />;
    }
  };

  return (
    <section id="wallets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-luxury-purple-dark">
            The <span className="text-[#c6a355]">5 Wallets</span> System
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our revolutionary 5 wallet system creates a sustainable ecosystem for growth and rewards.
          </p>
        </div>
        
        {/* Wallet Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              className={`flex items-center px-4 py-3 rounded-lg transition duration-300 ${
                activeWallet === wallet.id
                  ? `bg-luxury-purple text-white shadow-lg` 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveWallet(wallet.id)}
            >
              <span className="mr-2">{getIcon(wallet.icon)}</span>
              <span className="font-semibold">{wallet.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
        
        {/* Wallet Display */}
        <div className="max-w-4xl mx-auto">
          {wallets.map((wallet) => (
            <div
              key={wallet.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                activeWallet === wallet.id ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
              }`}
            >
              {activeWallet === wallet.id && (
                <div className="md:flex">
                  <div className="bg-luxury p-8 flex items-center justify-center md:w-1/3">
                    <div className="text-[#c6a355]">
                      {getIcon(wallet.icon, 80)}
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-luxury-purple-dark">{wallet.name}</h3>
                    <p className="text-gray-600 mb-6">{wallet.description}</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-[#c6a355]/20">
                      <h4 className="font-semibold mb-2 text-luxury-purple">How it works:</h4>
                      {wallet.id === 'cash' && (
                        <p>Deposit funds here to purchase RP packages and start your journey.</p>
                      )}
                      {wallet.id === 'redemption' && (
                        <p>Use RP to purchase products and services, generating PV for your team.</p>
                      )}
                      {wallet.id === 'points' && (
                        <p>PV is generated from product purchases and determines your bonus calculations.</p>
                      )}
                      {wallet.id === 'credit' && (
                        <p>Receive 10x your RP value in credits. This controls how much you can withdraw.</p>
                      )}
                      {wallet.id === 'bonus' && (
                        <p>All earnings from the 5 bonus channels are deposited here for withdrawal.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Wallet Flow Diagram */}
        <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md border border-[#c6a355]/20">
          <h3 className="text-xl font-semibold mb-4 text-center text-luxury-purple-dark">How The Wallet System Flows</h3>
          
          <div className="relative">
            {/* Flow Chart */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#c6a355]/20 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-luxury-purple text-white p-3 rounded-full mb-2">
                  <Wallet size={24} />
                </div>
                <p className="text-sm font-medium">Cash Wallet</p>
              </div>
              
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-luxury-purple text-white p-3 rounded-full mb-2">
                  <ShoppingBag size={24} />
                </div>
                <p className="text-sm font-medium">Redemption Wallet</p>
              </div>
              
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-luxury-purple text-white p-3 rounded-full mb-2">
                  <BarChart4 size={24} />
                </div>
                <p className="text-sm font-medium">Points Value Wallet</p>
              </div>
              
              <div className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-luxury-purple text-white p-3 rounded-full mb-2">
                  <CreditCard size={24} />
                </div>
                <p className="text-sm font-medium">Credit Wallet</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-luxury-purple text-white p-3 rounded-full mb-2">
                  <DollarSign size={24} />
                </div>
                <p className="text-sm font-medium">Bonus Wallet</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-gray-600 text-sm">
            <p className="mb-2"><strong>Step 1:</strong> Deposit money to Cash Wallet</p>
            <p className="mb-2"><strong>Step 2:</strong> Purchase RP in the Redemption Wallet</p>
            <p className="mb-2"><strong>Step 3:</strong> Use RP to buy products, generating PV</p>
            <p className="mb-2"><strong>Step 4:</strong> Credit Wallet increases (10x your RP)</p>
            <p><strong>Step 5:</strong> Earnings are stored in Bonus Wallet for withdrawal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WalletSection;