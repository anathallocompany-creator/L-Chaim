"use client";

import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-white">

      {/* ================= Newsletter ================= */}

      <section className="relative z-10 -mb-24 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="rounded-3xl bg-gradient-to-r from-black via-[#151515] to-black shadow-2xl border border-[#d4af37]/30 p-8 md:p-12">

            <div className="text-center">

              <span className="uppercase tracking-[5px] text-[#ca478f] text-sm font-semibold">
                Stay Connected
              </span>

              <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
                Get Sweet Deals Every Week
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                Subscribe to receive exclusive discounts, new cake collections,
                seasonal pastries and special promotions.
              </p>

              <form className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 max-w-xl px-6 py-4 rounded-full bg-white text-black outline-none"
                />

                <button className="px-8 py-4 rounded-full bg-[#520c3a] hover:bg-[#ffd4ed] text-white hover:text-[#242223] font-semibold transition">
                  Subscribe
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* ================= Footer ================= */}

      <section className="bg-[#0c0c0c] pt-40">

        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

            {/* Logo */}

            <div>

              <img
                src="/logo.png"
                alt="L'Chaim Sweets"
                width={155}
                height={155}
                className="-mt-6"
              />

              <h2 className="text-3xl font-serif text-white">
                L'Chaim Sweets
              </h2>

              <p className="text-gray-400 leading-8 mt-5">
                Crafting unforgettable sweet moments with premium cakes,
                pastries and desserts made with love.
              </p>

              <div className="flex items-center gap-2 mt-6 text-[#ffffff]">
                <span className="w-12 h-[1px] bg-[#ffffff]" />
                <Heart size={16} fill="currentColor" />
                <span className="w-12 h-[1px] bg-[#ffffff]" />
              </div>

            </div>

            {/* Quick Links */}

            <div>

              <h3 className="text-[#ffffff] uppercase tracking-[3px] text-sm font-bold mb-8">
                Quick Links
              </h3>

              <div className="space-y-4">

                <Link href="/" className="block text-gray-400 hover:text-[#be3e89] transition">
                  Home
                </Link>

                <Link href="/aboutPage" className="block text-gray-400 hover:text-[#be3e89] transition">
                  About Us
                </Link>

                <Link href="/products" className="block text-gray-400 hover:text-[#be3e89] transition">
                  Cakes
                </Link>

                <Link href="/products" className="block text-gray-400 hover:text-[#be3e89] transition">
                  Pastries
                </Link>

                <Link href="/products" className="block text-gray-400 hover:text-[#be3e89] transition">
                  Gallery
                </Link>

                <Link href="/contactPage" className="block text-gray-400 hover:text-[#be3e89] transition">
                  Contact
                </Link>

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-[#ffffff] uppercase tracking-[3px] text-sm font-bold mb-8">
                Contact
              </h3>

              <div className="space-y-5">

                <div className="flex gap-4 p-4 rounded-xl border border-white/10 hover:border-[#ac3c70] transition">

                  <Mail className="text-[#ffffff]" />

                  <div>
                    <p className="text-white font-medium">
                      Email
                    </p>

                    <p className="text-gray-400 text-sm">
                      contact@lchaimsweets.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-white/10 hover:border-[#d43798] transition">

                  <Phone className="text-[#ffffff]" />

                  <div>

                    <p className="text-white font-medium">
                      Phone
                    </p>

                    <p className="text-gray-400 text-sm">
                      +234 800 000 0000
                    </p>

                  </div>

                </div>

                <div className="flex gap-4 p-4 rounded-xl border border-white/10 hover:border-[#c945a1] transition">

                  <MapPin className="text-[#ffffff]" />

                  <div>

                    <p className="text-white font-medium">
                      Address
                    </p>

                    <p className="text-gray-400 text-sm">
                      Lagos, Nigeria
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Opening Hours */}

            <div>

              <h3 className="text-[#ffffff] uppercase tracking-[3px] text-sm font-bold mb-8">
                Opening Hours
              </h3>

              <div className="rounded-xl border border-white/10 hover:border-[#ac3c70] p-6">

                <div className="flex gap-4 mb-6">

                  <Clock className="text-[#ffffff]" />

                  <div>

                    <p className="text-white">
                      Monday - Saturday
                    </p>

                    <p className="text-gray-400">
                      8:00 AM - 8:00 PM
                    </p>

                  </div>

                </div>

                <div>

                  <p className="text-white">
                    Sunday
                  </p>

                  <p className="text-gray-400">
                    Closed
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Social */}

          <div className="flex justify-center gap-5 mt-20">

            {[
              <FaFacebookF key="f" />,
              <FaInstagram key="i" />,
              <FaXTwitter key="x" />,
              <FaYoutube key="y" />,
            ].map((icon, index) => (

              <a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full bg-[#ffffff] text-black flex items-center justify-center hover:scale-110 transition duration-300"
              >
                {icon}
              </a>

            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

            <p className="text-gray-500 text-center">
              © {new Date().getFullYear()} L'Chaim Sweets. All Rights Reserved.
            </p>

            <div className="flex gap-8">

              <Link
                href="/privacy"
                className="text-gray-500 hover:text-[#b83490]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-gray-500 hover:text-[#b83490]"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </section>

    </footer>
  );
}