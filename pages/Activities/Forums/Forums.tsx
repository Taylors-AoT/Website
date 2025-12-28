import React from 'react';
import { ArrowLeft, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './ForumsStyles';
import { forumEvents } from './ForumsUtils';
import EventShowcaseCard from '../../../components/EventShowcaseCard';

const Forums: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/activities" className={styles.backLink}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Activities
        </Link>
      </div>

      <div className={styles.header}>
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-500/10 rounded-full border border-purple-500/30">
                <Mic2 className="w-12 h-12 text-purple-500" />
            </div>
        </div>
        <h1 className={styles.title}>Forums</h1>
        <p className={styles.subtitle}>Discussions that matter.</p>
      </div>

      <div className={styles.listContainer}>
        {forumEvents.map((event) => (
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

export default Forums;