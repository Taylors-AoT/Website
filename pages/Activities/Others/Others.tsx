import React from 'react';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './OthersStyles';
import { otherEvents } from './OthersUtils';
import EventShowcaseCard from '../../../components/EventShowcaseCard';

const Others: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/activities" className={styles.backLink}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Activities
        </Link>
      </div>

      <div className={styles.header}>
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-pink-500/10 rounded-full border border-pink-500/30">
                <MoreHorizontal className="w-12 h-12 text-pink-500" />
            </div>
        </div>
        <h1 className={styles.title}>Other Activities</h1>
        <p className={styles.subtitle}>Socials, orientations, and fun gatherings.</p>
      </div>

      <div className={styles.listContainer}>
        {otherEvents.map((event) => (
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

export default Others;