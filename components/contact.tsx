"use client"
import {useState} from "react";

export default function Contact() {
    const [status, setStatus] = useState("");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [phone, setPhone] = useState("")


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

    return (
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
    )
}
