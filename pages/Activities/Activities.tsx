import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Code2, Users, Trophy, Handshake, MoreHorizontal, Mic2 } from 'lucide-react';
import { styles } from './ActivitiesStyles';
import ActivityTimeline from './ActivityTimeline';

const Activities: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Activities</h1>
        <p className={styles.subtitle}>
          Explore the diverse range of events and initiatives we organize to foster growth and innovation.
        </p>
      </div>

      {/* Section A: Signature Events Hero */}
      <div className={styles.heroContainer}>
        <Link to="/activities/signature" className={styles.heroCard}>
            <span className={styles.heroBadge}>
              <Sparkles className="w-3 h-3 inline mr-2" />
              Flagship Series
            </span>
            <h2 className={styles.heroTitle}>Signature Events</h2>
            <p className={styles.heroDesc}>
              Our flagship annual events that define our club. From massive tech summits to university-wide showcases, these are the moments you don't want to miss.
            </p>
            <span className={styles.heroLink}>
              Explore Signature Events <ArrowRight className="ml-2 w-5 h-5" />
            </span>
        </Link>
      </div>

      {/* Section B: Category Grid */}
      <div className={styles.gridContainer}>
        
        {/* Workshops */}
        <Link to="/activities/workshops" className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            <Code2 className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className={styles.cardTitle}>Workshops</h3>
          <p className={styles.cardDesc}>
            Hands-on technical sessions covering web dev, AI, data science, and more.
          </p>
          <ArrowRight className={styles.cardArrow} />
        </Link>

        {/* Forums */}
        <Link to="/activities/forums" className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            <Mic2 className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className={styles.cardTitle}>Forums</h3>
          <p className={styles.cardDesc}>
            Engaging panel discussions and tech talks with industry leaders and alumni.
          </p>
          <ArrowRight className={styles.cardArrow} />
        </Link>

        {/* Competitions */}
        <Link to="/activities/competitions" className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            <Trophy className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className={styles.cardTitle}>Competitions</h3>
          <p className={styles.cardDesc}>
            Hackathons, coding challenges, and ideathons to test your skills.
          </p>
          <ArrowRight className={styles.cardArrow} />
        </Link>

        {/* Collaboration Events */}
        <Link to="/activities/collaborations" className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            <Handshake className="w-8 h-8 text-green-400" />
          </div>
          <h3 className={styles.cardTitle}>Collaboration Events</h3>
          <p className={styles.cardDesc}>
            Joint initiatives with other clubs, universities, and tech organizations.
          </p>
          <ArrowRight className={styles.cardArrow} />
        </Link>

        {/* Others */}
        <Link to="/activities/others" className={styles.categoryCard}>
          <div className={styles.iconWrapper}>
            <MoreHorizontal className="w-8 h-8 text-pink-400" />
          </div>
          <h3 className={styles.cardTitle}>Others</h3>
          <p className={styles.cardDesc}>
            Club & Society Day, Welcoming Parties, Social Mixers, and more.
          </p>
          <ArrowRight className={styles.cardArrow} />
        </Link>
      </div>

      {/* Section C: Past Highlights Timeline */}
      <ActivityTimeline />
    </div>
  );
};

export default Activities;