export const styles = {
    container: "min-h-screen pt-24 px-4 pb-12 max-w-7xl mx-auto",
    header: "text-center mb-16",
    title: "text-4xl md:text-5xl font-bold text-white mb-4",
    
    // Content Sections
    section: "mb-20",
    
    // Feature/Mission Cards
    cardGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",
    card: "p-6 rounded-xl bg-gray-800/30 backdrop-blur-md border border-gray-700/50 hover:bg-gray-800/50 hover:border-cyan-500/50 hover:scale-[1.02] transition-all duration-300 shadow-lg",
    cardIcon: "w-12 h-12 text-cyan-400 mb-4",
    cardTitle: "text-xl font-bold text-white mb-3",
    cardText: "text-gray-400 leading-relaxed whitespace-pre-line",
    
    // Mission Box
    missionBox: "p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 backdrop-blur-md text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden",
    missionText: "text-xl md:text-2xl text-gray-200 font-light italic leading-loose",

    // Navigation Hub Styles
    navGrid: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-12",
    navCard: "group relative flex flex-col items-center justify-center p-10 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-700 hover:bg-gray-800/60 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden",
    navIconWrapper: "w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 z-10",
    navTitle: "text-2xl font-bold text-white mb-2 z-10 group-hover:text-cyan-400 transition-colors",
    navDesc: "text-gray-400 text-center mb-4 z-10 max-w-sm",
    navLink: "text-cyan-400 text-sm font-bold flex items-center z-10 opacity-80 group-hover:opacity-100",
    navGlow: "absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",

    // Team Section Styles (Migrated from Team Hub)
    teamSectionHeader: "text-center mb-12 mt-32 border-t border-gray-800 pt-16",
    teamSectionTitle: "text-3xl md:text-4xl font-bold text-white mb-4",
    teamSectionSubtitle: "text-gray-400 max-w-2xl mx-auto",
    
    teamHubGrid: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mx-auto",
    teamHubCard: "group flex flex-col items-center justify-center p-12 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-700 hover:bg-gray-800/60 hover:border-cyan-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-2xl relative overflow-hidden",
    teamHubIconWrapper: "w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300 z-10",
    teamHubTitle: "text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors z-10",
    teamHubDesc: "text-gray-400 text-center group-hover:text-gray-300 z-10",
    teamHubLink: "mt-6 text-cyan-400 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10"
};