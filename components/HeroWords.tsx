"use client"
import {useState, useEffect} from "react";
import TitleOne from "./TitleOne"
import TitleTwo from "./TitleTwo"
import TitleThree from "./TitleThree"
import TitleFour from "./TitleFour"

export default function HeroWords() {

    const [count, setCount] = useState(0);
    const titles = [
        <TitleOne key={0} />,
        <TitleTwo key={1} />,
        <TitleThree key={2} />,
        <TitleFour key={3} />,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => (count + 1) % titles.length);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, [titles.length]);
    return (
        <h1 className="text-3xl md:text-6xl text-white font-bold uppercase">{titles[count]}</h1>
    )
}
