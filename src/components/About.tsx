
const About = () => {
    return (
        <div id="about" className="relative w-full min-h-screen z-10 py-20 px-8 flex flex-col items-center">

            {/* About Section */}
            <h2 className="font-nico text-white text-5xl md:text-7xl mb-12 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                About SPACEUP
            </h2>

            <div className="w-full max-w-5xl bg-[#2E1C3B]/60 backdrop-blur-sm border border-purple-500/20 rounded-3xl h-[250px] mb-20 shadow-inner shadow-purple-900/40">
                {/* Placeholder for content */}
            </div>

            {/* Past Events Section */}
            <h2 className="font-nico text-white text-5xl md:text-7xl mb-12 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Past events
            </h2>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="w-full h-48 bg-[#4A2040] rounded-3xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                        {/* Event Card Placeholder */}
                    </div>
                ))}
            </div>

            {/* Rocket Image */}
            <img
                src="/roket.png"
                alt="Rocket"
                className="absolute bottom-0 right-0 w-[200px] md:w-[500px] translate-y-10 md:translate-y-20 translate-x-10 md:translate-x-24 z-30 object-contain drop-shadow-[0_0_30px_rgba(255,100,0,0.5)]"
            />
        </div>
    );
};

export default About;
