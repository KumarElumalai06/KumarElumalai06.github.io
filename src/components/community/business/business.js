"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Categories() {
    const categories = [
        { img: "/images/img1.jpg", name: "Ramya", role: "Actor and Business Woman" },
        { img: "/images/img2.jpg", name: "Rekha", role: "Actor and Business Woman" },
        { img: "/images/img3.jpg", name: "Devi", role: "Actor and Business Woman" },
    ];

    return (
        <div className="flex flex-col items-center py-10 bg-gray-100 w-full">
            {/* Heading */}
            <h1 className="text-4xl font-semibold text-[#5C4A40] mb-6 text-center">Browse by Categories</h1>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center text-center w-full px-4">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 text-center justify-center items-center">
                            <img src={category.img} alt={category.name} className="w-full h-full object-cover justify-center text-center items-center" />
                        </div>
                        <h2 className="mt-3 text-2xl font-semibold">{category.name}</h2>
                        <p className="text-gray-600 text-lg">{category.role}</p>
                        <div className="mt-2 flex gap-1 text-yellow-500 text-xl justify-center text-center">
                            ★ ★ ★ ★ ★
                        </div>
                        <p className="mt-3 text-gray-700 max-w-2xl px-4 text-lg text-center justify-center items-center">
                            "I ordered a custom birthday cake from Cakes 'n' Frost, and it was beyond my expectations! The cake was a chef’s kiss. Must try!"
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="relative top-1/2 transform -translate-y-1/2 w-full flex justify-between px-6">
                <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-400 rounded-full shadow-md hover:bg-gray-200 transition">
                    <span className="text-2xl">←</span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-400 rounded-full shadow-md hover:bg-gray-200 transition">
                    <span className="text-2xl">→</span>
                </button>
            </div>
        </div>
    );
}