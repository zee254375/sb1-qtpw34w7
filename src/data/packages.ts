import { PackageType } from '../types';

export const packages: PackageType[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 390,
    pv: 100,
    cr: 3900,
    features: [
      'All 5 income channels',
      'Maximum 390฿ Together Bonus per day',
      'Business back office access',
      'Member-only products and services'
    ]
  },
  {
    id: 'agency',
    name: 'Agency (AG)',
    price: 3900,
    pv: 1000,
    cr: 39000,
    recommended: true,
    features: [
      'All 5 income channels',
      'Maximum 3,900฿ Together Bonus per day',
      'Advanced back office analytics',
      'Agency-exclusive products and services',
      'Higher rank qualification potential',
      'Priority customer support'
    ]
  }
];