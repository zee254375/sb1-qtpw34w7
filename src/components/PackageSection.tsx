import React, { useState } from 'react';
import { packages } from '../data/packages';
import { Check, X } from 'lucide-react';

const PackageSection: React.FC = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);

  return (
    <section id="packages" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Membership <span className="text-yellow-500">Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your business goals and start your journey today.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`flex-1 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform ${
                pkg.recommended ? 'md:-translate-y-4' : ''
              } ${activePackage === pkg.id ? 'ring-4 ring-yellow-400' : ''}`}
              onMouseEnter={() => setActivePackage(pkg.id)}
              onMouseLeave={() => setActivePackage(null)}
            >
              {pkg.recommended && (
                <div className="bg-yellow-500 text-blue-900 text-center py-2 font-semibold">
                  Recommended
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-blue-900">{pkg.name}</h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-800">{pkg.price} ฿</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <span className="text-blue-700 font-semibold">{pkg.pv}</span>
                    </div>
                    <div>
                      <p className="text-gray-700">Points Value (PV)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-purple-50 p-3 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-md mr-3">
                      <span className="text-purple-700 font-semibold">{pkg.cr}</span>
                    </div>
                    <div>
                      <p className="text-gray-700">Credit Value (CR)</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="text-green-500 mr-2 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition duration-300 ${
                  pkg.recommended 
                    ? 'bg-yellow-500 hover:bg-yellow-400 text-blue-900' 
                    : 'bg-blue-500 hover:bg-blue-400 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Comparison Table */}
        <div className="mt-16 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-6 text-center text-blue-900">Package Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 px-4 text-left">Feature</th>
                  <th className="py-2 px-4 text-center">Basic</th>
                  <th className="py-2 px-4 text-center">Agency (AG)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Price</td>
                  <td className="py-3 px-4 text-center">390 ฿</td>
                  <td className="py-3 px-4 text-center font-medium">3,900 ฿</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Points Value (PV)</td>
                  <td className="py-3 px-4 text-center">100</td>
                  <td className="py-3 px-4 text-center font-medium">1,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Credit Value (CR)</td>
                  <td className="py-3 px-4 text-center">3,900</td>
                  <td className="py-3 px-4 text-center font-medium">39,000</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Max Together Bonus</td>
                  <td className="py-3 px-4 text-center">390 ฿/day</td>
                  <td className="py-3 px-4 text-center font-medium">3,900 ฿/day</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Advanced Analytics</td>
                  <td className="py-3 px-4 text-center"><X className="text-red-500 mx-auto" size={18} /></td>
                  <td className="py-3 px-4 text-center"><Check className="text-green-500 mx-auto" size={18} /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Higher Rank Potential</td>
                  <td className="py-3 px-4 text-center"><X className="text-red-500 mx-auto" size={18} /></td>
                  <td className="py-3 px-4 text-center"><Check className="text-green-500 mx-auto" size={18} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;