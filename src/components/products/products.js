import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Red Valvet Pastry",
        price: "₹169/-",
        image: "/images/Red valvet.png",
        veg: true,
        customizable: false,
    },
    {
        id: 2,
        name: "Strawbery Cheesecake",
        price: "₹249/-",
        image: "/images/strawberry.png",
        veg: false,
        customizable: true,
    },
    {
        id: 3,
        name: "Assorted Cupcakes",
        price: "₹149/-",
        image: "/images/cupcake.png",
        veg: true,
        customizable: true,
    },
    {
        id: 4,
        name: "Red Valvet 1kg",
        price: "₹949/-",
        image: "/images/valvet.png",
        veg: true,
        customizable: true,
    },
    {
        id: 5,
        name: "Coffee Pastry",
        price: "₹169/-",
        image: "/images/coffe.png",
        veg: true,
        customizable: true,
    },
    {
        id: 6,
        name: "Assorted Chessecake",
        price: "₹1249/-",
        image: "/images/Assorted.png",
        veg: true,
        customizable: true,
    },
    {
        id: 7,
        name: "Nutty Vanilla 1kg",
        price: "₹849/-",
        image: "/images/Nutty vanilla.png",
        veg: true,
        customizable: true,
    },
    {
        id: 8,
        name: "Fruity Chocolate 1kg",
        price: "₹1049/-",
        image: "/images/fruity.png",
        veg: true,
        customizable: true,
    },
];

export default function ProductList() {
    return (
        <div className="p-4 mt-10">
            <h2 className="text-center text-2xl font-bold mb-6 text-[#5C4A40] font-montaga">Our Bestsellers</h2>

            <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="relative border  p-4 shadow-md bg-white flex flex-col items-center ">

                        {/* Veg/Non-Veg Indicator & Customizable Label */}
                        <div className="w-full flex justify-between items-center mb-2">
                            <span className={`w-4 h-4 block rounded-full border ${product.veg ? 'border-green-500 bg-green-500' : 'border-yellow-500 bg-yellow-500'}`} />
                            {product.customizable && <span className="text-xs text-gray-500">Customizable</span>}
                        </div>

                        {/* Product Image */}
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={100}
                            height={100}
                            objectFit="contain"
                            className="mx-auto"
                        />



                        {/* Product Name & Price */}
                        <div className="flex flex-rows gap-5 items-center mt-5 ">
                            <div className="absolute left-0 mb-8 h-[1px] w-full bg-black"></div>
                            <h3 className="text-sm font-semibold text-gray-800 text-centers">{product.name}</h3>
                            <span className="font-bold">.</span>
                            <p className="text-gray-600 font-medium mt-1">{product.price}</p>
                        </div>

                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-6">
                <button className="border bg-gray-200 px-6 py-2  shadow-sm hover:bg-gray-300">
                    View More
                </button>
            </div>
        </div>

    );
}
