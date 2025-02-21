"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import TitleOne from "../components/TitleOne"
import Link from "next/link";
import TitleTwo from "../components/TitleTwo"
import TitleThree from "../components/TitleThree"
import TitleFour from "../components/TitleFour"
import {products_list, branding_list} from "@/utils/products";

export default function Home() {
    const titles = [
        <TitleOne key={0} />,
        <TitleTwo key={1} />,
        <TitleThree key={2} />,
        <TitleFour key={3} />,
    ];

    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [phone, setPhone] = useState("")
    const products = useRef<HTMLDivElement | null>(null)
    const branding = useRef<HTMLDivElement | null>(null)
    const pos = 150

    function scrollLeft(ref) {
        if (ref.current != null) {
            ref.current.scrollBy({left: 0 - pos, behavior: 'smooth'})
        }
    }

    function scrollRight(ref) {
        if (ref.current != null) {
            ref.current.scrollBy({left: pos, behavior: 'smooth'})
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending email...');
        const emailData = {name, email, phone, message}

        try {
            const res = await fetch('/api/Sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            const result = await res.json();
            if (res.ok) {
                setStatus('Email sent successfully!');
            } else {
                setStatus(`Error: ${result.message}`);
            }
        } catch (e) {
            console.log(e)
            setStatus('Failed to send email.');
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => (count + 1) % titles.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, [titles.length]);

    return (
        <main className="px-2 flex flex-col gap-[5rem] mb-[10rem]">
            <section className="bg-[url(/bg2.JPG)] bg-cover overflow-hidden w-full max-w-[1400px] mx-auto rounded-3xl">
                <div className="bg-black/85 flex flex-col md:flex-row px-[2rem] py-[5rem] gap-[4rem justify-between items-center">
                    <div className="flex flex-col md:text-center items-center gap-4 mx-auto max-w-[1000px]">
                        <h1 className="text-3xl md:text-6xl text-white font-bold uppercase">{titles[count]}</h1>
                        <p className="text-sm md:text-[18px] leading-[25px] text-slate-300">
                            Big C Printworks specializas in signage printing and fabrication, stockiest
                            of signage material, Work wear, Corporate wear, Security Uniforms,
                            Sublimation, DTF, PPE, Safety wear, 3D cutouts, UV printing, Vinyl Printing
                            & Cutting, Car branding, Fabrics and T-shirts Manufacturers, Aluminum,
                            Steel, We provide a lasting solution to all your branding needs.
                        </p>
                        <div className="flex flex-col justify-center w-full md:flex-row gap-4 my-[2rem]">
                            <Link href='/#services' className="w-full  md:w-auto rounded-lg bg-white text-slate-900 text-lg py-3 px-9 ">Services</Link>
                            <Link href='/#contact' className="w-full md:w-auto rounded-lg bg-orange-500 text-slate-100 text-lg py-3 px-9 ">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div id="products" className=""></div>
            <section className="w-full max-w-[1400px] flex flex-col items-center mx-auto px-[1rem]">
                <div className="md:text-center mb-[2rem]  max-w-[800px]">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase mb-3">Our Products</h2>
                    <p className="text-sm md:text-xl text-slate-600">Big C Printworks supply and delivers high-quality products.</p>
                </div>
                <div ref={products} className="w-full flex gap-2 py-2 no-scrollbar overflow-x-auto ">
                    {
                        products_list.map((item, key) => {
                            return (
                                <div key={key} className="min-w-[260px] flex flex-col justify-between gap-2 border border-orange-500 rounded-lg p-2">
                                    <div>
                                        <div className="relative h-[240px] mb-3 rounded-lg overflow-hidden">
                                            <Image src={`/products/${item.image}.jpg`} layout="fill" alt={item.name} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-orange-500">{item.name}</h3>
                                            {item.description &&
                                                <p className="text-sm text-slate-800">{item.description}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center border-t border-orange-500 py-2 justify-between">
                                        <h4 className="font-bold text-lg w-full"><span className="text-sm font-light">From{" "}</span>E {item.price}</h4>
                                        <p className="italic text-xs text-slate-500">{item.price_for}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=" mb-5 flex items-center gap-5">
                    <Image onClick={() => scrollLeft(products)} src='/prev.png' alt="scroll back" width={50} height={50} />
                    <Image onClick={() => scrollRight(products)} src='/next.png' alt="scroll back" width={50} height={50} />
                </div>
                <div ref={branding} className="w-full flex gap-2 py-2 no-scrollbar overflow-x-auto ">
                    {
                        branding_list.map((item, key) => {
                            return (
                                <div key={key} className="min-w-[260px] flex flex-col justify-between gap-2 border border-orange-500 rounded-lg p-2">
                                    <div>
                                        <div className="relative h-[240px] mb-3 rounded-lg overflow-hidden">
                                            <Image src={`/products/branding/${item.image}.jpg`} layout="fill" alt={item.name} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-orange-500">{item.name}</h3>
                                            {item.description &&
                                                <p className="text-sm text-slate-800">{item.description}</p>
                                            }
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center border-t border-orange-500 py-2 justify-between">
                                        <h4 className="font-bold text-lg w-full"><span className="text-sm font-light">From{" "}</span>E {item.price}</h4>
                                        <p className="italic text-xs text-slate-500">{item.price_for}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex items-center gap-5">
                    <Image onClick={() => scrollLeft(branding)} src='/prev.png' alt="scroll back" width={50} height={50} />
                    <Image onClick={() => scrollRight(branding)} src='/next.png' alt="scroll back" width={50} height={50} />
                </div>
            </section>
            <div id="services" className=""></div>
            <section className="w-full max-w-[1400px] mx-auto flex flex-col px-[1rem] items-center">
                <div className="md:text-center mb-[2rem]  max-w-[800px]">
                    <h2 className="text-3xl md:text-5xl font-bold uppercase mb-3">What we do</h2>
                    <p className="text-sm md:text-xl text-slate-600">Big C Printworks delivers high-quality printing, fabrication, and branding solutions tailored to your needs. With precision, durability, and expert craftsmanship, we ensure lasting results for businesses and individuals alike.</p>
                </div>
                <div className="flex flex-col w-full overflow-x-auto gap-3 items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full pb-6 md:px-4 gap-6">
                        <div className="bg-orange-500 min-w-[300px]  md:min-w-[400px] p-3 rounded-xl felx flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/signage.jpg" alt="signage printing" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">Signage Printing and Fabrication</h3>
                            <p className="text-slate-100">Custom stationery solutions tailored for your business.</p>
                        </div>
                        <div className="bg-orange-500 min-w-[300px] md:min-w-[400px] p-3 rounded-xl flex flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/material.webp" alt="printing materials" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">Printing Materials</h3>
                            <p className="text-slate-100">We supply high quality printing materials.</p>
                        </div>
                        <div className="bg-orange-500 min-w-[300px] md:min-w-[400px] p-3 rounded-xl flex flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/vihicle.jpg" alt="Vihicle branding" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">Vihicle Branding</h3>
                            <p className="text-slate-100">Transform your vehicle into a moving advertisement with custom wraps and graphics.</p>
                        </div>
                        <div className="bg-orange-500 min-w-[300px] md:min-w-[400px] p-3 rounded-xl flex flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/dtf.jpg" alt="dtf printing" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">DTF Printing</h3>
                            <p className="text-slate-100">Print vibrant, high-quality designs on fabrics with Direct-to-Film (DTF) printing.</p>
                        </div>
                        <div className="bg-orange-500 min-w-[300px] md:min-w-[400px] p-3 rounded-xl flex flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/signs.jpg" alt="road signs printing" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">Road Signs</h3>
                            <p className="text-slate-100">Create durable and highly visible road signs for safety, navigation, and advertising.</p>
                        </div>
                        <div className="bg-orange-500 min-w-[300px] md:min-w-[400px] p-3 rounded-xl flex flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/3d.webp" alt="3d Fabrication" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">3D Fabrication</h3>
                            <p className="text-slate-100">Bring your ideas to life with custom 3D fabrication for signage, displays, and prototypes.</p>
                        </div>
                        <div className="bg-orange-500 min-w-[300px] md:min-w-[400px] p-3 rounded-xl flex flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/large.webp" alt="large format printing" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">Large Format Printing</h3>
                            <p className="text-slate-100">Print high-quality, eye-catching banners, posters, and signage in large formats.</p>
                        </div>
                        <div className="bg-orange-500 min-w-[300px] md:min-w-[400px] p-3 rounded-xl flex flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/uv.webp" alt="UV printing" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">UV Printing</h3>
                            <p className="text-slate-100">Print sharp, durable designs on various materials with high-quality UV printing technology.</p>
                        </div>
                        <div className="bg-orange-500 min-w-[300px] md:min-w-[400px] p-3 rounded-xl flex flex-col gap-2">
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                                <Image src="/sublimation.jpg" alt="sublimation printing" objectFit="cover" layout="fill" />
                            </div>
                            <h3 className="text-xl text-slate-900 font-bold">Sublimation</h3>
                            <p className="text-slate-100">Transfer vibrant, long-lasting prints onto fabrics, mugs, and other coated surfaces with sublimation printing.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="why" className=""></div>
            <section className="bg-[url(/bg_blue.png)] py-[2rem] px-[1rem] bg-cover flex flex-col gap-2 items-center">
                <div className="text-center mb-[2rem]">
                    <h2 className="text-3xl md:text-5xl font-bold  uppercase">Why you should choose us?</h2>
                    <p className="text-slate-600 text-lg">Some reasons why you should work with Big C Printworks.</p>
                </div>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-5">
                        <div className="bg-white  border border-orange-500 p-5 rounded-xl flex flex-col items-center gap-3">
                            <Image src='/quality.png' alt="high quality" width={50} height={50} />
                            <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                            <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                        </div>
                        <div className="bg-white  border border-orange-500 p-5 rounded-xl flex flex-col  items-center gap-3">
                            <Image src='/custom.png' alt="high quality" width={50} height={50} />
                            <h3 className="uppercase text-xl">Custom Printing Solutions</h3>
                            <p className="text-slate-600">No graphic design experience? No problem! Our custom design services guarantee eye-catching prints tailored to your business goals.</p>
                        </div>
                        <div className="bg-white  border border-orange-500 p-5 rounded-xl flex flex-col  items-center gap-3">
                            <Image src='/expertise.png' alt="high quality" width={50} height={50} />
                            <h3 className="uppercase text-xl">Expertise in Branding</h3>
                            <p className="text-slate-600">Count on us for expert branding solutions, from promotional items to branded apparel, tailored to showcase your unique identity.</p>
                        </div>
                        <div className="bg-white border border-orange-500 p-5 rounded-xl flex flex-col  items-center gap-3">
                            <Image src='/speed.png' alt="high quality" width={50} height={50} />
                            <h3 className="uppercase text-xl">Efficient Turnaround</h3>
                            <p className="text-slate-600">With streamlined processes, we guarantee efficient turnaround times without compromising on the quality of your prints and promotional items.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto rounded-3xl w-full max-w-[1400px] py-[3rem] px-[1rem] md:p-[5rem] bg-slate-800 text-slate-200 md:text-center flex flex-col gap-4 md:items-center">
                <h3 className="uppercase text-3xl md:text-5xl font-bold">Fast and Affordable Branding services</h3>
                <p className="text-slate-300 mx-auto max-w-[800px] text-xl">Get high-quality branding solutions that are both fast and budget-friendly. From custom prints to eye-catching signage, we deliver professional results with quick turnaround times. Elevate your brand without breaking the bank!</p>
                <div>
                    <button className="bg-orange-500 text-slate-100 py-4 px-12 rounded-lg">Contact Us</button>
                </div>
            </section>
            <div id="about" className=""></div>
            <section className="mx-auto rounded-3xl w-full max-w-[1400px]  px-[1rem] md:p-[5rem] text-slate-800 md:text-center flex flex-col gap-4 md:items-center">
                <h3 className="uppercase text-3xl md:text-5xl font-bold">About Big C Printworks</h3>
                <p className="max-w-[800px] text-xl">Big C Printworks is your trusted partner in high-quality signage printing, fabrication, and branding solutions. With a commitment to excellence and innovation, we provide a one-stop solution for all your branding, printing, and corporate wear needs.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    <div className="text-left">
                        <h4 className="text-2xl font-bold text-orange-500 uppercase">Who we are</h4>
                        <p>At Big C Printworks, we specialize in signage printing and fabrication, ensuring your brand stands out with precision and durability. As stockists of premium signage materials, we cater to businesses looking for top-notch branding solutions. From corporate and security uniforms to workwear and safety gear, we offer high-quality apparel that reflects your brand identity.</p>
                    </div>
                    <div className="text-left">
                        <h4 className="text-2xl font-bold text-orange-500 uppercase">Why us?</h4>
                        <p>✔ Quality & Durability – We use premium materials and advanced printing technology.
                        </p>
                        <p>
                            ✔ Comprehensive Solutions – From signage to workwear, we cover all your branding needs.
                        </p><p>

                            ✔ Customization – Tailored solutions to match your unique brand identity.
                        </p><p>

                            ✔ Commitment to Excellence – We focus on delivering top-tier results with lasting impact.</p>
                    </div>
                    <div className="text-left">
                        <h4 className="text-2xl font-bold text-orange-500 uppercase">Our Offices</h4>
                        <p>We are not limited in our offices, we can deliver wherever you are.</p>
                        <div className="flex flex-col font-bold">
                            <p>Opposite Infracast</p>
                            <p>Matsapha Industrial Site</p>
                            <p>Matsapha, Eswatini</p>
                        </div>
                        <div className="flex flex-col text-orange-500">
                            <p className="">+268 2518 4084</p>
                            <p className="">+268 7667 5259</p>
                            <p className="">+268 7970 7070</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="contact" className=""></div>
            <section className="mx-auto rounded-3xl w-full max-w-[1400px] py-[3rem] px-[1rem] md:p-[5rem] bg-slate-800 text-slate-200 md:text-center flex flex-col gap-6 md:items-center">
                <div>
                    <h3 className="text-3xl md:text-5xl uppercase font-bold">Contact Us</h3>
                    <p className="text-orange-500">We will get back to you ASAP!</p>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-[5rem] ">
                    <div className="w-full md:w-[50%] md:px-[3rem] rounded ">
                        <form onSubmit={handleSubmit} className="max-w-[600px] flex flex-col text-start gap-4 ">
                            <div className="flex flex-col ">
                                <label htmlFor="">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                    className=" p-3 border bg-slate-800 border-slate-500 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label htmlFor="">Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required={true}
                                    className=" p-3 border border-slate-500 bg-slate-800 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col ">
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={true}
                                    className=" p-3 border border-slate-500 bg-slate-800 rounded-md"
                                />
                            </div>
                            <div className="flex flex-col gap">
                                <label htmlFor="">message</label>
                                <textarea
                                    className=" p-3 border border-slate-500 bg-slate-800 rounded-md"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required={true}
                                    id=""
                                ></textarea>
                            </div>
                            <button type='submit' className="bg-orange-500 text-slate-100 p-3 rounded-md">Send Message</button>
                            {status && <p>{status}</p>}
                        </form>
                        <div className="hidden md:block my-3 text-left">
                            <h5 className="text-lg uppercase font-bold">Contact details</h5>
                            <p className="">+268 2518 4084</p>
                            <p className="">+268 7667 5259</p>
                            <p className="">+268 7970 7070</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] flex flex-col justify-center h-full">
                        <div className="bg-black h-[400px] w-full rounded-xl overflow-hidden relative">
                            <Image src='/printer.jpg' alt="Branding services" layout="fill" objectFit="cover" />
                        </div>
                        <div className="my-3 text-left md:hidden">
                            <h5 className="text-lg uppercase font-bold">Contact details</h5>
                            <p className="">+268 2518 4084</p>
                            <p className="">+268 7667 5259</p>
                            <p className="">+268 7970 7070</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
