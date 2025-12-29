import React from 'react';
import { Users, History, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './TeamStyles';

const Team: React.FC = () => {
  return (
    <div className={styles.hubContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>The Agents</h1>
        <p className={styles.subtitle}>Meet the people behind the code.</p>
      </div>

      <div className={styles.hubGrid}>
        {/* Card 1: Current Team */}
        <Link to="/team/current" className={styles.hubCard}>
          <div className={styles.hubIconWrapper}>
            <Users className="w-10 h-10" />
          </div>
          <h2 className={styles.hubTitle}>The Team</h2>
          <p className={styles.hubDesc}>
            Meet the current executive committee and active members driving innovation today.
          </p>
          <div className="mt-6 text-cyan-400 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            View Members <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </Link>

        {/* Card 2: Past EXCO */}
        <Link to="/team/past" className={styles.hubCard}>
          <div className={styles.hubIconWrapper}>
            <History className="w-10 h-10" />
          </div>
          <h2 className={styles.hubTitle}>Past EXCO</h2>
          <p className={styles.hubDesc}>
            Honor the legacy of previous leaders who paved the way for the club's success.
          </p>
          <div className="mt-6 text-cyan-400 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            View Archive <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Team;