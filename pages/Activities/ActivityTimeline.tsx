import React from 'react';
import { styles } from './ActivityTimelineStyles';
import { timelineData } from './ActivitiesUtils';

const ActivityTimeline: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Past Highlights</h2>
        <p className={styles.subtitle}>A look back at the milestones that shaped our community.</p>
      </div>
      
      {/* Central Line */}
      <div className={styles.line}></div>

      <div className="relative">
        {timelineData.map((item, index) => {
            // Even index (0, 2) -> Left side on Desktop
            // Odd index (1, 3) -> Right side on Desktop
            const isLeft = index % 2 === 0;

            return (
                <div key={index} className={`${styles.row} ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Center Dot */}
                    <div className={styles.dot}></div>
                    
                    {/* Connector for mobile alignment */}
                    <div className={styles.connector} style={{top: '2.5rem'}}></div>

                    {/* Content Card */}
                    <div className={`${styles.contentWrapper} ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        <div className={styles.card}>
                            <span className={styles.yearBadge}>{item.year}</span>
                            {item.image && (
                                <img src={item.image} alt={item.title} className={styles.cardImage} />
                            )}
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.description}</p>
                        </div>
                    </div>

                    {/* Spacer for the other side on Desktop to maintain balance */}
                    <div className="hidden md:block md:w-[45%]"></div>
                </div>
            );
        })}
      </div>
    </div>
  );
};

export default ActivityTimeline;