import { BonusType } from '../types';

export const bonuses: BonusType[] = [
  {
    id: 'tell-you',
    name: 'Tell You Bonus',
    description: 'Direct referral commission',
    percentage: '30% PV + 10% RP',
    details: 'Earn 30% of PV and 10% of RP from members you directly refer',
    icon: 'Users'
  },
  {
    id: 'together',
    name: 'Together Bonus',
    description: 'Binary team commission',
    percentage: '20%',
    details: 'Earn 20% from your weaker leg, maximum 390฿ (Basic) or 3,900฿ (Agency) per day',
    icon: 'GitBranch'
  },
  {
    id: 'five-star',
    name: 'Five Star Bonus',
    description: 'Multi-level commission',
    percentage: 'Up to 50%',
    details: 'Earn from 5 levels deep in your downline organization',
    icon: 'Star'
  },
  {
    id: 'loyalty',
    name: 'Loyalty Bonus',
    description: 'Rewards for product purchases',
    percentage: '5% x 10 levels',
    details: 'Earn 5% through 10 levels from product purchases in your team',
    icon: 'Award'
  },
  {
    id: 'unity',
    name: 'Unity Bonus',
    description: 'Global pool for top leaders',
    percentage: '3%',
    details: 'Share 3% of global sales (President rank only)',
    icon: 'Globe'
  }
];