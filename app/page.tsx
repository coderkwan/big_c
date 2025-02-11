"use client";
import { useEffect, useState } from "react";
export default function Home() {
        const titles = [
                "Premium Workwear, Safety Gear & Corporate Uniforms – Designed for Durability & Style",
                "Custom Branding & Printing: DTF, Sublimation, UV & Vinyl for Apparel, Cars & More!",
                "From Fabrics to Final Product – Expert Manufacturers of T-Shirts, Uniforms & 3D Cutouts",
        ];
        const images = [
                "1.png",
                "2.png",
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png",
                "8.png",
        ];

        const [count, setCount] = useState(0);
        const [count_img, setCount_img] = useState(0);

        useEffect(() => {
                const interval = setInterval(() => {
                        setCount((count) => (count + 1) % titles.length);
                }, 6000);

                const interval_images = setInterval(() => {
                        setCount_img(
                                (count_img) => (count_img + 1) % images.length
                        );
                }, 3000);
                return () => {
                        clearInterval(interval);
                        clearInterval(interval_images);
                };
        }, []);

        return (
                <div className="flex flex-col md:flex-row gap-[4rem justify-between gap-5 items-center my-[5rem]">
                        <div className=" md:w-[50%] flex flex-col gap-4">
                                <h1 className="text-3xl md:text-4xl font-bold">
                                        {titles[count]}
                                </h1>
                                <p className="text-sm text-slate-700">
                                        At Big C Printworks, we specialize in
                                        high-quality workwear, safety wear,
                                        corporate uniforms, and custom branding
                                        solutions. From security uniforms and
                                        PPE to DTF, sublimation, and vinyl
                                        printing, we provide top-tier products
                                        tailored to your needs. Whether you are
                                        a business looking for professional
                                        uniforms or need custom branding for
                                        cars, fabrics, and promotional
                                        materials, we got you covered.
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
                        <div className=" w-full  md:w-[50%]  flex items-start justify-start md:justify-center">
                                <img
                                        className="w-full md:w-auto md:max-h-[400px] "
                                        src={`/hero/${images[count_img]}`}
                                        alt="printing"
                                />
                        </div>
                </div>
        );
}
