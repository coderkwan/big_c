"use client";

import {useEffect, useState} from "react";
import Image from "next/image";

export default function Home() {
    const titles = [
        "Signage Printing, Stockiest of signage materials",
        "Custom Branding & Printing: DTF, Sublimation, UV & Vinyl for Apparel",
        "Vihicle branding, Banners and Promotional Items",
        "Premium Workwear, Safety Gear & Corporate Uniforms",
    ];
    const images = [
        {
            name: "Branding",
            image: "1.png"
        },
        {
            name: "Graphic design",
            image: "2.png"
        },
        {
            name: "Signage Materials",
            image: "3.png"
        },
        {
            name: "Signage Printing",
            image: "4.png"
        },
        {
            name: "Road Signs",
            image: "5.png"
        },
        {
            name: "DTF",
            image: "6.png"
        },
        {
            name: "Sublimation",
            image: "7.png"
        },
    ];

    const [count, setCount] = useState(0);
    const [count_img, setCount_img] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => (count + 1) % titles.length);
        }, 6000);

        const interval_images = setInterval(() => {
            setCount_img((count_img) => (count_img + 1) % images.length);
        }, 3000);
        return () => {
            clearInterval(interval);
            clearInterval(interval_images);
        };
    }, [images.length, titles.length]);

    return (
        <main>
            <div className="mb-[10rem] flex flex-col md:flex-row gap-[4rem justify-between gap-5 items-center my-[5rem]">
                <div className=" md:w-[50%] flex flex-col gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold">{titles[count]}</h1>
                    <p className="text-sm md:text-[17px] leading-[25px] text-slate-700">
                        Big C Printworks specializas in signage printing and fabrication, stockiest
                        of signage material, Work wear, Corporate wear, Security Uniforms,
                        Sublimation, DTF, PPE, Safety wear, 3D cutouts, UV printing, Vinyl Printing
                        & Cutting, Car branding, Fabrics and T-shirts Manufacturers, Aluminum,
                        Steel, We provide a lasting solution to all your branding needs.
                    </p>
                    <div className="flex gap-4 my-[2rem]">
                        <button className="bg-black text-slate-200 py-3 px-9 ">Services</button>
                        <button className="bg-orange-500 text-slate-100 py-3 px-9 ">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-[50%] flex flex-col items-center justify-start md:justify-center">
                    <img
                        className="w-full md:w-auto md:max-h-[400px] "
                        src={`/hero/${images[count_img]["image"]}`}
                        alt="printing"
                    />
                    <p className="bg-slate-900 text-slate-100 font-bold p-3 uppercase w-full text-center">{images[count_img]["name"]}</p>
                </div>
            </div>
            <section className="my-[10rem] flex flex-col gap-4 items-center">
                <div className="text-center mb-[3rem]">
                    <h2 className="text-4xl font-bold uppercase">What we do</h2>
                    <p className="text-lg text-slate-600">We do stuff you will never imagine</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/signage.jpg" alt="signage printing" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">Signage Printing and Fabrication</h3>
                            <p className="text-slate-600">Custom stationery solutions tailored for your business.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on Signage Printing</button>
                    </div>
                    <div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/material.webp" alt="printing materials" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">Printing Materials</h3>
                            <p className="text-slate-600">We supply high quality printing materials.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on Printing Materials</button>
                    </div>
                    <div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/vihicle.jpg" alt="Vihicle branding" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">Vihicle Branding</h3>
                            <p className="text-slate-600">Transform your vehicle into a moving advertisement with custom wraps and graphics.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on Vihicle Branding</button>
                    </div><div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/dtf.jpg" alt="dtf printing" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">DTF Printing</h3>
                            <p className="text-slate-600">Print vibrant, high-quality designs on fabrics with Direct-to-Film (DTF) printing.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on DTF Printing</button>
                    </div><div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/signs.jpg" alt="road signs printing" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">Road Signs</h3>
                            <p className="text-slate-600">Create durable and highly visible road signs for safety, navigation, and advertising.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on Road Signs</button>
                    </div>
                    <div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/3d.webp" alt="3d Fabrication" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">3D Fabrication</h3>
                            <p className="text-slate-600">Bring your ideas to life with custom 3D fabrication for signage, displays, and prototypes.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on Signage Printing</button>
                    </div>
                    <div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/large.webp" alt="large format printing" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">Large Format Printing</h3>
                            <p className="text-slate-600">Print high-quality, eye-catching banners, posters, and signage in large formats.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on Large Format Printing</button>
                    </div>
                    <div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/uv.webp" alt="UV printing" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">UV Printing</h3>
                            <p className="text-slate-600">Print sharp, durable designs on various materials with high-quality UV printing technology.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on UV Printing</button>
                    </div>
                    <div className="flex flex-col justify-between px-6 pb-6 shadow-lg border border-slate-300 gap-5 ">
                        <div className="relative w-full h-[300px]">
                            <Image src="/sublimation.jpg" alt="sublimation printing" objectFit="cover" layout="fill" />
                        </div>
                        <div>
                            <h3 className="text-xl text-orange-500 font-bold">Sublimation</h3>
                            <p className="text-slate-600">Transfer vibrant, long-lasting prints onto fabrics, mugs, and other coated surfaces with sublimation printing.</p>
                        </div>
                        <button className="bg-orange-500 text-slate-200  p-3">View deltails on Sublimation</button>
                    </div>
                </div>
            </section>
            <section className="my-[10rem] flex flex-col gap-4 items-center">
                <div className="text-center mb-[3rem]">
                    <h2 className="text-4xl font-bold uppercase">Why you should choose us?</h2>
                    <p className="text-slate-600 text-lg">The only reasons why you shoul work with Big C Printworks.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-10">
                    <div className="flex flex-col items-center gap-3">
                        <Image src='/quality.png' alt="high quality" width={50} height={50} />
                        <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                        <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                    </div>
                    <div className="flex flex-col  items-center gap-3">
                        <Image src='/custom.png' alt="high quality" width={50} height={50} />
                        <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                        <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                    </div>
                    <div className="flex flex-col  items-center gap-3">
                        <Image src='/expertise.png' alt="high quality" width={50} height={50} />
                        <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                        <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                    </div>
                    <div className="flex flex-col  items-center gap-3">
                        <Image src='/speed.png' alt="high quality" width={50} height={50} />
                        <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                        <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                    </div>
                </div>
            </section>
            <section className="my-[10rem] rounded-lg py-[3rem] px-[1rem] md:p-[5rem] bg-slate-800 text-slate-200 text-center flex flex-col gap-4 items-center">
                <h3 className="uppercase text-3xl font-bold">Fast and Affordable Branding services</h3>
                <p className="text-slate-300 max-w-[800px]">Get high-quality branding solutions that are both fast and budget-friendly. From custom prints to eye-catching signage, we deliver professional results with quick turnaround times. Elevate your brand without breaking the bank!</p>
                <div>
                    <button className="bg-yellow-500 text-slate-900 p-4 rounded-lg">Book Appointment</button>
                </div>
            </section>
        </main>
    );
}
