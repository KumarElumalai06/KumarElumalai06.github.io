import Image from "next/image";
export default function Wedding() {
    return (
        <div className="mt-2 bg-[#e3e3e3] flex flex-col md:flex-row items-center justify-between w-full  p-6 ">

            <div class="w-full w-1\2   py-24  p-6 text-center text-block mt-2 items-center justify-center ">
                <h1 className="text-block p-6 text-6xl  font-semibold text-[#5A4635] w-auto items-center justify-center">weddings made <br /> special with our cake</h1>
                <p className="text-block p-6 md:max-w-2xl">We create custom wedding cakes that add a touch of sweetness <br /> to your special day.
                    Our expert bakers handcraft every detail to <br /> match you vision. pre-book your wedding
                    cake today to ensure <br /> a stunning centerpiece that's delicious as it is beautiful.
                </p>
                <div className="flex justify-center items-center gap-5 ">
                    <button className="items-start w-60 h-10 border-2 border-black">Book now</button>
                    <button className="flex items-center justify-center gap-4 w-60 h-10 border-2 border-black bg-[#DAD0CE]">
                        Contact Us
                        <Image src="/images/right-arrow.png" alt="arrow" width={20} height={20} className="w-5 h-5" />
                    </button>

                </div>
            </div>
            <div className="w-full md:w-1/2 text-center items-center justify-center text-inlineblock">
                <Image src="/images/design.png" alt="wedding" width={150} height={10} className="mx-auto mt-4" />
                <Image src="/images/big.png" alt="wedding" width={490} height={650} />
                <Image src="/images/design2.png" alt="wedding" width={150} height={10} className="mx-auto  mb-4" />
            </div>
        </div >

    );
}