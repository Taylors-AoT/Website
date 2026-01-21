export const styles = {
    container: "relative w-full max-w-6xl mx-auto mt-32 px-4 pb-20",
    header: "text-center mb-20",
    title: "text-3xl md:text-4xl font-bold text-white mb-4",
    subtitle: "text-gray-400 max-w-xl mx-auto",
    
    // Vertical Line
    // Left-aligned on mobile (left-8), Center on desktop
    line: "absolute left-8 md:left-1/2 top-40 bottom-10 w-1 bg-gradient-to-b from-cyan-400 via-blue-600 to-transparent md:-translate-x-1/2 rounded-full opacity-50",
    
    // Row Item
    row: "relative flex items-center justify-between mb-16 last:mb-0 md:min-h-[200px]",
    
    // Center Node/Dot
    // Left-aligned on mobile, Center on desktop
    dot: "absolute left-8 md:left-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-black z-10 transform -translate-x-1/2 shadow-[0_0_15px_rgba(34,211,238,0.8)]",
    
    // Content Container
    // Mobile: Full width with left padding. Desktop: 45% width.
    contentWrapper: "w-full pl-20 md:pl-0 md:w-[45%]",
    
    // Card Styling
    card: "relative bg-gray-900/40 backdrop-blur-md border border-gray-700 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] group",
    
    // Connector (Mobile visual aid)
    connector: "md:hidden absolute left-8 top-1/2 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent -translate-y-1/2 z-0 opacity-30",
    
    // Card Inner Elements
    yearBadge: "inline-block px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold tracking-wider mb-3",
    cardTitle: "text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors",
    cardDesc: "text-gray-400 text-sm leading-relaxed",
    cardImage: "w-full h-40 object-cover rounded-lg mb-4 border border-gray-700/50 opacity-90 group-hover:opacity-100 transition-opacity",
    
    // Date marker on desktop
    desktopDate: "hidden md:block absolute top-1/2 -translate-y-1/2 text-gray-500 font-mono text-sm tracking-widest",
};