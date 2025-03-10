import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full h-screen flex items-center justify-start bg-[url('/images/hero.png')] bg-cover bg-center">
            <div className="max-w-4xl px-6 sm:px-12 md:px-20 text-white">
                <div className="relative">
                    <div className="absolute left-0 top-8 h-20 w-[4px] bg-[#C4A29E]"></div>
                    <div className="pl-6 sm:pl-8 md:pl-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
                            Where every slice is  <br /> a <span className="italic">Masterpiece</span>
                        </h1>
                        <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-200 font-light">
                            Welcome to Cakes n' Frost, where every bite is a celebration of <br />
                            flavor and creativity. Our cakes and desserts are crafted with <br />
                            the finest ingredients.
                        </p>
                        <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-gray-700 bg-opacity-50 hover:bg-gray-600 text-white font-medium text-base sm:text-lg tracking-wide uppercase">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
