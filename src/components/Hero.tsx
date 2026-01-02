
const Hero = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Sunrays Overlay - Positioned to radiate from top left */}
            <img
                src="/Sunrays.png"
                alt=""
                className="hidden md:block absolute top-0 left-0 z-10 w-[120vw] h-[120vh] -translate-x-[30%] -translate-y-[10%] opacity-75 mix-blend-screen pointer-events-none object-cover -rotate-90"
            />

            {/* Satellite Image - Positioned on the right */}
            <img
                src="/Satlite.png"
                alt="Satellite"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[40vh] md:w-[100vh] h-auto object-contain drop-shadow-2xl rotate-90 translate-x-[30%] md:translate-x-[20%]"
            />

            {/* Main Content */}
            <div className="relative z-30 flex flex-col items-center justify-center text-center mt-20 animate-fade-in">
                {/* Main Title */}
                <h1 className="font-nico text-white text-6xl md:text-9xl tracking-wider drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    SPACEUP
                </h1>
                <h2 className="font-nico text-white text-5xl md:text-8xl tracking-widest mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    2025
                </h2>

                {/* Info Card - Dark Purple Pill */}
                <div className="mt-12 bg-[#2E1C3B]/90 backdrop-blur-sm px-12 py-6 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center shadow-xl">
                    <div className="text-center">
                        <p className="font-tilt text-white text-xl md:text-2xl leading-relaxed">
                            6th December
                        </p>
                        <p className="font-tilt text-white text-xl md:text-2xl leading-relaxed">
                            2025
                        </p>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-white/20"></div>

                    <div className="text-center">
                        <p className="font-tilt text-white text-xl md:text-2xl leading-relaxed">
                            Seminar Complex,
                        </p>
                        <p className="font-tilt text-white text-xl md:text-2xl leading-relaxed">
                            CUSAT
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
