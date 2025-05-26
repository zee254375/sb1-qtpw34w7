import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

const CalculatorSection: React.FC = () => {
  const [directReferrals, setDirectReferrals] = useState(5);
  const [packageType, setPackageType] = useState<'basic' | 'agency'>('agency');
  const [monthlyVolume, setMonthlyVolume] = useState(10000);
  
  // Calculate potential earnings
  const calculateEarnings = () => {
    // Basic calculations (simplified for demo)
    const tellYouBonus = packageType === 'basic' 
      ? directReferrals * 390 * 0.3 
      : directReferrals * 3900 * 0.3;
      
    const togetherBonus = packageType === 'basic'
      ? Math.min(390 * 30, monthlyVolume * 0.2)
      : Math.min(3900 * 30, monthlyVolume * 0.2);
      
    const fiveStarBonus = monthlyVolume * 0.05;
    const loyaltyBonus = monthlyVolume * 0.03;
    
    // Only for president rank (not included in calculation)
    const unityBonus = 0;
    
    return {
      tellYouBonus: Math.round(tellYouBonus),
      togetherBonus: Math.round(togetherBonus),
      fiveStarBonus: Math.round(fiveStarBonus),
      loyaltyBonus: Math.round(loyaltyBonus),
      unityBonus,
      total: Math.round(tellYouBonus + togetherBonus + fiveStarBonus + loyaltyBonus)
    };
  };
  
  const earnings = calculateEarnings();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Income <span className="text-yellow-500">Calculator</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimate your potential earnings with our easy-to-use calculator.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-100 rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 text-white md:w-1/3">
              <div className="flex items-center mb-6">
                <Calculator className="mr-3" size={28} />
                <h3 className="text-xl font-bold">Calculate Your Potential</h3>
              </div>
              
              <p className="mb-6 text-gray-300">
                Adjust the values to see your potential monthly earnings based on your network and activity.
              </p>
              
              <div className="bg-blue-700 rounded-lg p-4">
                <h4 className="font-semibold mb-4 text-yellow-400">Tips for Success:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Focus on sponsoring Agency members</li>
                  <li>• Help your team to be active monthly</li>
                  <li>• Build balanced teams on both legs</li>
                  <li>• Aim for rank advancement</li>
                </ul>
              </div>
            </div>
            
            <div className="p-8 md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Direct Referrals
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={directReferrals}
                    onChange={(e) => setDirectReferrals(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">1</span>
                    <span className="text-sm font-medium text-blue-900">{directReferrals}</span>
                    <span className="text-xs text-gray-500">20</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Package Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="packageType"
                        value="basic"
                        checked={packageType === 'basic'}
                        onChange={() => setPackageType('basic')}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Basic</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="packageType"
                        value="agency"
                        checked={packageType === 'agency'}
                        onChange={() => setPackageType('agency')}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Agency</span>
                    </label>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Team Volume (PV)
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">1,000</span>
                    <span className="text-sm font-medium text-blue-900">{monthlyVolume.toLocaleString()}</span>
                    <span className="text-xs text-gray-500">100,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-4 text-blue-900">Estimated Monthly Earnings:</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tell You Bonus:</span>
                    <span className="font-medium">{earnings.tellYouBonus.toLocaleString()} ฿</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Together Bonus:</span>
                    <span className="font-medium">{earnings.togetherBonus.toLocaleString()} ฿</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Five Star Bonus:</span>
                    <span className="font-medium">{earnings.fiveStarBonus.toLocaleString()} ฿</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Loyalty Bonus:</span>
                    <span className="font-medium">{earnings.loyaltyBonus.toLocaleString()} ฿</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-gray-400">
                    <span>Unity Bonus (President only):</span>
                    <span>Not Qualified</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-900">Total:</span>
                      <span className="text-xl font-bold text-blue-900">{earnings.total.toLocaleString()} ฿</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Note: This calculator provides estimates only. Actual earnings may vary based on multiple factors including team performance, rank, and market conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;