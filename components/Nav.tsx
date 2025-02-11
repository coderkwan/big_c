import Link from "next/link";
import Image from "next/image";

export default function Nav() {
        return (
                <div className="bg-black text-slate-100 px-3">
                        <div className="mx-auto max-w-[1200px] flex items-center justify-between gap-4">
                                <div className="p-2">
                                        <Image
                                                src="/weblogo.png"
                                                alt="big c logo"
                                                width={120}
                                                height={40}
                                        />
                                </div>
                                <div className="gap-5 hidden md:flex">
                                        <Link href="services">Services</Link>
                                        <Link href="products">Products</Link>
                                        <Link href="about">About Us</Link>
                                        <Link href="contact">Contact Us</Link>
                                </div>
                                <Image
                                        src="/menu.png"
                                        alt="menu"
                                        width={40}
                                        height={40}
                                        className="md:hidden"
                                />
                        </div>
                </div>
        );
}
