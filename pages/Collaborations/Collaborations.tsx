import React from 'react';
import { ArrowLeft, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styles } from './CollaborationsStyles';
import { partners } from './CollaborationsUtils';

const Collaborations: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="mb-8">
        <Link to="/about" className="inline-flex items-center text-cyan-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to About
        </Link>
      </div>

      <div className={styles.header}>
        <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-full">
                <Handshake className="w-12 h-12 text-blue-500" />
            </div>
        </div>
        <h1 className={styles.title}>Our Collaborations</h1>
        <p className={styles.subtitle}>Working together with industry leaders and partners to create opportunities.</p>
      </div>

      <div className={styles.collabGrid}>
        {partners.map((partner) => (
            <div key={partner.id} className={styles.collabCard}>
                <div className={styles.logoContainer}>
                    <img src={partner.logoUrl} alt={partner.name} className={styles.logo} />
                </div>
                <span className={styles.collabName}>{partner.name}</span>
                <span className={styles.collabType}>{partner.type}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Collaborations;