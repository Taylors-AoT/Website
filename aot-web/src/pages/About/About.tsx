import React from "react";
import { Link } from "react-router-dom";
import rawAboutData from "./About.json";
import { styles } from "./AboutStyles";
import { getIcon } from "./AboutUtils";

type AboutData = {
  title: string;
  missionText: string;
  features: {
    iconId: string;
    title: string;
    description: string;
  }[];
  navCards: {
    id: string;
    to: string;
    iconId: string;
    title: string;
    description: string;
    linkText: string;
  }[];
  teamHub: {
    id: string;
    to: string;
    iconId: string;
    title: string;
    description: string;
    linkText: string;
  }[];
};

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
            const Icon = getIcon(feature.iconId as any);
            return (
              <div
                key={feature.title + idx}
                className={`${styles.card} ${
                  idx === 2 ? "md:col-span-2 lg:w-3/4 md:mx-auto" : ""
                }`}
              >
                <Icon className={styles.cardIcon} />
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
            const Icon = getIcon(card.iconId as any);
            const isAwards = card.id === "awards";
            const colorClass = isAwards
              ? "text-amber-500 group-hover:bg-amber-500/20"
              : "text-blue-500 group-hover:bg-blue-500/20";

            return (
              <Link key={card.id} to={card.to} className={styles.navCard}>
                <div className={styles.navGlow}></div>
                <div className={`${styles.navIconWrapper} ${colorClass}`}>
                  <Icon className="w-10 h-10" />
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
            const Icon = getIcon(item.iconId as any);
            return (
              <Link key={item.id} to={item.to} className={styles.teamHubCard}>
                <div className={styles.teamHubIconWrapper}>
                  <Icon className="w-10 h-10" />
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
