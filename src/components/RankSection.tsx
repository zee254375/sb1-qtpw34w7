import React from 'react';
import { ranks } from '../data/ranks';
import { Award, BadgeCheck, Briefcase, Crown } from 'lucide-react';

const RankSection: React.FC = () => {
  const getIcon = (iconName: string, size = 24) => {
    switch (iconName) {
      case 'Award':
        return <Award size={size} />;
      case 'BadgeCheck':
        return <BadgeCheck size={size} />;
      case 'Briefcase':
        return <Briefcase size={size} />;
      case 'Crown':
        return <Crown size={size} />;
      default:
        return <Award size={size} />;
    }
  };

  return (
    <section id="ranks" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-400">Rank</span> Progression
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Advance through our leadership ranks and unlock greater rewards.
          </p>
        </div>
        
        {/* Team Logo */}
        <div className="flex justify-center mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <div className="text-4xl font-bold bg-gradient-to-br from-purple-600 to-pink-500 bg-clip-text text-transparent">5★</div>
            </div>
          </div>
        </div>

        {/* Rank Progress Visualization */}
        <div className="hidden lg:block max-w-5xl mx-auto mb-16 relative">
          {/* Progress Line */}
          <div className="absolute top-16 left-0 right-0 h-2 bg-blue-800"></div>
          
          {/* Ranks */}
          <div className="flex justify-between relative">
            {ranks.map((rank, index) => (
              <div key={rank.id} className="flex flex-col items-center w-1/5 relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                  index === 4 ? 'bg-yellow-500 text-blue-900' : 'bg-blue-700 text-white'
                }`}>
                  {getIcon(rank.icon)}
                </div>
                <div className="mt-4 text-center">
                  <h3 className={`font-semibold ${
                    index === 4 ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {rank.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Rank Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ranks.map((rank, index) => (
            <div 
              key={rank.id}
              className={`bg-blue-800 rounded-xl overflow-hidden shadow-lg border ${
                index === 4 ? 'border-yellow-400 md:col-span-2 lg:col-span-1' : 'border-blue-700'
              }`}
            >
              <div className={`p-4 flex items-center ${
                index === 4 ? 'bg-yellow-500 text-blue-900' : 'bg-blue-700'
              }`}>
                <div className="mr-3">
                  {getIcon(rank.icon)}
                </div>
                <h3 className="text-xl font-bold">{rank.name}</h3>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-yellow-400 font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {rank.requirements.map((req, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-yellow-400 font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {rank.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Rank Path Mobile View */}
        <div className="lg:hidden mt-12 max-w-sm mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-700"></div>
            
            {ranks.map((rank, index) => (
              <div key={rank.id} className="flex mb-8 relative">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center z-10 ${
                  index === 4 ? 'bg-yellow-500 text-blue-900' : 'bg-blue-700 text-white'
                }`}>
                  {getIcon(rank.icon, 18)}
                </div>
                <div className="ml-4">
                  <h3 className={`font-semibold ${
                    index === 4 ? 'text-yellow-400' : 'text-white'
                  }`}>
                    {rank.name}
                  </h3>
                  <p className="text-sm text-gray-400">{rank.requirements[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankSection;