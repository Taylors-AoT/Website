import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './SignatureStyles';
import { signatureEvents } from './SignatureUtils';
import EventShowcaseCard from '../../../components/EventShowcaseCard';

const Signature: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/activities" className={styles.backLink}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Activities
        </Link>
      </div>

      <div className={styles.header}>
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-500/10 rounded-full border border-amber-500/30">
                <Sparkles className="w-12 h-12 text-amber-500" />
            </div>
        </div>
        <h1 className={styles.title}>Signature Events</h1>
        <p className={styles.subtitle}>The defining moments of our club's calendar.</p>
      </div>

      <div className={styles.listContainer}>
        {signatureEvents.map((event) => (
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

export default Signature;