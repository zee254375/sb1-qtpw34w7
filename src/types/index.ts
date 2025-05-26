export interface WalletType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface BonusType {
  id: string;
  name: string;
  description: string;
  percentage: string;
  details: string;
  icon: string;
}

export interface PackageType {
  id: string;
  name: string;
  price: number;
  pv: number;
  cr: number;
  features: string[];
  recommended?: boolean;
}

export interface RankType {
  id: string;
  name: string;
  requirements: string[];
  benefits: string[];
  icon: string;
}