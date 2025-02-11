"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function Home() {
        const titles = [
                "Premium Workwear, Safety Gear & Corporate Uniforms – Designed for Durability & Style",
                "Custom Branding & Printing: DTF, Sublimation, UV & Vinyl for Apparel, Cars & More!",
                "From Fabrics to Final Product – Expert Manufacturers of T-Shirts, Uniforms & 3D Cutouts",
        ];
        const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

        const [count, setCount] = useState(0);
        const [count_img, setCount_img] = useState(0);

        useEffect(() => {
                const interval = setInterval(() => {
                        setCount_img(
                                (count_img) => (count_img + 1) % images.length
                        );
                        setCount((count) => (count + 1) % titles.length);
                }, 5000);
                return () => clearInterval(interval);
        }, []);

        return (
                <div className="flex flex-col md:flex-row gap-[4rem justify-between gap-5 items-center my-[5rem]">
                        <div className="  order-2 md:order-1 md:w-[50%] flex flex-col gap-4">
                                <h1 className="text-4xl md:text-4xl font-bold">
                                        {titles[count]}
                                </h1>
                                <p className="text-md text-slate-700">
                                        At Big C Printworks, we specialize in
                                        high-quality workwear, safety wear,
                                        corporate uniforms, and custom branding
                                        solutions. From security uniforms and
                                        PPE to DTF, sublimation, and vinyl
                                        printing, we provide top-tier products
                                        tailored to your needs. Whether you're a
                                        business looking for professional
                                        uniforms or need custom branding for
                                        cars, fabrics, and promotional
                                        materials, we've got you covered.
                                </p>
                                <div className="flex gap-4">
                                        <button className="bg-black text-slate-200 py-3 px-9 ">
                                                Services
                                        </button>
                                        <button className="bg-yellow-500 text-slate-900 py-3 px-9 ">
                                                Contact Us
                                        </button>
                                </div>
                        </div>
                        <div className="order-1 md:order-2 w-full md:w-[50%]  flex items-start justify-start md:justify-center">
                                <img
                                        className="max-h-[300px] border-yellow-500 border "
                                        src={`/hero/${images[count_img]}`}
                                        alt="printing"
                                />
                        </div>
                </div>
        );
}
