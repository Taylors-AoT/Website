import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './AwardsStyles';
import { awards } from './AwardsUtils';

const Awards: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/about" className="inline-flex items-center text-cyan-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to About
        </Link>
      </div>

      <div className={styles.header}>
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-500/10 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <Trophy className="w-12 h-12 text-amber-500" />
            </div>
        </div>
        <h1 className={styles.title}>Hall of Fame</h1>
        <p className={styles.subtitle}>Celebrating the milestones, trophies, and achievements of our dedicated members.</p>
      </div>

      <div className={styles.listContainer}>
        {awards.map((award) => (
            <div key={award.id} className={styles.awardSection}>
                {/* Title Row */}
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>{award.title}</h2>
                    <span className={styles.yearBadge}>{award.year}</span>
                </div>

                {/* Horizontal Card */}
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <img src={award.imageUrl} alt={award.title} className={styles.image} />
                        <div className={styles.imageOverlay} />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.description}>
                            {award.description}
                        </p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;