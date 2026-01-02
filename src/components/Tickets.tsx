const Tickets = () => {
    // Generate random positions for lamps to create scattered effect
    // In a real app, might want fixed positions to match design exactly, 
    // but random/scattered works well for this "floating lanterns" vibe.
    // For now, I'll place them somewhat manually to match the screenshot vibe.

    return (
        <div id="tickets" className="relative w-full min-h-screen z-10 py-20 px-8 flex flex-col items-center justify-center overflow-hidden">

            {/* Scattered Lamps Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Top Area */}
                <img src="/lamp.png" className="absolute top-10 left-[10%] w-20 md:w-40 opacity-80 animate-float" style={{ animationDelay: '0s' }} />
                <img src="/lamp.png" className="absolute top-20 left-[30%] w-24 md:w-52 opacity-90 animate-float" style={{ animationDelay: '1s' }} />
                <img src="/lamp.png" className="absolute top-40 right-[40%] w-16 md:w-32 opacity-70 animate-float" style={{ animationDelay: '2s' }} />
                <img src="/lamp.png" className="absolute top-16 right-[20%] w-14 md:w-28 opacity-60 animate-float" style={{ animationDelay: '1.5s' }} />
                <img src="/lamp.png" className="absolute top-32 right-[5%] w-24 md:w-48 opacity-85 animate-float" style={{ animationDelay: '0.5s' }} />

                {/* Bottom Area */}
                <img src="/lamp.png" className="absolute bottom-20 left-[15%] w-20 md:w-44 opacity-80 animate-float" style={{ animationDelay: '1s' }} />
                <img src="/lamp.png" className="absolute bottom-10 left-[40%] w-28 md:w-60 opacity-90 animate-float" style={{ animationDelay: '2s' }} />
                <img src="/lamp.png" className="absolute bottom-32 right-[30%] w-16 md:w-32 opacity-70 animate-float" style={{ animationDelay: '0s' }} />
                <img src="/lamp.png" className="absolute bottom-16 right-[10%] w-24 md:w-52 opacity-85 animate-float" style={{ animationDelay: '1.5s' }} />
                <img src="/lamp.png" className="absolute bottom-5 left-[5%] w-16 md:w-32 opacity-60 animate-float" style={{ animationDelay: '2.5s' }} />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">

                {/* Get Tickets Card */}
                <div className="bg-[#592E4D]/80 backdrop-blur-md rounded-[3rem] p-12 flex flex-col items-center justify-center text-center border border-white/10 shadow-xl min-h-[400px]">
                    <h2 className="font-nico text-white text-5xl md:text-6xl mb-2">Get</h2>
                    <h2 className="font-nico text-white text-5xl md:text-6xl mb-12">Tickets</h2>

                    <button className="bg-[#8B5F80] hover:bg-[#A37496] text-white font-nico text-2xl px-12 py-4 rounded-2xl transition-all shadow-lg border border-white/20">
                        HERE!
                    </button>
                </div>

                {/* Contact Us Card */}
                <div className="bg-[#2E1C3B]/90 backdrop-blur-md rounded-[3rem] p-12 flex flex-col items-center justify-center text-center border border-white/10 shadow-xl min-h-[400px]">
                    <h2 className="font-nico text-white text-5xl md:text-6xl mb-12">Contact us</h2>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full max-w-md">
                        <p className="font-nico text-white text-2xl md:text-3xl text-right">name</p>
                        <p className="font-nico text-white text-2xl md:text-3xl text-left">number</p>

                        <p className="font-nico text-white text-2xl md:text-3xl text-right">name</p>
                        <p className="font-nico text-white text-2xl md:text-3xl text-left">number</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tickets;
