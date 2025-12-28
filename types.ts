import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  email: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  location: string;
  isSignature?: boolean;
}

export interface Award {
  id: string;
  title: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string; // Using picsum for placeholder
  type: string;
}