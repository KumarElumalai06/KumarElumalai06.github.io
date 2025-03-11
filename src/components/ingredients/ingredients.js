'use client';

import Image from 'next/image';

export default function Ingredients() {
    return (
        <section className="bg-[#EDE9E6] flex justify-center items-center p-6 md:p-12">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center">
                {/* Image Section with Brown Rectangle Decoration */}
                <div className="relative w-full md:w-1/2 flex justify-center items-start">
                    <div className="absolute -top-2 mb-2 -right-10 w-[60%] h-[105%] border-2 border-black "></div>
                    <div className="absolute -top-4 text-center w-[60%] h-[110%] bg-[#7B5D4B]"></div>
                    <Image
                        src="/images/ingredients.png"
                        alt="Fresh Ingredients"
                        width={600}
                        height={600}
                        className="relative z-10 w-full h-auto object-cover"
                    />
                </div>
                {/* Text Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center  md:text-left text-end">
                    <h2 className="text-4xl md:text-4xl font-semibold text-[#5A4635] mb-4 text-center w-full">
                        Discover our fresh ingredients
                    </h2>
                    <p className="text-black text-sm md:text-base mb-6 text-center items-center justify-center">
                        Treat your taste buds with our handpicked gluten-free
                        and fresh ingredients. We believe that the best cakes <br /> start with the finest ingredients. That&rsquo;s why we
                        <br /> handpick every element, from farm-fresh eggs to <br />
                        premium chocolate, ensuring that every bite is pure
                        <br />perfection.
                    </p>
                    <div class="flex justify-center items-center">
                        <button className="bg-[#C8B7A6] text-[#5A4635] px-6 py-2 w-40 h-10 text-center hover:bg-[#B49A88] transition duration-300">
                            Learn more
                        </button>
                    </div>

                </div>

            </div>
        </section>

    );
}
