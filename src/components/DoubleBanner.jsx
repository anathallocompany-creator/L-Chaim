
"use client";

import Link from "next/link";

export default function DoubleBanner() {
  return (
    <section
      className="
        w-full
        max-w-7xl
        mx-auto
        px-3
        sm:px-4
        md:px-6
        lg:px-8
        py-8
        sm:py-10
        md:py-12
        lg:py-20
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          sm:gap-5
          md:gap-6
          lg:gap-8
        "
      >
        {/* Left Banner */}
        <div
          className="
            relative
            w-full
            h-[180px]
            sm:h-[220px]
            md:h-[260px]
            lg:h-[320px]
            rounded-2xl
            sm:rounded-3xl
            overflow-hidden
          "
        >
          <img
            src="/banner6.png"
            alt="Birthday Cakes"
            className="
              w-full
              h-full
              object-cover
              object-center
            "
          />
        </div>

        {/* Right Banner */}
        <div
          className="
            relative
            w-full
            h-[180px]
            sm:h-[220px]
            md:h-[260px]
            lg:h-[320px]
            rounded-2xl
            sm:rounded-3xl
            overflow-hidden
          "
        >
          <img
            src="/banner3.jpg"
            alt="Pastries"
            className="
              w-full
              h-full
              object-cover
              object-center
            "
          />
        </div>
      </div>
    </section>
  );
}

