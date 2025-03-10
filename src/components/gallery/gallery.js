
import Image from "next/image";
export default function Gallery() {
    return (
        <div className="flex w-full gap-5 p-8 ">
            <div className="inline-block justify-between ">
                <h1 className="text-3xl text-[#5A4635] ">Our Gallery </h1>
                <Image src="/images/frame1.png" alt="gallery" width={400} height={400} className="mt-5" />
            </div>
            <div className="inline-block mt-2 gap-3 bg-transparent bg-cover  object-contain">
                <Image src="/images/frame2.png" alt="gallery" width={400} height={400} />
                <br />
                <Image src="/images/frame3.png" alt="gallery" width={400} height={400} className="mt-5" />
            </div>
            <div className="flex mt-2 gap-3">
                <Image src="/images/frame4.png" alt="gallery" width={200} height={200} />
                <Image src="/images/frame5.png" alt="gallery" width={200} height={200} />
            </div>
        </div>
    );
}
