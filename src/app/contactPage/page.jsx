"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import { useState } from "react";

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
});

export default function contactPage() {


    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        try {
            const res = await fetch("/api/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "contact",
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    subject: form.subject,
                    message: form.message,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setSuccess("Your message has been sent successfully.");

            setForm({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <main className="bg-[#f8f5f1]">

            {/* HERO */}
            <section
                className="relative py-32 bg-cover text-center bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero1.png')", // Change to your image
                }}
            >

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/45"></div>


                <div className="relative">
                    <span className="uppercase tracking-[4px] text-[#fd9fe3] font-semibold">
                        Get In Touch
                    </span>

                    <h2 className="font-serif text-[#ffffff] text-3xl md:text-5xl lg:text-[48px] font-light tracking-[-0.04em] leading-[0.95]">
                        We'd Love To Hear From You
                    </h2>

                    <p className="text-gray-50 mt-5 leading-8">
                        Whether you're ordering a custom cake, booking our indoor or outdoor catering,
                        or making an enquiry, we're always happy to help.
                    </p>
                </div>
            </section>

            {/* CONTACT INFO */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                    <div className="bg-white p-8 text-center shadow-sm border-t-4 border-[#a5416b]">
                        <Mail className="mx-auto text-[#a5416b]" size={30} />
                        <h3 className="mt-4 font-semibold text-xl">Email</h3>
                        <p className="text-gray-600 mt-2">Info@lchainsweet.org</p>
                    </div>

                    <div className="bg-white p-8 text-center shadow-sm border-t-4 border-[#a5416b]">
                        <Phone className="mx-auto text-[#a5416b]" size={30} />
                        <h3 className="mt-4 font-semibold text-xl">Phone</h3>
                        <p className="text-gray-600 mt-2">+2349030687674</p>

                    </div>

                    <div className="bg-white p-8 text-center shadow-sm border-t-4 border-[#a5416b]">
                        <MapPin className="mx-auto text-[#a5416b]" size={30} />
                        <h3 className="mt-4 font-semibold text-xl">Office</h3>
                        <p className="text-gray-600 mt-2">
                            2, Gbetu road, new road, Awoyaya Lagos
                        </p>
                    </div>

                </div>
            </section>

            {/* MAP SECTION */}
            <section className="px-6 pb-24">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl font-serif text-[#231b1c] mb-6 text-center">
                        Find Us Here
                    </h2>

                    <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg">

                        <iframe
                            title="Location"
                            src="https://maps.google.com/maps?q=Awoyaya%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            loading="lazy"
                        />

                    </div>

                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="pb-28 px-6">
                <div className="max-w-4xl mx-auto bg-white p-10 shadow-sm">

                    <h2 className="text-3xl font-serif text-center mb-10">
                        Send Us a Message
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full border border-gray-200 p-4 focus:border-[#a5416b] outline-none"
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className="w-full border border-gray-200 p-4 focus:border-[#a5416b] outline-none"
                            />

                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="w-full border border-gray-200 p-4 focus:border-[#a5416b] outline-none"
                            />

                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full border border-gray-200 p-4 focus:border-[#a5416b] outline-none"
                            />
                        </div>


                        <textarea
                            rows={6}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full border border-gray-200 p-4 focus:border-[#a5416b] outline-none resize-none"
                        />

                        {success && (
                            <p className="text-green-600 font-medium">
                                {success}
                            </p>
                        )}

                        {error && (
                            <p className="text-red-600 font-medium">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#1a1a1a] text-white py-4 uppercase tracking-[3px] text-sm hover:bg-[#9c4f76] transition disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>
                </div>
            </section>

        </main>
    );
}