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
        year: '2026',
        title: 'Hilti Industrial Visit',
        description: 'A collaboration event with Hilti giving students an opportunity to explore and gain insights through an industrial visit of Hilti.',
        image: '/logos/Hilti Industrial Visit Poster.png'
    },
    {
        year: '2025',
        title: 'ImagineHack 2025',
        description: 'ImagineHack is an annual initiative by AoT designed to grant university students the opportunity to develop their creative thinking and problem-solving skills, while also driving social change by developing solutions to pressing social issues.',
        image: '/logos/IH 2025 Poster.png'    },


    {
        year: '2024',
        title: 'Red vs Blue Cybersecurity Workshop',
        description: 'A collaboration with Arvato Systems to gain further insights into Red Team and Blue Team jobscopes and cybersecurity job pathways.',
        image: '/logos/red vs blue.jpeg'
    },
    {
        year: '2024',
        title: 'Tetris Tournament ',
        description: 'A fun tetris tournament hosted for Taylorians.',
        image: '/logos/AOT Tetris Tournament Poster.png'
    },
    {
        year: '2024',
        title: 'Nextech Conference & EXPO 2024',
        description: 'NexTech Conference & Exhibition 2024 is AoT’s signature event. It is a 2-day long conference exhibition hybrid consisting of workshops, tech talks and booths hosted by AoT Partners.',
        image: '/logos/Nextech Conference.png'
    },

    {
        year: '2024',
        title: 'Paynet Industrial Visit',
        description: 'A collaboration event with Paynet giving students an opportunity to explore and gain insights through an industrial visit of Paynet.',
        image: '/logos/Paynet Poster.png'
    },

];
