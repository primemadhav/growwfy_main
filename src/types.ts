/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  companyName: string;
  avatarUrl: string;
  activePlan: 'none' | 'starter' | 'professional' | 'business';
  subscriptionStatus: 'active' | 'past_due' | 'unpaid' | 'none';
  billingCycle: 'monthly' | 'annually';
  createdAt: string;
  notifications: {
    marketing: boolean;
    projectUpdates: boolean;
    billing: boolean;
  };
}

export interface SubscriptionPlan {
  id: 'starter' | 'professional' | 'business';
  name: string;
  price: number;
  billingText: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
  deliveryTime: string;
}

export interface Transaction {
  id: string;
  date: string;
  planId: 'starter' | 'professional' | 'business';
  amount: number;
  status: 'succeeded' | 'failed' | 'pending';
  paymentMethod: string;
  invoiceUrl?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'replied' | 'archived';
}

export interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  status: 'upcoming' | 'in_progress' | 'completed';
  updatedAt: string;
}

export interface DashboardData {
  user: UserProfile;
  transactions: Transaction[];
  milestones: ProjectMilestone[];
  messages?: ContactMessage[];
}
