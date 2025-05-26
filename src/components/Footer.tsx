import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-1">So Easy</h3>
              <p className="text-sm text-gray-400">Five Star Success</p>
            </div>
            <p className="text-gray-400 mb-6">
              Building financial freedom through our innovative multi-level marketing platform and 5-wallet system.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition duration-200">Home</a></li>
              <li><a href="#wallets" className="text-gray-400 hover:text-yellow-400 transition duration-200">5 Wallets System</a></li>
              <li><a href="#bonuses" className="text-gray-400 hover:text-yellow-400 transition duration-200">Bonus Channels</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-yellow-400 transition duration-200">Membership Packages</a></li>
              <li><a href="#ranks" className="text-gray-400 hover:text-yellow-400 transition duration-200">Rank Progression</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">Company Policies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-200">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Business Center, Bangkok, Thailand 10110
                </span>
              </li>
              <li className="flex">
                <Phone size={18} className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+66 2 123 4567</span>
              </li>
              <li className="flex">
                <Mail size={18} className="text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@soeasy.co.th</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 So Easy Co., Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition duration-200">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition duration-200">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;