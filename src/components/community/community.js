import Image from "next/image";

export default function Community() {
    return (
        <div className="flex items-center justify-start bg-[url('/images/background.png')] bg-cover bg-center p-8 filter brightness-75 mx-16 ">
            <div className="max-w-lg text-white w-[50%] p-6 rounded-lg ml-auto ">
                <h1 className="text-start font-bold text-3xl">Join Our Community</h1>
                <p className="mt-2 font-bold">
                    Share your pictures and get featured on our website.<br />
                    Build our family together.
                </p>
                <div className="mt-4">
                    <button className="px-4 py-2 bg-white text-[#5A4635]  hover:bg-gray-200 transition">
                        Join Now
                    </button>
                </div>
            </div>
        </div>
    );
}
