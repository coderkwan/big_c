import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-orange-500 text-slate-100 py-[4rem] flex flex-col items-center">
            <div className="mx-auto w-full max-w-[1400px] border-b border-slate-800 pb-[2rem] flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-[3rem] justify-between ">
                <Link href="/#">
                    <Image src='/biglogo.png' alt="big c printworks logo" width={200} height={100} />
                </Link>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Menu</h3>
                    <div className="flex flex-col gap-2">
                        <Link href="/#products">Products</Link>
                        <Link href="/#services">Services</Link>
                        <Link href="/#why">Why Us</Link>
                        <Link href="/#about">About Us</Link>
                        <Link href="/#contact">Contact Us</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Address</h3>
                    <div className="flex flex-col">
                        <p>Opposite Infracast</p>
                        <p>Matsapha Industrial Site</p>
                        <p>Matsapha, Eswatini</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-2">Contact details</h3>
                        <p className="">+268 2518 4084</p>
                        <p className="">+268 7667 5259</p>
                        <p className="">+268 7970 7070</p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Link href="https://wa.me/26879707070" className="bg-white p-2 rounded-full">
                            <Image src='/wp_.png' alt="whatsapp" width={30} height={30} />
                        </Link>
                        <Link href="https://facebook.com/bigc_printworks" className="bg-white p-2 rounded-full">
                            <Image src='/fb.png' alt="facebook" width={30} height={30} />
                        </Link>
                        <Link href="https://instagram.com/big_c_printworks" className="bg-white p-2 rounded-full">
                            <Image src='/ig.png' alt="instagram" width={30} height={30} />
                        </Link>
                    </div>
                </div>
            </div>
            <p className="mt-[3rem] text-xs uppercase">Big C Printworks Copyright &copy; 2025</p>
        </div>
    )
}
