import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { styles } from './HomeStyles';
import { stats, whyJoinData } from './HomeUtils';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        {/* Background Image */}
        <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80" 
            alt="Agents of Tech Team" 
            className={styles.heroBackground} 
        />
        
        {/* Dark Overlay */}
        <div className={styles.heroOverlay}></div>

        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Taylor's University <br className="hidden md:block" /> Agents of Tech
          </h1>
          
          <div className={styles.buttonGroup}>
            <Link to="/about" className={styles.primaryButton}>
              Explore Our Mission <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScDe3iZdh_hrdWMu50GZaAU-RhYF3fldINDU8kab7UCSdtAiA/viewform" className={styles.secondaryButton}>
              Join the Club
            </Link>
          </div>
        </div>

        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>
          Why Join <span className="text-cyan-400">Agents of Tech</span>?
        </h2>
        <div className={styles.featuresGrid}>
          {whyJoinData.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIconWrapper}>
                <feature.icon className={styles.featureIcon} />
              </div>
              <h3 className={styles.featureCardTitle}>{feature.title}</h3>
              <p className={styles.featureCardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;