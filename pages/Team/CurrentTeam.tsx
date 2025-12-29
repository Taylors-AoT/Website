import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './TeamStyles';
import { teamSections } from './TeamUtils';

const CurrentTeam: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/about" className="inline-flex items-center text-cyan-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to About
        </Link>
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>Current Team</h1>
        <p className={styles.subtitle}>The brilliant minds driving our mission forward this year.</p>
      </div>

      {teamSections.map((section, index) => (
        <div key={index} className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <div className={styles.grid}>
            {section.members.map((member) => (
              <div key={member.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={member.imageUrl} alt={member.name} className={styles.image} />
                  <div className={styles.overlay}>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-cyan-400 text-sm mb-4">{member.role}</p>
                    <a href={`mailto:${member.email}`} className={styles.contactLink}>
                      <Mail className="w-4 h-4 mr-2" /> Contact
                    </a>
                  </div>
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentTeam;