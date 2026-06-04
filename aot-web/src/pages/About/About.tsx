import React from "react";
import { Link } from "react-router-dom";
import rawAboutData from "../../data/about.json";
import { styles } from "./AboutStyles";
import { getIcon } from "../../utils/icons";

import { AboutData } from "../../types";

const aboutData = rawAboutData as AboutData;

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>{aboutData.title}</h1>
      </div>

      {/* Mission Text */}
      <div className={styles.section}>
        <div className={styles.missionBox}>
          <p className={styles.missionText}>{aboutData.missionText}</p>
        </div>
      </div>

      {/* Features */}
      <div className={styles.section}>
        <div className={styles.cardGrid}>
          {aboutData.features.map((feature, idx) => {
            return (
              <div
                key={feature.title + idx}
                className={`${styles.card} ${
                  idx === 2 ? "md:col-span-2 lg:w-3/4 md:mx-auto" : ""
                }`}
              >
                <img 
                  src={`/icons/about/${feature.iconId}.png`} 
                  alt={feature.title} 
                  className={styles.cardIcon} 
                />
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardText}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Hub for Awards & Collaborations */}
      <div className={styles.section}>
        <div className={styles.navGrid}>
          {aboutData.navCards.map((card) => {
            return (
              <Link key={card.id} to={card.to} className={styles.navCard}>
                <div className={styles.navGlow}></div>
                <div className={styles.navIconWrapper}>
                  <img 
                    src={`/icons/about/${card.iconId}.png`} 
                    alt={card.title} 
                    className="w-16 h-16 object-contain mix-blend-screen"
                  />
                </div>
                <h2 className={styles.navTitle}>{card.title}</h2>
                <p className={styles.navDesc}>{card.description}</p>
                <span className={styles.navLink}>
                  {card.linkText}
                  {/* ArrowRight is not from JSON; it's purely visual, so we keep it inline */}
                  <span className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Meet The Team Section */}
      <div className={styles.section}>
        <div className={styles.teamSectionHeader}>
          <h2 className={styles.teamSectionTitle}>Meet the Team</h2>
          <p className={styles.teamSectionSubtitle}>
            Meet the people behind the code.
          </p>
        </div>

        <div className={styles.teamHubGrid}>
          {aboutData.teamHub.map((item) => {
            return (
              <Link key={item.id} to={item.to} className={styles.teamHubCard}>
                <div className={styles.teamHubIconWrapper}>
                  <img 
                    src={`/icons/about/${item.iconId}.png`} 
                    alt={item.title} 
                    className="w-16 h-16 object-contain mix-blend-screen"
                  />
                </div>
                <h2 className={styles.teamHubTitle}>{item.title}</h2>
                <p className={styles.teamHubDesc}>{item.description}</p>
                <div className={styles.teamHubLink}>
                  {item.linkText}
                  <span className="ml-2 w-4 h-4">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
