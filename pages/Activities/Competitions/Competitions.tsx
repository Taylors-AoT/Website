import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './CompetitionsStyles';
import { competitions } from './CompetitionsUtils';
import EventShowcaseCard from '../../../components/EventShowcaseCard';

const Competitions: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/activities" className={styles.backLink}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Activities
        </Link>
      </div>

      <div className={styles.header}>
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-yellow-500/10 rounded-full border border-yellow-500/30">
                <Trophy className="w-12 h-12 text-yellow-500" />
            </div>
        </div>
        <h1 className={styles.title}>Competitions</h1>
        <p className={styles.subtitle}>Challenge yourself and win big.</p>
      </div>

      <div className={styles.listContainer}>
        {competitions.map((comp) => (
            <EventShowcaseCard 
                key={comp.id}
                title={comp.title}
                year={comp.year}
                description={comp.description}
                image={comp.image}
            />
        ))}
      </div>
    </div>
  );
};

export default Competitions;