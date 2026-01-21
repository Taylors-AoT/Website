import { Code2, Users, Calendar, Laptop, Cpu, Globe } from 'lucide-react';
import { Activity } from '../../../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Weekly Workshops',
    description: 'Hands-on sessions covering React, Python, AI, and more. Learn by doing with expert mentorship.',
    icon: Code2,
  },
  {
    id: '2',
    title: 'Hackathons',
    description: '48-hour intense coding marathons where we build innovative solutions for real-world problems.',
    icon: Laptop,
  },
  {
    id: '3',
    title: 'Guest Lectures',
    description: 'Industry veterans from top tech companies share their journey and insights.',
    icon: Users,
  },
  {
    id: '4',
    title: 'Tech Treks',
    description: 'Visits to local tech startups and campuses to understand workplace culture.',
    icon: Globe,
  },
  {
    id: '5',
    title: 'Hardware Labs',
    description: 'Arduino and Raspberry Pi tinkering sessions for IoT enthusiasts.',
    icon: Cpu,
  },
  {
    id: '6',
    title: 'Social Mixers',
    description: 'Network with fellow techies in a relaxed environment with games and food.',
    icon: Calendar,
  },
];

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
    image?: string;
}

export const timelineData: TimelineItem[] = [
    {
        year: '2024',
        title: 'TechSummit 2024',
        description: 'Our biggest event of the year featuring 5 days of workshops, talks, and a hackathon finale attended by over 500 students.',
        image: 'https://picsum.photos/600/300?random=50'
    },
    {
        year: '2023',
        title: 'National Coding League',
        description: 'Agents of Tech secured 1st Runner Up in the national inter-varsity coding competition, putting us on the map.',
        image: 'https://picsum.photos/600/300?random=51'
    },
    {
        year: '2022',
        title: 'Club Rebranding',
        description: 'Unveiling our new logo and mission statement to align with the future of AI and Web3 technologies.',
        image: 'https://picsum.photos/600/300?random=52'
    },
    {
        year: '2015',
        title: 'Club Founded',
        description: 'The official inception of Agents of Tech at Taylor’s University, started by a group of 5 passionate CS students.',
    }
];
