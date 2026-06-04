import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Code2, Trophy, Mic2, Handshake, MoreHorizontal } from 'lucide-react';
import { sharedStyles } from '../../styles/shared';
import EventShowcaseCard from '../../components/EventShowcaseCard';

// Import all data
import signature from '../../data/activities/signature.json';
import workshops from '../../data/activities/workshops.json';
import competitions from '../../data/activities/competitions.json';
import forums from '../../data/activities/forums.json';
import collaborationEvents from '../../data/activities/collaborationEvents.json';
import others from '../../data/activities/others.json';

const dataMap: Record<string, any[]> = {
  signature,
  workshops,
  competitions,
  forums,
  collaborations: collaborationEvents,
  others
};

const metaMap: Record<string, { title: string; subtitle: string; icon: any; colorClass: string; bgColorClass: string; borderColorClass: string; }> = {
  signature: {
    title: "Signature Events",
    subtitle: "The defining moments of our club's calendar.",
    icon: Sparkles,
    colorClass: "text-amber-500",
    bgColorClass: "bg-amber-500/10",
    borderColorClass: "border-amber-500/30"
  },
  workshops: {
    title: "Workshops",
    subtitle: "Hands-on sessions to build your technical skills.",
    icon: Code2,
    colorClass: "text-blue-500",
    bgColorClass: "bg-blue-500/10",
    borderColorClass: "border-blue-500/30"
  },
  competitions: {
    title: "Competitions",
    subtitle: "Put your skills to the test and win prizes.",
    icon: Trophy,
    colorClass: "text-yellow-500",
    bgColorClass: "bg-yellow-500/10",
    borderColorClass: "border-yellow-500/30"
  },
  forums: {
    title: "Forums",
    subtitle: "Engaging discussions with industry experts.",
    icon: Mic2,
    colorClass: "text-purple-500",
    bgColorClass: "bg-purple-500/10",
    borderColorClass: "border-purple-500/30"
  },
  collaborations: {
    title: "Collaboration Events",
    subtitle: "Connecting with other communities and companies.",
    icon: Handshake,
    colorClass: "text-cyan-500",
    bgColorClass: "bg-cyan-500/10",
    borderColorClass: "border-cyan-500/30"
  },
  others: {
    title: "Other Activities",
    subtitle: "Fun events, mixers, and community gatherings.",
    icon: MoreHorizontal,
    colorClass: "text-gray-400",
    bgColorClass: "bg-gray-400/10",
    borderColorClass: "border-gray-400/30"
  }
};

const ActivityCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  if (!category || !dataMap[category]) {
    return <Navigate to="/activities" replace />;
  }

  const events = dataMap[category];
  const meta = metaMap[category];
  const Icon = meta.icon;

  return (
    <div className={sharedStyles.pageContainerWide}>
      <div className="mb-8">
        <Link to="/activities" className={sharedStyles.backLink}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Activities
        </Link>
      </div>

      <div className={sharedStyles.pageHeader}>
        <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center">
                <img 
                    src={`/icons/activities/${category}.png`} 
                    alt={meta.title} 
                    className="w-20 h-20 object-contain mix-blend-screen"
                />
            </div>
        </div>
        <h1 className={sharedStyles.pageTitle}>{meta.title}</h1>
        <p className={sharedStyles.pageSubtitle}>{meta.subtitle}</p>
      </div>

      <div className="space-y-16">
        {events.map((event) => (
            <EventShowcaseCard 
                key={event.id}
                title={event.title}
                year={event.year}
                description={event.description}
                image={event.image}
            />
        ))}
      </div>
    </div>
  );
};

export default ActivityCategoryPage;
