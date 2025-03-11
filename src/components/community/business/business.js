"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation"
import Image from "next/image";
export default function Categories() {
    const categories = [
        { img: "/images/img1.jpg", name: "Ramya", role: "Actor and Business Woman" },
        { img: "/images/img2.jpg", name: "Rekha", role: "Actor and Business Woman" },
        { img: "/images/img4.jpg", name: "Devi", role: "Actor and Business Woman" },
    ];

    return (
        <div className="flex flex-col items-center py-10 bg-gray-100 w-full">
            <Image src="/images/sign1.png" alt="Discover" width={100} height={40} className="text-4xl font-semibold text-[#5C4A40] mb-6 text-center" />
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
                    <SwiperSlide key={index} className="flex flex-col items-center text-center w-full px-12 ">
                        <div className="flex justify-center items-center">
                            <div className="md:w-40 md:h-40  rounded-full overflow-hidden shadow-lg border-4 border-gray-300 text-center">
                                <img src={category.img} alt={category.name} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <h2 className="mt-3 text-2xl font-semibold">{category.name}</h2>
                        <p className="text-gray-600 text-lg">{category.role}</p>
                        <div className="mt-2 flex gap-1 text-yellow-500 text-xl justify-center text-center">
                            ★ ★ ★ ★ ★
                        </div>
                        <p className="mt-3 text-gray-700 w-full  text-xl text-center justify-center items-center  ">
                            &quot;I ordered a custom birthday cake from Cakes &apos;n; Frost,<br />
                            and it was beyond my expectations! The cake was
                            <br />a chef&rsquo;s kiss. Must try!&quot;
                        </p>
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* <div className="relative top-1/2 transform -translate-y-1/2 w-full flex justify-between px-6">
                <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-400 rounded-full shadow-md hover:bg-gray-200 transition">
                    <span className="text-2xl">←</span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-400 rounded-full shadow-md hover:bg-gray-200 transition">
                    <span className="text-2xl">→</span>
                </button>
            </div> */}
        </div>
    );
}