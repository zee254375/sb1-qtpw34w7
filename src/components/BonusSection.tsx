import React, { useState } from 'react';
import { bonuses } from '../data/bonuses';
import { Users, GitBranch, Star, Award, Globe } from 'lucide-react';

const BonusSection: React.FC = () => {
  const [activeBonus, setActiveBonus] = useState(bonuses[0].id);
  
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'Users':
        return <Users size={size} />;
      case 'GitBranch':
        return <GitBranch size={size} />;
      case 'Star':
        return <Star size={size} />;
      case 'Award':
        return <Award size={size} />;
      case 'Globe':
        return <Globe size={size} />;
      default:
        return <Star size={size} />;
    }
  };

  return (
    <section id="bonuses" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">5 Bonus</span> Channels
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Maximize your earnings through our comprehensive five bonus system.
          </p>
        </div>
        
        {/* Star Icon Visual */}
        <div className="hidden md:block relative max-w-2xl mx-auto mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">5</span>
            </div>
          </div>
          
          {bonuses.map((bonus, index) => (
            <div 
              key={bonus.id}
              className="absolute"
              style={{
                top: `${50 - 40 * Math.cos(2 * Math.PI * index / 5)}%`,
                left: `${50 - 40 * Math.sin(2 * Math.PI * index / 5)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <button
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeBonus === bonus.id
                    ? 'bg-yellow-400 text-blue-900 scale-125'
                    : 'bg-blue-700 text-white hover:bg-blue-600'
                }`}
                onClick={() => setActiveBonus(bonus.id)}
              >
                {getIcon(bonus.icon)}
              </button>
              <p className={`mt-2 text-center text-sm font-medium transition-all duration-300 ${
                activeBonus === bonus.id ? 'text-yellow-400' : 'text-gray-300'
              }`}>
                {bonus.name.split(' ')[0]}
              </p>
            </div>
          ))}
        </div>
        
        {/* Mobile Bonus Selection */}
        <div className="md:hidden flex justify-center gap-2 mb-8 flex-wrap">
          {bonuses.map((bonus) => (
            <button
              key={bonus.id}
              className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
                activeBonus === bonus.id
                  ? 'bg-yellow-400 text-blue-900'
                  : 'bg-blue-700 text-white'
              }`}
              onClick={() => setActiveBonus(bonus.id)}
            >
              <span className="mr-1">{getIcon(bonus.icon, 16)}</span>
              <span className="text-sm">{bonus.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
        
        {/* Bonus Details */}
        <div className="max-w-4xl mx-auto">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className={`bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform ${
                activeBonus === bonus.id 
                  ? 'opacity-100 max-h-96 scale-100' 
                  : 'opacity-0 max-h-0 scale-95'
              }`}
            >
              {activeBonus === bonus.id && (
                <div className="md:flex">
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 flex items-center justify-center md:w-1/3">
                    <div className="text-blue-900">
                      {getIcon(bonus.icon, 80)}
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-blue-900">{bonus.name}</h3>
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full inline-block text-sm font-semibold mb-4">
                      {bonus.percentage}
                    </div>
                    <p className="text-gray-600 mb-6">{bonus.description}</p>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">How it works:</h4>
                      <p>{bonus.details}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bonus Summary Table */}
        <div className="mt-16 max-w-3xl mx-auto bg-blue-800 p-6 rounded-xl shadow-md border border-blue-700">
          <h3 className="text-xl font-semibold mb-6 text-center text-yellow-400">Bonus Summary</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-700">
                  <th className="py-2 px-4 text-left text-sm">Bonus Type</th>
                  <th className="py-2 px-4 text-left text-sm">Rate</th>
                  <th className="py-2 px-4 text-left text-sm">Paid From</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-blue-700">
                  <td className="py-3 px-4">Tell You Bonus</td>
                  <td className="py-3 px-4">30% PV + 10% RP</td>
                  <td className="py-3 px-4">Direct referrals</td>
                </tr>
                <tr className="border-b border-blue-700">
                  <td className="py-3 px-4">Together Bonus</td>
                  <td className="py-3 px-4">20%</td>
                  <td className="py-3 px-4">Weaker team leg</td>
                </tr>
                <tr className="border-b border-blue-700">
                  <td className="py-3 px-4">Five Star Bonus</td>
                  <td className="py-3 px-4">Up to 50%</td>
                  <td className="py-3 px-4">5 levels deep</td>
                </tr>
                <tr className="border-b border-blue-700">
                  <td className="py-3 px-4">Loyalty Bonus</td>
                  <td className="py-3 px-4">5% x 10 levels</td>
                  <td className="py-3 px-4">Product purchases</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Unity Bonus</td>
                  <td className="py-3 px-4">3%</td>
                  <td className="py-3 px-4">Global sales volume</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;