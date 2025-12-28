import React from 'react';
import { ArrowLeft, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './CollaborationEventsStyles';
import { collabEvents } from './CollaborationEventsUtils';
import EventShowcaseCard from '../../../components/EventShowcaseCard';

const CollaborationEvents: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/activities" className={styles.backLink}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Activities
        </Link>
      </div>

      <div className={styles.header}>
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-500/10 rounded-full border border-green-500/30">
                <Handshake className="w-12 h-12 text-green-500" />
            </div>
        </div>
        <h1 className={styles.title}>Collaboration Events</h1>
        <p className={styles.subtitle}>Joint ventures with our partners.</p>
      </div>

      <div className={styles.listContainer}>
        {collabEvents.map((event) => (
            <EventShowcaseCard 
                key={event.id}
                title={event.title}
                year={event.year}
                description={event.description}
                image={event.image}
            />
        ))}
      </div>
    </div>
  );
};

export default CollaborationEvents;