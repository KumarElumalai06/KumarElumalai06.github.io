"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Categories() {
    const categories = [
        { img: "/images/cake1.png", name: "Celebration Cakes" },
        { img: "/images/cake2.png", name: "pastries" },
        { img: "/images/cake3.png", name: "cookies" },
        { img: "/images/cake4.png", name: "Bakery" },
        { img: "/images/Red valvet.png", name: "Red valvet " },
        { img: "/images/valvet.png", name: "valvet" },
        { img: "/images/fruity.png", name: "fruity" }
    ];

    return (
        <div className="mt-5 ml-4 flex flex-col items-center">
            {/* Heading */}
            <div className="text-black mb-4 w-full">
                <h1 className="text-4xl text-[#5C4A40] text-left ml-5">Browse by Categories</h1>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={4} // Show 4 categories at a time
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                className="w-full max-w-screen-lg"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index} className="flex flex-col items-center w-full mt-5 justify-center">
                        <div className="w-28 h-28 rounded-full  overflow-hidden flex justify-center items-center">
                            <img
                                src={category.img}
                                alt={category.name}
                                className="w-full h-full object-contain object-center text-center items-center justify-center"
                            />
                        </div>

                        <p className="mt-2 text-lg font-semibold text-center items-center">
                            {category.name}
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Button Icon */}
            {/* <div className="mt-5 flex justify-center">
                <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    <img src="/images/btnicon.png" alt="Cart" className="w-6 h-6 mr-2" />
                </button>
            </div> */}
        </div>
    );
}
