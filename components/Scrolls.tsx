"use client"
import Image from "next/image"
import {useEffect, useState} from "react"

export function ScrollOne() {
    const pos = 150
    const [products, setProducts] = useState<HTMLElement | null>(null)

    function scrollLeft() {
        if (products != null) {
            products.scrollBy({left: 0 - pos, behavior: 'smooth'})
        } else {
            console.log("non")
        }
    }

    function scrollRight() {
        if (products != null) {
            products.scrollBy({left: pos, behavior: 'smooth'})
        }
    }
    useEffect(() => {
        setProducts(document.getElementById('product_list'))
    }, [])

    return (
        <div className=" mb-5 flex items-center gap-5">
            <Image onClick={scrollLeft} src='/prev.png' alt="scroll back" className="cursor-pointer" width={50} height={50} />
            <Image onClick={scrollRight} src='/next.png' alt="scroll back" className="cursor-pointer" width={50} height={50} />
        </div>

    )
}


export function ScrollTwo() {
    const pos = 150
    const [branding, setBranding] = useState<HTMLElement | null>(null)

    function scrollLeft2() {
        if (branding != null) {
            branding.scrollBy({left: 0 - pos, behavior: 'smooth'})
        }
    }

    function scrollRight2() {
        if (branding != null) {
            branding.scrollBy({left: pos, behavior: 'smooth'})
        }
    }
    useEffect(() => {
        setBranding(document.getElementById("branding"))
    }, [])

    return (
        <div className="flex items-center gap-5">
            <Image onClick={scrollLeft2} src='/prev.png' alt="scroll back" className="cursor-pointer" width={50} height={50} />
            <Image onClick={scrollRight2} src='/next.png' alt="scroll back" className="cursor-pointer" width={50} height={50} />
        </div>
    )
}
