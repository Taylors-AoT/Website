export const styles = {
    container: "w-full flex flex-col",
    
    // Hero Section: Relative for positioning overlay and content
    heroSection: "relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden",

    // New Background Elements
    heroBackground: "absolute inset-0 w-full h-full object-cover",
    heroOverlay: "absolute inset-0 bg-gray-900/80 backdrop-blur-[2px]",

    // Ensure content sits above overlay
    contentWrapper: "relative z-10 text-center max-w-4xl mx-auto animate-fade-in-up",
    
    title: "text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-600 mb-10 tracking-tight drop-shadow-lg leading-normal pb-2",
    subtitle: "text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light",
    buttonGroup: "flex flex-col sm:flex-row gap-4 justify-center items-center",
    primaryButton: "px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-2",
    secondaryButton: "px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white font-semibold text-lg hover:bg-gray-700/50 hover:border-gray-400 transition-all duration-300",
    
    // Stats Container: Added relative z-10 to bring above overlay
    statsContainer: "relative z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl",
    statCard: "p-6 rounded-xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300 text-center",
    statNumber: "text-4xl font-bold text-white mb-2",
    statLabel: "text-sm text-gray-400 uppercase tracking-wider",

    // Why Join Section
    featuresSection: "w-full max-w-7xl mx-auto px-4 py-24",
    featuresTitle: "text-3xl md:text-4xl font-bold text-center mb-16",
    featuresGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
    featureCard: "bg-gray-900/40 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 group",
    featureIconWrapper: "w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors",
    featureIcon: "w-6 h-6 text-cyan-400 group-hover:text-cyan-300",
    featureCardTitle: "text-xl font-bold text-white mb-3",
    featureCardDesc: "text-gray-400 text-sm leading-relaxed",
};