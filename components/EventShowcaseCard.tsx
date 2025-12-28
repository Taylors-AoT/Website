import React from 'react';

interface EventShowcaseCardProps {
  title: string;
  year: string;
  description: string;
  image: string;
}

const EventShowcaseCard: React.FC<EventShowcaseCardProps> = ({ title, year, description, image }) => {
  return (
    <div className="animate-fade-in-up">
        {/* Header Row: Title and Year */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
            <span className="px-4 py-1.5 rounded-full bg-cyan-900/30 text-cyan-400 font-bold border border-cyan-500/30 text-sm tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                {year}
            </span>
        </div>

        {/* Card Container */}
        <div className="flex flex-col md:flex-row gap-8 bg-gray-900/40 backdrop-blur-md border border-gray-700 p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:bg-gray-800/50 shadow-xl group">
            {/* Left: Image */}
            <div className="w-full md:w-2/5 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shrink-0 border border-gray-800 group-hover:border-gray-600 transition-colors relative">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center">
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line border-l-2 border-gray-700 pl-6 group-hover:border-cyan-500/50 transition-colors duration-300">
                    {description}
                </p>
            </div>
        </div>
    </div>
  );
};

export default EventShowcaseCard;