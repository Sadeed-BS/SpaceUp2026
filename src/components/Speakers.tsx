
const Speakers = () => {
    return (
        <div id="speakers" className="relative w-full min-h-screen z-10 py-20 px-4 md:px-8 flex flex-col items-center overflow-hidden">

            {/* Airplane Background - Spanning across */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                <img
                    src="/airoplane.png"
                    alt="Airplane"
                    className="w-full max-w-6xl object-contain opacity-90 scale-100 md:scale-100 translate-y-10 md:translate-y-20"
                />
            </div>

            {/* Title */}
            <h2 className="relative z-10 font-nico text-white text-5xl md:text-7xl mb-24 md:mb-32 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Speakers
            </h2>

            {/* Speakers Grid - Arched Layout */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 px-4">

                {/* Speaker 1 - Lower */}
                <div className="flex flex-col items-center mt-0 md:mt-32">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#2E1C3B] border-2 border-purple-500/30 shadow-[0_0_20px_rgba(107,33,168,0.5)] mb-6"></div>
                    <div className="w-32 md:w-48 h-16 bg-[#7B4B74] rounded-2xl border border-white/20 shadow-lg"></div>
                </div>

                {/* Speaker 2 - Higher */}
                <div className="flex flex-col items-center mt-12 md:mt-0">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#2E1C3B] border-2 border-purple-500/30 shadow-[0_0_20px_rgba(107,33,168,0.5)] mb-6"></div>
                    <div className="w-32 md:w-48 h-16 bg-[#7B4B74] rounded-2xl border border-white/20 shadow-lg"></div>
                </div>

                {/* Speaker 3 - Higher */}
                <div className="flex flex-col items-center mt-12 md:mt-0">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#2E1C3B] border-2 border-purple-500/30 shadow-[0_0_20px_rgba(107,33,168,0.5)] mb-6"></div>
                    <div className="w-32 md:w-48 h-16 bg-[#7B4B74] rounded-2xl border border-white/20 shadow-lg"></div>
                </div>

                {/* Speaker 4 - Lower */}
                <div className="flex flex-col items-center mt-0 md:mt-32">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#2E1C3B] border-2 border-purple-500/30 shadow-[0_0_20px_rgba(107,33,168,0.5)] mb-6"></div>
                    <div className="w-32 md:w-48 h-16 bg-[#7B4B74] rounded-2xl border border-white/20 shadow-lg"></div>
                </div>

            </div>
        </div>
    );
};

export default Speakers;
