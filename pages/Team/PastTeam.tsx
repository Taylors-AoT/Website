import React from 'react';
import { ArrowLeft, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './PastTeamStyles';
import { pastTenures } from './PastTeamUtils';

const PastTeam: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/about" className={styles.backLink}>
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to About
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>Leadership Hall of Fame</h1>
        <p className={styles.subtitle}>Honoring the visionaries who paved the way and built the foundation of Agents of Tech.</p>
      </div>

      {pastTenures.map((tenure, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.sessionTitle}>{tenure.session}</h2>
          <div className={styles.grid}>
            {tenure.members.map((member) => (
              <div key={member.id} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={member.imageUrl} alt={member.name} className={styles.image} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  {member.linkedinUrl && (
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn Profile">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastTeam;