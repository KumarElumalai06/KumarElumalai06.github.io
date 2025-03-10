import Image from "next/image";

export default function Discover() {
    return (
        <div className="flex justify-center items-center">
            <div className=" text-center relative w-full">
                <div className="flex items-center justify-center  w-full ">
                    <div className="flex flex-col items-center text-center w-full md:w-3/4 lg:w-1/2  p-6 md:p-12 ">
                        <Image src="/images/sign.png" alt="Discover" width={100} height={40} />
                        <h2 className="text-2xl md:text-4xl font-semibold text-[#5A4635] mb-4 text-center">
                            Discover our Unique cake offerings today
                        </h2>
                        <p className="text-black text-2lg">
                            At 'n' Frost, we believe every celebration deserves a special cake. Our customizable options let you create the perfect dessert for any occasion.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl ">
                    {/* <div className="relative">
                        <Image src="/images/border-left.png" alt="cake" width={40} height={40} objectFit="contain" className="mx-auto text-start absolute items-start" />
                        <Image src="/images/border-right.png" alt="cake" width={40} height={40} objectFit="contain" className="mx-auto text-end absolute items-end" />
                    </div> */}

                    <div className="text-center p-4 ">
                        <Image src="/images/food.png" alt="cake" width={300} height={150} objectFit="contain" className="mx-auto" />
                        <span className="block text-sm font-semibold mt-2  text-center align-end text-[#5C4A40]">Only the freshest ingredients used</span>
                        <p>we soruce our ingredients to ensure quality</p>
                    </div>
                    <div className="text-center p-4 relative">
                        <Image src="/images/boy.png" alt="cake" width={300} height={150} className="mx-auto" />
                        <span className="block text-sm font-semibold mt-4 text-[#5C4A40]">
                            Fast and Reliable Delivery Service
                        </span>
                        <p>Get our cakes at your doorstep with 100% customer support.</p>
                        <button className="mt-4 bg-[#C8B7A6] text-[#5A4635] w-40 h-10">
                            order now
                        </button>
                    </div>

                    <div className="text-center ">
                        <Image src="/images/whitecake.png" alt="cake" width={300} height={150} objectFit="contain" className="mx-auto" />
                        <span className="block text-sm font-semibold mt-2  text-center align-end text-[#5C4A40]">
                            Order Your Customized cakes today
                        </span>
                        <p className="text-gray-600">Experience the joy of personalized cakes with utmost care</p>
                    </div>

                </div>
            </div>


        </div>

    );
}