import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full  bg-[#ECE2E0] ">
            <div className="absolute  left-1/3 -mt-8  ">
                <Image src="/images/footer.png" width={500} height={200} alt="footer logo" />
            </div>
            <div className="flex flex-wrap justify-between w-full max-w-screen-xl mx-auto p-4 px-24 py-16">
                <div className="w-full sm:w-1/5 text-center mb-6">
                    <Image src="/images/logo.png" width={200} height={50} alt="logo" />
                    <Image src="/images/social.png" className="mt-5" width={100} height={50} alt="social" />
                </div>

                <div className="w-full sm:w-1/5 mb-6">
                    <h1 className="text-xl font-semibold mb-3 text-[#5C4A40]">Quick Links</h1>
                    <ul>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Order now</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="w-full sm:w-1/5 mb-6">
                    <h1 className="text-xl font-semibold mb-3 text-[#5C4A40]">Stay Update</h1>
                    <ul>
                        <li>Newsletter</li>
                        <li>Special Offers</li>
                        <li>Events</li>
                        <li>FAQS</li>
                    </ul>
                </div>

                <div className="w-full sm:w-2/5 mb-6">
                    <h1 className="text-xl font-semibold mb-3 text-[#5C4A40]">Subscribe</h1>
                    <span className="block mb-4 ml-2">Join our newsletter for updates on new cakes and news</span>
                    <div className="flex flex-row space-x-2 text-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border p-2  focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        />
                        <input
                            type="date"
                            className="border p-2  focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                        />
                    </div>
                    <div className="justify-center text-center items-center">
                        <button className="mt-4 p-2  text-white bg-[#5C4A40]">Subscribe here</button>
                    </div>
                </div>
            </div>


        </div>
    );
}