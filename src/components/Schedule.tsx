const Schedule = () => {
    return (
        <div id="schedule" className="relative w-full min-h-screen z-10 py-20 px-8 flex flex-col items-center overflow-hidden">

            {/* Title */}
            <h2 className="font-nico text-white text-5xl md:text-7xl mb-20 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Schedule
            </h2>

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">

                {/* Venue 2 (Left Column in UI, but logically maybe first or separate) */}
                {/* Based on screenshot structure: Center is Venue 1, Sides are Venue 2 & 3 */}

                {/* Left Column - Venue 2 */}
                <div className="flex flex-col items-center mt-32 order-2 lg:order-1">
                    <h3 className="font-nico text-white text-3xl mb-8">Venue 2</h3>
                    <div className="w-full h-24 bg-[#2E1C3B] rounded-full border border-purple-500/20 mb-6 shadow-lg"></div>
                    <div className="w-full h-24 bg-[#2E1C3B] rounded-full border border-purple-500/20 mb-6 shadow-lg"></div>
                </div>

                {/* Center Column - Venue 1 (Longer list) */}
                <div className="flex flex-col items-center order-1 lg:order-2">
                    <h3 className="font-nico text-white text-3xl mb-8">Venue 1</h3>
                    <div className="w-full h-24 bg-[#7B4B74] rounded-full border border-white/20 mb-6 shadow-lg"></div>
                    <div className="w-full h-24 bg-[#7B4B74] rounded-full border border-white/20 mb-6 shadow-lg"></div>
                    <div className="w-full h-24 bg-[#2E1C3B] rounded-full border border-purple-500/20 mb-6 shadow-lg"></div>
                    <div className="w-full h-24 bg-[#2E1C3B] rounded-full border border-purple-500/20 mb-6 shadow-lg"></div>
                    <div className="w-full h-24 bg-[#7B4B74] rounded-full border border-white/20 mb-6 shadow-lg"></div>
                    <div className="w-full h-24 bg-[#7B4B74] rounded-full border border-white/20 mb-6 shadow-lg"></div>
                </div>

                {/* Right Column - Venue 3 */}
                <div className="flex flex-col items-center mt-32 order-3 lg:order-3">
                    <h3 className="font-nico text-white text-3xl mb-8">Venue 3</h3>
                    <div className="w-full h-24 bg-[#2E1C3B] rounded-full border border-purple-500/20 mb-6 shadow-lg"></div>
                    <div className="w-full h-24 bg-[#2E1C3B] rounded-full border border-purple-500/20 mb-6 shadow-lg"></div>
                </div>

            </div>

            {/* Balloon Top Right */}
            <img
                src="/hotairbaloon.png"
                alt="Balloon"
                className="absolute top-[10%] md:top-[15%] right-0 w-[120px] md:w-[350px] translate-x-1/4 z-10 object-contain drop-shadow-[0_0_30px_rgba(255,100,0,0.5)] animate-float"
            />

            {/* Balloon Bottom Left */}
            <img
                src="/hotairbaloon.png"
                alt="Balloon"
                className="absolute bottom-[5%] md:bottom-[10%] left-0 w-[120px] md:w-[350px] -translate-x-1/4 z-10 object-contain drop-shadow-[0_0_30px_rgba(255,100,0,0.5)] bg-blend-overlay rotate-[15deg]"
            />

        </div>
    );
};

export default Schedule;
