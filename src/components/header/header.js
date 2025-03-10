'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-transparent p-4 px-6 md:px-20 flex justify-between items-center z-50">
            {/* Logo */}
            <div className="flex items-center">
                <a href="#" className="text-white font-bold text-xl">
                    <Image src="/images/logo.png" alt="Your Logo" width={100} height={50} />
                </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-white text-sm">
                {['Home', 'About us', 'Explore', 'Blog', 'Order now'].map((item, index) => (
                    <a key={index} href="#" className="font-light hover:underline decoration-2 underline-offset-4" style={{ textDecorationColor: '#C4A29E' }}>
                        {item}
                    </a>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    {isOpen ? (
                        <span className="text-2xl">✕</span>
                    ) : (
                        <span className="text-2xl">☰</span>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#222] text-white flex flex-col items-center space-y-6 py-6 shadow-lg md:hidden">
                    {['Home', 'About us', 'Explore', 'Blog', 'Order now'].map((item, index) => (
                        <a key={index} href="#" className="font-light text-lg hover:text-[#C4A29E]">
                            {item}
                        </a>
                    ))}
                </div>
            )}

            {/* Search Icon & Button */}
            <div className="hidden md:flex items-center space-x-4">
                <Image src="/images/icon.png" alt="Search" width={20} height={20} className="cursor-pointer" />
                <button className="bg-[#715A4A] text-white font-bold py-2 px-4 rounded-md">
                    Sign up
                </button>
            </div>
        </header>
    );
}
