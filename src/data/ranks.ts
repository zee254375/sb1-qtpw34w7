import { RankType } from '../types';

export const ranks: RankType[] = [
  {
    id: 'supervisor',
    name: 'Supervisor',
    requirements: [
      'Directly sponsor 5 Agency members'
    ],
    benefits: [
      'Leadership bonus eligibility',
      'Team building tools access',
      'Recognition at company events'
    ],
    icon: 'Award'
  },
  {
    id: 'assistant-manager',
    name: 'Assistant Manager',
    requirements: [
      'Have 5 Supervisors in your team'
    ],
    benefits: [
      'Increased bonus percentages',
      'Special training access',
      'Company event invitations'
    ],
    icon: 'BadgeCheck'
  },
  {
    id: 'manager',
    name: 'Manager',
    requirements: [
      'Have 5 Assistant Managers in your team'
    ],
    benefits: [
      'Higher Together Bonus caps',
      'Leadership development program',
      'Exclusive promotional materials'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'director',
    name: 'Director',
    requirements: [
      'Have 5 Managers in your team'
    ],
    benefits: [
      'Executive leadership training',
      'International trip eligibility',
      'Company strategy input opportunities'
    ],
    icon: 'Crown'
  },
  {
    id: 'president',
    name: 'President',
    requirements: [
      'Have 5 Directors in your team'
    ],
    benefits: [
      'Unity Bonus (3% global pool)',
      'Highest recognition status',
      'Company leadership council seat',
      'Luxury lifestyle incentives'
    ],
    icon: 'Award'
  }
];