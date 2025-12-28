export const styles = {
    container: "min-h-screen pt-24 px-4 pb-12 max-w-7xl mx-auto",
    header: "text-center mb-16",
    title: "text-4xl md:text-5xl font-bold text-white mb-4",
    subtitle: "text-gray-400 max-w-2xl mx-auto",
    
    // Section Styles
    sectionContainer: "mb-20",
    sectionTitle: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 border-b border-gray-800 pb-4 inline-block",

    // Member Grid Styles (Used by CurrentTeam)
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
    card: "group relative overflow-hidden rounded-xl bg-gray-800/30 backdrop-blur-md border border-gray-700 hover:border-cyan-500/50 transition-all duration-300",
    imageContainer: "aspect-square overflow-hidden",
    image: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",
    overlay: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",
    info: "p-4 group-hover:opacity-0 transition-opacity duration-300",
    name: "text-xl font-bold text-white",
    role: "text-cyan-400 text-sm font-medium",
    contactLink: "mt-2 inline-flex items-center text-sm text-white bg-cyan-600 px-4 py-2 rounded-full hover:bg-cyan-500 transition-colors",

    // Hub Navigation Styles (Used by Team Hub)
    hubContainer: "min-h-[60vh] flex flex-col items-center justify-center pt-24 px-4 pb-32",
    hubGrid: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full",
    hubCard: "group flex flex-col items-center justify-center p-12 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-700 hover:bg-gray-800/60 hover:border-cyan-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-2xl",
    hubIconWrapper: "w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300",
    hubTitle: "text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors",
    hubDesc: "text-gray-400 text-center group-hover:text-gray-300"
};