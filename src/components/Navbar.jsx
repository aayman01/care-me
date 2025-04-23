import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Main Navbar */}
            <div className="flex justify-between items-center py-4 px-4 md:px-6 lg:px-8">
                <div className="text-2xl md:text-3xl font-bold text-primary">Care Me</div>

                {/* Hamburger Menu Button */}
                <button 
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex space-x-6 text-lg font-medium">
                    <a href="#" className="text-black hover:text-primary">Sell Online</a>
                    <a href="#" className="text-black hover:text-primary">How it works</a>
                    <a href="#" className="text-black hover:text-primary">Pricing & Commission</a>
                    <a href="#" className="text-black hover:text-primary">Shipping & Returns</a>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex space-x-4">
                    <button className="px-6 py-2 border-2 text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-md hover:border-primary">
                        Login
                    </button>
                    <button className="px-6 py-2 font-medium bg-primary text-white rounded-md hover:bg-white hover:text-primary hover:border-primary border-2 transition-colors duration-300 border-primary">
                        Start Selling
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="flex flex-col px-4 py-4 space-y-4">
                    <a href="#" className="text-black hover:text-primary">Sell Online</a>
                    <a href="#" className="text-black hover:text-primary">How it works</a>
                    <a href="#" className="text-black hover:text-primary">Pricing & Commission</a>
                    <a href="#" className="text-black hover:text-primary">Shipping & Returns</a>
                    <div className="flex flex-col space-y-2">
                        <button className="px-6 py-2 border-2 text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-md hover:border-primary">
                            Login
                        </button>
                        <button className="px-6 py-2 font-medium bg-primary text-white rounded-md hover:bg-white hover:text-primary hover:border-primary border-2 transition-colors duration-300 border-primary">
                            Start Selling
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;