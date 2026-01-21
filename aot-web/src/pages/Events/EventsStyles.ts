export const styles = {
    container: "min-h-screen pt-24 px-4 pb-12 max-w-5xl mx-auto",
    title: "text-4xl font-bold text-white mb-10 text-center",
    listContainer: "space-y-6",
    eventCard: "flex flex-col md:flex-row bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300",
    dateBox: "bg-gray-800/80 p-6 flex flex-col items-center justify-center min-w-[120px] border-b md:border-b-0 md:border-r border-gray-700",
    dateDay: "text-3xl font-bold text-cyan-400",
    dateMonth: "text-sm text-gray-300 uppercase tracking-widest",
    contentBox: "p-6 flex-1 flex flex-col justify-center",
    eventTitle: "text-xl font-bold text-white mb-2",
    eventMeta: "flex items-center text-sm text-gray-400 mb-3 space-x-4",
    eventDesc: "text-gray-300 text-sm mb-4",
    signatureBadge: "inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full mb-2 self-start",
    detailsButton: "self-start text-cyan-400 hover:text-white text-sm font-semibold transition-colors flex items-center gap-1",
    
    // Signature Event Detail Styles
    sigContainer: "fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4",
    sigCard: "bg-gray-900 border border-cyan-500/50 rounded-2xl max-w-2xl w-full p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] relative animate-fade-in-up",
    sigClose: "absolute top-4 right-4 text-gray-400 hover:text-white",
    sigTitle: "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4",
    sigImage: "w-full h-48 object-cover rounded-lg mb-6 opacity-80",
};