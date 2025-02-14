import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-yellow-500 text-slate-900 py-[4rem] flex flex-col items-center">
            <div className="mx-auto w-full max-w-[1200px] border-b border-slate-800 pb-[2rem] flex flex-col md:flex-row items-center text-center md:text-left gap-[3rem] justify-between ">
                <div>
                    <Image src='/biglogo.png' alt="big c printworks logo" width={200} height={100} />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Menu</h3>

                    <div className="flex flex-col gap-2">
                        <Link href="services">Services</Link>
                        <Link href="products">Products</Link>
                        <Link href="about">About Us</Link>
                        <Link href="contact">Contact Us</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">Address</h3>
                    <div className="flex flex-col">
                        <p>Opposite Infracast</p>
                        <p>Matsapha Industrial Site</p>
                        <p>Matsapha, Eswatini</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="https" className="bg-white p-2 rounded-full">
                            <Image src='/wp_.png' alt="whatsapp" width={30} height={30} />
                        </Link>
                        <Link href="https" className="bg-white p-2 rounded-full">
                            <Image src='/fb.png' alt="facebook" width={30} height={30} />
                        </Link>
                        <Link href="https" className="bg-white p-2 rounded-full">
                            <Image src='/ig.png' alt="instagram" width={30} height={30} />
                        </Link>
                    </div>
                </div>
            </div>
            <p className="mt-[3rem] text-xs uppercase">Big C Printworks Copyright &copy; 2025</p>
        </div>
    )
}
