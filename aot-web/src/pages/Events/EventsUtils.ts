import { EventItem } from '../../../types';

export const eventsList: EventItem[] = [
  {
    id: 'sig-1',
    title: 'TechSummit 2024',
    date: '2024-11-15',
    location: 'Grand Hall, Building A',
    description: 'Our annual flagship conference featuring keynote speakers from Google and Microsoft.',
    isSignature: true,
  },
  {
    id: '2',
    title: 'React Workshop',
    date: '2024-10-20',
    location: 'Lab 304',
    description: 'Introductory session to React Hooks and Context API.',
  },
  {
    id: '3',
    title: 'AI Ethics Panel',
    date: '2024-10-25',
    location: 'Auditorium B',
    description: 'A debate on the ethical implications of Generative AI.',
  },
  {
    id: '4',
    title: 'Networking Night',
    date: '2024-11-05',
    location: 'Student Lounge',
    description: 'Pizza, drinks, and networking with alumni.',
  },
];

export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
        day: date.getDate(),
        month: date.toLocaleString('default', { month: 'short' })
    };
};