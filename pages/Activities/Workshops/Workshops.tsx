import React from 'react';
import { ArrowLeft, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './WorkshopsStyles';
import { workshopEvents } from './WorkshopsUtils';
import EventShowcaseCard from '../../../components/EventShowcaseCard';

const Workshops: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/activities" className={styles.backLink}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Activities
        </Link>
      </div>

      <div className={styles.header}>
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                <Code2 className="w-12 h-12 text-cyan-500" />
            </div>
        </div>
        <h1 className={styles.title}>Workshops</h1>
        <p className={styles.subtitle}>Level up your skills with hands-on learning.</p>
      </div>

      <div className={styles.listContainer}>
        {workshopEvents.map((event) => (
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

export default Workshops;