"use client"
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect} from "react";

export default function Nav() {
    const [nav, setNav] = useState(false)

    function menuToggle() {
        setNav(!nav)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (nav) {
                setTimeout(() =>
                    setNav(false)
                    , 500)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [nav])

    return (
        <div className="sticky top-0 z-10 text-slate-100 p-3">
            <div className="mx-auto px-2 max-w-[1400px] rounded-xl bg-black flex items-center justify-between gap-4">
                <Link href="/#" className="p-2">
                    <Image
                        src="/weblogo.png"
                        alt="big c logo"
                        width={120}
                        height={40}
                    />
                </Link>
                <div className="gap-10 hidden md:flex items-center text-slate-200">
                    <Link href="/#products">Products</Link>
                    <Link href="/#services">Services</Link>
                    <Link href="/#why">Why Us</Link>
                    <Link href="/#about">About Us</Link>
                    <Link href="/#contact">Contact Us</Link>
                    <Link href="https://" className="bg-white py-2 px-5 rounded-md text-slate-800">
                        <div className="flex gap-2">
                            <Image className="w-[25%]" src='/wp.png' alt="whatsapp icon" width={20} height={20} /><p>WhatsApp</p></div>
                    </Link>

                </div>
                <div onClick={menuToggle} className="md:hidden">
                    {nav ?
                        <Image src='/close.png' width={50} height={50} alt="ship smart menu" /> :
                        <Image src='/menu.png' width={50} height={50} alt="ship smart menu" />
                    }
                </div>
            </div>
            {
                nav &&
                <div className="relative sticky top-[80px] z-10">
                    <div className="z-10 w-[90vw] mx-auto bg-black absolute rounded-xl flex md:hidden left-0 right-0 top-[5px] items-center gap-4 flex-col p-[2rem]">
                        <Link href="/#products">Products</Link>
                        <Link href="/#services">Services</Link>
                        <Link href="/#why">Why Us</Link>
                        <Link href="/#about">About Us</Link>
                        <Link href="/#contact">Contact Us</Link>
                        <a target="_blank" href='https://wa.me/26879707070' className="px-8 py-3 flex items-center gap-3 bg-slate-100 text-slate-900 rounded-lg"> <Image src="/wp.png" alt="Whatsapp" width={20} height={20} />WhatsApp</a>
                    </div>
                </div>
            }
        </div>
    );
}
