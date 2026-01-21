export const styles = {
    container: "min-h-screen pt-24 px-4 pb-12 max-w-6xl mx-auto",
    header: "text-center mb-16",
    title: "text-4xl md:text-5xl font-bold text-white mb-4",
    subtitle: "text-gray-400 max-w-2xl mx-auto",
    
    // List Layout Styles
    listContainer: "space-y-16",
    
    // Individual Award Section
    awardSection: "animate-fade-in-up",
    sectionHeader: "flex items-center gap-4 mb-6",
    yearBadge: "px-4 py-1.5 rounded-full bg-cyan-900/30 text-cyan-400 font-bold border border-cyan-500/30 text-sm tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.1)]",
    sectionTitle: "text-3xl font-bold text-white tracking-tight",
    
    // Card
    card: "flex flex-col md:flex-row gap-8 bg-gray-900/40 backdrop-blur-md border border-gray-700 p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:bg-gray-800/50 shadow-xl group",
    
    // Image
    imageWrapper: "w-full md:w-2/5 aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shrink-0 border border-gray-800 group-hover:border-gray-600 transition-colors relative",
    image: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
    imageOverlay: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",

    // Content
    content: "flex-1 flex flex-col justify-center",
    description: "text-gray-300 text-lg leading-relaxed whitespace-pre-line border-l-2 border-gray-700 pl-6 group-hover:border-cyan-500/50 transition-colors duration-300",
    highlight: "text-cyan-400 font-bold",
};