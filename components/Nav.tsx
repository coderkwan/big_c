import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
        <div className="text-slate-100 p-3">
            <div className="mx-auto px-2 max-w-[1400px] rounded-xl bg-black flex items-center justify-between gap-4">
                <a href="/" className="p-2">
                    <Image
                        src="/weblogo.png"
                        alt="big c logo"
                        width={120}
                        height={40}
                    />
                </a>
                <div className="gap-10 hidden md:flex items-center">
                    <Link href="services">Services</Link>
                    <Link href="about">About Us</Link>
                    <Link href="contact">Contact Us</Link>
                    <Link href="https://" className="bg-white py-2 px-5 rounded-md text-slate-800">
                        <div className="flex gap-2">
                            <Image className="w-[25%]" src='/wp.png' alt="whatsapp icon" width={20} height={20} /><p>WhatsApp</p></div>
                    </Link>

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
