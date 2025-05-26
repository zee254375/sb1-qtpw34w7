import { WalletType } from '../types';
import { Wallet, CreditCard, ShoppingBag, BarChart4, DollarSign } from 'lucide-react';

export const wallets: WalletType[] = [
  {
    id: 'cash',
    name: 'Cash Wallet',
    description: 'Use to deposit money for purchasing RP packages',
    icon: 'Wallet',
    color: 'bg-green-500'
  },
  {
    id: 'redemption',
    name: 'Redemption Wallet (RP)',
    description: 'Use to purchase products and services from the company',
    icon: 'ShoppingBag',
    color: 'bg-blue-500'
  },
  {
    id: 'points',
    name: 'Points Value Wallet (PV)',
    description: 'Used to calculate bonuses and commissions',
    icon: 'BarChart4',
    color: 'bg-yellow-500'
  },
  {
    id: 'credit',
    name: 'Credit Wallet (CR)',
    description: 'Controls withdrawal limits, 10x your RP value',
    icon: 'CreditCard',
    color: 'bg-purple-500'
  },
  {
    id: 'bonus',
    name: 'Bonus Wallet',
    description: 'Accumulates all earnings from the 5 bonus channels',
    icon: 'DollarSign',
    color: 'bg-red-500'
  }
];