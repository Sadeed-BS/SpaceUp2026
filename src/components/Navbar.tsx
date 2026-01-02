


import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ['Home', 'About', 'Speakers', 'Schedule', 'Tickets'];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
            <div className="relative bg-[#7B4B74]/90 backdrop-blur-md rounded-full px-8 py-4 flex justify-between items-center border border-white/20 shadow-lg shadow-purple-900/40">
                {/* Logo - Added based on user request */}
                <div className="flex-shrink-0 mr-auto md:mr-0 w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/20">
                    <img src="/SpaceUp.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>

                {/* Hamburger Menu (Mobile only) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-2xl md:hidden ml-4 focus:outline-none"
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-end w-full gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-nico text-white text-lg tracking-widest hover:text-purple-200 transition-colors uppercase"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full mt-4 bg-[#7B4B74]/95 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center gap-6 border border-white/20 md:hidden shadow-xl animate-fade-in">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="font-nico text-white text-xl tracking-widest hover:text-purple-200 transition-colors uppercase"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
