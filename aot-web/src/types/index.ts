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
  logoUrl: string;
  type: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface PastMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl?: string;
}

export interface PastTenure {
  session: string;
  members: PastMember[];
}

export interface AboutData {
  title: string;
  missionText: string;
  features: {
    iconId: string;
    title: string;
    description: string;
  }[];
  navCards: {
    id: string;
    to: string;
    iconId: string;
    title: string;
    description: string;
    linkText: string;
  }[];
  teamHub: {
    id: string;
    to: string;
    iconId: string;
    title: string;
    description: string;
    linkText: string;
  }[];
}

export interface EventShowcaseItem {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
}
