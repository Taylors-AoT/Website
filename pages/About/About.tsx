import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './AboutStyles';
import { features } from './AboutUtils';
import { Trophy, Handshake, ArrowRight, Users, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Agents of Tech</h1>
      </div>

      <div className={styles.section}>
        <div className={styles.missionBox}>
          <p className={styles.missionText}>
            Agents of Tech was founded in 2015 as the official Technology Club at Taylor’s University. Since the beginning, we have devoted ourselves to the gaining and distribution of knowledge of anything technology related to any students who are interested.
            <br/><br/>
            Our goal is to bring more valuable knowledge and develop technological skills in students to be ready for the work environment of the 21st century.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.cardGrid}>
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`${styles.card} ${idx === 2 ? 'md:col-span-2 lg:w-3/4 md:mx-auto' : ''}`}
            >
              <feature.icon className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Hub for Awards & Collaborations */}
      <div className={styles.section}>
        <div className={styles.navGrid}>
            
            {/* Awards Card */}
            <Link to="/awards" className={styles.navCard}>
                <div className={styles.navGlow}></div>
                <div className={`${styles.navIconWrapper} text-amber-500 group-hover:bg-amber-500/20`}>
                    <Trophy className="w-10 h-10" />
                </div>
                <h2 className={styles.navTitle}>Awards & Recognition</h2>
                <p className={styles.navDesc}>
                    Discover the milestones, trophies, and accolades we've achieved over the years.
                </p>
                <span className={styles.navLink}>
                    View Awards <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </Link>

            {/* Collaborations Card */}
            <Link to="/collaborations" className={styles.navCard}>
                <div className={styles.navGlow}></div>
                <div className={`${styles.navIconWrapper} text-blue-500 group-hover:bg-blue-500/20`}>
                    <Handshake className="w-10 h-10" />
                </div>
                <h2 className={styles.navTitle}>Our Collaborations</h2>
                <p className={styles.navDesc}>
                    Meet our industry partners, sponsors, and the organizations we work with.
                </p>
                <span className={styles.navLink}>
                    View Partners <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </Link>

        </div>
      </div>

      {/* Meet The Team Section (Migrated from Team Page) */}
      <div className={styles.section}>
        <div className={styles.teamSectionHeader}>
          <h2 className={styles.teamSectionTitle}>Meet the Team</h2>
          <p className={styles.teamSectionSubtitle}>Meet the people behind the code.</p>
        </div>
        
        <div className={styles.teamHubGrid}>
             {/* Current Team Link */}
             <Link to="/team/current" className={styles.teamHubCard}>
                <div className={styles.teamHubIconWrapper}>
                    <Users className="w-10 h-10" />
                </div>
                <h2 className={styles.teamHubTitle}>The Team</h2>
                <p className={styles.teamHubDesc}>
                    Meet the current executive committee and active members driving innovation today.
                </p>
                <div className={styles.teamHubLink}>
                    View Members <ArrowRight className="ml-2 w-4 h-4" />
                </div>
             </Link>

             {/* Past EXCO Link */}
             <Link to="/team/past" className={styles.teamHubCard}>
                <div className={styles.teamHubIconWrapper}>
                    <History className="w-10 h-10" />
                </div>
                <h2 className={styles.teamHubTitle}>Past EXCO</h2>
                <p className={styles.teamHubDesc}>
                    Honor the legacy of previous leaders who paved the way for the club's success.
                </p>
                <div className={styles.teamHubLink}>
                    View Archive <ArrowRight className="ml-2 w-4 h-4" />
                </div>
             </Link>
        </div>
      </div>
    </div>
  );
};

export default About;