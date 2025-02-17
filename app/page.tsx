"use client";

import {useEffect, useState} from "react";
import Image from "next/image";

export default function Home() {

    const titles = [
        "Signage Printing, Stockiest of signage materials",
        "Custom Branding: DTF, Sublimation, UV & Vinyl",
        "Vihicle branding, Banners and Promotional Items",
        "Premium Workwear, Safety Gear & Corporate Uniforms",
    ];

    const images = [
        {
            name: "Signage Printing",
            image: "1.png"
        },
        {
            name: "Printing Materials",
            image: "2.png"
        },
        {
            name: "Large Format Printing",
            image: "3.png"
        },
        {
            name: "DTF Printing",
            image: "4.png"
        },
        {
            name: "Stationary",
            image: "5.png"
        },
        {
            name: "Work Wear",
            image: "6.png"
        },
        {
            name: "Custom Branding",
            image: "7.png"
        },
        {
            name: "Corporate Wear",
            image: "8.png"
        },
        {
            name: "UV Printing",
            image: "9.png"
        },
        {
            name: "3D Fabrication",
            image: "10.webp"
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
        <main className="px-2">
            {/* <section className="bg-[url(/bg_blue.png)] py-[3rem] px-6 md:p-[5rem] bg-cover  my-[10rem] flex flex-col gap-4 items-center"> */}
            <div className="bg-[url(/bg.jpg)] bg-cover overflow-hidden max-w-[1200px] mx-auto mb-[10rem] mb-[5rem] mt-[2rem] rounded-3xl">
                <div className=" bg-black/80 flex flex-col md:flex-row px-[2rem] py-[6rem] gap-[4rem justify-between items-center">
                    <div className="flex flex-col md:text-center items-center gap-4 mx-auto max-w-[1000px]">
                        <h1 className="text-3xl md:text-6xl text-white font-bold uppercase">{titles[count]}</h1>
                        <p className="text-sm md:text-[18px] leading-[25px] text-slate-100">
                            Big C Printworks specializas in signage printing and fabrication, stockiest
                            of signage material, Work wear, Corporate wear, Security Uniforms,
                            Sublimation, DTF, PPE, Safety wear, 3D cutouts, UV printing, Vinyl Printing
                            & Cutting, Car branding, Fabrics and T-shirts Manufacturers, Aluminum,
                            Steel, We provide a lasting solution to all your branding needs.
                        </p>
                        <div className="flex gap-4 my-[2rem]">
                            <button className=" rounded-lg bg-white text-slate-900 text-lg py-3 px-9 ">Services</button>
                            <button className="rounded-lg bg-orange-500 text-slate-100 text-lg py-3 px-9 ">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="max-w-[1400px] mx-auto my-[10rem] px-2 md:px-6 flex flex-col items-center">
                <div className="text-center mb-[3rem]  max-w-[800px]">
                    <h2 className="text-5xl font-bold uppercase mb-3">What we do</h2>
                    <p className="text-lg text-slate-600">Big C Printworks delivers high-quality printing, fabrication, and branding solutions tailored to your needs. With precision, durability, and expert craftsmanship, we ensure lasting results for businesses and individuals alike.</p>
                </div>
                <div className="flex flex-col w-full overflow-x-auto gap-3 items-center">
                    <div className="flex w-full overflow-x-auto scrollbar-hide pb-6 md:px-4 gap-6">
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
                    <div className="flex gap-3 items-center">
                        <div className="cursor-pointer"><Image src='/prev.png' alt="scrol back" width={50} height={50} /></div>
                        <div className="cursor-pointer"><Image src='/next.png' alt="scrol back" width={50} height={50} /></div>
                    </div>
                </div>
            </section>
            <section className="bg-[url(/bg_blue.png)] py-[3rem] px-6 md:p-[5rem] bg-cover  my-[10rem] flex flex-col gap-4 items-center">
                <div className="text-center mb-[3rem]">
                    <h2 className="text-4xl font-bold  uppercase">Why you should choose us?</h2>
                    <p className="text-slate-600 text-lg">The only reasons why you shoul work with Big C Printworks.</p>
                </div>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-10">
                        <div className="bg-white  border border-orange-500 p-5 rounded-xl flex flex-col items-center gap-3">
                            <Image src='/quality.png' alt="high quality" width={50} height={50} />
                            <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                            <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                        </div>
                        <div className="bg-white  border border-orange-500 p-5 rounded-xl flex flex-col  items-center gap-3">
                            <Image src='/custom.png' alt="high quality" width={50} height={50} />
                            <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                            <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                        </div>
                        <div className="bg-white  border border-orange-500 p-5 rounded-xl flex flex-col  items-center gap-3">
                            <Image src='/expertise.png' alt="high quality" width={50} height={50} />
                            <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                            <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                        </div>
                        <div className="bg-white border border-orange-500 p-5 rounded-xl flex flex-col  items-center gap-3">
                            <Image src='/speed.png' alt="high quality" width={50} height={50} />
                            <h3 className="uppercase text-xl">High-Quality Printing Services</h3>
                            <p className="text-slate-600">Boost your business with Print To Brand. We offer top-quality prints, from business cards to banners, making your brand shine.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-[10rem]  py-[3rem] px-[1rem] md:p-[5rem] bg-slate-800 text-slate-200 md:text-center flex flex-col gap-4 md:items-center">
                <h3 className="uppercase text-3xl md:text-5xl font-bold">Fast and Affordable Branding services</h3>
                <p className="text-slate-300 mx-auto max-w-[800px] text-xl">Get high-quality branding solutions that are both fast and budget-friendly. From custom prints to eye-catching signage, we deliver professional results with quick turnaround times. Elevate your brand without breaking the bank!</p>
                <div>
                    <button className="bg-orange-500 text-slate-100 p-4 rounded-lg">Contact Us</button>
                </div>
            </section>
        </main>
    );
}
