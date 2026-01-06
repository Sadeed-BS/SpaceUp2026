
const About = () => {
    return (
        <div id="about" className="relative w-full min-h-screen z-10 py-20 px-6 md:px-12 flex flex-col items-center">

            {/* About Section */}
            <h2 className="font-nico text-white text-4xl sm:text-5xl md:text-7xl mb-8 md:mb-12 text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-fade-in-up">
                About SPACEUP
            </h2>

            <div className="w-full max-w-5xl bg-[#2E1C3B]/60 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 md:p-12 mb-20 shadow-[0_0_50px_rgba(75,0,130,0.3)] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <p className="font-tilt text-white/90 text-lg md:text-2xl leading-relaxed text-center">
                    SpaceUp is a premier space un-conference where participants decide the topics, schedule, and structure of the event. It is a gathering of space enthusiasts, scientists, engineers, and dreamers who come together to share ideas, network, and shape the future of space exploration.
                </p>
            </div>

            {/* Past Events Section */}
            <h2 className="font-nico text-white text-4xl sm:text-5xl md:text-7xl mb-8 md:mb-12 text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                Past events
            </h2>

            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
                {[
                    { title: "Cosmic Con", year: "2023", color: "from-purple-900 to-indigo-900" },
                    { title: "Starlight Summit", year: "2022", color: "from-indigo-900 to-blue-900" },
                    { title: "Nebula Nexus", year: "2021", color: "from-blue-900 to-purple-900" }
                ].map((event, index) => (
                    <div
                        key={index}
                        className={`w-full h-56 md:h-64 rounded-3xl border border-white/10 shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-fade-in-up bg-gradient-to-br ${event.color}`}
                        style={{ animationDelay: `${600 + (index * 200)}ms` }}
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <h3 className="font-nico text-white text-3xl md:text-4xl mb-2 drop-shadow-md group-hover:drop-shadow-xl transition-all">{event.title}</h3>
                            <p className="font-tilt text-purple-200 text-xl">{event.year}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Rocket Image */}
            <img
                src="/roket.png"
                alt="Rocket"
                className="absolute bottom-0 right-0 w-[150px] md:w-[400px] translate-y-10 md:translate-y-20 translate-x-10 md:translate-x-10 z-30 object-contain drop-shadow-[0_0_30px_rgba(255,100,0,0.5)] animate-float"
            />
        </div>
    );
};

export default About;
