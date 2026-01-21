import { TeamMember } from '../../../types';

interface TeamSection {
  title: string;
  members: TeamMember[];
}

export const teamSections: TeamSection[] = [
  {
    title: "EXCO",
    members: [
      { id: 'exco-1', name: 'Alex Rivera', role: 'President', imageUrl: 'https://picsum.photos/400/400?random=1', email: 'president@agentsoftech.club' },
      { id: 'exco-2', name: 'Sarah Chen', role: 'Vice President', imageUrl: 'https://picsum.photos/400/400?random=2', email: 'vp@agentsoftech.club' },
      { id: 'exco-3', name: 'James Smith', role: 'Treasurer & Sponsorship', imageUrl: 'https://picsum.photos/400/400?random=3', email: 'treasurer@agentsoftech.club' },
      { id: 'exco-4', name: 'Olivia Wilson', role: 'Secretary', imageUrl: 'https://picsum.photos/400/400?random=4', email: 'secretary@agentsoftech.club' },
    ]
  },
  {
    title: "Tech Team",
    members: [
      { id: 'tech-1', name: 'David Kim', role: 'Tech Lead', imageUrl: 'https://picsum.photos/400/400?random=5', email: 'tech@agentsoftech.club' },
      { id: 'tech-2', name: 'Jordan Lee', role: 'Tech Co-Lead', imageUrl: 'https://picsum.photos/400/400?random=6', email: 'tech.lead1@agentsoftech.club' },
      { id: 'tech-3', name: 'Priya Patel', role: 'Tech Co-Lead', imageUrl: 'https://picsum.photos/400/400?random=7', email: 'tech.lead2@agentsoftech.club' },
    ]
  },
  {
    title: "Visual Marketing",
    members: [
      { id: 'vm-1', name: 'Marcus Johnson', role: 'Director', imageUrl: 'https://picsum.photos/400/400?random=8', email: 'marketing@agentsoftech.club' },
      { id: 'vm-2', name: 'Alice Wong', role: 'Co-Director', imageUrl: 'https://picsum.photos/400/400?random=9', email: 'marketing.co@agentsoftech.club' },
      { id: 'vm-3', name: 'Tom Baker', role: 'Co-Director', imageUrl: 'https://picsum.photos/400/400?random=10', email: 'marketing.co2@agentsoftech.club' },
    ]
  },
  {
    title: "Events Team",
    members: [
      { id: 'evt-1', name: 'Emily Davis', role: 'Director', imageUrl: 'https://picsum.photos/400/400?random=11', email: 'events@agentsoftech.club' },
      { id: 'evt-2', name: 'Ryan Park', role: 'Co-Director', imageUrl: 'https://picsum.photos/400/400?random=12', email: 'events.co@agentsoftech.club' },
      { id: 'evt-3', name: 'Zoe Chang', role: 'Co-Director', imageUrl: 'https://picsum.photos/400/400?random=13', email: 'events.co2@agentsoftech.club' },
    ]
  },
  {
    title: "Public Relations",
    members: [
      { id: 'pr-1', name: 'Sophia Brown', role: 'Director', imageUrl: 'https://picsum.photos/400/400?random=14', email: 'pr@agentsoftech.club' },
      { id: 'pr-2', name: 'Lucas Gray', role: 'Co-Director', imageUrl: 'https://picsum.photos/400/400?random=15', email: 'pr.co@agentsoftech.club' },
      { id: 'pr-3', name: 'Mia Turner', role: 'Co-Director', imageUrl: 'https://picsum.photos/400/400?random=16', email: 'pr.co2@agentsoftech.club' },
    ]
  }
];